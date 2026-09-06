import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../components/auth/AuthLayout";
import AuthCard from "../components/auth/AuthCard";

const RESEND_SECONDS = 43;

function StepResetPassword({ email, setEmail, onSubmit }) {
  return (
    <AuthCard>
      <h1 className="font-display font-bold text-2xl">Reset Your Password</h1>
      <p className="text-ink-soft text-sm mt-2">
        Enter your email address and we'll send you a password reset link.
      </p>

      <form onSubmit={onSubmit} className="mt-6 space-y-4">
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
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2.5 text-sm outline-none focus:border-accent"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-accent text-white font-medium rounded-lg py-2.5 hover:bg-accent-dark transition-colors"
        >
          Send Reset Link
        </button>

        <p className="text-center">
          <Link to="/signin" className="text-sm text-ink-soft hover:text-ink transition-colors">
            ← Back to Sign In
          </Link>
        </p>
      </form>
    </AuthCard>
  );
}

function StepCheckEmail({ email, onOpenEmailApp, onResend }) {
  return (
    <AuthCard className="text-center">
      <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto text-2xl">
        ✉️
      </div>
      <h1 className="font-display font-bold text-2xl mt-5">Check Your Email</h1>
      <p className="text-ink-soft text-sm mt-2">
        We've sent a password reset link to
        <br />
        <span className="font-medium text-ink">{email}</span>
      </p>
      <p className="text-ink-soft text-sm mt-2">Please check your inbox and follow the instructions.</p>

      <div className="mt-6 space-y-3">
        <button
          onClick={onOpenEmailApp}
          className="w-full bg-accent text-white font-medium rounded-lg py-2.5 hover:bg-accent-dark transition-colors"
        >
          Open Email App
        </button>
        <button
          onClick={onResend}
          className="w-full border border-gray-300 text-ink font-medium rounded-lg py-2.5 hover:bg-gray-50 transition-colors"
        >
          Resend Link
        </button>
      </div>

      <p className="mt-4">
        <Link to="/signin" className="text-sm text-ink-soft hover:text-ink transition-colors">
          Back to Sign In
        </Link>
      </p>
    </AuthCard>
  );
}

function StepVerificationCode({ email, onSubmit, onNotMyEmail }) {
  const [code, setCode] = useState(Array(6).fill(""));
  const [seconds, setSeconds] = useState(RESEND_SECONDS);

  useEffect(() => {
    if (seconds <= 0) return;
    const timer = setTimeout(() => setSeconds((s) => s - 1), 1000);
    return () => clearTimeout(timer);
  }, [seconds]);

  const handleDigitChange = (index, value) => {
    if (!/^[0-9]?$/.test(value)) return;
    const next = [...code];
    next[index] = value;
    setCode(next);

    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  const formattedTime = `00:${String(seconds).padStart(2, "0")}`;

  return (
    <AuthCard className="text-center">
      <h1 className="font-display font-bold text-2xl">Enter Verification Code</h1>
      <p className="text-ink-soft text-sm mt-2">
        Check your email for the 6-digit code we sent to
        <br />
        <span className="font-medium text-ink">{email}</span>
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(code.join(""));
        }}
        className="mt-6"
      >
        <div className="flex items-center justify-center gap-2 sm:gap-3">
          {code.map((digit, i) => (
            <input
              key={i}
              id={`otp-${i}`}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleDigitChange(i, e.target.value)}
              className="w-11 h-12 text-center border border-gray-300 rounded-lg text-lg outline-none focus:border-accent"
            />
          ))}
        </div>

        <p className="text-ink-soft text-xs mt-4">
          Resend available in:{" "}
          <span className={seconds === 0 ? "text-accent font-medium" : "font-medium"}>
            {formattedTime}
          </span>
        </p>

        <button
          type="button"
          onClick={onNotMyEmail}
          className="text-accent text-sm font-medium mt-1 hover:underline"
        >
          Not my Email?
        </button>

        <button
          type="submit"
          className="w-full bg-accent text-white font-medium rounded-lg py-2.5 mt-5 hover:bg-accent-dark transition-colors"
        >
          Verify Code
        </button>
      </form>
    </AuthCard>
  );
}

export default function ForgotPassword() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");

  const handleSendResetLink = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleVerifyCode = (code) => {
    console.log("Verifying code:", code);
  };

  return (
    <AuthLayout>
      {step === 1 && (
        <StepResetPassword email={email} setEmail={setEmail} onSubmit={handleSendResetLink} />
      )}
      {step === 2 && (
        <StepCheckEmail
          email={email}
          onOpenEmailApp={() => setStep(3)}
          onResend={() => console.log("Resending link to", email)}
        />
      )}
      {step === 3 && (
        <StepVerificationCode
          email={email}
          onSubmit={handleVerifyCode}
          onNotMyEmail={() => setStep(1)}
        />
      )}
    </AuthLayout>
  );
}