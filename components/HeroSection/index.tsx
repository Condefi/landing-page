import React from "react";
import { CheckCircle2 } from "lucide-react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Button } from "../ui/button";
import { RainbowButton } from "../ui/rainbow-button";

const HeroSection: React.FC = () => {
  return (
    <BackgroundBeamsWithCollision className="relative">
      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24 py-24 sm:py-32">
        <div className="relative z-10 text-center">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-12">
              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-primary text-center">
                Revolutionizing Real Estate Investment
              </h1>

              {/* Subheading */}
              <p className="mt-6 text-xl text-secondary-forground max-w-3xl text-balance text-center mx-auto">
                Simplifying real estate investment through crowdfunding,
                tokenization, and a marketplace for buying and selling tokenized
                assets. Making property investment accessible and liquid for
                everyone.
              </p>

              {/* CTA Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <RainbowButton>Start Investing</RainbowButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default HeroSection;
