
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const PricingPage = () => {
  const packages = [
    {
      name: 'Starter',
      price: '$299',
      description: 'Perfect for small businesses and startups',
      features: [
        'WordPress Installation & Setup',
        'Domain Registration & Setup',
        'Basic Theme Installation',
        'SSL Certificate',
        '1 Contact Form',
        'Mobile Responsive Design',
        'Basic SEO Setup',
        '30 Days Support'
      ],
      popular: false,
      color: 'from-gray-600 to-gray-800'
    },
    {
      name: 'Business',
      price: '$699',
      description: 'Most popular for growing businesses',
      features: [
        'Everything in Starter Package',
        'WooCommerce E-commerce Setup',
        'Multiple Contact Forms',
        'Google Analytics 4 Setup',
        'WhatsApp Integration',
        'Facebook Pixel Integration',
        'Premium Theme Customization',
        'Speed Optimization',
        '60 Days Priority Support'
      ],
      popular: true,
      color: 'from-[#1E3A8A] to-[#10B981]'
    },
    {
      name: 'Pro Growth',
      price: '$1,299',
      description: 'Complete solution for serious businesses',
      features: [
        'Everything in Business Package',
        'Advanced Speed Optimization',
        'Security Hardening & Firewall',
        'Professional Email Setup',
        'Automated Backup System',
        'Tag Manager Setup',
        'Advanced Analytics Dashboard',
        'Content Migration',
        'Training Session',
        '90 Days Premium Support'
      ],
      popular: false,
      color: 'from-purple-600 to-pink-600'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Affordable Web Solutions | ANFAWORD</title>
        <meta name="description" content="Transparent pricing for professional web development services. Choose from Starter, Business, or Pro Growth packages to fit your needs." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <Header />

        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Simple, <span className="bg-gradient-to-r from-[#1E3A8A] to-[#10B981] bg-clip-text text-transparent">Transparent Pricing</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the perfect package for your business needs. All packages include quality work and dedicated support.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {packages.map((pkg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${
                    pkg.popular ? 'border-[#10B981] scale-105' : 'border-gray-100'
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#1E3A8A] to-[#10B981] text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      Most Popular
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                    <p className="text-gray-600 mb-4">{pkg.description}</p>
                    <div className={`text-5xl font-bold bg-gradient-to-r ${pkg.color} bg-clip-text text-transparent mb-2`}>
                      {pkg.price}
                    </div>
                    <p className="text-sm text-gray-500">one-time payment</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#10B981] mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to="/contact">
                    <Button
                      className={`w-full ${
                        pkg.popular
                          ? 'bg-gradient-to-r from-[#1E3A8A] to-[#10B981] hover:opacity-90'
                          : 'bg-gray-900 hover:bg-gray-800'
                      } text-white`}
                      size="lg"
                    >
                      Get Started <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200"
            >
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Important Note</h3>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Final pricing may vary depending on your specific project scope, custom requirements, and additional features. 
                  <span className="font-semibold text-[#1E3A8A]"> Contact us for a personalized quote</span> tailored to your exact needs.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Need a Custom Solution?</h3>
              <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                Have unique requirements? We offer custom packages designed specifically for your business goals.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-[#10B981] hover:bg-[#059669] text-white">
                  Request Custom Quote
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default PricingPage;
