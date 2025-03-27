"use client";
import { IconClipboard } from "@tabler/icons-react";
import { cn } from "../../lib/utils";

export const ButtonsCard = () => {
  return (
    <div
      //   onClick={onClick}
      className={cn(
        "w-full rounded-xl bg-transparent group/btn overflow-hidden relative flex items-center justify-center"
        // className
      )}
    >
      <div className="absolute inset-0 bg-dot-white/[0.1] bg-dot-black/[0.1]" />
      <IconClipboard className="absolute top-2 right-2 text-neutral-300 group-hover/btn:block hidden h-4 w-4 transition duration-200" />
      <div className="relative z-40">
        <button className="relative inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="font-eb-garamond  inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-2 text-sm font-medium text-white backdrop-blur-3xl">
            Contact Us
          </span>
        </button>
      </div>
    </div>
  );
};
