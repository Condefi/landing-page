import React from "react";
import { CheckCircle2 } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-primary via-secondary to-primary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <pattern
            id="grid"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 10 0 L 0 0 0 10"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
            />
          </pattern>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="relative z-10 text-center lg:text-left">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-7">
              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-primary-foreground">
                Revolutionizing Real Estate Investment
              </h1>

              {/* Subheading */}
              <p className="mt-6 text-xl text-muted max-w-3xl">
                Simplifying real estate investment through crowdfunding,
                tokenization, and a marketplace for buying and selling tokenized
                assets. Making property investment accessible and liquid for
                everyone.
              </p>

              {/* CTA Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <button className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors">
                  Start Investing
                </button>
                <button className="px-8 py-3 border-2 border-muted text-primary-foreground rounded-lg font-semibold hover:bg-muted/10 transition-colors">
                  Learn More
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-12 text-muted flex items-center justify-center lg:justify-start gap-8">
                <div className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 mr-2" />
                  <span>Secure Platform</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 mr-2" />
                  <span>Expert Team</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 mr-2" />
                  <span>Transparent Process</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
