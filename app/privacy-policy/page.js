import React from 'react'

export default function page() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        
        <h1 className="text-3xl font-bold text-red-600 mb-6">
          Privacy Policy
        </h1>

        <p className="text-gray-700 mb-6">
          At <strong>D Pack</strong>, we value your trust and are committed to
          protecting your privacy. This policy explains how we collect, use, and
          safeguard your information.
        </p>

        <Section title="Information We Collect">
          We may collect your name, phone number, email, and business details
          when you contact us or request our services.
        </Section>

        <Section title="How We Use Your Information">
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide packaging solutions</li>
            <li>Respond to inquiries</li>
            <li>Improve our services</li>
            <li>Maintain long-term relationships</li>
          </ul>
        </Section>

        <Section title="Our Products">
          We manufacture Packaging Air Bags including Air Cushion Bags, Dunnage
          Air Bags, and Air Column Bags designed for maximum protection and
          efficiency.
        </Section>

        <Section title="Data Protection">
          We follow strict security practices to protect your information from
          unauthorized access.
        </Section>

        <Section title="Sharing of Information">
          We do not sell or share your data except when required by law or for
          service delivery.
        </Section>

        <Section title="Cookies">
          Our website may use cookies to improve user experience and analytics.
        </Section>

        <Section title="Your Rights">
          You can request access, correction, or deletion of your data anytime.
        </Section>

        <Section title="Contact Us">
          For any privacy-related queries, please contact D Pack.
        </Section>

      </div>
    </div>
  )
}

function Section({ title, children }) {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold text-red-500 mb-2">
        {title}
      </h2>
      <p className="text-gray-700">{children}</p>
    </div>
  );
}
