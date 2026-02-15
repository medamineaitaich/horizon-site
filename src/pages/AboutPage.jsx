
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Target, Heart, Award } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AboutPage = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To empower businesses with professional web solutions that drive growth and success in the digital landscape.'
    },
    {
      icon: Heart,
      title: 'Our Values',
      description: 'Quality, integrity, and customer satisfaction are at the core of everything we do.'
    },
    {
      icon: Award,
      title: 'Our Commitment',
      description: 'Delivering excellence through innovative solutions and dedicated support for every client.'
    }
  ];

  const team = [
    { name: 'Development Team', role: 'Full-Stack Developers', avatar: 'DT' },
    { name: 'Design Team', role: 'UI/UX Designers', avatar: 'DS' },
    { name: 'Support Team', role: 'Customer Success', avatar: 'ST' }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - ANFAWORD | Professional Web Solutions</title>
        <meta name="description" content="Learn about ANFAWORD, powered by MEDAIT LLC. We provide professional web development and digital solutions for businesses worldwide." />
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
                About <span className="bg-gradient-to-r from-[#1E3A8A] to-[#10B981] bg-clip-text text-transparent">ANFAWORD</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional web solutions powered by innovation and expertise
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#1E3A8A] to-[#10B981] rounded-full flex items-center justify-center mb-6">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-12 mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Story</h2>
              <div className="max-w-3xl mx-auto space-y-4 text-gray-600 leading-relaxed">
                <p>
                  ANFAWORD is a leading web development agency dedicated to transforming businesses through innovative digital solutions. We specialize in creating high-performance websites, e-commerce platforms, and comprehensive digital strategies that drive real results.
                </p>
                <p>
                  Powered by <span className="font-semibold text-[#1E3A8A]">MEDAIT LLC</span>, we bring together a team of experienced developers, designers, and digital strategists who are passionate about delivering excellence. Our expertise spans WordPress development, WooCommerce integration, security optimization, and digital marketing.
                </p>
                <p>
                  We believe in building long-term partnerships with our clients, providing not just technical solutions but strategic guidance to help businesses thrive in the digital age. Every project we undertake is approached with dedication, creativity, and a commitment to exceeding expectations.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Team</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {team.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl p-8 shadow-lg text-center"
                  >
                    <div className="w-24 h-24 bg-gradient-to-br from-[#1E3A8A] to-[#10B981] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                      {member.avatar}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-gray-600">{member.role}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#1E3A8A] to-[#10B981] rounded-2xl p-12 text-white"
            >
              <h2 className="text-3xl font-bold mb-8 text-center">Contact Information</h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Email</p>
                      <p className="text-white/90">contact@anfaword.site</p>
                      <p className="text-white/90">contact@medaitllc.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="w-6 h-6 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Phone</p>
                      <p className="text-white/90">+1 (202) 773-7432</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-6 h-6 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Address</p>
                    <p className="text-white/90">
                      1209 Mountain Road Pl NE, STE R<br />
                      Albuquerque, NM 87110<br />
                      USA
                    </p>
                  </div>
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

export default AboutPage;
