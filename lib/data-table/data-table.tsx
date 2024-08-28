import { DataTableColumnFilterButton } from "@/components/data-table/data-table-column-filter-button";
import { DataTableCommonProps } from "@/components/data-table/data-table-common";
import { DataTablePagination } from "@/components/data-table/data-table-pagination";
import { ResponsiveButton } from "@/components/ui/responsive-button";
import { Table as TableType } from "@tanstack/react-table";
import { LayoutGrid, List } from "lucide-react";
import React, { useState } from "react";

export interface DataTableProps<T> extends DataTableCommonProps<T> {
  controlsLeft?: (table: TableType<T>) => React.ReactNode;
  controlsRight?: (table: TableType<T>) => React.ReactNode;
  TableViewComponent?: React.ComponentType<DataTableCommonProps<T>>;
  GridViewComponent?: React.ComponentType<DataTableCommonProps<T>>;
}

export function DataTable<T>({
  table,
  controlsLeft,
  controlsRight,
  TableViewComponent,
  GridViewComponent,
}: DataTableProps<T>) {
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid");

  const toggleViewMode = () => {
    if (viewMode === "grid") setViewMode("table");
    else if (viewMode === "table") setViewMode("grid");
    else throw new Error("Unkown view mode " + viewMode);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 px-4 sm:px-8 py-4 gap-y-4">
        {controlsLeft && controlsLeft(table)}
        <div className="flex flex-wrap justify-end gap-1">
          {viewMode === "table" && (
            <DataTableColumnFilterButton table={table} />
          )}
          {TableViewComponent && GridViewComponent && (
            <ResponsiveButton
              variant="outline"
              size="sm"
              icon={viewMode === "grid" ? List : LayoutGrid}
              label={viewMode === "grid" ? "View table" : "View grid"}
              onClick={toggleViewMode}
            />
          )}
          {controlsRight && controlsRight(table)}
        </div>
      </div>
      {/* TABLE */}
      {viewMode === "grid" && GridViewComponent && (
        <GridViewComponent table={table} />
      )}
      {viewMode === "table" && TableViewComponent && (
        <TableViewComponent table={table} />
      )}
      {/* FOOTER */}
      <DataTablePagination table={table} className="mx-4 sm:mx-8" />
    </>
  );
}
