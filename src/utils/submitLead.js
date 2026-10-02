// POSTs a lead (email + optional name) to the TechSpace leads API.
// Override with VITE_LEADS_API_URL (e.g. the local mock) for testing.
const API_URL =
  import.meta.env.VITE_LEADS_API_URL || "https://api.thetechspaceltd.com/api/v1/leads";

// Returns { success: boolean, message: string } — success covers both
// "You're on the list!" (201) and "You're already on the list." (200).
export default async function submitLead({ email, name }) {
  const payload = { email: String(email ?? "").trim() };
  const trimmedName = String(name ?? "").trim();
  if (trimmedName) payload.name = trimmedName;

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await response.json().catch(() => null);

    if (response.ok && data?.success !== false) {
      return { success: true, message: data?.message || "You're on the list!" };
    }
    return {
      success: false,
      message:
        data?.message || `Something went wrong (error ${response.status}). Please try again.`,
    };
  } catch {
    return { success: false, message: "We couldn't reach the server right now. Please try again." };
  }
}
