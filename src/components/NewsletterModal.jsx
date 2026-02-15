
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const NewsletterModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [lastShown, setLastShown] = useLocalStorage('newsletterModalLastShown', null);
  const [subscribers, setSubscribers] = useLocalStorage('newsletterSubscribers', []);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const COOLDOWN_PERIOD = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds

  useEffect(() => {
    if (isAuthenticated) return;

    const shouldShow = () => {
      if (!lastShown) return true;
      const timeSinceLastShown = Date.now() - new Date(lastShown).getTime();
      return timeSinceLastShown > COOLDOWN_PERIOD;
    };

    if (shouldShow()) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        setLastShown(new Date().toISOString());
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isAuthenticated, lastShown, setLastShown]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      toast({
        title: 'Invalid Email',
        description: 'Please enter a valid email address',
        variant: 'destructive'
      });
      return;
    }

    if (subscribers.some(sub => sub.email.toLowerCase() === email.toLowerCase())) {
      toast({
        title: 'Already Subscribed',
        description: 'This email is already subscribed',
        variant: 'destructive'
      });
      return;
    }

    setSubscribers([...subscribers, { email: email.toLowerCase(), subscribedAt: new Date().toISOString() }]);
    
    toast({
      title: 'Success!',
      description: 'Thank you for subscribing to our newsletter',
    });

    setIsOpen(false);
  };

  const handleCreateAccount = () => {
    setIsOpen(false);
    navigate('/account');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 z-10"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-full hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1E3A8A] to-[#10B981] rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Stay Updated!
              </h2>
              <p className="text-gray-600">
                Get exclusive updates, tips, and special offers delivered to your inbox.
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:border-transparent"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#10B981] hover:bg-[#059669] text-white py-3"
              >
                Subscribe Now
              </Button>
            </form>

            <div className="mt-4">
              <Button
                onClick={handleCreateAccount}
                variant="outline"
                className="w-full border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white py-3"
              >
                Create Account
              </Button>
            </div>

            <p className="text-xs text-gray-500 text-center mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NewsletterModal;
