"use client";

import { type ChangeEvent, type FormEvent, useState } from "react";

type ContactFormFields = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type SubmitState = {
  status: "idle" | "submitting" | "success" | "error";
  message: string;
};

const initialFields: ContactFormFields = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const initialSubmitState: SubmitState = {
  status: "idle",
  message: "",
};

export function ContactForm() {
  const [fields, setFields] = useState(initialFields);
  const [submitState, setSubmitState] = useState(initialSubmitState);
  const isSubmitting = submitState.status === "submitting";

  function updateField(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;
    setFields((current) => ({
      ...current,
      [name]: value,
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState({
      status: "submitting",
      message: "",
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fields),
      });
      const result = (await response.json().catch(() => ({}))) as {
        error?: string;
      };

      if (!response.ok) {
        throw new Error(result.error ?? "Unable to send your message right now.");
      }

      setFields(initialFields);
      setSubmitState({
        status: "success",
        message: "Message sent. I will get back to you soon.",
      });
    } catch (error) {
      setSubmitState({
        status: "error",
        message:
          error instanceof Error
            ? error.message
            : "Unable to send your message right now.",
      });
    }
  }

  return (
    <form className="contact-form space-y-5" onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-semibold">
          Name
          <input
            className="field-control mt-2 w-full px-4 py-3 text-base outline-none transition"
            disabled={isSubmitting}
            maxLength={120}
            name="name"
            onChange={updateField}
            required
            type="text"
            value={fields.name}
          />
        </label>
        <label className="block text-sm font-semibold">
          Email
          <input
            className="field-control mt-2 w-full px-4 py-3 text-base outline-none transition"
            disabled={isSubmitting}
            maxLength={180}
            name="email"
            onChange={updateField}
            required
            type="email"
            value={fields.email}
          />
        </label>
      </div>
      <label className="block text-sm font-semibold">
        Subject
        <input
          className="field-control mt-2 w-full px-4 py-3 text-base outline-none transition"
          disabled={isSubmitting}
          maxLength={160}
          name="subject"
          onChange={updateField}
          type="text"
          value={fields.subject}
        />
      </label>
      <label className="block text-sm font-semibold">
        Message
        <textarea
          className="field-control mt-2 min-h-40 w-full resize-y px-4 py-3 text-base leading-7 outline-none transition"
          disabled={isSubmitting}
          maxLength={2000}
          name="message"
          onChange={updateField}
          required
          value={fields.message}
        />
      </label>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          className="submit-button action-button action-button-primary w-fit px-5 py-3 text-sm font-bold transition disabled:cursor-not-allowed"
          disabled={isSubmitting}
          type="submit"
        >
          {isSubmitting ? (
            <>
              <span aria-hidden="true" className="submit-pulse" />
              Sending...
            </>
          ) : (
            "Send message"
          )}
        </button>
        {submitState.message ? (
          <p
            className={`text-sm font-semibold ${
              submitState.status === "success" ? "text-[#245b50]" : "text-[#a04935]"
            }`}
            role={submitState.status === "error" ? "alert" : "status"}
          >
            {submitState.message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
