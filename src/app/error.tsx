"use client";

import React from "react";
import { useRouter } from "next/navigation";

type Props = {
  error?: Error | null;
  reset?: (() => void) | null;
};

export default function ErrorPage({ error, reset }: Props) {
  const router = useRouter();

  const handleRetry = () => {
    // If Next.js provides a reset function (error boundary), use it.
    // Otherwise fallback to router.refresh() to re-render the current route.
    if (typeof reset === "function") {
      reset();
      return;
    }

    try {
      router.refresh();
    } catch (e) {
      // fallback: navigate to the same path to force a re-render
      console.error(e);
      router.replace(window.location.pathname);
    }
  };

  const handleHome = () => router.push("/");

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 via-[#05051a] to-slate-900 px-4">
      <div className="w-full max-w-4xl bg-white/5 backdrop-blur-md border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Illustration */}
          <div className="flex-shrink-0">
            <div className="w-56 h-56 md:w-72 md:h-72 bg-gradient-to-tr from-blue-700/30 to-violet-600/20 rounded-2xl flex items-center justify-center">
              <svg
                width="160"
                height="160"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <rect
                  x="1"
                  y="3"
                  width="22"
                  height="14"
                  rx="2"
                  stroke="white"
                  strokeWidth="1.2"
                  strokeOpacity="0.9"
                />
                <path
                  d="M3 7h18"
                  stroke="white"
                  strokeWidth="1.2"
                  strokeOpacity="0.6"
                  strokeLinecap="round"
                />
                <circle
                  cx="12"
                  cy="11"
                  r="3"
                  stroke="white"
                  strokeWidth="1.4"
                  strokeOpacity="0.95"
                />
                <path
                  d="M12 9v2l1 1"
                  stroke="white"
                  strokeWidth="1.4"
                  strokeOpacity="0.95"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Something went wrong
            </h1>
            <p className="mt-3 text-sm md:text-base text-gray-300 max-w-xl">
              Oops — we ran into an unexpected error while loading this page.
              You can try again, go back to the home page, or report the
              problem. If the issue persists, contact support.
            </p>

            {error?.message ? (
              <div className="mt-4 p-3 bg-white/3 rounded-lg text-xs text-amber-100">
                <strong className="block text-amber-200">Error</strong>
                <span className="block truncate">{error.message}</span>
              </div>
            ) : null}

            <div className="mt-6 flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start">
              <button
                onClick={handleRetry}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium shadow hover:scale-[1.01] active:translate-y-0.5 transition-all"
                aria-label="Retry"
              >
                Retry
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M21 12a9 9 0 10-3.1 6.6L21 12z"
                    stroke="white"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <button
                onClick={handleHome}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 text-white/90 bg-white/3 hover:bg-white/5 transition"
                aria-label="Go to homepage"
              >
                Home
              </button>

              <a
                href={`mailto:techorbitit3@gmail.com?subject=Error Report: ${encodeURIComponent(
                  error?.message ?? "Unknown error"
                )}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm text-gray-200 underline-offset-2 hover:underline"
                aria-label="Report error via email"
              >
                Report
              </a>
            </div>

            <div className="mt-6 text-xs text-gray-500">
              <span>
                Tip: Clear cache or try in a private window if the problem
                persists.
              </span>
            </div>
          </div>
        </div>

        {/* Footer small */}
        <div className="mt-8 border-t border-white/5 pt-4 text-center text-xs text-gray-400">
          <span>TechOrbit IT — {new Date().getFullYear()}</span>
        </div>
      </div>
    </main>
  );
}
