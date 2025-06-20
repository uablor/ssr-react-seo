// Library imports
import { JSX, useEffect } from "react";
import { Helmet } from "react-helmet-async";

// App level imports
import BaseLayout from "../../components/layout/BaseLayout";

export const Home = (): JSX.Element => {
  const pageTitle = "Home - Our Website | Welcome";
  const pageDescription =
    "Welcome to our website — your second home. Discover engaging content and quality services. Home, sweet home 🏠";
  const pageUrl = "https://yourdomain.com";
  const ogImage = `${pageUrl}/images/home-og-image.jpg`;
  const twitterImage = `${pageUrl}/images/home-twitter-image.jpg`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Our Website",
    url: pageUrl,
    description: pageDescription,
    potentialAction: {
      "@type": "SearchAction",
      target: `${pageUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  // Debug log
  useEffect(() => {
    console.log('Home component mounted, title should be:', pageTitle);
    document.title = pageTitle; // Force update
  }, [pageTitle]);

  return (
    <>
      <Helmet>
        {/* General SEO */}
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content="home, welcome, website, sweet home, landing page, services"
        />
        <meta name="author" content="Our Website Team" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={pageUrl} />
        <meta name="theme-color" content="#000000" />

        {/* Open Graph (Facebook, LinkedIn, etc.) */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:site_name" content="Our Website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={twitterImage} />

        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </Helmet>

      <BaseLayout>
        <div className="px-4 py-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Welcome to Our Homepage
          </h1>
          <p className="text-lg text-gray-700 mb-2">Home, sweet home 🏠</p>
          <p className="text-md text-gray-600">
            This is the main content of the homepage, optimized for SEO and designed to make a great first impression.
          </p>
        </div>
      </BaseLayout>
    </>
  );
};