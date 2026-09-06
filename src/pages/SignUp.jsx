import { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../components/auth/AuthLayout";
import AuthCard from "../components/auth/AuthCard";

const roles = ["Professional", "Founder", "Brand / Partner"];

export default function SignUp() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign up with", form);
  };

  return (
    <AuthLayout>
      <AuthCard>
        <div className="text-center">
          <div className="inline-flex items-center gap-1.5 font-display font-semibold text-accent">
            <span aria-hidden="true">🚀</span> techspace
          </div>
          <h1 className="font-display font-bold text-2xl mt-5">Create Account</h1>
          <p className="text-ink-soft text-sm mt-1">Join the Community</p>
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

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1.5">
              Confirm Password
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-soft text-sm">
                🔒
              </span>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
                className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2.5 text-sm outline-none focus:border-accent"
              />
            </div>
          </div>

          <div>
            <label htmlFor="role" className="block text-sm font-medium mb-1.5">
              Select Your Role
            </label>
            <select
              id="role"
              name="role"
              required
              value={form.role}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-accent bg-white text-ink-soft"
            >
              <option value="" disabled>
                Select Your Role
              </option>
              {roles.map((role) => (
                <option key={role} value={role} className="text-ink">
                  {role}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-accent text-white font-medium rounded-lg py-2.5 hover:bg-accent-dark transition-colors"
          >
            Sign Up
          </button>

          <p className="text-center text-sm text-ink-soft">
            Already have an account?{" "}
            <Link to="/signin" className="text-accent font-medium hover:underline">
              Sign In
            </Link>
          </p>
        </form>
      </AuthCard>
    </AuthLayout>
  );
}