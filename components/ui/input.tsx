import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex-h-[48px] rounded-md border border-white/10 focus:border-emerald-300 font-light bg-black/50 px-4 py-4 text-base placeholder:text-white/60 outline-none",
        className
      )}
      {...props}
    />
  );
}

export { Input };
