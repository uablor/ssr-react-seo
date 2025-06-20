// Library imports
import { JSX, useEffect } from "react";
import { Helmet } from "react-helmet-async";

// App level imports
import BaseLayout from "../../components/layout/BaseLayout";

export const Contact = (): JSX.Element => {
  const pageTitle = "Contact Us - Our Website | Get in Touch";
  const pageDescription =
    "Reach out to us via phone, email, or visit our office. We're happy to assist with any inquiries.";
  const pageUrl = "https://yourdomain.com/contact";
  const ogImage = `${pageUrl}/images/contact-og-image.jpg`;
  const twitterImage = `${pageUrl}/images/contact-twitter-image.jpg`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Us",
    description:
      "Contact page with information on how to reach our team via phone, email, or in person.",
    url: pageUrl,
  };

  // Debug log
  useEffect(() => {
    console.log('Contact component mounted, title should be:', pageTitle);
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
          content="contact us, phone, email, address, support"
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
          <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-gray-700 mb-2">
            We’d love to hear from you! You can reach us through any of the
            following methods:
          </p>
          <ul className="text-md text-gray-600 space-y-2">
            <li>
              <strong>Phone:</strong> +66-2-xxx-xxxx
            </li>
            <li>
              <strong>Email:</strong> info@yourdomain.com
            </li>
            <li>
              <strong>Address:</strong> 123 Sukhumvit Road, Bangkok 10110, TH
            </li>
            <li>
              <strong>Office Hours:</strong> Monday–Friday, 09:00–18:00
            </li>
          </ul>
        </div>
      </BaseLayout>
    </>
  );
};
