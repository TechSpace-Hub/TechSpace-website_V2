import { useEffect, useRef, useState } from "react";

// Override with VITE_COMMUNITY_API_URL (e.g. a mock server) for testing.
const API_URL =
  import.meta.env.VITE_COMMUNITY_API_URL ||
  "https://api.thetechspaceltd.com/api/v1/community";

const FALLBACK_FORM_URL = "https://forms.gle/dFDphZNePUpVqNzr5";

const ROLES = [
  "Tech Enthusiast/Tech Professional",
  "Founder/Entrepreneur",
  "Startup/Business",
  "Brand/Organization",
  "Investor/Industry Professional",
  "Student/Early-career Professional",
  "Other",
];

const INTERESTS = [
  "The TechSpace Community",
  "The TechSpace Foundry",
  "Talent/Tech Expertise",
  "Partnerships/Collaborations",
  "Projects/Business Opportunities",
  "Events & Experiences",
  "Other",
];

const REFERRAL_SOURCES = [
  "The TechSpace Website",
  "Social media",
  "Referral",
  "Event",
  "Community",
  "Search",
  "Other",
];

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  role: "",
  location: "",
  about: "",
  company: "",
  socialLink: "",
  referralSource: "The TechSpace Website",
};

const inputClass =
  "w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm text-ink placeholder:text-gray-400 outline-none focus:border-accent transition-colors bg-white";

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="block text-xs font-medium text-ink mb-1.5">
        {label}
        {required && <span className="text-accent"> *</span>}
      </span>
      {children}
    </label>
  );
}

