import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  type?: string;
  name?: string;
  imageUrl?: string;
  publishDate?: string;
  modifiedDate?: string;
  author?: string;
  category?: string;
  keywords?: string[];
  isBlogPost?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title = 'AI Landlord',
  description = 'AI Landlord: Automate tenant screening with AI-powered chatbots. Save 10+ hours per week with FCRA-compliant background checks and lead qualification.',
  type = 'website',
  name = 'AI Landlord',
  imageUrl = '/lovable-uploads/48ecf6e2-5a98-4a9d-af6f-ae2265cd4098.png',
  publishDate,
  modifiedDate,
  author,
  category,
  keywords = ['tenant screening', 'AI chatbot', 'property management', 'landlord software', 'background checks', 'lead qualification', 'rental applications'],
  isBlogPost = false
}) => {
  const location = useLocation();
  const currentUrl = `https://ailandlord.com${location.pathname}`;
  const absoluteImageUrl = imageUrl.startsWith('http') ? imageUrl : `https://ailandlord.com${imageUrl}`;

  // Enhanced keywords for specific posts
  const enhancedKeywords = location.pathname.includes('tenant-screening-automation') 
    ? [
        ...keywords,
        'automated tenant screening',
        'landlord automation',
        'rental property management',
        'tenant background checks',
        'property management software',
        'rental lead qualification',
        'tenant application process',
        'landlord time savings',
        'rental property screening',
        'tenant verification software'
      ]
    : location.pathname.includes('fcra-compliant-screening')
    ? [
        ...keywords,
        'FCRA compliance',
        'tenant background screening',
        'legal tenant screening',
        'credit checks for tenants',
        'rental application compliance',
        'tenant screening laws',
        'background check compliance',
        'rental property laws',
        'tenant verification compliance',
        'landlord legal requirements'
      ]
    : keywords;

  // Create base Organization JSON-LD structured data
  const organizationStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AI Landlord',
    url: 'https://ailandlord.com',
    logo: 'https://ailandlord.com/lovable-uploads/14ea3fe0-19d6-425c-b95b-4117bc41f3ca.png',
    description: 'AI-powered tenant screening platform for landlords',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'info@ailandlord.com'
    },
    sameAs: [
      'https://www.linkedin.com/company/ai-landlord',
      'https://twitter.com/ailandlord'
    ]
  };

  // Enhanced BlogPosting JSON-LD structured data
  const blogPostStructuredData = isBlogPost && publishDate ? {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': currentUrl
    },
    headline: title,
    image: {
      '@type': 'ImageObject',
      url: absoluteImageUrl,
      width: 1200,
      height: 630
    },
    datePublished: publishDate,
    dateModified: modifiedDate || publishDate,
    author: {
      '@type': 'Organization',
      name: author || 'AI Landlord',
      url: 'https://ailandlord.com'
    },
    publisher: {
      '@type': 'Organization',
      name: 'AI Landlord',
      logo: {
        '@type': 'ImageObject',
        url: 'https://ailandlord.com/lovable-uploads/14ea3fe0-19d6-425c-b95b-4117bc41f3ca.png',
        width: 512,
        height: 512
      },
      url: 'https://ailandlord.com'
    },
    description: description,
    keywords: enhancedKeywords.join(', '),
    articleSection: category,
    inLanguage: 'en-US',
    isAccessibleForFree: true
  } : null;

  // Add FAQ structured data for tenant screening post
  const tenantScreeningFAQData = location.pathname.includes('tenant-screening-automation') ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How does AI Landlord automate tenant screening?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'AI Landlord uses intelligent chatbots to automatically respond to rental inquiries, ask qualifying questions based on your criteria, and screen applicants in real-time. The system only forwards qualified candidates for your review, saving you hours of manual work.'
        }
      },
      {
        '@type': 'Question',
        name: 'What platforms does AI Landlord integrate with?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'AI Landlord integrates with Zillow, Craigslist, Facebook Marketplace, SMS, and email. Our system automatically captures leads from all these platforms and provides a unified screening experience.'
        }
      },
      {
        '@type': 'Question',
        name: 'How much time can I save with AI Landlord?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most landlords save 10+ hours per week by automating their tenant screening process. The AI handles initial inquiries, qualification questions, and background screening, allowing you to focus on qualified applicants only.'
        }
      }
    ]
  } : null;

  // Add FAQ structured data for FCRA compliance post
  const fcraComplianceFAQData = location.pathname.includes('fcra-compliant-screening') ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is AI Landlord FCRA compliant?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, AI Landlord is fully FCRA compliant. We partner with TransUnion SmartMove to provide secure, legal background screening that meets all federal requirements for tenant screening.'
        }
      },
      {
        '@type': 'Question',
        name: 'What background checks are included?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our background screening includes credit checks, criminal history, eviction records, and income verification. All screening is conducted through FCRA-compliant channels with proper consent and disclosure.'
        }
      },
      {
        '@type': 'Question',
        name: 'How do you ensure legal compliance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We work with legal experts to ensure all screening processes meet FCRA requirements. Our system automatically handles proper disclosure, consent, and adverse action notifications as required by law.'
        }
      }
    ]
  } : null;

  // Combine keywords with any additional category terms
  const keywordString = category 
    ? [...enhancedKeywords, category.toLowerCase()].join(', ') 
    : enhancedKeywords.join(', ');

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={currentUrl} />
      <meta name="keywords" content={keywordString} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={isBlogPost ? 'article' : type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="AI Landlord" />
      <meta property="og:locale" content="en_US" />
      {isBlogPost && category && <meta property="article:section" content={category} />}
      {isBlogPost && publishDate && <meta property="article:published_time" content={publishDate} />}
      {isBlogPost && modifiedDate && <meta property="article:modified_time" content={modifiedDate} />}
      {isBlogPost && <meta property="article:publisher" content="https://ailandlord.com" />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImageUrl} />
      <meta name="twitter:site" content="@ailandlord" />
      <meta name="twitter:creator" content="@ailandlord" />
      
      {/* LinkedIn specific */}
      <meta property="og:image:secure_url" content={absoluteImageUrl} />
      <meta name="author" content={author || name} />
      
      {/* Pinterest specific */}
      <meta name="pinterest:description" content={description} />
      <meta name="pinterest:image" content={absoluteImageUrl} />
      
      {/* Additional SEO meta tags */}
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      
      {/* JSON-LD structured data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationStructuredData)}
      </script>
      
      {blogPostStructuredData && (
        <script type="application/ld+json">
          {JSON.stringify(blogPostStructuredData)}
        </script>
      )}
      
      {tenantScreeningFAQData && (
        <script type="application/ld+json">
          {JSON.stringify(tenantScreeningFAQData)}
        </script>
      )}
      
      {fcraComplianceFAQData && (
        <script type="application/ld+json">
          {JSON.stringify(fcraComplianceFAQData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
