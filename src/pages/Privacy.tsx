import React from "react";
import { useNavigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";

const Privacy: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#030303] text-white min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 md:px-12 pt-24 pb-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-orange-400 text-left">
          Privacy Policy
        </h1>
        <div className="space-y-6 text-white/80 text-[15px] leading-relaxed max-w-4xl">
          <p>
            <strong>Welcome to Spice!</strong> Your privacy is of utmost importance to us. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our website, mobile application, and services. By using Spice, you agree to the terms outlined in this policy.
          </p>

          <h2 className="text-xl font-semibold text-white mt-6 mb-2">Information We Collect</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>
              <strong>Personal Information:</strong> When you register, we may collect personal details such as your name, email address, phone number, and payment information.
            </li>
            <li>
              <strong>Usage Data:</strong> We collect information about your interactions with the app, such as transaction details, preferences, and device information.
            </li>
            <li>
              <strong>Location Data:</strong> With your consent, we may collect and process information about your location to provide location-based services.
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-white mt-6 mb-2">How We Use Your Information</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>
              <strong>To Provide Services:</strong> We use your personal information to operate and maintain our services, including expense tracking and UPI transactions.
            </li>
            <li>
              <strong>To Improve Our Services:</strong> Usage data helps us understand how you interact with Spice, allowing us to enhance and personalize your experience.
            </li>
            <li>
              <strong>To Communicate:</strong> We may send you updates, security alerts, and other necessary communications related to your use of Spice.
            </li>
            <li>
              <strong>Marketing and Promotions:</strong> With your consent, we may use your information to send you promotional offers and updates about new features.
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-white mt-6 mb-2">Data Sharing and Disclosure</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>
              <strong>Third-Party Services:</strong> We may share your information with third-party service providers to facilitate our services, such as payment processors and analytics tools.
            </li>
            <li>
              <strong>Legal Requirements:</strong> We may disclose your information if required by law or to protect our rights, users, or the public.
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-white mt-6 mb-2">Security</h2>
          <p>
            We use advanced security measures to protect your personal information from unauthorized access, alteration, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
          </p>

          <h2 className="text-xl font-semibold text-white mt-6 mb-2">Your Rights</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>
              <strong>Access and Update:</strong> You have the right to access and update your personal information at any time through your account settings.
            </li>
            <li>
              <strong>Delete Your Information:</strong> You can request the deletion of your personal information by contacting our support team.
            </li>
            <li>
              <strong>Opt-Out:</strong> You may opt-out of receiving promotional communications by following the unsubscribe instructions in those emails.
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-white mt-6 mb-2">Children’s Privacy</h2>
          <p>
            Spice is not intended for use by individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have inadvertently received personal information from a user under the age of 13, we will delete such information from our records.
          </p>

          <h2 className="text-xl font-semibold text-white mt-6 mb-2">Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on our website and within the app. Your continued use of Spice after any modifications indicates your acceptance of the new terms.
          </p>

          <h2 className="text-xl font-semibold text-white mt-6 mb-2">Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>
              Email:{" "}
              <a
                href="mailto:Marketing@spiceclub.in"
                className="text-blue-400 underline hover:text-blue-300"
              >
                Marketing@spiceclub.in
              </a>
            </li>
            <li>
              Address: Spice, Indiranagar Bangalore KA India
            </li>
          </ul>

          <p className="text-white/40 text-xs mt-10">
            © {new Date().getFullYear()} The Content Co. All rights reserved.
          </p>
        </div>

        {/* Back to Home */}
        <div className="mt-10">
          <button
            className="text-orange-400 hover:underline text-sm border border-orange-400 px-4 py-2 rounded-full transition hover:bg-orange-400 hover:text-black"
            onClick={() => navigate("/")}
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
