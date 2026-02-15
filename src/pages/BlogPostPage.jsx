
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { Calendar, ArrowLeft, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { Button } from '@/components/ui/button';

const BlogPostPage = () => {
  const { slug } = useParams();
  const [blogPosts] = useLocalStorage('blogPosts', [
    {
      id: 1,
      slug: 'boost-website-speed-2026',
      title: 'How to Boost Your Website Speed in 2026',
      excerpt: 'Learn the latest techniques to optimize your website performance and improve user experience.',
      featuredImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      date: '2026-02-10',
      category: 'Performance',
      content: `
        <h2>Introduction</h2>
        <p>Website speed is crucial for user experience and SEO. In 2026, with increasingly demanding users and sophisticated search algorithms, optimizing your website's performance has never been more important.</p>
        
        <h2>Key Optimization Techniques</h2>
        <p>Here are the most effective strategies to boost your website speed:</p>
        
        <h3>1. Image Optimization</h3>
        <p>Use modern image formats like WebP and AVIF. Implement lazy loading and responsive images to reduce initial page load.</p>
        
        <h3>2. Code Minification</h3>
        <p>Minify CSS, JavaScript, and HTML files to reduce file sizes and improve load times.</p>
        
        <h3>3. Caching Strategies</h3>
        <p>Implement browser caching and server-side caching to serve content faster to returning visitors.</p>
        
        <h3>4. CDN Integration</h3>
        <p>Use a Content Delivery Network to distribute your content globally and reduce latency.</p>
        
        <h2>Conclusion</h2>
        <p>By implementing these optimization techniques, you can significantly improve your website's speed and provide a better experience for your users.</p>
      `
    },
    {
      id: 2,
      slug: 'wordpress-security-best-practices',
      title: 'WordPress Security Best Practices',
      excerpt: 'Protect your WordPress site from threats with these essential security measures.',
      featuredImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3',
      date: '2026-02-08',
      category: 'Security',
      content: `
        <h2>Why WordPress Security Matters</h2>
        <p>WordPress powers over 40% of websites globally, making it a prime target for attackers. Implementing robust security measures is essential.</p>
        
        <h2>Essential Security Practices</h2>
        
        <h3>1. Keep Everything Updated</h3>
        <p>Regularly update WordPress core, themes, and plugins to patch security vulnerabilities.</p>
        
        <h3>2. Use Strong Passwords</h3>
        <p>Implement strong password policies and consider two-factor authentication.</p>
        
        <h3>3. Install Security Plugins</h3>
        <p>Use reputable security plugins like Wordfence or Sucuri to add an extra layer of protection.</p>
        
        <h3>4. Regular Backups</h3>
        <p>Schedule automatic backups to ensure you can recover your site if something goes wrong.</p>
        
        <h2>Final Thoughts</h2>
        <p>Security is an ongoing process. Stay vigilant and regularly review your security measures.</p>
      `
    }
  ]);

  const post = blogPosts.find(p => p.slug === slug);
  const relatedPosts = blogPosts.filter(p => p.id !== post?.id).slice(0, 3);

  if (!post) {
    return (
      <>
        <Helmet>
          <title>Post Not Found - ANFAWORD Blog</title>
        </Helmet>
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
          <Header />
          <div className="container mx-auto px-4 py-20 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
            <Link to="/blog">
              <Button className="bg-[#1E3A8A] hover:bg-[#1e3a8ae6] text-white">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>
          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} - ANFAWORD Blog</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <Header />

        <article className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link to="/blog" className="inline-flex items-center text-[#1E3A8A] hover:text-[#10B981] mb-8 transition-colors">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Blog
              </Link>

              <div className="mb-6">
                <span className="inline-block bg-[#10B981] text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  {post.category}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  {post.title}
                </h1>
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-5 h-5 mr-2" />
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
              </div>

              <div className="relative h-96 rounded-2xl overflow-hidden mb-12">
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div 
                className="prose prose-lg max-w-none mb-12"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {relatedPosts.length > 0 && (
                <div className="border-t border-gray-200 pt-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Posts</h2>
                  <div className="grid md:grid-cols-3 gap-8">
                    {relatedPosts.map((relatedPost) => (
                      <Link
                        key={relatedPost.id}
                        to={`/blog/${relatedPost.slug}`}
                        className="group"
                      >
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                          <div className="relative h-40 overflow-hidden">
                            <img
                              src={relatedPost.featuredImage}
                              alt={relatedPost.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <div className="p-4">
                            <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#1E3A8A] transition-colors">
                              {relatedPost.title}
                            </h3>
                            <div className="flex items-center text-[#10B981] font-semibold text-sm">
                              Read More <ArrowRight className="w-4 h-4 ml-1" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
};

export default BlogPostPage;
