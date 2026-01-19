"use client";

import { api } from "@/lib/api";
import { useEffect, useState } from "react";

export function TableNameDisplay({
  selectedTable,
  projectId,
  onEditTable,
  refreshKey,
}: any) {
  const [tableName, setTableName] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!projectId || !selectedTable) return;

    const fetchTableName = async () => {
      try {
        setLoading(true);
        const data = await api.getAllUserTables(projectId);
        const currentTable = data.data.find(
          (table: any) => table.id === selectedTable
        );
        if (currentTable) {
          setTableName(currentTable.name);
        }
      } catch (err) {
        console.error("Failed to fetch table name:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTableName();
  }, [projectId, selectedTable, refreshKey]);

  return (
    <div className="flex items-center gap-3">
      <h1 className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
        {tableName}
      </h1>
      <button
        onClick={() => onEditTable?.()}
        className="px-2 py-1 rounded-lg text-sm bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:bg-slate-800 hover:border-blue-500/30 transition-all"
        title="Edit table name"
      >
        ✎
      </button>
    </div>
  );
}
