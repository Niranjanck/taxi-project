import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "tp-inline-flex tp-items-center tp-justify-center tp-gap-2 tp-whitespace-nowrap tp-rounded-md tp-text-sm tp-font-medium tp-transition-colors focus-visible:tp-outline-none focus-visible:tp-ring-1 focus-visible:tp-ring-ring disabled:tp-pointer-events-none disabled:tp-opacity-50 [&_svg]:tp-pointer-events-none [&_svg]:tp-size-4 [&_svg]:tp-shrink-0",
  {
    variants: {
      variant: {
        default:
          "tp-bg-primary tp-text-primary-foreground tp-shadow hover:tp-bg-primary/90",
        destructive:
          "tp-bg-destructive tp-text-destructive-foreground tp-shadow-sm hover:tp-bg-destructive/90",
        outline:
          "tp-border tp-border-input tp-bg-background tp-shadow-sm hover:tp-bg-accent hover:tp-text-accent-foreground",
        secondary:
          "tp-bg-secondary tp-text-secondary-foreground tp-shadow-sm hover:tp-bg-secondary/80",
        ghost: "hover:tp-bg-accent hover:tp-text-accent-foreground",
        link: "tp-text-primary tp-underline-offset-4 hover:tp-underline",
      },
      size: {
        default: "tp-h-9 tp-px-4 tp-py-2",
        sm: "tp-h-8 tp-rounded-md tp-px-3 tp-text-xs",
        lg: "tp-h-10 tp-rounded-md tp-px-8",
        icon: "tp-h-9 tp-w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
