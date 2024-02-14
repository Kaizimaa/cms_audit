'use client'

import Link from "next/link";
import { Form } from "../../form";
import Image from "next/image";
import { SubmitButton } from "../../submit-button";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
export default function Login() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-50">
      <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
          <div>
            <Image src="/logonew.png" alt="logo cms" width={200} height={175} />
          </div>
          <p className="text-sm text-gray-500">
            Use your email and password to sign in
          </p>
        </div>
        <Form
          action={async (formData: FormData) => {
             const res = await fetch(API_URL + 'users', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                username: formData.get("username") as string,
                password: formData.get("password") as string,
              }),
            })
            const data = await res.json();
            console.log(data)
          }}
        >
          <SubmitButton>Masuk</SubmitButton>
          {/* <p className="text-center text-sm text-gray-600">
            {"Don't have an account? "}
            <Link href="/register" className="font-semibold text-gray-800">
              Sign up
            </Link>
          </p> */}
        </Form>
      </div>
    </div>
  );
}
