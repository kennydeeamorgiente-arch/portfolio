import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export const runtime = "nodejs";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactRequestBody = {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
};

function normalizeText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let body: ContactRequestBody;

  try {
    body = (await request.json()) as ContactRequestBody;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = normalizeText(body.name);
  const email = normalizeText(body.email).toLowerCase();
  const subject = normalizeText(body.subject);
  const message = normalizeText(body.message);

  if (name.length < 2 || name.length > 120) {
    return NextResponse.json(
      { error: "Please enter a name between 2 and 120 characters." },
      { status: 400 },
    );
  }

  if (!emailPattern.test(email) || email.length > 180) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  if (subject.length > 160) {
    return NextResponse.json(
      { error: "Please keep the subject under 160 characters." },
      { status: 400 },
    );
  }

  if (message.length < 10 || message.length > 2000) {
    return NextResponse.json(
      { error: "Please enter a message between 10 and 2000 characters." },
      { status: 400 },
    );
  }

  const supabase = createSupabaseServerClient({ requireServiceRole: true });

  if (!supabase) {
    return NextResponse.json(
      { error: "Contact form backend is not configured yet." },
      { status: 503 },
    );
  }

  const { error } = await supabase.from("contact_messages").insert({
    email,
    message,
    name,
    subject: subject || null,
  });

  if (error) {
    return NextResponse.json(
      { error: "Unable to save your message right now." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
