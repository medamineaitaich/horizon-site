
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TermsPage = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Use - ANFAWORD</title>
        <meta name="description" content="Read ANFAWORD's terms of use to understand the rules and guidelines for using our website and services." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <Header />

        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl font-bold text-gray-900 mb-8">
                Terms of <span className="bg-gradient-to-r from-[#1E3A8A] to-[#10B981] bg-clip-text text-transparent">Use</span>
              </h1>

              <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6 text-gray-700">
                <p className="text-sm text-gray-500">Last updated: February 14, 2026</p>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
                  <p>
                    By accessing and using ANFAWORD's website and services, you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Use of Services</h2>
                  <p>You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:</p>
                  <ul className="list-disc list-inside space-y-2 mt-3">
                    <li>Violate any applicable laws or regulations</li>
                    <li>Infringe upon the rights of others</li>
                    <li>Transmit any harmful or malicious code</li>
                    <li>Attempt to gain unauthorized access to our systems</li>
                    <li>Use our services for any fraudulent or illegal purpose</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
                  <p>
                    All content on our website, including text, graphics, logos, images, and software, is the property of ANFAWORD or its content suppliers and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">User Accounts</h2>
                  <p>
                    When you create an account with us, you are responsible for maintaining the confidentiality of your account information and password. You agree to accept responsibility for all activities that occur under your account.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Services and Pricing</h2>
                  <p>
                    We reserve the right to modify our services and pricing at any time. All prices are subject to change without notice. Final pricing for custom projects will be provided in a separate agreement.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Terms</h2>
                  <p>
                    Payment is required according to the terms specified in your service agreement. We accept various payment methods as specified during the checkout process. Late payments may result in suspension of services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
                  <p>
                    To the fullest extent permitted by law, ANFAWORD shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Disclaimer</h2>
                  <p>
                    Our services are provided "as is" without warranties of any kind, either express or implied. We do not guarantee that our services will be uninterrupted, secure, or error-free.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
                  <p>
                    We reserve the right to terminate or suspend your access to our services at any time, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
                  <p>
                    These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
                  <p>
                    We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the new Terms on this page with an updated "Last updated" date.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                  <p>
                    If you have any questions about these Terms, please contact us at:
                  </p>
                  <ul className="list-none space-y-2 mt-3">
                    <li>Email: contact@anfaword.site</li>
                    <li>Phone: +1 (202) 773-7432</li>
                    <li>Address: 1209 Mountain Road Pl NE, STE R, Albuquerque, NM 87110, USA</li>
                  </ul>
                </div>

                <div className="border-t border-gray-200 pt-6 mt-8">
                  <p className="text-sm text-gray-600 italic">
                    These terms of use are provided by ANFAWORD, powered by MEDAIT LLC.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default TermsPage;
