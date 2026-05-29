"use client";

import { type ChangeEvent, type FormEvent, useState } from "react";
import styles from "./contact-form.module.css";

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
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.twoColumn}>
        <label className={styles.label}>
          Name
          <input
            className={styles.field}
            disabled={isSubmitting}
            maxLength={120}
            name="name"
            onChange={updateField}
            required
            type="text"
            value={fields.name}
          />
        </label>
        <label className={styles.label}>
          Email
          <input
            className={styles.field}
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
      <label className={styles.label}>
        Subject
        <input
          className={styles.field}
          disabled={isSubmitting}
          maxLength={160}
          name="subject"
          onChange={updateField}
          type="text"
          value={fields.subject}
        />
      </label>
      <label className={styles.label}>
        Message
        <textarea
          className={`${styles.field} ${styles.messageField}`}
          disabled={isSubmitting}
          maxLength={2000}
          name="message"
          onChange={updateField}
          required
          value={fields.message}
        />
      </label>
      <div className={styles.actions}>
        <button
          className={styles.submitButton}
          disabled={isSubmitting}
          type="submit"
        >
          {isSubmitting ? (
            <>
              <span aria-hidden="true" className={styles.submitPulse} />
              Sending...
            </>
          ) : (
            "Send message"
          )}
        </button>
        {submitState.message ? (
          <p
            className={`${styles.status} ${
              submitState.status === "success" ? styles.success : styles.error
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
