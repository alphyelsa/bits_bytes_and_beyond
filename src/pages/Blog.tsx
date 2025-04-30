import { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import Layout from '../components/Layout';

const allTags = Array.from(
  new Set(blogPosts.flatMap((post) => post.tags))
).sort();

export default function Blog() {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filteredPosts = activeTag
    ? blogPosts.filter((post) => post.tags.includes(activeTag))
    : blogPosts;

  return (
    <Layout>
    <div className="min-h-screen bg-gray-50 pt-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Blog</h1>

        {/* Tag Filters */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          <button
            onClick={() => setActiveTag(null)}
            className={`px-4 py-1 rounded-full border ${
              activeTag === null ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'
            }`}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-1 rounded-full border ${
                activeTag === tag ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Posts */}
        {filteredPosts.length === 0 ? (
          <p className="text-center text-gray-600">No blog posts for this tag yet.</p>
        ) : (
          <div className="space-y-8">
            {filteredPosts.map((post) => (
              <div key={post.id} className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
                <p className="text-sm text-gray-500 mb-1">{post.date}</p>
                <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-700 mb-4">{post.summary}</p>
                {post.series && (
                  <p className="text-sm text-indigo-600 font-medium mb-2">Part of: {post.series}</p>
                )}
                <Link
                  to={post.path}
                  className="text-blue-600 hover:underline"
                >
                  Read More →
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
    </Layout>
  );
}
