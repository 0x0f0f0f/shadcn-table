import { DataTableCommonProps } from "@/components/data-table/data-table-common";
import { Row } from "@tanstack/react-table";

export interface DataTableGridViewerProps<T> extends DataTableCommonProps<T> {
  renderCard: (row: Row<T>) => React.ReactNode;
}

export function DataTableGridViewer<T>({
  table,
  renderCard,
}: DataTableGridViewerProps<T>) {
  return (
    <div className="grid mt-0 pt-0 grid-cols-1 gap-6 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:p-6">
      {table.getRowModel().rows?.length
        ? table.getRowModel().rows.map((row) => renderCard(row))
        : "No results."}
    </div>
  );
}
