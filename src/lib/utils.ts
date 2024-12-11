import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { format } from "date-fns"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function dateFormatter(date:Date){
  console.log(format(date, "EEE MMM dd yy"))
  const formattedDate = format(date, "EEE MMM dd yy")
  // split the formatted date into an array of strings
  const dateArray = formattedDate.split(" ")
  const dateValue={
    day:dateArray[0],
    month:dateArray[1],
    date:dateArray[2],
    year:dateArray[3]
  }

  return dateValue
}