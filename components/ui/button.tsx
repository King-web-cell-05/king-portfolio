import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center  whitespace-nowrap rounded-full text-base font-semibold ring-offset-white transition-color",
  {
    variants: {
      variant: {
        default: "bg-emerald-300 text-black hover:bg-emerald-400",
        primary: "bg-black text-white",
        outline:
          "border border-emerald-300 bg-transparent text-emerald-300 hover:bg-emerald-300 hover:text-black",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-[48px] px-6",
        lg: "h-[56px px-8 text-sm uppercase tracking-[2px]]",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
