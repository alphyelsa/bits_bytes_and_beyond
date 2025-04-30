// components/PortfolioHighlights.tsx
import { ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';
import { Link } from 'react-router-dom';

const PortfolioHighlights = () => {
  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8">Portfolio Highlights</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects
            .filter(project => project.image) // Only show projects with images
            .map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img className="w-full h-48 object-cover" src={project.image} alt={project.title} />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Prefer demoLink if available, fallback to githubLink */}
                  {(project.demoLink || project.githubLink) && (
                    <a
                      href={project.demoLink || project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-indigo-600 hover:text-indigo-500"
                    >
                      View Project <ExternalLink size={16} className="ml-2" />
                    </a>
                  )}
                </div>
              </div>
            ))}
        </div>
        <Link to="/portfolio" className="block text-blue-600 mt-6 text-center hover:underline">See Full Portfolio →</Link>
      </div>
    </section>
  );
};

export default PortfolioHighlights;
