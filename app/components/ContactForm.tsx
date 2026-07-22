"use client";

import { FormEvent, useState } from "react";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY = "e0f3d7b4-e87f-442c-ae63-156d6623088e";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json"
        }
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error("Form submission failed");
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="contact-form reveal" role="status" aria-live="polite">
        <p className="rounded-md border border-brand-line bg-brand-mist px-4 py-3 text-sm font-semibold text-brand-ink">
          Thanks &mdash; I&apos;ll be in touch within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form className="contact-form reveal" onSubmit={handleSubmit}>
      <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
      <input
        type="hidden"
        name="subject"
        value="New enquiry from dalygrowthmedia.com"
      />
      <div className="grid gap-5 sm:grid-cols-2">
        <label>
          Name
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label>
          Email
          <input name="email" type="email" autoComplete="email" required />
        </label>
      </div>
      <label>
        Brand website URL
        <input name="website" type="text" />
      </label>
      <label>
        What would you like help with?
        <textarea name="message" rows={4} required />
      </label>
      {status === "error" ? (
        <p className="rounded-md border border-brand-line bg-brand-mist px-4 py-3 text-sm font-semibold text-brand-ink">
          Something went wrong. Please try again or email{" "}
          sean@dalygrowthmedia.com.
        </p>
      ) : null}
      <button className="button" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending..." : "Send enquiry"}
      </button>
    </form>
  );
}
