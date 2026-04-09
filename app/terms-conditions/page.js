import React from 'react'

export default function page() {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-6">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">

                <h1 className="text-3xl font-bold text-red-600 mb-6">
                    Terms & Conditions
                </h1>

                <p className="text-gray-700 mb-6">
                    Welcome to <strong>D Pack</strong>. By using our services, you agree
                    to the following terms and conditions.
                </p>

                <Section title="About Us">
                    D Pack is a manufacturer, supplier, and wholesaler of Packaging Air
                    Bags including Air Cushion Bags, Dunnage Air Bags, and Air Column Bags.
                </Section>

                <Section title="Use of Services">
                    Our products must be used for lawful packaging, storage, and
                    transportation purposes only.
                </Section>

                <Section title="Product Quality">
                    We follow strict quality standards to ensure durability and
                    reliability.
                </Section>

                <Section title="Customer Responsibilities">
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Provide accurate order details</li>
                        <li>Use products correctly</li>
                        <li>Ensure proper storage</li>
                    </ul>
                </Section>

                <Section title="Pricing & Payments">
                    Prices may change without notice. Orders are processed after payment
                    confirmation.
                </Section>

                <Section title="Shipping & Delivery">
                    Delivery timelines may vary due to logistics or external factors.
                </Section>

                <Section title="Limitation of Liability">
                    D Pack is not responsible for indirect or consequential damages.
                </Section>

                <Section title="Intellectual Property">
                    All branding and product content belongs to D Pack.
                </Section>

                <Section title="Termination">
                    We reserve the right to terminate services for violations.
                </Section>

                <Section title="Changes to Terms">
                    Terms may be updated anytime. Continued use means acceptance.
                </Section>

                <Section title="Contact">
                    For any questions, please contact D Pack.
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
