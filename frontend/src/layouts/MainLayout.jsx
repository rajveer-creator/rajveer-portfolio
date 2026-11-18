import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';

// Route-specific page metadata
const routeMetadata = {
  '/': {
    title: 'Rajveer Gurjar | Developer Portfolio',
    description:
      'Computer science undergraduate building at the intersection of artificial intelligence and web development. Exploring machine learning, full-stack systems, and clean interfaces.',
  },
  '/about': {
    title: 'About | Rajveer Gurjar',
    description:
      'Background, academic coursework, and engineering philosophy of Rajveer Gurjar, a second-year B.Tech CSE (AI) student at Mandsaur University.',
  },
  '/projects': {
    title: 'Projects & Case Studies | Rajveer Gurjar',
    description:
      'In-depth architectural case studies of software systems and AI prototypes, including CaptionAI, GYM-OS, and Mandsaur University RAG Chatbot.',
  },
  '/journey': {
    title: 'Academic Journey & Education | Rajveer Gurjar',
    description:
      'Formal university curriculum, secondary foundation, and independent technical coursework in AI, data structures, and web technologies.',
  },
  '/contact': {
    title: 'Contact | Rajveer Gurjar',
    description:
      'Get in touch with Rajveer Gurjar for internships, open-source collaborations, technical discussions, or software development inquiries.',
  },
};

const fallbackMetadata = {
  title: 'Page Not Found | Rajveer Gurjar',
  description: 'The requested page could not be found.',
};

export default function MainLayout() {
  const { pathname } = useLocation();

  // Route-aware document title, meta description, and scroll reset
  useEffect(() => {
    window.scrollTo(0, 0);

    const meta = routeMetadata[pathname] || fallbackMetadata;
    document.title = meta.title;

    const metaDescriptionTag = document.querySelector('meta[name="description"]');
    if (metaDescriptionTag) {
      metaDescriptionTag.setAttribute('content', meta.description);
    }
  }, [pathname]);

  return (
    <div className="relative flex min-h-screen flex-col bg-paper text-ink selection:bg-accent selection:text-ink noise-overlay">
      {/* Desktop magnetic custom cursor */}
      <CustomCursor />

      {/* Top Navbar */}
      <Navbar />

      {/* Main page content */}
      <main className="flex-1 pt-20 md:pt-28">
        <Outlet />
      </main>

      {/* Experimental Footer */}
      <Footer />
    </div>
  );
}
