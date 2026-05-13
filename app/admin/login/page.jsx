"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const ADMIN_EMAIL = "admin@gmail.com";
  const ADMIN_PASSWORD = "admin@123";

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      email === ADMIN_EMAIL &&
      password === ADMIN_PASSWORD
    ) {
      localStorage.setItem("adminAuth", "true");

      router.push("/admin");
    } else {
      setError("Invalid Email or Password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="w-full max-w-md bg-zinc-900 p-4  rounded-2xl border border-zinc-800">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          Admin Login
        </h1>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-zinc-800 text-white outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg bg-zinc-800 text-white outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && (
            <p className="text-red-500 text-sm">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-3 rounded-lg"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}