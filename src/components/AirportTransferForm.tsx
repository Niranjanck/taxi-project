import { useState } from "react";
import InputField from "./InputField";
import { Calendar } from "./ui/calendar";
import DatePicker from "./ui/DatePicker";
import { DatePickerWithRange } from "./ui/DateRangerPicker";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import ClockIcon from "./icon/Clock";
import CloseIcon from "./icon/Close";
import SearchIcon from "./icon/Search";
import { Link } from "@tanstack/react-router";
const AirportTransfersForm = () => {
  const [hour, setHour] = useState("0");
  const [minute, setMinute] = useState("0");
  const [meridiem, setMeridiem] = useState("AM");
  const [traveler, setTraveler] = useState<number>(0);
  const [returnDates,setReturnDates] = useState({
    hour:'00',
    minute:'00',
    meridiem:'AM'
  })
  const [luggage, setLuggage] = useState<number>(0);
  const [showReturn, setShowReturn] = useState<boolean>(false);
  return (
    <div className="tp-relative tp-mt-8">
      <div className="tp-flex tp-flex-wrap tp-gap-4">
        {/* pickup */}
        <div>
          <InputField
            id="pick-up"
            name="pick-up"
            label="FROM"
            type="text"
            placeholder="PICKUP LOCATION"
            className="tp-h-[64px]"
          />
        </div>
        {/* dropping */}
        <div>
          <InputField
            id="dropping"
            name="dropping"
            label="TO"
            type="text"
            placeholder="DROPPING LOCATION"
            className="tp-h-[64px]"
          />
        </div>
        {/* date */}
        <div>
          <DatePicker name="Departure Date"/>
        </div>
        {/* time */}
        <div>
          <Popover>
            <PopoverTrigger className="tp-relative">
              <label className="tp-absolute tp-text-left tp-text-sm -tp-top-2.5 tp-text-primary tp-bg-white tp-font-normal tp-left-3">
                PICKUP TIME
              </label>
              <p className="tp-text-[24px] tp-font-medium tp-border tp-rounded-xl tp-w-[164px] tp-h-[64px] tp-text-left tp-px-[18px]  tp-py-4">
                {hour}:{minute}
                <span className="tp-text-sm tp-ml-2">{meridiem}</span>
              </p>
            </PopoverTrigger>
            <PopoverContent>
              <div>
                <div className="tp-flex tp-items-center">
                  <ClockIcon />
                  <p className="tp-text-primary tp-p-2 tp-text-base tp-font-medium">
                    {hour}.{minute} {meridiem}
                  </p>
                </div>
                <div>
                  <div className="tp-border-t tp-border-b -tp-mx-4">
                    <ul className="tp-flex tp-py-1 tp-px-4 tp-text-xs tp-font-bold ">
                      <li className="tp-w-[94px] ">Hours</li>
                      <li className="tp-w-[94px] ">Minuets</li>
                    </ul>
                  </div>
                  <div className="tp-flex tp-overflow-scroll -tp-mx-4 tp-h-[200px]">
                    {/* hours */}
                    <div className="tp-overflow-y-scroll tp-flex tp-flex-col">
                      {Array.from({ length: 13 }).map((_, index) => (
                        <button
                          className="tp-w-[94px] tp-py-1 tp-px-6 tp-text-sm tp-text-left tp-font-medium hover:tp-bg-[#E0EBFD]"
                          onClick={() =>
                            setHour(String(index).padStart(2, "0"))
                          }
                        >
                          {String(index).padStart(2, "0")}
                        </button>
                      ))}
                    </div>
                    <div className="tp-overflow-y-scroll tp-flex tp-flex-col">
                      {Array.from({ length: 12 }).map((_, index) => (
                        <button
                          className="tp-w-[94px] tp-py-1 tp-px-6 tp-text-sm tp-text-left  tp-font-medium hover:tp-bg-[#E0EBFD]"
                          onClick={() =>
                            setMinute(String(index * 5).padStart(2, "0"))
                          }
                        >
                          {String(index * 5).padStart(2, "0")}
                        </button>
                      ))}
                    </div>
                    <div className="tp-overflow-y-scroll tp-flex tp-flex-col">
                      {["AM", "PM"].map((item: string, index) => (
                        <button
                          key={index}
                          className="tp-w-[94px] tp-py-1 tp-px-6 tp-text-sm tp-text-left  tp-font-medium hover:tp-bg-[#E0EBFD]"
                          onClick={() => setMeridiem(item)}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
        {/* traveler count */}
        <div className="tp-w-[105px]">
          <Select>
            <SelectTrigger className="tp-w-[105px] tp-h-[64px]  tp-p-2 tp-text-base tp-font-medium tp-relative tp-rounded-xl">
              <label className="tp-absolute tp-text-left tp-text-sm -tp-top-2.5 tp-text-primary tp-bg-white tp-font-normal tp-left-3 tp-uppercase">
                Traveler
              </label>
              <SelectValue
                className="tp-p-2 tp-text-base tp-font-medium"
                placeholder={traveler}
              />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {Array.from({ length: 13 }).map((_, index) => (
                  <SelectItem
                    value={String(index + 1)}
                    className="tp-w-[94px] tp-py-1 tp-px-6 tp-text-sm tp-text-left tp-font-medium hover:tp-bg-[#E0EBFD]"
                    onClick={() => setTraveler(index + 1)}
                  >
                    {index + 1}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        {/* luggage */}
        <div className="tp-w-[105px]">
          <Select>
            <SelectTrigger className="tp-w-[105px] tp-h-[64px] tp-text-base tp-font-medium tp-relative tp-rounded-xl">
              <label className="tp-absolute tp-text-left tp-text-sm -tp-top-2.5 tp-text-primary tp-bg-white tp-font-normal tp-left-3 tp-uppercase">
                luggage
              </label>
              <SelectValue
                className="tp-text-primary tp-p-2 "
                placeholder={luggage}
              />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {Array.from({ length: 13 }).map((_, index) => (
                  <SelectItem
                    value={String(index + 1)}
                    className="tp-w-[94px] tp-py-1 tp-px-6 tp-text-sm tp-text-left tp-font-medium hover:tp-bg-[#E0EBFD]"
                    onClick={() => setLuggage(index + 1)}
                  >
                    {index + 1} Kg
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="tp-mb-12 tp-mt-6">
        {showReturn?
        <div className="tp-flex tp-gap-4">
          <div>
            <DatePicker name="Return Date" />
          </div>
          {/* time */}
          <div className="tp-relative">
            <button onClick={()=>setShowReturn(false)} className="tp-absolute -tp-right-2 -tp-top-1.5 tp-z-20">
              <CloseIcon/>
              </button>
            <Popover>
              <PopoverTrigger className="tp-relative">
                <label className="tp-absolute tp-text-left tp-text-sm -tp-top-2.5 tp-text-primary tp-bg-white tp-font-normal tp-left-3">
                  PICKUP TIME
                </label>
                <p className="tp-text-[24px] tp-font-medium tp-border tp-rounded-xl tp-w-[164px] tp-h-[64px] tp-text-left tp-px-[18px]  tp-py-4">
                  {returnDates.hour}:{returnDates.minute}
                  <span className="tp-text-sm tp-ml-2">{returnDates.meridiem}</span>
                </p>
              </PopoverTrigger>
              <PopoverContent>
                <div>
                  <div className="tp-flex tp-items-center">
                    <ClockIcon />
                    <p className="tp-text-primary tp-p-2 tp-text-base tp-font-medium">
                      {returnDates.hour}.{returnDates.minute} {returnDates.meridiem}
                    </p>
                  </div>
                  <div>
                    <div className="tp-border-t tp-border-b -tp-mx-4">
                      <ul className="tp-flex tp-py-1 tp-px-4 tp-text-xs tp-font-bold ">
                        <li className="tp-w-[94px] ">Hours</li>
                        <li className="tp-w-[94px] ">Minuets</li>
                      </ul>
                    </div>
                    <div className="tp-flex tp-overflow-scroll -tp-mx-4 tp-h-[200px]">
                      {/* hours */}
                      <div className="tp-overflow-y-scroll tp-flex tp-flex-col">
                        {Array.from({ length: 13 }).map((_, index) => (
                          <button
                            className="tp-w-[94px] tp-py-1 tp-px-6 tp-text-sm tp-text-left tp-font-medium hover:tp-bg-[#E0EBFD]"
                            onClick={() =>
                              setReturnDates((prev)=>({
                                ...prev,
                                  hour:String(index).padStart(2, "0")
                                }))
                            }
                          >
                            {String(index).padStart(2, "0")}
                          </button>
                        ))}
                      </div>
                      <div className="tp-overflow-y-scroll tp-flex tp-flex-col">
                        {Array.from({ length: 12 }).map((_, index) => (
                          <button
                            className="tp-w-[94px] tp-py-1 tp-px-6 tp-text-sm tp-text-left  tp-font-medium hover:tp-bg-[#E0EBFD]"
                            onClick={() =>setReturnDates((prev)=>({
                              ...prev,
                                minute:String(index).padStart(2, "0")
                              }))
                          }
                          >
                            {String(index * 5).padStart(2, "0")}
                          </button>
                        ))}
                      </div>
                      <div className="tp-overflow-y-scroll tp-flex tp-flex-col">
                        {["AM", "PM"].map((item: string, index) => (
                          <button
                            key={index}
                            className="tp-w-[94px] tp-py-1 tp-px-6 tp-text-sm tp-text-left  tp-font-medium hover:tp-bg-[#E0EBFD]"
                            onClick={() =>setReturnDates((prev)=>({
                              ...prev,
                                meridiem:item
                              }))
                          }
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
        :<div className="">
          <button onClick={()=>setShowReturn(true)} className="tp-w-[360px] tp-border tp-rounded-lg tp-text-sm tp-font-semibold tp-text-primary tp-py-3.5">
            Add return
          </button>
        </div>}
      </div>
      <div className=" -tp-bottom-10 tp-translate-x-[40%] wy-w-full tp-bg-green-700">
        <Link to="/trip" className="tp-w-[207px] tp-flex tp-gap-4 tp-items-center tp-justify-center tp-absolute tp-h-[56px] tp-bg-primary tp-text-white tp-py-3 tp-rounded-md hover:tp-opacity-90">
          Search Cabs 
          <SearchIcon/>
        </Link>
      </div>
    </div>
  );
};
export default AirportTransfersForm