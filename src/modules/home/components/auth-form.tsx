"use client";

import React from "react";
import { FormItem } from "@/components/form-item";
import { Label } from "@/components/ui/label";
import { TextInput } from "@/components/ui/text-input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PatternButton } from "@/components/svgs/pattern-button";
import { cn } from "@/utils/cn";
import { IconGoogle } from "@/components/svgs/icon-google";
import Link from "next/link";

const formSchema = z.object({
  email: z
    .string({ required_error: "Email is required", invalid_type_error: "Email is required" })
    .email("Invalid email"),
  password: z
    .string({ required_error: "Password is required", invalid_type_error: "Password is required" })
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one capital letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character"),
});

type FormSchema = z.infer<typeof formSchema>;

export function AuthForm() {
  const { register, handleSubmit, formState } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit = (data: FormSchema) => {
    console.log(data);
  };

  return (
    <form className="mt-20" onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full space-y-6">
        <FormItem errorMessage={formState.errors.email?.message} className="">
          <Label htmlFor="email">Email</Label>
          <TextInput
            className="w-full "
            type="email"
            placeholder="Enter your email"
            isError={!!formState.errors.email}
            {...register("email")}
          />
        </FormItem>

        <FormItem errorMessage={formState.errors.password?.message} className="">
          <Label htmlFor="password">Password</Label>
          <TextInput
            className="w-full "
            type="password"
            placeholder="Enter your password"
            isError={!!formState.errors.password}
            {...register("password")}
          />
        </FormItem>
      </div>

      <button
        type="submit"
        className={cn(
          "w-full h-14 bg-app-dark-blue relative before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/15 before:to-transparent",
          "text-white shadow-[0px_0px_0px_1px_#2E98A2,0px_1px_2px_0px_#257A82] rounded-lg text-lg font-medium mt-10"
        )}
      >
        <span className="absolute top-0 left-0 right-0 bottom-0">
          <PatternButton />
        </span>
        <span className="relative z-[2]">Sign In</span>
      </button>

      <p className="font-plus-jakarta-sans text-tertiary text-lg font-medium my-4 text-center">or</p>

      <button
        className={cn(
          "w-full h-14 bg-white text-tertiary rounded-lg text-lg font-medium",
          "font-plus-jakarta-sans font-medium flex items-center justify-center gap-4",
          "border-[1.5px] shadow-button"
        )}
      >
        <IconGoogle />
        Continue with Google
      </button>

      <p className="font-plus-jakarta-sans text-tertiary font-medium m-8 text-center">
        Did&apos;nt have an account?{" "}
        <Link href="/#!" className="underline underline-offset-2 text-lg">
          Register
        </Link>
      </p>
    </form>
  );
}
