import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { Check, ChevronDown, ChevronUp } from "lucide-react"

import { cn } from "@/lib/utils"

const Select = SelectPrimitive.Root

const SelectGroup = SelectPrimitive.Group

const SelectValue = SelectPrimitive.Value

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "tp-flex tp-h-9 tp-w-full tp-items-center tp-justify-between tp-whitespace-nowrap tp-rounded-md tp-border tp-border-input tp-bg-transparent tp-px-3 tp-py-2 tp-text-sm tp-shadow-sm tp-ring-offset-background placeholder:tp-text-muted-foreground focus:tp-outline-none focus:tp-ring-1 focus:tp-ring-ring disabled:tp-cursor-not-allowed disabled:tp-opacity-50 [&>span]:tp-line-clamp-1",
      className
    )}
    {...props}
  >
    {children}
  </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(
      "tp-flex tp-cursor-default tp-items-center tp-justify-center tp-py-1",
      className
    )}
    {...props}
  >
    <ChevronUp className="tp-h-4 tp-w-4" />
  </SelectPrimitive.ScrollUpButton>
))
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(
      "tp-flex tp-cursor-default tp-items-center tp-justify-center tp-py-1",
      className
    )}
    {...props}
  >
    <ChevronDown className="tp-h-4 tp-w-4" />
  </SelectPrimitive.ScrollDownButton>
))
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "tp-relative tp-z-50 tp-max-h-96 tp-min-w-[8rem] tp-overflow-hidden tp-rounded-md tp-border tp-bg-popover tp-text-popover-foreground tp-shadow-md data-[state=open]:tp-animate-in data-[state=closed]:tp-animate-out data-[state=closed]:tp-fade-out-0 data-[state=open]:tp-fade-in-0 data-[state=closed]:tp-zoom-out-95 data-[state=open]:tp-zoom-in-95 data-[side=bottom]:tp-slide-in-from-top-2 data-[side=left]:tp-slide-in-from-right-2 data-[side=right]:tp-slide-in-from-left-2 data-[side=top]:tp-slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:tp-translate-y-1 data-[side=left]:-tp-translate-x-1 data-[side=right]:tp-translate-x-1 data-[side=top]:-tp-translate-y-1",
        className
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          "tp-p-1",
          position === "popper" &&
            "tp-h-[var(--radix-select-trigger-height)] tp-w-full tp-min-w-[var(--radix-select-trigger-width)]"
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("tp-px-2 tp-py-1.5 tp-text-sm tp-font-semibold", className)}
    {...props}
  />
))
SelectLabel.displayName = SelectPrimitive.Label.displayName

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "tp-relative tp-flex tp-w-full tp-cursor-default tp-select-none tp-items-center tp-rounded-sm tp-py-1.5 tp-pl-2 tp-pr-8 tp-text-sm tp-outline-none focus:tp-bg-accent focus:tp-text-accent-foreground data-[disabled]:tp-pointer-events-none data-[disabled]:tp-opacity-50",
      className
    )}
    {...props}
  >
    <span className="tp-absolute tp-right-2 tp-flex tp-h-3.5 tp-w-3.5 tp-items-center tp-justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="tp-h-4 tp-w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
SelectItem.displayName = SelectPrimitive.Item.displayName

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("-tp-mx-1 tp-my-1 tp-h-px tp-bg-muted", className)}
    {...props}
  />
))
SelectSeparator.displayName = SelectPrimitive.Separator.displayName

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
}
