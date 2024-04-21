import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group relative m-1 inline-flex cursor-pointer items-center  justify-center overflow-hidden rounded-lg border-b-2 border-l-2 border-r-2 px-4 py-1 text-white shadow-lg transition duration-100 ease-in-out active:translate-y-0.5 active:shadow-none transition-all duration-300",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-tr rborder-orange-700 from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 active:border-orange-600",
        destructive:
          "bg-destructive from-destructive to-destructive/90 active:border-destructive/90 to text-destructive-foreground hover:bg-destructive/90",
        outline:
          "text-foreground !border border-border bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
