
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPage = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - ANFAWORD</title>
        <meta name="description" content="Read ANFAWORD's privacy policy to understand how we collect, use, and protect your personal information." />
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
                Privacy <span className="bg-gradient-to-r from-[#1E3A8A] to-[#10B981] bg-clip-text text-transparent">Policy</span>
              </h1>

              <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6 text-gray-700">
                <p className="text-sm text-gray-500">Last updated: February 14, 2026</p>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
                  <p>
                    ANFAWORD ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
                  <p>We may collect information about you in a variety of ways, including:</p>
                  <ul className="list-disc list-inside space-y-2 mt-3">
                    <li>Personal Data: Name, email address, phone number, and other contact information you provide</li>
                    <li>Usage Data: Information about how you use our website and services</li>
                    <li>Technical Data: IP address, browser type, device information, and analytics data</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc list-inside space-y-2 mt-3">
                    <li>Provide, operate, and maintain our services</li>
                    <li>Improve and personalize your experience</li>
                    <li>Communicate with you about our services</li>
                    <li>Send you marketing and promotional communications (with your consent)</li>
                    <li>Respond to your inquiries and provide customer support</li>
                    <li>Analyze usage patterns and improve our website</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
                  <p>
                    We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
                  <p>
                    We may use third-party service providers to help us operate our business and website. These third parties have access to your personal information only to perform specific tasks on our behalf and are obligated to protect your information.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
                  <p>You have the right to:</p>
                  <ul className="list-disc list-inside space-y-2 mt-3">
                    <li>Access the personal information we hold about you</li>
                    <li>Request correction of inaccurate information</li>
                    <li>Request deletion of your personal information</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Object to processing of your personal information</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies</h2>
                  <p>
                    We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
                  <p>
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                  <p>
                    If you have any questions about this Privacy Policy, please contact us at:
                  </p>
                  <ul className="list-none space-y-2 mt-3">
                    <li>Email: contact@anfaword.site</li>
                    <li>Phone: +1 (202) 773-7432</li>
                    <li>Address: 1209 Mountain Road Pl NE, STE R, Albuquerque, NM 87110, USA</li>
                  </ul>
                </div>

                <div className="border-t border-gray-200 pt-6 mt-8">
                  <p className="text-sm text-gray-600 italic">
                    This privacy policy is provided by ANFAWORD, powered by MEDAIT LLC.
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

export default PrivacyPage;
