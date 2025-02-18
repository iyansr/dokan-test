import { cn } from "@/utils/cn";
import React from "react";

export const Label = React.forwardRef<HTMLLabelElement, React.LabelHTMLAttributes<HTMLLabelElement>>((props, ref) => {
  const { className, ...rest } = props;

  return <label ref={ref} className={cn("text-app-label text-lg", className)} {...rest} />;
});

Label.displayName = "Label";
