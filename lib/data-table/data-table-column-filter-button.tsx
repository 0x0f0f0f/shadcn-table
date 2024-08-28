import { DataTableCommonProps } from "@/components/data-table/data-table-common";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ResponsiveButton } from "@/components/ui/responsive-button";
import { ArrowDownNarrowWide } from "lucide-react";

export function DataTableColumnFilterButton<T>({
  table,
}: DataTableCommonProps<T>) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <ResponsiveButton
          icon={ArrowDownNarrowWide}
          size="sm"
          label="Columns"
          variant="outline"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {table
          .getAllColumns()
          .filter((column) => column.getCanHide())
          .map((column) => {
            return (
              <DropdownMenuCheckboxItem
                key={column.id}
                className="capitalize"
                checked={column.getIsVisible()}
                onCheckedChange={(value) => column.toggleVisibility(!!value)}
              >
                {column.id}
              </DropdownMenuCheckboxItem>
            );
          })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
