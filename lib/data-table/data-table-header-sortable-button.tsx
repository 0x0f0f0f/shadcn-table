import { Button } from "@/components/ui/button";
import { Column } from "@tanstack/react-table";
import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";

export interface DataTableHeaderSortableButtonProps<TData> {
  column: Column<TData>;
  label: string;
}

export function DataTableHeaderSortableButton<TData>({
  column,
  label,
}: DataTableHeaderSortableButtonProps<TData>) {
  let Icon = ArrowUpDown;
  const sortMode = column.getIsSorted();

  if (sortMode === "asc") Icon = ArrowDown;
  else if (sortMode === "desc") Icon = ArrowUp;

  return (
    <Button
      variant="ghost"
      className="px-0"
      onClick={() => column.toggleSorting(sortMode === "asc")}
    >
      {label}
      <Icon className="ml-2 h-4 w-4" />
    </Button>
  );
}
