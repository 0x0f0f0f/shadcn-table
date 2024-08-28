import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ResponsiveButton } from "@/components/ui/responsive-button";
import { cn } from "@/utils";
import { LucideCalendar } from "lucide-react";
import { format } from "date-fns";
import { VariantProps } from "class-variance-authority";
import { buttonVariants } from "@/components/ui/button";

interface DataTableCellDatePickerProps
  extends VariantProps<typeof buttonVariants> {
  date?: Date;
  setDate: (date?: Date) => void;
}

export function DataTableCellDatePicker({
  date,
  setDate,
  variant,
  size,
}: DataTableCellDatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <ResponsiveButton
          variant={variant}
          size={size}
          icon={LucideCalendar}
          label={date ? format(date, "dd/MM/yy") : ""}
          className={cn(
            "text-left font-normal",
            !date && "text-muted-foreground"
          )}
        />
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          className="z-100"
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
