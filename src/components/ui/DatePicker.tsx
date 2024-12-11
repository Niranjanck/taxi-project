import { cn, dateFormatter } from "@/lib/utils";
import { Button } from "./button";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { useState } from "react";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "./calendar";
interface DatePickerProp{
  name:string
}
const DatePicker:React.FC<DatePickerProp>=({
  name
})=> {
  const [pickedDate, setDate] = useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "tp-w-[165px] tp-relative tp-h-[64px] tp-rounded-xl group tp-justify-start tp-text-left tp-font-normal",
            !pickedDate && "tp-text-muted-foreground"
          )}
        >
          <label className="tp-uppercase  tp-absolute tp-left-3 tp-bg-white -tp-top-3 tp-text-primary">{name}</label>
          {pickedDate ? (
            (() => {
              const { date, year, day, month } = dateFormatter(pickedDate);
              return (
                <div className="tp-flex tp-items-center tp-justify-between">
                  <div >
                    <span className="tp-ml-2 tp-text-[22px] tp-font-semibold">{date}</span>
                  </div>
                  <div className="tp-border-l tp-border-dashed tp-ml-6 tp-pl-[15px]">
                    <p className="tp-ml- tp-text-base tp-font-semibold">{day}</p>
                    <p className="tp-font-normal tp-text-xs tp-text-[#737373]">
                      {month}'{year}
                    </p>
                  </div>
                </div>
              );
            })()
          ) : (
            <span>Pick a date</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="tp-w-auto tp-p-0" align="start">
        <Calendar
          mode="single"
          selected={pickedDate}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
export default  DatePicker