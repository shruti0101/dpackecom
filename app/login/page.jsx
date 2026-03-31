"use client";
import { Suspense } from "react";
import LoginPage from "@/components/LoginPage";

export const dynamic = "force-dynamic";

export default function LoginPageWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginPage />
    </Suspense>
  );
}
