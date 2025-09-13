import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { ReviewsSection } from "@/components/reviews-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
// Import WhatApp Widget component from /components/WhatsAppWidgets.tsx
import { WhatsAppWidget } from "@/components/whatsapp-widget"

// WhatsApp Widget Component
// const WhatsAppWidget = () => {
//   const handleClick = () => {
//     const message = "Hola, estoy interesado en sus servicios de construcción"
//     const url = `https://wa.me/34643516352?text=${encodeURIComponent(message)}`
//     window.open(url, '_blank')
//   }
  
//   return (
//     <div 
//       onClick={handleClick}
//       className="fixed bottom-4 right-4 md:bottom-6 md:right-6 bg-green-500 hover:bg-green-600 text-white p-3 md:p-4 rounded-full cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 z-50 group"
//       title="Contactar por WhatsApp"
//     >
//       {/* WhatsApp Icon */}
//       <svg 
//         width="24" 
//         height="24" 
//         viewBox="0 0 24 24" 
//         fill="currentColor"
//         className="w-5 h-5 md:w-6 md:h-6"
//       >
//         <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
//       </svg>
      
//       {/* Hover text */}
//       <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
//         ¡Chatea con nosotros!
//         <div className="absolute top-full right-3 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
//       </div>
//     </div>
//   )
// }

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Ilmati Construcciones",
    "description": "Professional construction and renovation services across Spain. Specializing in kitchen remodeling, bathroom renovations, flooring installation, interior painting, electrical work, and plumbing services.",
    "url": "https://constructpro.es",
    "telephone": "+34 643 516 352",
    "email": "contact@constructpro.es",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Calle Mayor 123",
      "addressLocality": "Madrid",
      "addressRegion": "Madrid",
      "postalCode": "28013",
      "addressCountry": "ES"
    },
    "geo": {
      "@type": "GeoCoordinates",
      latitude: 41.0823674,
      longitude: -3.0049051
    },
    "openingHours": "Mo-Fr 08:00-18:00",
    "priceRange": "€€",
    "image": "https://constructpro.es/modern-construction-site-with-workers-renovating-a.png",
    "logo": "https://constructpro.es/placeholder-logo.png",
    "sameAs": [
      "https://www.facebook.com/constructpro.es",
      "https://www.instagram.com/constructpro_es",
      "https://www.linkedin.com/company/constructpro-spain"
    ],
    "serviceArea": {
      "@type": "Country",
      "name": "Spain"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Construction Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Kitchen Renovation",
            "description": "Modern kitchen designs with quality materials and expert installation."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Bathroom Remodeling",
            "description": "Complete bathroom transformations with contemporary fixtures and finishes."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Flooring Installation",
            "description": "Professional installation of tiles, hardwood, and laminate flooring."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Interior Painting",
            "description": "Professional painting services to refresh and modernize your space."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Electrical Work",
            "description": "Safe and reliable electrical installations and repairs."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Plumbing Services",
            "description": "Complete plumbing solutions for residential and commercial properties."
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Elena Rodriguez"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Outstanding kitchen renovation! The team was professional, punctual, and delivered exactly what we envisioned. The quality of work exceeded our expectations."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Miguel Santos"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Complete bathroom transformation that turned our outdated space into a modern sanctuary. Excellent craftsmanship and attention to detail throughout the project."
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="min-h-screen">
        <Header />
        <HeroSection />
        <ServicesSection />
        <ReviewsSection />
        <AboutSection />
        <ContactSection />
        <Footer />
        <WhatsAppWidget />
      </main>
    </>
  )
}