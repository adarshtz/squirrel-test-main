import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-squirrel-dark py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">Terms & Conditions</h1>
          
          <div className="space-y-8 text-squirrel-neutral-100">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="mb-4">
                By accessing and using Squirrel's services, you agree to be bound by these Terms and Conditions.
                If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Use of Services</h2>
              <p className="mb-4">
                Our services are provided for legitimate business and personal use. You agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the services in compliance with all applicable laws</li>
                <li>Maintain the security of your account</li>
                <li>Not engage in any unauthorized access or use</li>
                <li>Not interfere with the proper functioning of our services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Intellectual Property</h2>
              <p className="mb-4">
                All content, features, and functionality of our services are owned by Squirrel and are protected by
                international copyright, trademark, and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Limitation of Liability</h2>
              <p className="mb-4">
                Squirrel shall not be liable for any indirect, incidental, special, consequential, or punitive damages
                resulting from your use of or inability to use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Modifications to Terms</h2>
              <p className="mb-4">
                We reserve the right to modify these terms at any time. We will notify users of any material changes
                to these terms. Continued use of our services after such modifications constitutes acceptance of the
                updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Governing Law</h2>
              <p className="mb-4">
                These terms shall be governed by and construed in accordance with the laws of the jurisdiction in
                which Squirrel operates, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Contact Information</h2>
              <p>
                For any questions regarding these Terms & Conditions, please contact us at:
                <br />
                <a href="mailto:legal@squirrel.com" className="text-squirrel-primary-500 hover:text-squirrel-primary-400">
                  legal@squirrel.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions; 