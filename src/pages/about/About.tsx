// Library imports
import { JSX, useEffect } from "react";
import { Helmet } from "react-helmet-async";

// App level imports
import BaseLayout from "../../components/layout/BaseLayout";

export const About = (): JSX.Element => {
  const pageTitle = "About Us - Our Website | Meet the Team";
  const pageDescription =
    "Learn more about us — our history, vision, and the dedicated team ready to serve you with excellence.";
  const pageUrl = "https://yourdomain.com/about";
  const ogImage = `${pageUrl}/images/about-og-image.jpg`;
  const twitterImage = `${pageUrl}/images/about-twitter-image.jpg`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Us",
    description: pageDescription,
    url: pageUrl,
  };

  // Debug log
  useEffect(() => {
    console.log('About component mounted, title should be:', pageTitle);
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
          content="about us, company, history, team, vision, who we are"
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
        <div className="px-4 py-8">
          <h1 className="text-3xl font-bold mb-4">About Us</h1>
          <p className="text-lg text-gray-700">
            We are a team of experienced and passionate professionals.
          </p>
          <p className="text-lg text-gray-700">
            Our mission is to serve you with the highest quality and care.
          </p>
        </div>
      </BaseLayout>
    </>
  );
};
