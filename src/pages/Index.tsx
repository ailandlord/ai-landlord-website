
import PageLayout from '@/components/PageLayout';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Projects from '@/components/Projects';
import WhyAILandlord from '@/components/WhyAILandlord';
import BlogPreview from '@/components/BlogPreview';
import SEO from '@/components/SEO';
import { useEffect } from 'react';

const Index = () => {
  // Fix any ID conflicts when the page loads
  useEffect(() => {
    const contactElements = document.querySelectorAll('[id="contact"]');
    if (contactElements.length > 1) {
      // If there are multiple elements with id="contact", rename one
      contactElements[1].id = 'contact-footer';
    }
  }, []);

  return (
    <PageLayout>
      <SEO 
        title="AI Landlord - Automate Tenant Screening with AI" 
        description="Stop wasting time on unqualified leads. Our AI chatbot screens tenants 24/7 and only sends you qualified applicants. FCRA-compliant background checks."
        imageUrl="/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png"
        keywords={['tenant screening', 'AI chatbot', 'property management', 'landlord software', 'background checks', 'lead qualification', 'rental applications']}
      />
      <Hero />
      <Features />
      <WhyAILandlord />
      <Projects />
      <BlogPreview />
    </PageLayout>
  );
};

export default Index;
