"use client";

import { cn } from "@/utils/cn";
import React, { forwardRef } from "react";
import { AnimatePresence, motion } from "motion/react";

interface FormItemProps extends React.HTMLAttributes<HTMLDivElement> {
  errorMessage?: string;
}

export const FormItem = forwardRef<HTMLDivElement, FormItemProps>((props, ref) => {
  const { className, errorMessage, children, ...rest } = props;

  return (
    <div ref={ref} className={cn("relative w-full space-y-2 overflow-hidden", className)} {...rest}>
      {children}
      <AnimatePresence>
        {!!errorMessage && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-red-500 text-sm"
          >
            {errorMessage}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
});

FormItem.displayName = "FormItem";
