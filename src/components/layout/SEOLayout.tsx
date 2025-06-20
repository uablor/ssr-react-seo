import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOLayoutProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogUrl?: string;
  jsonLd?: object;
  children: React.ReactNode;
}

const SEOLayout: React.FC<SEOLayoutProps> = ({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  ogUrl,
  jsonLd,
  children
}) => {
  // Force document title update on every render
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <>
      <Helmet>
        {/* General SEO */}
        <title>{title}</title>
        <meta name="description" content={description} />
        {keywords && <meta name="keywords" content={keywords} />}
        <meta name="robots" content="index, follow" />
        {canonical && <link rel="canonical" href={canonical} />}
        <meta name="theme-color" content="#000000" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        {ogUrl && <meta property="og:url" content={ogUrl} />}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {ogImage && <meta property="og:image" content={ogImage} />}
        <meta property="og:site_name" content="Our Website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        {ogImage && <meta name="twitter:image" content={ogImage} />}

        {/* Structured Data */}
        {jsonLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(jsonLd),
            }}
          />
        )}
      </Helmet>
      {children}
    </>
  );
};

export default SEOLayout;