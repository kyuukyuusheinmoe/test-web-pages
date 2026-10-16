"use client";

import { useState } from "react";
import { notify } from "@/content/brooklyn";

// Static test fixture: the form never sends anything anywhere.
export function NotifyForm() {
  const [sent, setSent] = useState(false);

  const field =
    "w-full rounded-xl border border-line bg-paper px-4 py-3 text-ink placeholder:text-muted/70 focus:border-plum focus:outline-none";

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
      className="grid gap-3 sm:grid-cols-3"
    >
      <label className="grid gap-1.5 text-sm font-medium">
        {notify.fields.name}
        <input name="name" required autoComplete="name" className={field} />
      </label>
      <label className="grid gap-1.5 text-sm font-medium">
        {notify.fields.email}
        <input name="email" type="email" required autoComplete="email" className={field} />
      </label>
      <label className="grid gap-1.5 text-sm font-medium">
        {notify.fields.phone}
        <input name="phone" type="tel" autoComplete="tel" className={field} />
      </label>
      <div className="flex flex-wrap items-center gap-4 sm:col-span-3">
        <button
          type="submit"
          className="rounded-full bg-plum px-7 py-3 font-semibold text-paper transition hover:bg-plum-2"
        >
          {notify.submit}
        </button>
        {sent && (
          <p role="status" className="text-sm text-muted">
            Test fixture: nothing was submitted or stored.
          </p>
        )}
      </div>
    </form>
  );
}
