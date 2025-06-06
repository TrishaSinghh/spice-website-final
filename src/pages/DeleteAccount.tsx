import React from "react";
import { Navigation } from "@/components/Navigation";
import { Link } from "react-router-dom";

export default function DeleteAccount() {
  return (
    <div className="bg-[#030303] text-white min-h-screen">
      <Navigation />

      <div className="container mx-auto px-4 md:px-12 pt-24 pb-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-orange-400">
          Delete Account & Data
        </h1>

        <div className="space-y-6 text-white/80 text-[15px] leading-relaxed max-w-4xl">
          <p>
            We understand that circumstances change, and you may wish to delete your Spice account along with all associated data.
          </p>

          <h2 className="text-xl font-semibold text-white mt-6 mb-2">
            How to Request Deletion
          </h2>
          <p className="text-white/70 mb-4">
            To request deletion of your account and data, please send an email to our support team at:
          </p>
          <p className="text-white/90 mb-6">
            <a
              href="mailto:Tech@spiceclub.in"
              className="underline text-blue-400 hover:text-blue-300"
            >
              Tech@spiceclub.in
            </a>
          </p>

          <h2 className="text-xl font-semibold text-white mt-6 mb-2">
            What Happens Next?
          </h2>
          <ul className="list-disc ml-6 space-y-1 text-white/70 mb-6">
            <li>Your request will be reviewed by our team within 3–5 business days.</li>
            <li>Once verified, your account will be permanently deleted.</li>
            <li>All personal and usage data associated with your account will be erased from our systems.</li>
            <li>This action is irreversible. Make sure to back up anything important before requesting deletion.</li>
          </ul>

          <h2 className="text-xl font-semibold text-white mt-6 mb-2">
            Need Help?
          </h2>
          <p className="text-white/70 mb-12">
            If you have any questions or concerns regarding your data or the deletion process, don’t hesitate to reach out to us. We’re here to help.
          </p>

          <p className="text-white/40 text-xs mt-10">
            © {new Date().getFullYear()} The Content Co. All rights reserved.
          </p>
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