export default function JoinCommunityModal({ onClose }) {
  const [form, setForm] = useState(initialForm);
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [message, setMessage] = useState("");
  const closeRef = useRef(onClose);

  useEffect(() => {
    closeRef.current = onClose;
  });

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") closeRef.current();
    };
    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  const update = (key) => (event) =>
    setForm((current) => ({ ...current, [key]: event.target.value }));

  const toggleInterest = (value) =>
    setSelectedInterests((list) =>
      list.includes(value) ? list.filter((item) => item !== value) : [...list, value]
    );

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (status === "submitting") return;
    if (selectedInterests.length === 0) {
      setStatus("error");
      setMessage("Please choose at least one interest before submitting.");
      return;
    }

    setStatus("submitting");
    setMessage("");

    const payload = {
      fullName: form.fullName.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      role: form.role,
      location: form.location.trim(),
      interests: selectedInterests.join(", "),
      about: form.about.trim(),
      ...(form.company.trim() && { company: form.company.trim() }),
      ...(form.socialLink.trim() && { socialLink: form.socialLink.trim() }),
      referralSource: form.referralSource,
    };

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json().catch(() => null);

      if (response.ok && data?.success !== false) {
        setStatus("success");
        setMessage(
          data?.message || "Thank you for connecting with TechSpace! Check your email for next steps."
        );
        setForm(initialForm);
        setSelectedInterests([]);
      } else {
        setStatus("error");
        setMessage(
          data?.message || `Something went wrong (error ${response.status}). Please try again.`
        );
      }
    } catch {
      setStatus("error");
      setMessage("We couldn't reach the server right now. Please try again in a moment.");
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="join-community-title"
    >
      <div className="absolute inset-0 bg-black/60" onClick={onClose} aria-hidden="true" />

      <div className="relative w-full sm:max-w-2xl max-h-[92vh] overflow-y-auto bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl">
        <div className="relative px-6 sm:px-8 py-7 sm:py-9">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close form"
            className="absolute right-5 top-5 w-9 h-9 rounded-full bg-surface text-ink-soft hover:bg-gray-200 transition-colors flex items-center justify-center"
          >
            ✕
          </button>

          {status === "success" ? (
            <div className="text-center py-10">
              <div className="mx-auto w-14 h-14 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-2xl">
                ✓
              </div>
              <h2 id="join-community-title" className="font-display font-bold text-2xl mt-5">
                You're in the loop!
              </h2>
              <p className="text-ink-soft mt-3 max-w-md mx-auto">{message}</p>
              <button
                type="button"
                onClick={onClose}
                className="mt-7 bg-accent text-white text-sm font-medium rounded-full px-8 py-3 hover:bg-accent-dark transition-colors"
              >
                Done
              </button>
            </div>
          ) : (
            <>
              <span className="text-accent text-xs tracking-wide font-medium uppercase">
                Join Community
              </span>
              <h2
                id="join-community-title"
                className="font-display font-bold text-2xl sm:text-3xl mt-2"
              >
                Connect with The TechSpace
              </h2>
              <p className="text-ink-soft text-sm mt-2 max-w-lg">
                Whether you're exploring opportunities in the tech ecosystem, building a company,
                looking for talent, or interested in The TechSpace Foundry — tell us a little about
                yourself and our team will get back to you with the next steps.
              </p>

              <form onSubmit={handleSubmit} className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Full Name" required>
                  <input
                    type="text"
                    required
                    autoFocus
                    value={form.fullName}
                    onChange={update("fullName")}
                    placeholder="Your full name"
                    className={inputClass}
                  />
                </Field>

                <Field label="Email Address" required>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={update("email")}
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </Field>

                <Field label="Active Phone Number (WhatsApp preferred)" required>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={update("phone")}
                    placeholder="+234 801 234 5678"
                    className={inputClass}
                  />
                </Field>

                <Field label="Which best describes you?" required>
                  <select required value={form.role} onChange={update("role")} className={inputClass}>
                    <option value="" disabled>
                      Select one
                    </option>
                    {ROLES.map((role) => (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="Where are you currently based?" required>
                  <input
                    type="text"
                    required
                    value={form.location}
                    onChange={update("location")}
                    placeholder="City, Country"
                    className={inputClass}
                  />
                </Field>

                <Field label="Company/Organization/Startup Name">
                  <input
                    type="text"
                    value={form.company}
                    onChange={update("company")}
                    placeholder="Optional"
                    className={inputClass}
                  />
                </Field>

                <fieldset className="sm:col-span-2">
                  <legend className="text-xs font-medium text-ink mb-1.5">
                    What are you interested in exploring with The TechSpace?
                    <span className="text-accent"> *</span>
                  </legend>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {INTERESTS.map((interest) => {
                      const checked = selectedInterests.includes(interest);
                      return (
                        <label
                          key={interest}
                          className={`flex items-center gap-2.5 border rounded-xl px-3.5 py-2.5 text-sm cursor-pointer transition-colors ${
                            checked
                              ? "border-accent bg-accent/5 text-ink"
                              : "border-gray-200 text-ink-soft hover:border-gray-300"
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => toggleInterest(interest)}
                            className="accent-[#c6382f] w-4 h-4 shrink-0"
                          />
                          {interest}
                        </label>
                      );
                    })}
                  </div>
                </fieldset>

                <Field label="Tell us a little about what you're looking for" required>
                  <textarea
                    required
                    rows={4}
                    value={form.about}
                    onChange={update("about")}
                    placeholder="What you'd like to explore with The TechSpace..."
                    className={`${inputClass} sm:col-span-2 resize-y`}
                  />
                </Field>

                <Field label="Website / LinkedIn / Social Media">
                  <input
                    type="text"
                    inputMode="url"
                    value={form.socialLink}
                    onChange={update("socialLink")}
                    placeholder="https://linkedin.com/in/..."
                    className={inputClass}
                  />
                </Field>

                <Field label="How did you hear about The TechSpace?" required>
                  <select
                    required
                    value={form.referralSource}
                    onChange={update("referralSource")}
                    className={inputClass}
                  >
                    {REFERRAL_SOURCES.map((source) => (
                      <option key={source} value={source}>
                        {source}
                      </option>
                    ))}
                  </select>
                </Field>

                {status === "error" && (
                  <div className="sm:col-span-2 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3">
                    <p>{message}</p>
                    <a
                      href={FALLBACK_FORM_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block mt-2 font-medium underline hover:text-red-800"
                    >
                      In the meantime, you can fill our form directly ↗
                    </a>
                  </div>
                )}

                <div className="sm:col-span-2 flex flex-col sm:flex-row items-center gap-3 mt-1">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full sm:w-auto bg-accent text-white text-sm font-medium rounded-full px-8 py-3 hover:bg-accent-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? "Sending..." : "Submit"}
                  </button>
                  <p className="text-xs text-ink-soft">
                    We review every response and get back to you with next steps.
                  </p>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
