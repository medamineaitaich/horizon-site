
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Mail } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribers, setSubscribers] = useLocalStorage('newsletterSubscribers', []);
  const { toast } = useToast();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) {
      toast({
        title: 'Error',
        description: 'Please enter your email address',
        variant: 'destructive'
      });
      return;
    }

    if (!validateEmail(email)) {
      toast({
        title: 'Error',
        description: 'Please enter a valid email address',
        variant: 'destructive'
      });
      return;
    }

    if (subscribers.some(sub => sub.email.toLowerCase() === email.toLowerCase())) {
      toast({
        title: 'Already Subscribed',
        description: 'This email is already subscribed to our newsletter',
        variant: 'destructive'
      });
      return;
    }

    setSubscribers([...subscribers, { email: email.toLowerCase(), subscribedAt: new Date().toISOString() }]);
    setEmail('');
    
    toast({
      title: 'Success!',
      description: 'Thank you for subscribing to our newsletter',
    });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-[#1E3A8A] to-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <span className="text-2xl font-bold bg-gradient-to-r from-white to-[#10B981] bg-clip-text text-transparent">
              ANFAWORD
            </span>
            <p className="mt-4 text-gray-300 text-sm">
              Transform your digital presence with professional web solutions.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/services" className="block text-gray-300 hover:text-[#10B981] transition-colors text-sm">
                Services
              </Link>
              <Link to="/about" className="block text-gray-300 hover:text-[#10B981] transition-colors text-sm">
                About
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-[#10B981] transition-colors text-sm">
                Contact
              </Link>
              <Link to="/privacy" className="block text-gray-300 hover:text-[#10B981] transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="block text-gray-300 hover:text-[#10B981] transition-colors text-sm">
                Terms of Use
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to get updates and special offers
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#10B981] text-sm"
              />
              <Button
                type="submit"
                className="bg-[#10B981] hover:bg-[#059669] text-white"
              >
                <Mail className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} ANFAWORD. Powered by MEDAIT LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
