'use client';
import { useState } from "react";
import { doPasswordReset } from "../../firebase/auth"; 



export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setMessage("");

    try {
      await doPasswordReset(email);
      setMessage("Password reset email sent!");
    } catch (err: any) {
      console.error(err.message);
      setError("Failed to send reset email. Please check your email address.");
    }
  };

  return (
    <>
      <div className="mb-10">
        <h1 className="text-4xl font-bold">Reset password</h1>
      </div>

      <form onSubmit={handleReset}>
        <div className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              className="form-input w-full py-2"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
            />
          </div>
        </div>

        {message && <p className="text-green-600 text-sm mt-2">{message}</p>}
        {error && <p className="text-red-600 text-sm mt-2">{error}</p>}

        <div className="mt-6">
          <button
            type="submit"
            className="btn w-full bg-blue-600 text-white hover:bg-blue-700"
          >
            Reset Password
          </button>
        </div>
      </form>
    </>
  );
}
