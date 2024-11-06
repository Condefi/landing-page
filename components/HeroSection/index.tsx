"use client";

import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { RainbowButton } from "../ui/rainbow-button";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  return (
    <BackgroundBeamsWithCollision className="relative">
      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24 py-24 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center"
        >
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-12">
              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-primary text-center"
              >
                Revolutionizing Real Estate Investment
              </motion.h1>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="mt-6 text-xl text-foreground max-w-3xl text-balance text-center mx-auto"
              >
                Simplifying real estate investment through crowdfunding,
                tokenization, and a marketplace for buying and selling tokenized
                assets. Making property investment accessible and liquid for
                everyone.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
              >
                <RainbowButton>Start Investing</RainbowButton>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default HeroSection;
