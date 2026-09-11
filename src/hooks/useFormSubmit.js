import { useState } from "react";

export function useFormSubmit(endpoint) {
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState("");

  async function submit(payload) {
    if (status === "loading" || status === "success") return; // guards duplicate submits

    if (!endpoint) {
      setStatus("error");
      setErrorMessage(
        "This form isn't connected yet. Add a Formspree endpoint in .env — see the README."
      );
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        const data = await res.json().catch(() => null);
        setErrorMessage(data?.errors?.[0]?.message || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMessage("Network error — please check your connection and try again.");
      setStatus("error");
    }
  }

  function reset() {
    setStatus("idle");
    setErrorMessage("");
  }

  return { status, errorMessage, submit, reset };
}
