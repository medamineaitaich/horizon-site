
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Save, Image as ImageIcon, Palette } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useLocalStorage } from '@/hooks/useLocalStorage';

const AdminDashboard = () => {
  const { toast } = useToast();
  const [settings, setSettings] = useLocalStorage('siteSettings', {
    logo: '',
    primaryColor: '#1E3A8A',
    accentColor: '#10B981',
    footerText: '© 2026 ANFAWORD. Powered by MEDAIT LLC. All rights reserved.'
  });

  const [formData, setFormData] = useState(settings);

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        toast({
          title: 'Error',
          description: 'File size must be less than 2MB',
          variant: 'destructive'
        });
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, logo: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    setSettings(formData);
    toast({
      title: 'Success!',
      description: 'Settings have been saved successfully',
    });
  };

  return (
    <>
      <Helmet>
        <title>Admin Dashboard - ANFAWORD</title>
        <meta name="description" content="Manage your ANFAWORD website settings, customize colors, and update branding." />
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
              <h1 className="text-4xl font-bold text-gray-900 mb-8">
                Admin <span className="bg-gradient-to-r from-[#1E3A8A] to-[#10B981] bg-clip-text text-transparent">Dashboard</span>
              </h1>

              <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <ImageIcon className="w-6 h-6 mr-3 text-[#10B981]" />
                    Logo Settings
                  </h2>
                  
                  {formData.logo && (
                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-700 mb-2">Current Logo:</p>
                      <img src={formData.logo} alt="Site logo preview" className="h-16 object-contain" />
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Upload New Logo (Max 2MB)
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleLogoUpload}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#10B981] file:text-white hover:file:bg-[#059669] cursor-pointer"
                    />
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Palette className="w-6 h-6 mr-3 text-[#10B981]" />
                    Color Settings
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Primary Color
                      </label>
                      <div className="flex gap-3">
                        <input
                          type="color"
                          value={formData.primaryColor}
                          onChange={(e) => setFormData({ ...formData, primaryColor: e.target.value })}
                          className="h-12 w-20 rounded-lg border border-gray-300 cursor-pointer"
                        />
                        <input
                          type="text"
                          value={formData.primaryColor}
                          onChange={(e) => setFormData({ ...formData, primaryColor: e.target.value })}
                          className="flex-1 px-4 py-3 rounded-lg border border-gray-300 text-gray-900 font-mono"
                          placeholder="#1E3A8A"
                        />
                      </div>
                      <p className="text-sm text-gray-500 mt-2">Used for main navigation and headings</p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Accent Color
                      </label>
                      <div className="flex gap-3">
                        <input
                          type="color"
                          value={formData.accentColor}
                          onChange={(e) => setFormData({ ...formData, accentColor: e.target.value })}
                          className="h-12 w-20 rounded-lg border border-gray-300 cursor-pointer"
                        />
                        <input
                          type="text"
                          value={formData.accentColor}
                          onChange={(e) => setFormData({ ...formData, accentColor: e.target.value })}
                          className="flex-1 px-4 py-3 rounded-lg border border-gray-300 text-gray-900 font-mono"
                          placeholder="#10B981"
                        />
                      </div>
                      <p className="text-sm text-gray-500 mt-2">Used for buttons and highlights</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Footer Settings</h2>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Footer Copyright Text
                    </label>
                    <textarea
                      value={formData.footerText}
                      onChange={(e) => setFormData({ ...formData, footerText: e.target.value })}
                      rows={3}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#10B981] resize-none"
                      placeholder="Enter footer copyright text"
                    />
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Current Settings Preview</h2>
                  <div className="bg-gray-50 rounded-lg p-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 font-medium">Primary Color:</span>
                      <div className="flex items-center gap-2">
                        <div 
                          className="w-8 h-8 rounded border border-gray-300"
                          style={{ backgroundColor: formData.primaryColor }}
                        />
                        <span className="font-mono text-sm text-gray-600">{formData.primaryColor}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 font-medium">Accent Color:</span>
                      <div className="flex items-center gap-2">
                        <div 
                          className="w-8 h-8 rounded border border-gray-300"
                          style={{ backgroundColor: formData.accentColor }}
                        />
                        <span className="font-mono text-sm text-gray-600">{formData.accentColor}</span>
                      </div>
                    </div>
                    <div className="pt-3 border-t border-gray-200">
                      <span className="text-gray-700 font-medium block mb-2">Footer Text:</span>
                      <p className="text-gray-600 text-sm italic">{formData.footerText}</p>
                    </div>
                  </div>
                </div>

                <Button 
                  onClick={handleSave}
                  className="w-full bg-[#10B981] hover:bg-[#059669] text-white"
                  size="lg"
                >
                  <Save className="w-5 h-5 mr-2" />
                  Save All Settings
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AdminDashboard;
