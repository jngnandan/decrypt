import React from "react";
import { Helmet } from "react-helmet";

import { HeroImageBackground } from "./HeroImageBackground/HeroImageBackground";
import { FeaturesTitle } from "./FeaturesTitle/FeaturesTitle";
import { FeaturesGrid } from "./FeaturesGrid/FeaturesGrid";
import { StatsGrid } from "./StatsGrid/StatsGrid";
import { ImageCards } from "./ImageCards/ImageCards";
import { ArticlesCardsGrid } from "./ArticlesCardsGrid/ArticlesCardsGrid";
import NewsletterSignup from "./NewsLetter/NewsletterSignup";

function HomePage() {

  return (
    <div className="relative">
      <Helmet>
        <title>
          Decrypt | Digital Governance & Network State Platform
        </title>
        <meta
          name="description"
          content="Decrypt is a platform for digital governance, blockchain democracy, and network state concepts. Learn about decentralized governance and participate in the future of digital nations."
        />
        <meta
          name="keywords"
          content="digital governance, network state, blockchain democracy, decentralized governance, liberland, digital citizenship"
        />
        <meta property="og:title" content="Decrypt - Digital Governance Platform" />
        <meta
          property="og:description"
          content="Explore the future of digital governance with Decrypt. Learn about network states, blockchain democracy, and decentralized governance systems."
        />
        <meta property="og:image" content="URL_to_image_for_open_graph" />
        <meta property="og:url" content="URL_to_your_page" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Decrypt - Digital Governance Platform" />
        <meta
          name="twitter:description"
          content="Explore the future of digital governance with Decrypt. Learn about network states, blockchain democracy, and decentralized governance systems."
        />
        <meta name="twitter:image" content="URL_to_image_for_twitter" />
      </Helmet>

      {/* Hero Image Background Section */}
      <HeroImageBackground />

      {/* Features Grid Section */}
      <FeaturesGrid />

      {/* Stats Section */}
      <StatsGrid />

      {/* Features Section */}
      <FeaturesTitle />

      {/* Image Cards Section */}
      <ImageCards />

      {/* Articles Section */}
      <ArticlesCardsGrid />

      {/* Newsletter Section */}
      <NewsletterSignup />
    </div>
  );
}

export default HomePage;
