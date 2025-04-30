import React from 'react';
import { Brain, Code, Database } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Me</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            A passionate technologist with a journey from traditional software development to cutting-edge AI solutions.
          </p>
        </div>

        <div className="mt-16">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <Code size={24} />
              </div>
              <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Software Development</p>
              <p className="mt-2 ml-16 text-base text-gray-500">
                12 years of experience in full-stack development, distributed systems, and cloud architecture.
              </p>
            </div>

            <div className="relative">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <Brain size={24} />
              </div>
              <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Machine Learning</p>
              <p className="mt-2 ml-16 text-base text-gray-500">
                Specialized in deep learning, NLP, and generative AI models with a focus on practical applications.
              </p>
            </div>

            <div className="relative">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <Database size={24} />
              </div>
              <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Data Engineering</p>
              <p className="mt-2 ml-16 text-base text-gray-500">
                Expert in building scalable data pipelines and MLOps infrastructure for AI systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;