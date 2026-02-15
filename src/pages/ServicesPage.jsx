
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Server, Globe, Palette, ShoppingCart, Mail, MessageCircle, BarChart3, Zap, Lock, Send, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const ServicesPage = () => {
  const services = [
    {
      icon: Server,
      title: 'WordPress Installation & Hosting Setup',
      description: 'Complete WordPress installation with optimized hosting configuration, SSL certificate, and server security hardening for maximum performance and reliability.'
    },
    {
      icon: Globe,
      title: 'Domain + Cloudflare Setup',
      description: 'Domain registration, DNS configuration, and Cloudflare CDN integration for enhanced security, speed, and global content delivery.'
    },
    {
      icon: Palette,
      title: 'Theme Setup & Customization',
      description: 'Professional theme installation and customization to match your brand identity, including layout design, color schemes, and typography.'
    },
    {
      icon: ShoppingCart,
      title: 'WooCommerce Setup',
      description: 'Complete e-commerce store setup with WooCommerce, payment gateway integration, product management, and shopping cart optimization.'
    },
    {
      icon: Mail,
      title: 'Contact + Lead Forms',
      description: 'Custom contact forms, lead generation forms, and CRM integration to capture and manage customer inquiries effectively.'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp + Messenger Integration',
      description: 'Direct messaging integration with WhatsApp and Facebook Messenger for instant customer support and engagement.'
    },
    {
      icon: BarChart3,
      title: 'GA4 + Tag Manager + Facebook Pixel',
      description: 'Advanced analytics setup with Google Analytics 4, Tag Manager, and Facebook Pixel for comprehensive tracking and marketing insights.'
    },
    {
      icon: Zap,
      title: 'Speed Optimization',
      description: 'Website performance optimization including image compression, caching, lazy loading, and code minification for lightning-fast load times.'
    },
    {
      icon: Lock,
      title: 'Security Hardening + Backup',
      description: 'Comprehensive security measures including firewall setup, malware protection, automated backups, and disaster recovery planning.'
    },
    {
      icon: Send,
      title: 'Professional Email Setup',
      description: 'Custom business email setup with your domain, including email hosting, spam protection, and professional email signatures.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Services - Professional Web Solutions | ANFAWORD</title>
        <meta name="description" content="Comprehensive web development services including WordPress, WooCommerce, security, optimization, and digital marketing solutions." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <Header />

        <section className="py-20 bg-gradient-to-br from-[#1E3A8A]/5 via-transparent to-[#10B981]/5">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Our <span className="bg-gradient-to-r from-[#1E3A8A] to-[#10B981] bg-clip-text text-transparent">Services</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive web solutions designed to elevate your digital presence and drive business growth
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#10B981]/30"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#1E3A8A] to-[#10B981] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#1E3A8A] to-[#10B981] rounded-2xl p-12 text-white text-center"
            >
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss your project and create a custom solution that meets your unique needs
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-white text-[#1E3A8A] hover:bg-gray-100">
                    Get Started <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/pricing">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    View Pricing
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;
