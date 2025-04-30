import React, { useState } from 'react';
import Layout from '../components/Layout'; // ← Import Layout
import { projects } from '../data/projects';

const allTags = Array.from(new Set(projects.flatMap((p) => p.tags))).sort();

export default function Portfolio() {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = activeTag
    ? projects.filter((p) => p.tags.includes(activeTag))
    : projects;

  return (
    <Layout> {/* ← Wrap your whole page in Layout */}
      <div className="min-h-screen bg-gray-50 pt-8 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Portfolio</h1>

          {/* Tag Filters */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
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

          {/* Projects */}
          <div className="grid sm:grid-cols-2 gap-8">
            {filtered.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition"
              >
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-700 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm px-2 py-0.5 bg-gray-200 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:underline"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
