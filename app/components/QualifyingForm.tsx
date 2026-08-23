"use client";

import { FormEvent, useState } from "react";

const GHL_WEBHOOK_ENDPOINT =
  "https://services.leadconnectorhq.com/hooks/8NNBu4pnBuBFYhFyfENT/webhook-trigger/5b300197-b13d-4046-b9ec-9c77ab495767";

export function QualifyingForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      form_name: "qualifying_form",
      page_url: window.location.href,
      name: formData.get("name"),
      business_name: formData.get("business_name"),
      industry: formData.get("industry"),
      phone: formData.get("phone"),
      avg_job_value: formData.get("avg_job_value"),
      annual_revenue: formData.get("annual_revenue"),
      running_ads: formData.get("running_ads"),
      biggest_challenge: formData.get("biggest_challenge")
    };

    try {
      const response = await fetch(GHL_WEBHOOK_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
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
      <div className="contact-form reveal-fade reveal-fade-visible" role="status" aria-live="polite">
        <p className="rounded-md border border-brand-line bg-brand-mist px-4 py-3 text-sm font-semibold text-brand-ink">
          Thanks &mdash; we&apos;ll review and be in touch to schedule your call
          shortly.
        </p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label>
          Name
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label>
          Business name
          <input name="business_name" type="text" required />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label>
          Industry
          <select name="industry" defaultValue="" required>
            <option value="" disabled>
              Select one
            </option>
            <option value="Home Improvement/Trades">Home Improvement / Trades</option>
            <option value="Financial Services">Financial Services</option>
            <option value="Car Dealership">Car Dealership</option>
            <option value="Real Estate">Real Estate</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <label>
          Phone number
          <input name="phone" type="tel" autoComplete="tel" required />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label>
          Average job/sale value
          <input
            name="avg_job_value"
            type="text"
            placeholder="e.g. €3,000"
            required
          />
        </label>
        <label>
          Rough annual revenue
          <select name="annual_revenue" defaultValue="" required>
            <option value="" disabled>
              Select one
            </option>
            <option value="Under €100k">Under €100k</option>
            <option value="€100k-250k">€100k&ndash;250k</option>
            <option value="€250k-500k">€250k&ndash;500k</option>
            <option value="€500k-1m">€500k&ndash;1m</option>
            <option value="€1m+">€1m+</option>
          </select>
        </label>
      </div>

      <label>
        Currently running paid ads?
        <select name="running_ads" defaultValue="" required>
          <option value="" disabled>
            Select one
          </option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
          <option value="Used to, stopped">Used to, stopped</option>
        </select>
      </label>

      <label>
        Biggest challenge getting new customers right now
        <textarea name="biggest_challenge" rows={3} required />
      </label>

      {status === "error" ? (
        <p className="rounded-md border border-brand-line bg-brand-mist px-4 py-3 text-sm font-semibold text-brand-ink">
          Something went wrong. Please try again or email{" "}
          sean@dalygrowthmedia.com.
        </p>
      ) : null}

      <button className="button" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending..." : "Book a Free Discovery Call"}
      </button>
    </form>
  );
}
