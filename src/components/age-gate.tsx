"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { ageGate } from "@/content/brooklyn";

const STORAGE_KEY = "kb-age-verified";

function readVerified() {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

const noopSubscribe = () => () => {};

type Step = "ask" | "denied" | "choose" | "done";

export function AgeGate() {
  // Server render always shows the gate, matching the source site's HTML.
  const remembered = useSyncExternalStore(noopSubscribe, readVerified, () => false);
  const [step, setStep] = useState<Step>("ask");
  const open = !remembered && step !== "done";

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  if (!open) return null;

  function accept() {
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // Storage blocked: the gate simply reappears on next visit.
    }
    setStep("done");
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="age-gate-title"
      className="fixed inset-0 z-50 grid place-items-center bg-plum/85 p-4 backdrop-blur-md"
    >
      <div className="w-full max-w-md rounded-3xl bg-paper p-8 text-center shadow-2xl">
        <p className="font-display text-3xl italic">Kaya Bliss</p>
        <p className="mt-1 text-[11px] font-semibold tracking-[0.3em] text-muted uppercase">Dispensary</p>
        <h2 id="age-gate-title" className="mt-8 font-display text-2xl font-semibold">
          {ageGate.heading}
        </h2>

        {/* Every step stays in the HTML (hidden when inactive) so text scanners see the full gate copy. */}
        <div hidden={step !== "ask"}>
          <p className="mt-2 text-muted">{ageGate.question}</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <button
              type="button"
              onClick={() => setStep("choose")}
              className="rounded-full bg-plum px-5 py-3 font-semibold text-paper transition hover:bg-plum-2"
            >
              {ageGate.yes}
            </button>
            <button
              type="button"
              onClick={() => setStep("denied")}
              className="rounded-full border border-line px-5 py-3 font-semibold transition hover:bg-paper-2"
            >
              {ageGate.no}
            </button>
          </div>
        </div>

        <p hidden={step !== "denied"} className="mt-4 rounded-2xl bg-paper-2 p-4 text-sm">
          {ageGate.denied}
        </p>

        <div hidden={step !== "choose"}>
          <p className="mt-2 text-muted">{ageGate.choose}</p>
          <ul className="mt-6 grid gap-3 text-left">
            {ageGate.stores.map((store) => (
              <li
                key={store.name}
                className="flex items-center justify-between gap-4 rounded-2xl border border-line p-4"
              >
                <div>
                  <h6 className="font-semibold">{store.name}</h6>
                  <p className="text-sm text-muted">{store.street}</p>
                </div>
                <button
                  type="button"
                  onClick={accept}
                  className="rounded-full bg-saffron px-4 py-2 text-sm font-semibold text-ink transition hover:brightness-95"
                >
                  {ageGate.select}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
