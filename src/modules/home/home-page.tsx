import React from "react";
import { AuthForm } from "./components/auth-form";
import { PatternMain } from "@/components/svgs/pattern-main";

export function HomePage() {
  return (
    <section className="relative">
      <div className="max-w-md mx-auto w-full py-28 px-6 relative z-10">
        <h1 className="text-6xl font-medium text-center">Sign In</h1>
        <h3 className="text-center text-lg text-app-text-secondary font-medium mt-6">
          Access our services in one click
        </h3>

        <AuthForm />
      </div>
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <PatternMain className="w-full h-full" />
      </div>
    </section>
  );
}
