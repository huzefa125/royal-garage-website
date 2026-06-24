import siteData from "../data/siteData.json";
import { slugify } from "./slugify";

export default function jsonLDGenerator({ type, post, url }) {
  // If the page has CMS data, use it.
  if (type === "post") {
    return `<script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "${url}"
        },
        "headline": "${post.title}",
        "description": "${post.description}",
        "image": "${post.image.src}",
        "author": {
          "@type": "Person",
          "name": "${post.author}",
          "url": "/author/${slugify(post.author)}"
        },
        "datePublished": "${post.date}"
      }
    </script>`;
  }
  const site = import.meta.env.SITE;
  return `<script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "AutoRepair",
        "@id": "${site}",
        "name": "${siteData.title}",
        "description": "${siteData.description}",
        "url": "${site}",
        "image": "${site}${siteData.image.src}",
        "telephone": "+918758807860",
        "email": "royalpathanfiroz@gmail.com",
        "priceRange": "₹₹",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Shed No. 88, Karelibaug Ind. Estate, Nr. Telephone Exchange",
          "addressLocality": "Vadodara",
          "addressRegion": "Gujarat",
          "postalCode": "390018",
          "addressCountry": "IN"
        },
        "areaServed": "Vadodara",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "09:00",
            "closes": "20:00"
          }
        ]
      }
    </script>`;
}
