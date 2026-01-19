"use client";

import { TableSidebar } from "@/features/table/components/TableSidebar";
import { TableDetail } from "@/features/table/components/TableDetail";
import { ApiGuideSidebar } from "@/features/table/components/ApiGuideSidebar";
import { useState } from "react";
import { CardFlow } from "@/features/table/components/cardFlow";
import { useParams } from "next/navigation";
import { ProtectedRoute } from "@/components/ProtectedRoute";

function TableManagementContent() {
  const params = useParams();
  const selectedTable = params.tableId as string;
  const projectId = params.projectId as string;
  const [isOpenCardFlow, setIsOpenCardFlow] = useState<string | null>(null);
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [sidebarRefresh, setSidebarRefresh] = useState(0);
  const [tableNameRefreshKey, setTableNameRefreshKey] = useState(0);
  const [selectedRowId, setSelectedRowId] = useState<string | null>(null);
  const [selectedColumnId, setSelectedColumnId] = useState<string | null>(null);
  const [selectedColumnData, setSelectedColumnData] = useState<any>(null);
  const [selectedCellData, setSelectedCellData] = useState<{
    rowId: string;
    columnId: string;
    value: string;
    imageUrl?: string;
  } | null>(null);
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [tableName, setTableName] = useState<string>("");

  const handleRefresh = () => {
    setRefreshTrigger((prev) => prev + 1);
  };

  const handleAddColumn = () => {
    setIsOpenCardFlow("add-column");
  };

  const handleAddTable = () => {
    setIsOpenCardFlow("add-table");
  };

  const handleTableAdded = () => {
    setSidebarRefresh((prev) => prev + 1);
  };

  const handleDeleteTable = () => {
    setIsOpenCardFlow("delete-table");
  };

  const handleEditTable = () => {
    setIsOpenCardFlow("edit-table");
  };

  const handleTableDeleted = () => {
    setSidebarRefresh((prev) => prev + 1);
  };

  const handleTableUpdated = () => {
    setSidebarRefresh((prev) => prev + 1);
    setTableNameRefreshKey((prev) => prev + 1);
  };

  const handleDeleteRow = (rowId: string) => {
    setSelectedRowId(rowId);
    setIsOpenCardFlow("delete-row");
  };

  const handleDeleteColumn = (columnId: string) => {
    setSelectedColumnId(columnId);
    setIsOpenCardFlow("delete-column");
  };

  const handleEditColumn = (column: any) => {
    setSelectedColumnData(column);
    setIsOpenCardFlow("edit-column");
  };

  const handleUpdateCell = (
    rowId: string,
    columnId: string,
    value: string,
    imageUrl: string = ""
  ) => {
    setSelectedCellData({ rowId, columnId, value, imageUrl });
    setIsOpenCardFlow("update-cell");
  };

  return (
    <div className="flex h-[calc(100vh-64px)] bg-slate-100">
      <TableSidebar
        onSelectTable={() => {}}
        onAddTable={handleAddTable}
        onDeleteTable={handleDeleteTable}
        refreshKey={sidebarRefresh}
      />
      <TableDetail
        selectedTable={selectedTable}
        onSelectColumnButton={handleAddColumn}
        onSelectRowButton={handleDeleteRow}
        onSelectDeleteColumn={handleDeleteColumn}
        onEditColumn={handleEditColumn}
        onUpdateCell={handleUpdateCell}
        refreshTrigger={refreshTrigger}
        onRefresh={handleRefresh}
        projectId={projectId}
        onOpenGuide={() => setIsGuideOpen(true)}
        onEditTable={handleEditTable}
        tableNameRefreshKey={tableNameRefreshKey}
      />

      <CardFlow
        isOpen={isOpenCardFlow}
        selectedTable={selectedTable}
        selectedRow={selectedRowId}
        selectedColumn={selectedColumnId}
        selectedColumnData={selectedColumnData}
        selectedCell={selectedCellData}
        projectId={projectId}
        onClose={() => {
          setIsOpenCardFlow(null);
          setSelectedRowId(null);
          setSelectedColumnId(null);
          setSelectedColumnData(null);
          setSelectedCellData(null);
        }}
        onRefresh={handleRefresh}
        onTableAdded={handleTableAdded}
        onTableDeleted={handleTableDeleted}
        selectedTableName={tableName}
        onTableUpdated={handleTableUpdated}
      />

      <ApiGuideSidebar
        projectId={projectId}
        tableId={selectedTable}
        isOpen={isGuideOpen}
        onClose={() => setIsGuideOpen(false)}
      />
    </div>
  );
}

export default function TableManagement() {
  return (
    <ProtectedRoute>
      <TableManagementContent />
    </ProtectedRoute>
  );
}
