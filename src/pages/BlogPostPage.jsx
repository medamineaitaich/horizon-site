
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
    }    ,
    {
      id: 3,
      slug: 'what-is-wordpress',
      title: "What Is WordPress and Why Is It the Best CMS?",
      excerpt: "Discover what WordPress is and why it powers 43% of all websites. Learn the benefits, features, and reasons why WordPress is the best CMS for your business website.",
      featuredImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      date: "2025-01-01",
      category: "WordPress",
      content: `
        <h2>Meta Title</h2>
        <p>What Is WordPress? Complete Guide to the World's Best CMS Platform (2025)</p>

        <h2>Meta Description</h2>
        <p>Discover what WordPress is and why it powers 43% of all websites. Learn the benefits, features, and reasons why WordPress is the best CMS for your business website.</p>

        <h2>Introduction</h2>
        <p>Are you planning to build a website but feeling overwhelmed by the dozens of platform options available? Or maybe you've heard about WordPress but aren't sure if it's the right choice for your business?</p>
        <p>You're not alone. Choosing the right Content Management System (CMS) is one of the most critical decisions you'll make for your online presence—and it can determine whether your website becomes a powerful business asset or a constant headache.</p>
        <p>The good news? WordPress powers over 43% of all websites on the internet, from personal blogs to Fortune 500 companies. But what makes it so special, and more importantly, is it the right choice for your needs?</p>
        <p>In this comprehensive guide, we'll break down everything you need to know about WordPress, explore why it dominates the CMS market, and help you understand why it might be the perfect platform for your next web project.</p>

        <h2>What Is WordPress? Understanding the Basics</h2>
        <p>WordPress is a free, open-source Content Management System (CMS) that allows you to create, manage, and publish websites without needing to write code. Originally launched in 2003 as a blogging platform, WordPress has evolved into the world's most versatile website builder, powering everything from simple blogs to complex e-commerce stores and enterprise-level websites.</p>

        <h2>WordPress.org vs WordPress.com: What's the Difference?</h2>
        <p>Before we go further, it's important to understand that there are two versions of WordPress:</p>
        <h3>WordPress.org (Self-Hosted)</h3>
        <p>This is the free, open-source software you download and install on your own web hosting. You have complete control over your website, full access to plugins and themes, and unlimited customization options. This is what most people refer to when they talk about WordPress.</p>
        <h3>WordPress.com</h3>
        <p>This is a hosted service owned by Automattic that offers simplified WordPress hosting with limited customization on free plans. While convenient for beginners, it doesn't provide the same flexibility and control as self-hosted WordPress.</p>
        <p>For businesses and professionals, WordPress.org (self-hosted) is almost always the better choice, offering unlimited potential and complete ownership of your digital presence.</p>

        <h2>Why WordPress Is the Most Popular CMS in the World</h2>
        <p>Numbers don't lie. WordPress doesn't just lead the CMS market—it dominates it. Here's why millions of website owners, developers, and businesses choose WordPress over competitors:</p>

        <h3>1. It's Completely Free and Open-Source</h3>
        <p>Unlike proprietary platforms that charge licensing fees, WordPress is 100% free to download, use, and modify. The open-source nature means a global community of developers constantly improves the platform, ensuring it stays cutting-edge, secure, and feature-rich.</p>
        <p>You only pay for web hosting and a domain name—everything else is yours to control.</p>

        <h3>2. User-Friendly for Beginners, Powerful for Experts</h3>
        <p>WordPress strikes the perfect balance between simplicity and sophistication. Beginners can create professional websites using intuitive drag-and-drop builders and pre-designed templates, while developers can access the code to build custom solutions.</p>
        <p>You don't need programming knowledge to manage content, add pages, or update your site—but if you want advanced functionality, WordPress gives you that power too.</p>

        <h3>3. Unmatched Flexibility and Customization</h3>
        <p>With over 60,000 free plugins and 11,000 themes available, WordPress can be transformed into virtually any type of website.</p>
        <ul>
          <li>Business websites and portfolios</li>
          <li>E-commerce stores (via WooCommerce)</li>
          <li>Membership sites and online courses</li>
          <li>News and magazine websites</li>
          <li>Forums and community platforms</li>
          <li>Booking and appointment systems</li>
          <li>Multi-language websites</li>
        </ul>
        <p>Whatever your vision, WordPress can bring it to life.</p>

        <h3>4. SEO-Friendly Architecture</h3>
        <p>WordPress is built with clean, semantic code that search engines love. Features like customizable permalinks, automatic XML sitemaps, mobile responsiveness, and fast loading times give you a strong SEO foundation right out of the box.</p>
        <p>Add powerful SEO plugins like Yoast or Rank Math, and you have professional-grade optimization tools that would cost thousands of dollars with other platforms.</p>

        <h3>5. Mobile-Responsive by Default</h3>
        <p>Modern WordPress themes are built with responsive design principles, automatically adapting your content to look perfect on smartphones, tablets, and desktops.</p>

        <h3>6. Scalable for Growth</h3>
        <p>Whether you're launching a simple blog or planning a high-traffic e-commerce empire, WordPress scales with your ambitions.</p>

        <h3>7. Massive Community and Support</h3>
        <p>This means endless tutorials, active forums, regular updates, and thousands of developers available for hire. You're never alone when working with WordPress.</p>

        <h3>8. Full Control and Ownership</h3>
        <p>WordPress gives you complete ownership of your content, data, and website. You can move your site to any hosting provider, export your content anytime, and make changes without restrictions.</p>

        <h2>WordPress vs. Other CMS Platforms: The Comparison</h2>
        <h3>WordPress vs. Wix/Squarespace</h3>
        <p>Wix and Squarespace offer simplicity but sacrifice flexibility and control. WordPress offers far more power, better SEO, and complete ownership.</p>

        <h3>WordPress vs. Joomla/Drupal</h3>
        <p>Joomla and Drupal require more technical expertise. WordPress delivers similar capabilities with an easier learning curve.</p>

        <h3>WordPress vs. Shopify</h3>
        <p>Shopify is strong for e-commerce but has monthly fees. WordPress + WooCommerce can provide similar store features with greater flexibility.</p>

        <h2>Who Should Use WordPress?</h2>
        <ul>
          <li><strong>Small Businesses:</strong> Professional websites that attract customers.</li>
          <li><strong>E-commerce Stores:</strong> Online stores with WooCommerce.</li>
          <li><strong>Bloggers:</strong> Publish and monetize content.</li>
          <li><strong>Agencies:</strong> Manage multiple sites efficiently.</li>
          <li><strong>Enterprises:</strong> Scalable, high-performance websites.</li>
          <li><strong>Nonprofits:</strong> Tell your story and drive donations.</li>
        </ul>

        <h2>Common Myths About WordPress (Debunked)</h2>
        <h3>Myth 1: "WordPress is only for blogs"</h3>
        <p>Reality: WordPress powers every type of website imaginable.</p>

        <h3>Myth 2: "WordPress isn't secure"</h3>
        <p>Reality: Core is secure; issues usually come from outdated plugins, weak passwords, or poor hosting.</p>

        <h3>Myth 3: "WordPress is slow"</h3>
        <p>Reality: Performance depends on hosting, theme, plugins, and optimization.</p>

        <h3>Myth 4: "You need coding skills to use WordPress"</h3>
        <p>Reality: Millions of non-technical users manage WordPress daily.</p>

        <h2>Why Choose Professional WordPress Services?</h2>
        <p>While WordPress is user-friendly, getting the best results requires expertise in design, optimization, security, and SEO.</p>
        <p>At Anfaword.site, we specialize in creating high-performance WordPress websites that drive real business results. We handle the technical complexities so you can focus on your business.</p>

        <h2>Ready to Harness the Power of WordPress?</h2>
        <p>WordPress isn't just the most popular CMS—it's one of the most powerful, flexible, and business-friendly platforms available today.</p>
        <p><strong>Contact Anfaword.site</strong> today for a free consultation on your WordPress project.</p>
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
  className="prose prose-lg max-w-none mb-12 text-gray-900"
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
