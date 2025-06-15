'use client';
import { useState } from "react";
import {
  doCreateUserWithEmailAndPassword,
  doSignInWithGoogle,
} from "../../firebase/auth";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Manual email+password signup
  const handleEmailSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const userCredential = await doCreateUserWithEmailAndPassword(email, password);
      const user = userCredential.user;
      console.log("User created:", user);
      // Optional: redirect or show success
    } catch (err: any) {
      console.error(err.message);
      setError(err.message);
    }
  };

  // Google signup
  const handleGoogleSignup = async () => {
    setError("");
    try {
      await doSignInWithGoogle();
      // Optional: redirect to dashboard
    } catch (err: any) {
      console.error(err.message);
      setError("Google sign-in failed.");
    }
  };

  return (
    <>
      <div className="mb-10">
        <h1 className="text-4xl font-bold">Create your account</h1>
      </div>

      {/* Manual Sign Up */}
      <form onSubmit={handleEmailSignup}>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">
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
            <label className="block text-sm font-medium text-gray-700" htmlFor="password">
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
            Sign up with Email
          </button>
        </div>
      </form>

      {/* Divider */}
      <div className="my-6 text-center text-sm italic text-gray-400">Or</div>

      {/* Google Sign Up */}
      <div className="mt-3">
        <button
          onClick={handleGoogleSignup}
          className="btn w-full bg-gray-800 text-white hover:bg-gray-900"
        >
          Continue with Google
        </button>
      </div>

      {/* Terms */}
      <div className="mt-6 text-center text-sm text-gray-500">
        By signing up, you agree to the{" "}
        <a className="font-medium underline" href="#">Terms of Service</a> and{" "}
        <a className="font-medium underline" href="#">Privacy Policy</a>.
      </div>
    </>
  );
}
