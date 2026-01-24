import { NextResponse } from "next/server";
import fs from "fs";

function readSecret(name: string) {
  try {
    return fs.readFileSync(`/etc/secrets/${name}`, "utf8").trim();
  } catch {
    return "";
  }
}

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing fields" },
        { status: 400 }
      );
    }

    // ✅ SECRET FILES’dan o‘qiymiz
    const token =
      process.env.TELEGRAM_BOT_TOKEN || readSecret("TELEGRAM_BOT_TOKEN");
    const chatId =
      process.env.TELEGRAM_CHAT_ID || readSecret("TELEGRAM_CHAT_ID");

    if (!token || !chatId) {
      return NextResponse.json(
        { ok: false, error: "Telegram secret not set" },
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
        { ok: false, error: "Telegram send failed" },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json(
      { ok: false, error: "Server error" },
      { status: 500 }
    );
  }
}
