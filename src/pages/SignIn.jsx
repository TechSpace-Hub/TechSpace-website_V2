import { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../components/auth/AuthLayout";
import AuthCard from "../components/auth/AuthCard";

export default function SignIn() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign in with", form);
  };

  return (
    <AuthLayout>
      <AuthCard>
        <div className="text-center">
          <div className="inline-flex items-center gap-1.5 font-display font-semibold text-accent">
            <span aria-hidden="true">🚀</span> techspace
          </div>
          <h1 className="font-display font-bold text-2xl mt-5">Welcome Back !</h1>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1.5">
              Email Address
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-soft text-sm">
                ✉️
              </span>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2.5 text-sm outline-none focus:border-accent"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1.5">
              Password
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-soft text-sm">
                🔒
              </span>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={form.password}
                onChange={handleChange}
                placeholder="Enter password"
                className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2.5 text-sm outline-none focus:border-accent"
              />
            </div>
          </div>

          <div className="text-right">
            <Link to="/forgot-password" className="text-accent text-sm font-medium hover:underline">
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-accent text-white font-medium rounded-lg py-2.5 hover:bg-accent-dark transition-colors"
          >
            Sign In
          </button>

          <p className="text-center text-sm text-ink-soft">
            Don't have an account?{" "}
            <Link to="/signup" className="text-accent font-medium hover:underline">
              Sign Up
            </Link>
          </p>
        </form>
      </AuthCard>
    </AuthLayout>
  );
}