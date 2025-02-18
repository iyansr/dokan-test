import React from "react";
import { AuthForm } from "./components/auth-form";

export function HomePage() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/pattern-main.svg')" }}
    >
      <div className="max-w-md mx-auto w-full py-28 px-6 relative z-10">
        <h1 className="text-6xl font-medium text-center">Sign In</h1>
        <h3 className="text-center text-lg text-app-text-secondary font-medium mt-6">
          Access our services in one click
        </h3>

        <AuthForm />
      </div>
    </section>
  );
}
