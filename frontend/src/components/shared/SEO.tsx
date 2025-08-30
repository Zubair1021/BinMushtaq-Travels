import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Bin Mushtaq Travel & Tours - Premium Pakistan Travel Agency | Umrah, Hajj & Tour Packages",
  description = "Bin Mushtaq Travel & Tours offers premium travel services in Pakistan. Book Umrah packages, Hajj tours, domestic & international travel packages, visa services, and airline tickets at best prices.",
  keywords = "Pakistan travel agency, Umrah packages, Hajj tours, travel packages Pakistan, visa services, airline tickets, international tours, domestic tourism, Karachi travel agency, Bin Mushtaq travels",
  image = "https://binmushtaqtravel.com/logo.png",
  url = "https://binmushtaqtravel.com/",
  type = "website"
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      
      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
