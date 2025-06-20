"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
} from "../../firebase/auth";
import { redirect, useRouter, useSearchParams } from "next/navigation";
import next from "next";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const searchParams = useSearchParams();
  const next_url = searchParams.get("next");
  const nav = useRouter();
  // 🔐 Manual email/password login
  const handleManualSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      await doSignInWithEmailAndPassword(email, password);
      nav.push(next_url ?? "/");

      // Optional: redirect user
      // router.push('/dashboard');
    } catch (err: any) {
      console.error(err.message);
      setError("Email/password sign-in failed.");
    }
  };

  // 🔐 Google sign-in
  const handleGoogleSignIn = async () => {
    setError("");
    try {
      await doSignInWithGoogle();
      nav.push(next_url ?? "/");

      // Optional: redirect user
    } catch (err: any) {
      console.error(err.message);
      setError("Google sign-in failed.");
    }
  };

  return (
    <>
      <div className="mb-10">
        <h1 className="text-4xl font-bold">Sign in to your account</h1>
      </div>

      {/* Manual Sign-In Form */}
      <form onSubmit={handleManualSignIn}>
        <div className="space-y-4">
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              className="form-input w-full py-2"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              className="form-input w-full py-2"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>
        </div>

        {error && <p className="text-red-600 text-sm mt-2">{error}</p>}

        <div className="mt-6">
          <button
            type="submit"
            className="btn w-full bg-blue-600 text-white hover:bg-blue-700"
          >
            Sign In with Email
          </button>
        </div>
      </form>

      {/* Divider */}
      <div className="my-6 text-center text-sm italic text-gray-400">Or</div>

      {/* Google Sign-In Button */}
      <div className="space-y-3">
        <button
          onClick={handleGoogleSignIn}
          className="btn w-full bg-gray-800 text-white hover:bg-gray-900"
        >
          Sign in with Google
        </button>
      </div>

      {/* Forgot Password */}
      <div className="mt-6 text-center">
        <Link
          className="text-sm text-gray-700 underline hover:no-underline"
          href="/reset-password"
        >
          Forgot password?
        </Link>
      </div>
    </>
  );
}
