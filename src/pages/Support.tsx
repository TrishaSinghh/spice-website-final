import React from "react";
import { Navigation } from "@/components/Navigation";
import { Link } from "react-router-dom";

export default function Support() {
  return (
    <div className="bg-[#030303] text-white min-h-screen">
      <Navigation />

      <div className="container mx-auto px-4 md:px-12 pt-24 pb-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-orange-400">Contact & Support</h1>

        <div className="space-y-6 text-white/80 text-[15px] leading-relaxed max-w-4xl">
          <div>
            <span className="font-semibold text-white">Phone No:</span>{" "}
            <a
              href="tel:+918530302273"
              className="underline text-blue-400 hover:text-blue-300"
            >
              +91 8530302273
            </a>
          </div>
          <div>
            <span className="font-semibold text-white">Mail:</span>{" "}
            <a
              href="mailto:Marketing@spiceclub.in"
              className="underline text-blue-400 hover:text-blue-300"
            >
              Marketing@spiceclub.in
            </a>
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-10">
          <Link
            to="/"
            className="text-orange-400 hover:underline text-sm border border-orange-400 px-4 py-2 rounded-full transition hover:bg-orange-400 hover:text-black"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
