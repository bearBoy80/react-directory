import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  category?: string;
  canonical?: string;
}

export const SEO = ({ title, description, category, canonical }: SEOProps) => {
  const baseUrl = "https://navhub.lovable.app";
  const fullTitle = category 
    ? `${category} - ${title}` 
    : title;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical || baseUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical || baseUrl} />
      
      {/* Twitter */}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};
