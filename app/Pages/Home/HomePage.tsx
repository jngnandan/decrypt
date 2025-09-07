import React from "react";
import { Helmet } from "react-helmet";

import { HeroImageBackground } from "./HeroImageBackground/HeroImageBackground";
import { FeaturesTitle } from "./FeaturesTitle/FeaturesTitle";
import { FeaturesGrid } from "./FeaturesGrid/FeaturesGrid";
import { ArticlesCardsGrid } from "./ArticlesCardsGrid/ArticlesCardsGrid";
import NewsletterSignup from "./NewsLetter/NewsletterSignup";

function HomePage() {

  return (
    <div className="relative">
      <Helmet>
        <title>
          Protocon Mentorship Platform | Empowering Growth Through Mentorship
        </title>
        <meta
          name="description"
          content="Protocon is a mentorship platform offering personalized growth opportunities. Connect with mentors across various fields and boost your career."
        />
        <meta
          name="keywords"
          content="mentorship, protocon, career growth, professional development, mentoring platform"
        />
        <meta property="og:title" content="Protocon Mentorship Platform" />
        <meta
          property="og:description"
          content="Empower your career with Protocon's mentorship platform. Connect with experienced mentors and achieve your professional goals."
        />
        <meta property="og:image" content="URL_to_image_for_open_graph" />
        <meta property="og:url" content="URL_to_your_page" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Protocon Mentorship Platform" />
        <meta
          name="twitter:description"
          content="Empower your career with Protocon's mentorship platform. Connect with experienced mentors and achieve your professional goals."
        />
        <meta name="twitter:image" content="URL_to_image_for_twitter" />
      </Helmet>

      {/* Hero Image Background Section */}
      <HeroImageBackground />

      {/* Features Grid Section */}
      <FeaturesGrid />

      {/* Features Section */}
      <FeaturesTitle />

      {/* Articles Section */}
      <ArticlesCardsGrid />

      {/* Newsletter Section */}
      <NewsletterSignup />
    </div>
  );
}

export default HomePage;
