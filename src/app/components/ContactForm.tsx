"use client";

import { useState, type FormEvent } from "react";

// Messages are delivered by Web3Forms (https://web3forms.com). The access key
// is public by design — it only allows sending to the inbox it was created for.
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

const field =
  "w-full rounded-lg border border-violet-500/30 bg-[#1a2134] px-4 py-3 text-base text-white placeholder:text-zinc-400 transition outline-none focus:border-pink-400/70 focus:ring-2 focus:ring-pink-400/20 aria-[invalid=true]:border-red-400/70 sm:text-sm";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type Values = Record<"firstName" | "lastName" | "email" | "subject" | "message", string>;
type Errors = Partial<Record<keyof Values, string>>;
type Status =
  | { state: "idle" | "sending" }
  | { state: "success" }
  | { state: "error"; message: string };

function validate(v: Values): Errors {
  const errors: Errors = {};
  if (!v.firstName) errors.firstName = "Please enter your first name.";
  else if (v.firstName.length > 50) errors.firstName = "First name is too long.";
  if (v.lastName.length > 50) errors.lastName = "Last name is too long.";
  if (!v.email) errors.email = "Please enter your email address.";
  else if (!EMAIL_PATTERN.test(v.email)) errors.email = "Please enter a valid email address.";
  if (v.subject.length < 3) errors.subject = "Subject must be at least 3 characters.";
  else if (v.subject.length > 120) errors.subject = "Subject must be under 120 characters.";
  if (v.message.length < 10) errors.message = "Message must be at least 10 characters.";
  else if (v.message.length > 2000) errors.message = "Message must be under 2000 characters.";
  return errors;
}

export default function ContactForm({ email }: { email: string }) {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>({ state: "idle" });

  async function send(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    // Honeypot: real visitors never see or fill this field
    if (data.get("botcheck")) return;

    const values = Object.fromEntries(
      (["firstName", "lastName", "email", "subject", "message"] as const).map((key) => [
        key,
        String(data.get(key) ?? "").trim(),
      ]),
    ) as Values;
    const found = validate(values);
    setErrors(found);
    const firstInvalid = Object.keys(found)[0];
    if (firstInvalid) {
      form.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      setStatus({ state: "idle" });
      return;
    }

    if (!ACCESS_KEY) {
      setStatus({
        state: "error",
        message: `The contact form isn't set up yet. Please email me directly at ${email}.`,
      });
      return;
    }

    setStatus({ state: "sending" });
    const name = `${values.firstName} ${values.lastName}`.trim();
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `Portfolio: ${values.subject}`,
          from_name: name,
          name,
          email: values.email,
          replyto: values.email,
          message: values.message,
        }),
      });
      const result = await res.json().catch(() => null);
      if (!res.ok || !result?.success) {
        throw new Error(result?.message || `Request failed (${res.status})`);
      }
      form.reset();
      setStatus({ state: "success" });
    } catch {
      setStatus({
        state: "error",
        message: `Sorry, your message couldn't be sent. Please try again, or email me directly at ${email}.`,
      });
    }
  }

  function clearError(name: keyof Values) {
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  function input(name: keyof Values, label: string, props: React.InputHTMLAttributes<HTMLInputElement> = {}) {
    return (
      <div>
        <label htmlFor={`contact-${name}`} className="sr-only">
          {label}
        </label>
        <input
          id={`contact-${name}`}
          name={name}
          placeholder={label}
          aria-invalid={!!errors[name]}
          aria-describedby={errors[name] ? `contact-${name}-error` : undefined}
          onChange={() => clearError(name)}
          className={field}
          {...props}
        />
        <FieldError id={`contact-${name}-error`} message={errors[name]} />
      </div>
    );
  }

  const sending = status.state === "sending";

  return (
    <form onSubmit={send} noValidate className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        {input("firstName", "First Name", { autoComplete: "given-name", required: true, maxLength: 50 })}
        {input("lastName", "Last Name (optional)", { autoComplete: "family-name", maxLength: 50 })}
      </div>
      {input("email", "Email Address", { type: "email", inputMode: "email", autoComplete: "email", required: true })}
      {input("subject", "Subject", { required: true, maxLength: 120 })}
      <div>
        <label htmlFor="contact-message" className="sr-only">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          maxLength={2000}
          placeholder="Your Message"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          onChange={() => clearError("message")}
          className={`${field} resize-y`}
        />
        <FieldError id="contact-message-error" message={errors.message} />
      </div>
      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <button
        type="submit"
        disabled={sending}
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-violet-600 via-pink-500 to-blue-500 px-6 py-3 font-medium text-white transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-pink-500/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-400 disabled:cursor-wait disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:shadow-none"
      >
        {sending ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 animate-spin" aria-hidden>
            <path d="M21 12a9 9 0 1 1-6.22-8.56" strokeLinecap="round" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
            <path d="m22 2-7 20-4-9-9-4Z" />
            <path d="M22 2 11 13" />
          </svg>
        )}
        {sending ? "Sending…" : "Send Message"}
      </button>
      <div aria-live="polite" role="status">
        {status.state === "success" && (
          <p className="rounded-lg border border-emerald-400/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
            Thanks! Your message has been sent — I&apos;ll get back to you soon.
          </p>
        )}
        {status.state === "error" && (
          <p className="rounded-lg border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
            {status.message}
          </p>
        )}
      </div>
    </form>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1.5 text-xs text-red-300">
      {message}
    </p>
  );
}
