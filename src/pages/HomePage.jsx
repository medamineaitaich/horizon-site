
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Zap, Smartphone, TrendingUp, CheckCircle, ArrowRight, Server, Globe, Palette, ShoppingCart, Mail, MessageCircle, BarChart3, Lock, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useLocalStorage } from '@/hooks/useLocalStorage';

const HomePage = () => {
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [submissions, setSubmissions] = useLocalStorage('contactSubmissions', []);
  const { toast } = useToast();

  const handleContactSubmit = (e) => {
    e.preventDefault();
    
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      toast({
        title: 'Error',
        description: 'Please fill in all fields',
        variant: 'destructive'
      });
      return;
    }

    setSubmissions([...submissions, { ...contactForm, submittedAt: new Date().toISOString() }]);
    setContactForm({ name: '', email: '', message: '' });
    
    toast({
      title: 'Success!',
      description: 'Thank you for your message. We\'ll get back to you soon!',
    });
  };

  const services = [
    { icon: Server, title: 'WordPress Installation', description: 'Professional WordPress setup with hosting configuration' },
    { icon: Globe, title: 'Domain Setup', description: 'Domain registration and DNS configuration' },
    { icon: Palette, title: 'Theme Setup', description: 'Custom theme installation and customization' },
    { icon: ShoppingCart, title: 'WooCommerce', description: 'Complete e-commerce store setup' },
    { icon: Mail, title: 'Contact Forms', description: 'Lead generation and contact form integration' },
    { icon: MessageCircle, title: 'WhatsApp Integration', description: 'Direct messaging and customer support setup' }
  ];

  const trustBadges = [
    { icon: Shield, title: 'Secure', description: 'SSL & Security' },
    { icon: Zap, title: 'Fast', description: 'Optimized Speed' },
    { icon: Smartphone, title: 'Mobile-Friendly', description: 'Responsive Design' },
    { icon: TrendingUp, title: 'Conversion-Ready', description: 'Built to Convert' }
  ];

  const processSteps = [
    { step: '01', title: 'Consultation', description: 'We discuss your needs and goals' },
    { step: '02', title: 'Planning', description: 'Create a detailed project roadmap' },
    { step: '03', title: 'Development', description: 'Build your website with precision' },
    { step: '04', title: 'Launch', description: 'Deploy and monitor your success' }
  ];

  const pricingPackages = [
    {
      name: 'Starter',
      price: '$299',
      features: ['WordPress Installation', 'Domain Setup', 'Basic Theme Setup', '1 Contact Form', 'Mobile Responsive'],
      popular: false
    },
    {
      name: 'Business',
      price: '$699',
      features: ['Everything in Starter', 'WooCommerce Setup', 'Contact Forms', 'GA4 Analytics', 'WhatsApp Integration', 'Facebook Pixel'],
      popular: true
    },
    {
      name: 'Pro Growth',
      price: '$1,299',
      features: ['Everything in Business', 'Speed Optimization', 'Security Hardening', 'Professional Email', 'Backup System', 'Priority Support'],
      popular: false
    }
  ];

  const testimonials = [
    { name: 'Sarah Johnson', role: 'E-commerce Owner', avatar: 'SJ', text: 'ANFAWORD transformed our online presence. Sales increased by 150% in just 3 months!' },
    { name: 'Michael Chen', role: 'Restaurant Owner', avatar: 'MC', text: 'The team delivered exactly what we needed. Professional, fast, and excellent support.' },
    { name: 'Emily Rodriguez', role: 'Consultant', avatar: 'ER', text: 'Best investment for my business. The website looks amazing and works flawlessly.' }
  ];

  return (
    <>
      <Helmet>
        <title>ANFAWORD - Transform Your Digital Presence | Professional Web Solutions</title>
        <meta name="description" content="Professional WordPress development, domain setup, e-commerce solutions, and digital marketing services. Transform your business with ANFAWORD." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <Header />

        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A]/5 via-transparent to-[#10B981]/5" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Transform Your <span className="bg-gradient-to-r from-[#1E3A8A] to-[#10B981] bg-clip-text text-transparent">Digital Presence</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Professional web solutions that drive results. From WordPress to e-commerce, we build websites that convert.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact">
                    <Button size="lg" className="bg-[#1E3A8A] hover:bg-[#1e3a8ae6] text-white">
                      Get Started <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <Link to="/services">
                    <Button size="lg" variant="outline" className="border-[#10B981] text-[#10B981] hover:bg-[#10B981] hover:text-white">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1639091337726-e8482a87ed24"
                  alt="Professional web development workspace with modern laptop and coding environment"
                  className="rounded-2xl shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#1E3A8A] to-[#10B981] rounded-full flex items-center justify-center mx-auto mb-4">
                    <badge.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{badge.title}</h3>
                  <p className="text-sm text-gray-600">{badge.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive web solutions tailored to your business needs
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1E3A8A] to-[#10B981] rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Link to="/services">
                <Button size="lg" className="bg-[#10B981] hover:bg-[#059669] text-white">
                  View All Services <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
              <p className="text-xl text-gray-600">Simple, transparent, and effective</p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-5xl font-bold text-[#10B981] mb-4">{step.step}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-[#1E3A8A]/5 to-[#10B981]/5">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
              <p className="text-xl text-gray-600">Choose the package that fits your needs</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {pricingPackages.map((pkg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                    pkg.popular ? 'border-[#10B981] relative' : 'border-gray-100'
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#10B981] text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-[#1E3A8A] mb-6">{pkg.price}</div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#10B981] mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/pricing">
                    <Button className={`w-full ${pkg.popular ? 'bg-[#10B981] hover:bg-[#059669]' : 'bg-[#1E3A8A] hover:bg-[#1e3a8ae6]'} text-white`}>
                      Get Started
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </div>

            <p className="text-center text-gray-600 italic">
              * Final pricing depends on project scope and specific requirements
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
              <p className="text-xl text-gray-600">Trusted by businesses worldwide</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-lg"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#1E3A8A] to-[#10B981] rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.text}"</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-[#1E3A8A] to-[#10B981] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-8"
              >
                <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
                <p className="text-xl text-white/90">
                  Let's discuss your project and bring your vision to life
                </p>
              </motion.div>

              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                onSubmit={handleContactSubmit}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 space-y-4"
              >
                <input
                  type="text"
                  placeholder="Your Name"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <textarea
                  placeholder="Tell us about your project"
                  rows={4}
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white resize-none"
                />
                <Button type="submit" size="lg" className="w-full bg-white text-[#1E3A8A] hover:bg-gray-100">
                  Send Message
                </Button>
              </motion.form>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;
