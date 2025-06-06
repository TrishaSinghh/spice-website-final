import React from "react";
import { Navigation } from "@/components/Navigation";
import { Link } from "react-router-dom";

export default function Terms() {
  return (
    <div className="bg-[#030303] text-white min-h-screen">
      {/* Navigation Bar */}
      <Navigation />

      {/* Content */}
      <div className="container mx-auto px-4 md:px-12 pt-24 pb-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-orange-400">Terms and Conditions</h1>
        <p className="text-white/60 text-sm mb-4 italic">
          Last updated on 10 July 2024
        </p>

        <div className="space-y-5 text-white/80 text-[15px] leading-relaxed max-w-4xl">
          <p>
            Welcome to the Spice club! At Spice, we strive to reward high trust
            and creditworthy individuals of India, inspiring others to be like them.
          </p>

          <h2 className="text-xl font-semibold text-white mt-6 mb-2">Eligibility</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>You are capable of entering into a legally binding agreement.</li>
            <li>You are not barred or otherwise legally prohibited from accessing or using the Spice App and Services.</li>
            <li>You agree to provide your credit score and authorize its use to determine your eligibility for Spice Services.</li>
            <li>You confirm you were of the required age at the time of onboarding based on the date.</li>
            <li>If others use your account, you remain fully responsible for their activity and compliance.</li>
          </ul>

          <p className="mt-4">
            Please read the terms carefully before registering or using the Spice
            Services offered through the website, app, or any Spice Group platforms.
          </p>

          <h2 className="text-xl font-semibold text-white mt-6 mb-2">Definitions</h2>
          <p>
            “Spice”, “Dreamplug”, “We”, “Us”, “Our” – refers to Spice and its Group Entities.<br />
            “You”, “User” – any prospective or registered user of Spice.<br />
            “Spice App” – mobile applications hosted by Spice.<br />
            “Spice Platform” – includes website, app, URLs, and any platform used to provide services.<br />
            “Spice Services” – includes all services by Spice or its partners.<br />
            “Commercial Partner” – any individual/entity with contractual relationship with Spice.
          </p>

          <h2 className="text-xl font-semibold text-white mt-6 mb-2">Your Use of Spice</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>Only one account is allowed per person unless permitted.</li>
            <li>Use of the app must comply with all applicable laws.</li>
            <li>Spice App is for personal use only.</li>
            <li>You're responsible for all activity under your account.</li>
            <li>Keep your credentials confidential and notify Spice of any breach.</li>
            <li>No reverse engineering or misuse of the platform is allowed.</li>
            <li>Use of Spice App indicates consent for auto-updates and communication.</li>
            <li>Not all services are available in every geographic region.</li>
          </ul>

          <p className="mt-4">
            Insurance purchases imply consent to share information with insurance partners
            and regulators solely for servicing, underwriting, and claims.
          </p>

          <h2 className="text-xl font-semibold text-white mt-6 mb-2">Supplemental Terms</h2>
          <p>
            By using any features like Spice Garage, Max, Cash, Pay, etc., you accept
            their specific supplemental terms. Spice may route transactions via its
            Payment Aggregator.
          </p>

          <h2 className="text-xl font-semibold text-white mt-6 mb-2">Violation of Terms</h2>
          <p>
            If we believe you’ve violated these Terms, our Privacy Policy, or any other
            agreement, appropriate action may be taken including suspension.
          </p>

          <p className="text-white/40 text-xs mt-10">© 2024 The Content Co. All rights reserved.</p>
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
