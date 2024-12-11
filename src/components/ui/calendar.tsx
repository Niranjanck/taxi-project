import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("tp-p-3", className)}
      classNames={{
        months: "tp-flex tp-flex-col sm:tp-flex-row tp-space-y-4 sm:tp-space-x-4 sm:tp-space-y-0",
        month: "tp-space-y-4",
        caption: "tp-flex tp-justify-center tp-pt-1 tp-relative tp-items-center",
        caption_label: "tp-text-sm tp-font-medium",
        nav: "tp-space-x-1 tp-flex tp-items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "tp-h-7 tp-w-7 tp-bg-transparent tp-p-0 tp-opacity-50 hover:tp-opacity-100"
        ),
        nav_button_previous: "tp-absolute tp-left-1",
        nav_button_next: "tp-absolute tp-right-1",
        table: "tp-w-full tp-border-collapse tp-space-y-1",
        head_row: "tp-flex",
        head_cell:
          "tp-text-muted-foreground tp-rounded-md tp-w-8 tp-font-normal tp-text-[0.8rem]",
        row: "tp-flex tp-w-full tp-mt-2",
        cell: cn(
          "tp-relative tp-p-0 tp-text-center tp-text-sm focus-within:tp-relative focus-within:tp-z-20 [&:has([aria-selected])]:tp-bg-accent [&:has([aria-selected].day-outside)]:tp-bg-accent/50 [&:has([aria-selected].day-range-end)]:tp-rounded-r-md",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:tp-rounded-r-md [&:has(>.day-range-start)]:tp-rounded-l-md first:[&:has([aria-selected])]:tp-rounded-l-md last:[&:has([aria-selected])]:tp-rounded-r-md"
            : "[&:has([aria-selected])]:tp-rounded-md"
        ),
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "tp-h-8 tp-w-8 tp-p-0 tp-font-normal aria-selected:tp-opacity-100"
        ),
        day_range_start: "day-range-start",
        day_range_end: "day-range-end",
        day_selected:
          "tp-bg-primary tp-text-primary-foreground hover:tp-bg-primary hover:tp-text-primary-foreground focus:tp-bg-primary focus:tp-text-primary-foreground",
        day_today: "tp-bg-accent tp-text-accent-foreground",
        day_outside:
          "day-outside tp-text-muted-foreground aria-selected:tp-bg-accent/50 aria-selected:tp-text-muted-foreground",
        day_disabled: "tp-text-muted-foreground tp-opacity-50",
        day_range_middle:
          "aria-selected:tp-bg-accent aria-selected:tp-text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="tp-h-4 tp-w-4" />,
        IconRight: ({ ...props }) => <ChevronRight className="tp-h-4 tp-w-4" />,
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }
