"use client";

// import { Form } from "@/components/login/form";
import Image from "next/image";
// import { SubmitButton } from "@/components/login/submit-button";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

    const handleSubmit = async (e: any) => {
      e.preventDefault();
      if (username && password) {
        router.push("/");
      } else {
        router.push("/login");
        try {
          const response = await fetch("/api/login", {
            method: "POST",
            body: JSON.stringify({ username, password }),
          });
          if (response.ok) {
            console.log("Login Berhasil");
          }
        } catch (error) {
          console.error("Terjadi kesalahan:", error);
        }
      }
    };
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-50">
      <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
          <div>
            <Image src="/logonew.png" alt="logo cms" width={200} height={175} />
          </div>
          <p className="text-sm text-gray-500">
            Masukan Username & Password Untuk Melakukan Login
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 sm:px-16"
        >
          <div>
            <label
              htmlFor="username"
              className="block text-xs text-gray-600 uppercase"
            >
              Nama Pengguna
            </label>
            <input
              id="username"
              name="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required

              className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-xs text-gray-600 uppercase"
            >
              Kata Sandi
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="flex h-10 w-full items-center justify-center rounded-md border text-sm transition-all focus:outline-none"
          >MASUK</button>
        </form>
      </div>
    </div>
  );
}
