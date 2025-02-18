"use client";

import { cn } from "@/utils/cn";
import React from "react";
import { IconEyeOff } from "../svgs/icon-eye-off";
import { IconEye } from "../svgs/icon-eye";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
}

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
  const { isError, className, type, ...rest } = props;

  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

  return (
    <div className="relative">
      <input
        ref={ref}
        className={cn(
          "h-14 border relative border-app-border rounded-10 px-4 transition-all duration-200 placeholder:text-app-input-placeholder shadow-custom",
          "focus:outline-none focus:border-app-blue",
          {
            "border-red-500": isError,
          },
          className
        )}
        type={type === "password" && isPasswordVisible ? "text" : type}
        {...rest}
      />

      {type === "password" && (
        <div
          role="button"
          className="absolute right-4 top-0 bottom-0 flex items-center justify-center"
          onClick={() => setIsPasswordVisible(!isPasswordVisible)}
        >
          {!isPasswordVisible ? (
            <IconEyeOff className="text-app-input-placeholder" />
          ) : (
            <IconEye className="text-app-input-placeholder" />
          )}
        </div>
      )}
    </div>
  );
});

TextInput.displayName = "TextInput";
