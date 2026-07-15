import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.theamlanlaundry.com/#organization",
        "name": "The Amlan Laundry",
        "url": "https://www.theamlanlaundry.com/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.theamlanlaundry.com/favicon.png",
          "@id": "https://www.theamlanlaundry.com/#logo"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+917044428460",
          "contactType": "customer service",
          "email": "contact@theamlanlaundry.com",
          "areaServed": "IN",
          "availableLanguage": ["English", "Bengali"]
        },
        "sameAs": [
          "https://www.facebook.com/profile.php?id=61587104255575",
          "https://www.instagram.com/the_amlan_laundry/",
          "https://www.linkedin.com/company/the-amlan-laundry"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://www.theamlanlaundry.com/#website",
        "url": "https://www.theamlanlaundry.com/",
        "name": "The Amlan Laundry",
        "publisher": {
          "@id": "https://www.theamlanlaundry.com/#organization"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://www.theamlanlaundry.com/#webpage",
        "url": "https://www.theamlanlaundry.com/",
        "name": "Laundry Business in Kolkata | Low Investment Business | Amlan Laundry",
        "isPartOf": {
          "@id": "https://www.theamlanlaundry.com/#website"
        },
        "about": {
          "@id": "https://www.theamlanlaundry.com/#organization"
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.theamlanlaundry.com/#localbusiness",
        "name": "The Amlan Laundry",
        "url": "https://www.theamlanlaundry.com/",
        "logo": "https://www.theamlanlaundry.com/favicon.png",
        "image": "https://www.theamlanlaundry.com/images/The%20amlan%20logo%20transparent.png",
        "description": "Start a profitable laundry business in Kolkata with low investment. Get commercial LG equipment, expert training, & marketing support.",
        "telephone": "+917044428460",
        "email": "contact@theamlanlaundry.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "55, Shyamnagar Road",
          "addressLocality": "Kolkata",
          "addressRegion": "West Bengal",
          "postalCode": "700055",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 22.5726,
          "longitude": 88.3639
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "09:00",
            "closes": "19:00"
          }
        ],
        "areaServed": {
          "@type": "State",
          "name": "West Bengal"
        },
        "priceRange": "$$"
      },
      {
        "@type": "Service",
        "@id": "https://www.theamlanlaundry.com/#service",
        "name": "Laundry Business and Setup",
        "provider": {
          "@id": "https://www.theamlanlaundry.com/#localbusiness"
        },
        "areaServed": "West Bengal",
        "description": "Comprehensive laundry business setup including LG commercial equipment and training."
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.theamlanlaundry.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is The Amlan Laundry?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The Amlan Laundry is a transformative, low-investment laundry business and Self-Income Generating Program in West Bengal, India."
            }
          },
          {
            "@type": "Question",
            "name": "What does the business package include?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our business package provides a complete business setup, including store design, branding name, laundry equipment, complete training, skilled staff placement, marketing support, and ongoing guidance."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.theamlanlaundry.com/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.theamlanlaundry.com/"
          }
        ]
      }
    ]
  };

  return (
    <Helmet>
      <title>Laundry Business in Kolkata | Low Investment Business | Amlan Laundry</title>
      <meta name="description" content="Start a profitable laundry business in Kolkata with low investment. Get commercial LG equipment, expert training, & marketing support with The Amlan Laundry." />
      <meta name="keywords" content="The Amlan Laundry, Amlan Laundry, laundry business, laundry service, commercial laundry, laundry service Kolkata, dry cleaning, West Bengal, LG commercial laundry" />
      <link rel="canonical" href="https://www.theamlanlaundry.com/" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="The Amlan Laundry" />
      <meta name="theme-color" content="#003366" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content="Laundry Business in Kolkata | Low Investment Business | Amlan Laundry" />
      <meta property="og:description" content="Start a profitable laundry business in Kolkata with low investment. Get commercial LG equipment, expert training, & marketing support with The Amlan Laundry." />
      <meta property="og:image" content="https://www.theamlanlaundry.com/images/The%20amlan%20logo%20transparent.png" />
      <meta property="og:url" content="https://www.theamlanlaundry.com/" />
      <meta property="og:type" content="website" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Laundry Business in Kolkata | Low Investment Business | Amlan Laundry" />
      <meta name="twitter:description" content="Start a profitable laundry business in Kolkata with low investment. Get commercial LG equipment, expert training, & marketing support with The Amlan Laundry." />
      <meta name="twitter:image" content="https://www.theamlanlaundry.com/images/The%20amlan%20logo%20transparent.png" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
