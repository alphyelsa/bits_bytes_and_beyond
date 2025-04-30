import About from '../components/About';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Layout from '../components/Layout'; 
import BlogHighlights from '../components/BlogHighlights';
import PortfolioHighlights from '../components/PortfolioHighlights';

export default function Home() {

  return (
    <Layout>

      <BlogHighlights />
      <PortfolioHighlights />
    
      {/* Main content */}
      <main className="pt-16">
        {/* Reused Sections */}
        <div id="about"><About /></div>
        <div id="experience"><Experience /></div>
        <div id="contact"><Contact /></div>
      </main>

      
    </Layout>
  );
}
