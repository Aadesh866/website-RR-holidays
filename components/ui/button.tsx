import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2.5 whitespace-nowrap text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E31E24] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-[#E31E24] text-white hover:bg-[#c9171d] hover:scale-[1.03] hover:shadow-lg active:scale-[0.98]",
        outline: "border-2 border-[#E31E24] text-[#E31E24] hover:bg-[#E31E24] hover:text-white",
        ghost: "hover:bg-[#f0f1fa] hover:text-[#1a1f4e]",
        link: "text-[#E31E24] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-10 py-2.5",
        sm: "h-10 px-6 py-2",
        lg: "h-14 px-12 text-base",
        icon: "h-12 w-12",
      },
      rounded: {
        default: "rounded-xl",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      rounded: "full",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, rounded, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, rounded, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
