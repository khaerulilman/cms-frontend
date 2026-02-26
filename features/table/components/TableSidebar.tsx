"use client";

import { api } from "@/lib/api";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Table = {
  id: string;
  projectId: string;
  name: string;
  isSubTable: boolean;
  createdAt: string;
  updatedAt: string;
};

const tableCache: Record<string, Table[]> = {};

interface TableSidebarProps {
  onSelectTable?: (tableId?: string) => void;
  refreshKey?: number;
  onAddTable?: () => void;
  onDeleteTable?: (tableId: string) => void;
  isOpen?: boolean;
}

export function TableSidebar({
  onSelectTable,
  refreshKey,
  onAddTable,
  onDeleteTable,
  isOpen = false,
}: TableSidebarProps) {
  const params = useParams();
  const router = useRouter();
  const projectId = params.projectId as string;

  const cachedTables = projectId ? tableCache[projectId] : null;

  const [tables, setTables] = useState<Table[]>(cachedTables || []);
  const [loading, setLoading] = useState<boolean>(!cachedTables);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!projectId) return;

    // Jika refreshKey > 0, invalidate cache untuk force refresh
    if (refreshKey > 0) {
      delete tableCache[projectId];
    }

    // Jika ada cache dan tidak perlu refresh → skip fetch
    if (tableCache[projectId]) {
      // Sort cached tables by createdAt descending (newest first)
      const sortedTables = tableCache[projectId].sort(
        (a: Table, b: Table) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      );
      setTables(sortedTables);
      setLoading(false);
      return;
    }

    const fetchTables = async () => {
      try {
        setLoading(true);
        const data = await api.getAllUserTables(projectId);
        // Sort tables by createdAt descending (newest first)
        const sortedTables = data.data.sort(
          (a: Table, b: Table) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        );
        tableCache[projectId] = sortedTables;
        setTables(sortedTables);
      } catch (err: any) {
        setError(err.message || "Failed to fetch tables");
      } finally {
        setLoading(false);
      }
    };

    fetchTables();
  }, [projectId, refreshKey]);

  const handleTableClick = (tableId: string) => {
    router.push(`/projects/${projectId}/${tableId}`);
    onSelectTable(tableId);
  };

  const handleAddTable = () => {
    if (!projectId) return;
    onAddTable?.();
  };

  return (
    <>
      {/* Backdrop - Only on mobile when open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={onSelectTable}
        />
      )}

      {/* Sidebar - Always visible on desktop, controlled on mobile */}
      <aside
        className={`fixed lg:static top-16 lg:top-0 left-0 h-[calc(100vh-64px)] lg:h-full w-64 bg-[#111828] backdrop-blur-sm border-r border-slate-800/50 text-white flex flex-col p-4 overflow-y-auto shadow-lg z-30 transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
          Tables
        </h2>
        {/* Close button for mobile */}
        <button
          className="lg:hidden p-1 rounded-md hover:bg-slate-800/50 transition-colors text-slate-400 hover:text-white"
          onClick={() => onSelectTable?.()}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <div className="flex flex-col gap-3 flex-1">
        {loading ? (
          <p className="text-sm text-slate-400">Loading tables...</p>
        ) : error ? (
          <p className="text-sm text-red-400">{error}</p>
        ) : tables.length > 0 ? (
          tables.map((table) => (
            <div key={table.id} className="group relative">
              <button
                onClick={() => handleTableClick(table.id)}
                className={`w-full text-left px-4 py-2 rounded-xl transition-all border-2 border-slate-700/30 hover:bg-slate-800/50 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10`}
              >
                {table.name + " " + (table.isSubTable ? "[ ]" : "")}
              </button>
              <button
                onClick={() => onDeleteTable?.(table.id)}
                className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity p-1 text-red-400 hover:text-red-300"
                title="Delete table"
              >
                ✕
              </button>
            </div>
          ))
        ) : (
          <p className="text-sm text-slate-400">No tables yet</p>
        )}
      </div>

      {/* Add Table */}
      <button
        onClick={handleAddTable}
        className="mt-4 py-2 rounded-xl border border-dashed 
        border-slate-700/50 text-slate-400
        hover:border-blue-500/50 hover:text-blue-400 hover:bg-blue-500/5
        transition-all"
      >
        + Add Table
      </button>
    </aside>
    </>
  );
}
