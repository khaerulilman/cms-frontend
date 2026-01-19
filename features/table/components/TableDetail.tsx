"use client";

import { api } from "@/lib/api";
import { useTableDetail } from "../hooks/useTableDetail";
import { invalidateTableDetail } from "../services/tableDetailStore";
import { useEffect, useState } from "react";
import { TableNameDisplay } from "./TableNameDisplay";

export function TableDetail({
  selectedTable,
  onSelectColumnButton,
  onSelectRowButton,
  onSelectDeleteColumn,
  onEditColumn,
  onUpdateCell,
  refreshTrigger,
  onRefresh,
  onOpenGuide,
  projectId,
  onEditTable,
  tableNameRefreshKey,
}: any) {
  const { data, loading, error } = useTableDetail(
    selectedTable,
    refreshTrigger
  );

  const [subTables, setSubTables] = useState<any[]>([]);
  const [tableNameMap, setTableNameMap] = useState<Record<string, string>>({});

  const columns = data?.columns || [];
  const rows = data?.rows || [];
  const cells = data?.cells || [];

  // Fetch sub-tables and create mapping
  useEffect(() => {
    if (!projectId) return;

    const fetchTableData = async () => {
      try {
        const data = await api.getAllUserTables(projectId);
        const filtered = data.data.filter((table: any) => table.isSubTable);
        setSubTables(filtered);

        // Create mapping of ID to name
        const map: Record<string, string> = {};
        data.data.forEach((table: any) => {
          map[table.id] = table.name;
        });
        setTableNameMap(map);
      } catch (err) {
        console.error("Failed to fetch table data:", err);
      }
    };

    fetchTableData();
  }, [projectId]);

  const renderCellValue = (value: string, imageUrl?: string) => {
    // Priority 1: Use imageUrl if available (from Cloudinary)
    const displayUrl = imageUrl || value;

    // Check if value is a URL (starts with http/https)
    if (
      displayUrl &&
      (displayUrl.startsWith("http://") || displayUrl.startsWith("https://"))
    ) {
      // Check if it's an image URL
      if (
        displayUrl.includes(".jpg") ||
        displayUrl.includes(".jpeg") ||
        displayUrl.includes(".png") ||
        displayUrl.includes(".gif") ||
        displayUrl.includes(".webp") ||
        displayUrl.includes("cloudinary")
      ) {
        return (
          <img
            src={displayUrl}
            alt="Cell content"
            className="h-12 w-12 object-cover rounded border border-slate-700/50 cursor-pointer hover:scale-150 transition-transform"
            title="Click to view full size"
            onClick={() => window.open(displayUrl, "_blank")}
          />
        );
      }
    }

    // Check if value is a tableId (exists in subTables)
    if (tableNameMap[value]) {
      return (
        <span className="inline-block px-2 py-1 text-xs font-medium text-blue-400 border border-blue-500/50 rounded bg-blue-500/10">
          {tableNameMap[value]}
        </span>
      );
    }
    return value || "-";
  };

  const handleCreateColumn = async () => {
    onSelectColumnButton();
  };

  const handleCreateRow = async () => {
    if (!selectedTable) return;

    try {
      await api.createRow(selectedTable);
      invalidateTableDetail(selectedTable);
      onRefresh?.();
    } catch (e) {
      console.error(e);
    }
  };

  const handleDeleteRow = async (rowId: string) => {
    onSelectRowButton(rowId);
  };

  const handleOpenSidebarGuide = async () => {
    onOpenGuide?.();
  };

  return (
    <main className="flex-1 p-8 overflow-auto bg-[#0a0f1a] text-white">
      <div className="bg-slate-900/30 backdrop-blur-sm border border-slate-800/50 rounded-2xl shadow-lg">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-slate-700/50">
          <TableNameDisplay
            selectedTable={selectedTable}
            projectId={projectId}
            onEditTable={onEditTable}
            refreshKey={tableNameRefreshKey}
          />
          <div>
            <button
              className="mr-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 font-medium"
              onClick={() => handleOpenSidebarGuide()}
            >
              Get Data
            </button>
            <button
              className="mt-4 py-2 rounded-xl border border-dashed 
        border-slate-700/50 text-slate-400
        hover:border-blue-500/50 hover:text-blue-400 hover:bg-blue-500/5
        transition-all px-4"
              onClick={() => handleCreateColumn()}
            >
              + Add Column
            </button>
          </div>
        </div>

        {/* Table Container with Horizontal Scroll */}
        <div className="overflow-x-auto">
          {loading ? (
            <div className="p-12 text-center text-slate-400">
              <div className="inline-block animate-pulse">
                Loading columns...
              </div>
            </div>
          ) : error ? (
            <div className="p-12 text-center text-red-500 font-medium">
              {error}
            </div>
          ) : columns.length > 0 ? (
            <div className="inline-block min-w-full align-middle">
              <table className="min-w-full divide-y divide-slate-700/50">
                <thead className="bg-slate-800/50">
                  <tr>
                    <th
                      scope="col"
                      className="sticky left-0 z-10 bg-slate-800/50 px-6 py-3 text-center text-xs font-semibold text-slate-300 uppercase tracking-wider border-r border-slate-700/50 shadow-sm"
                    >
                      No
                    </th>

                    {columns.map((column, idx) => (
                      <th
                        key={column.id}
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider whitespace-nowrap cursor-pointer hover:bg-slate-800/50 transition-colors"
                        onDoubleClick={() => onEditColumn?.(column)}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span>{column.name}</span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onSelectDeleteColumn(column.id);
                            }}
                            className="text-red-500 hover:text-red-700 text-xs font-medium"
                            title="Delete column"
                          >
                            ✕
                          </button>
                        </div>
                      </th>
                    ))}

                    <th
                      scope="col"
                      className="sticky right-0 z-10 bg-slate-800/50 px-6 py-3 text-center text-xs font-semibold text-slate-300 uppercase tracking-wider border-l border-slate-700/50 shadow-sm"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody className="bg-slate-900/20 divide-y divide-slate-700/50">
                  {rows.length > 0 ? (
                    rows.map((row, index) => (
                      <tr
                        key={row.id}
                        className="hover:bg-slate-800/30 transition-colors duration-150"
                      >
                        {/* No - Sticky Left */}
                        <td className="sticky left-0 z-10 bg-slate-900/30 px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-300 text-center border-r border-slate-700/50 shadow-sm">
                          {index + 1}
                        </td>

                        {/* Data Columns */}
                        {columns.map((column) => {
                          const cellValue = cells.find(
                            (cell) =>
                              cell.rowId === row.id &&
                              cell.columnId === column.id
                          );
                          return (
                            <td
                              key={column.id}
                              onDoubleClick={() =>
                                onUpdateCell(
                                  row.id,
                                  column.id,
                                  cellValue?.value || "",
                                  cellValue?.imageUrl || ""
                                )
                              }
                              className="px-6 py-4 whitespace-nowrap text-sm text-slate-300 cursor-pointer hover:bg-blue-500/10 transition-colors"
                            >
                              {renderCellValue(
                                cellValue?.value || "",
                                cellValue?.imageUrl || undefined
                              )}
                            </td>
                          );
                        })}

                        {/* Actions - Sticky Right */}
                        <td className="sticky right-0 z-10 bg-slate-900/30 px-6 py-4 whitespace-nowrap text-sm text-center border-l border-slate-700/50 shadow-sm">
                          <button
                            onClick={() => handleDeleteRow(row.id)}
                            className="text-red-600 hover:text-red-800 font-medium"
                          >
                            DELETE
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan={columns.length + 2}
                        className="px-6 py-12 text-center text-sm text-slate-400"
                      >
                        No rows yet. Click "Add Row" to get started.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="p-12 text-center text-slate-400">
              No columns available. Click "Add Column" to create your first
              column.
            </div>
          )}
        </div>

        {/* Footer with Add Row Button */}
        {columns.length > 0 && (
          <div className="px-6 py-4 border-t border-slate-700/50 bg-slate-800/30">
            <button
              className="mt-4 py-2 rounded-xl border border-dashed 
        border-slate-700/50 text-slate-400
        hover:border-blue-500/50 hover:text-blue-400 hover:bg-blue-500/5
        transition-all px-4"
              onClick={() => handleCreateRow()}
            >
              + Add Row
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
