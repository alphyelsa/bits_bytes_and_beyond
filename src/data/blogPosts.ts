// blogPosts.ts
export type BlogPostMeta = {
  id: string;
  title: string;
  summary: string;
  date: string;
  path: string;
  tags: string[];
  series?: string;
  image?: string;
  featured?: boolean;
};

export const blogPosts: BlogPostMeta[] = [
  {
    id: 'prompt-1',
    title: 'Introduction to Prompt Engineering',
    summary: 'Start here if you’re new to writing effective AI prompts.',
    date: 'April 15, 2025',
    path: '/blog/prompt-intro',
    tags: ['Prompt Engineering', 'AI', 'Tutorial'],
    series: 'Prompt Engineering 101',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1350&q=80',
    featured: true
  },
  {
    id: 'prompt-2',
    title: 'Prompt Patterns & Techniques',
    summary: 'Explore advanced techniques to structure powerful prompts.',
    date: 'April 16, 2025',
    path: '/blog/prompt-tips',
    tags: ['Prompt Engineering', 'Advanced', 'Tutorial'],
    series: 'Prompt Engineering 101',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 'react-1',
    title: 'Why I Love React',
    summary: 'React’s component model and hooks changed my dev life.',
    date: 'April 10, 2025',
    path: '/blog/why-i-love-react',
    tags: ['React', 'Frontend'],
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=1350&q=80'
  }
];
