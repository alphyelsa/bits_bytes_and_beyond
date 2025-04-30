// components/BlogHighlights.tsx
import { ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import { Link } from 'react-router-dom';

const BlogHighlights = () => {
  const featured = blogPosts.find(post => post.featured);
  const recentPosts = blogPosts.filter(post => !post.featured).slice(0, 2); // Show only 2 on home

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <h2 className="text-3xl font-semibold mb-6 text-center">Latest Blog Posts</h2>

        {/* Featured Post */}
        {featured && (
          <article className="mb-16">
            <div className="aspect-w-16 aspect-h-9 mb-8">
              <img
                className="w-full h-[500px] object-cover rounded-xl"
                src={featured.image}
                alt={featured.title}
              />
            </div>
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex items-center justify-center text-sm text-gray-500 mb-2">
                <time>{featured.date}</time>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{featured.title}</h2>
              <p className="text-lg text-gray-600 mb-6">{featured.summary}</p>
              <Link
                to={featured.path}
                className="inline-flex items-center text-indigo-600 hover:text-indigo-500"
              >
                Read more <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </article>
        )}

        {/* Recent Posts */}
        <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Recent Posts</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recentPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
              <div className="text-sm text-gray-500 mb-1">{post.date}</div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h4>
              <p className="text-gray-600">{post.summary}</p>
              <Link
                to={post.path}
                className="inline-flex items-center text-indigo-600 hover:text-indigo-500 mt-3"
              >
                Read more <ArrowRight size={16} className="ml-1" />
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link to="/blog" className="text-indigo-600 hover:underline text-base">
            View all posts →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogHighlights;
