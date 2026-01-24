import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing fields" },
        { status: 400 }
      );
    }

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      return NextResponse.json(
        { ok: false, error: "Telegram env not set" },
        { status: 500 }
      );
    }

    const text =
      `🧑‍💻 New portfolio message\n\n` +
      `👤 Name: ${name}\n` +
      `✉️ Email: ${email}\n\n` +
      `💬 Message:\n${message}`;

    const tg = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text,
        }),
      }
    );

    if (!tg.ok) {
      return NextResponse.json(
        { ok: false, error: "Telegram failed" },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Server error" },
      { status: 500 }
    );
  }
}
