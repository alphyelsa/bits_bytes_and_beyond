export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  demoLink?: string;
  githubLink?: string;
};


export const projects: Project[] = [
  {
    id: '1',
    title: 'AI Prompt Explorer',
    description: 'An interactive app to experiment with different AI prompt structures.',
    tags: ['AI', 'React', 'OpenAI'],
    githubLink: 'https://github.com/alphy/prompt-explorer',
    demoLink: 'https://prompt-explorer.vercel.app',
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: '2',
    title: 'Personal Portfolio Website',
    description: 'Built with React + Tailwind. Fully responsive and SEO-optimized.',
    tags: ['React', 'Tailwind', 'Frontend'],
    githubLink: 'https://github.com/alphy/portfolio',
    image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: '3',
    title: 'Mini Blog CMS',
    description: 'A lightweight blog system with Markdown support and a custom editor.',
    tags: ['Fullstack', 'Firebase', 'Blog'],
    demoLink: 'https://mini-blog-cms.netlify.app',
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  },
];
