import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"

import { cn } from "@/lib/utils"

const Popover = PopoverPrimitive.Root

const PopoverTrigger = PopoverPrimitive.Trigger

const PopoverAnchor = PopoverPrimitive.Anchor

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "tp-z-50 tp-w-72 tp-rounded-md tp-border tp-bg-popover tp-p-4 tp-text-popover-foreground tp-shadow-md tp-outline-none data-[state=open]:tp-animate-in data-[state=closed]:tp-animate-out data-[state=closed]:tp-fade-out-0 data-[state=open]:tp-fade-in-0 data-[state=closed]:tp-zoom-out-95 data-[state=open]:tp-zoom-in-95 data-[side=bottom]:tp-slide-in-from-top-2 data-[side=left]:tp-slide-in-from-right-2 data-[side=right]:tp-slide-in-from-left-2 data-[side=top]:tp-slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
))
PopoverContent.displayName = PopoverPrimitive.Content.displayName

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor }
