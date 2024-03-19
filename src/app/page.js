"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { signOut } from "next-auth/react";

export default function Home() {
  const { status } = useSession();

  const showSession = () => {
    if (status === "authenticated") {
      return (
        <button
          className="text-999 ease mt-7 text-sm text-[#888] transition duration-150 hover:text-white"
          onClick={() => {
            signOut();
          }}
        >
          Logout here
        </button>
      );
    } else if (status === "loading") {
      return <span className="mt-7 text-sm text-[#888]">Loading...</span>;
    } else {
      return (
        <Link
          href="/auth/sign-in"
          className="text-999 ease mt-7 text-sm text-[#888] transition duration-150"
        >
          Login here
        </Link>
      );
    }
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-xl">NextAuth APP</h1>
      {showSession()}
    </main>
  );
}
