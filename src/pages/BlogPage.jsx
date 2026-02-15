
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { Button } from '@/components/ui/button';

const BlogPage = () => {
  const [blogPosts] = useLocalStorage('blogPosts', [
    {
      id: 1,
      slug: 'boost-website-speed-2026',
      title: 'How to Boost Your Website Speed in 2026',
      excerpt: 'Learn the latest techniques to optimize your website performance and improve user experience with cutting-edge speed optimization strategies.',
      featuredImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      date: '2026-02-10',
      category: 'Performance'
    },
    {
      id: 2,
      slug: 'wordpress-security-best-practices',
      title: 'WordPress Security Best Practices',
      excerpt: 'Protect your WordPress site from threats with these essential security measures and best practices for 2026.',
      featuredImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3',
      date: '2026-02-08',
      category: 'Security'
    },
    {
      id: 3,
      slug: 'ecommerce-trends-2026',
      title: 'E-commerce Trends to Watch in 2026',
      excerpt: 'Discover the latest e-commerce trends that will shape online shopping experiences and drive sales in 2026.',
      featuredImage: 'https://images.unsplash.com/photo-1557821552-17105176677c',
      date: '2026-02-05',
      category: 'E-commerce'
    },
    {
      id: 4,
      slug: 'seo-optimization-guide',
      title: 'Complete SEO Optimization Guide',
      excerpt: 'Master SEO in 2026 with our comprehensive guide covering on-page, off-page, and technical SEO strategies.',
      featuredImage: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a',
      date: '2026-02-01',
      category: 'SEO'
    },
    {
      id: 5,
      slug: 'web-design-trends-2026',
      title: 'Web Design Trends for 2026',
      excerpt: 'Explore the most influential web design trends that will define modern websites in 2026.',
      featuredImage: 'https://images.unsplash.com/photo-1558655146-d09347e92766',
      date: '2026-01-28',
      category: 'Design'
    },
    {
      id: 6,
      slug: 'mobile-first-development',
      title: 'Mobile-First Development Strategies',
      excerpt: 'Learn why mobile-first design is crucial and how to implement it effectively in your projects.',
      featuredImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c',
      date: '2026-01-25',
      category: 'Development'
    }
  ]);

  const [visiblePosts, setVisiblePosts] = useState(6);

  const loadMore = () => {
    setVisiblePosts(prev => prev + 3);
  };

  return (
    <>
      <Helmet>
        <title>Blog - Web Development Tips & Insights | ANFAWORD</title>
        <meta name="description" content="Read the latest articles about web development, WordPress, SEO, security, and digital marketing from ANFAWORD experts." />
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
                Our <span className="bg-gradient-to-r from-[#1E3A8A] to-[#10B981] bg-clip-text text-transparent">Blog</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Insights, tips, and best practices for web development and digital success
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {blogPosts.slice(0, visiblePosts).map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group"
                >
                  <Link to={`/blog/${post.slug}`}>
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.featuredImage}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4 bg-[#10B981] text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {post.category}
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>

                      <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1E3A8A] transition-colors">
                        {post.title}
                      </h2>

                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center text-[#10B981] font-semibold group-hover:gap-2 transition-all">
                        Read More <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>

            {visiblePosts < blogPosts.length && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Button onClick={loadMore} size="lg" className="bg-[#1E3A8A] hover:bg-[#1e3a8ae6] text-white">
                  Load More Posts
                </Button>
              </motion.div>
            )}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default BlogPage;
