import { DataTableCommonProps } from "@/components/data-table/data-table-common";
import { Input } from "@/components/ui/input";
import { Column } from "@tanstack/react-table";
import { Search } from "lucide-react";

export interface DataTableSearchFilterProps<T> extends DataTableCommonProps<T> {
  column?: Column<T>;
}

export function DataTableSearchFilter<T>({
  column,
}: DataTableSearchFilterProps<T>) {
  return (
    <div className="relative flex-1 md:grow-0 pr-2">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search tasks..."
        value={(column?.getFilterValue() as string) ?? ""}
        onChange={(event) => column?.setFilterValue(event.target.value)}
        className="w-full rounded-lg bg-background pl-8 "
      />
    </div>
  );
}
