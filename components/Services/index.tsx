"use client";

import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { motion } from "framer-motion";
import { Building2, Coins, Smartphone } from "lucide-react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

const Services = () => {
  return (
    <div className="py-20 px-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-foreground">
            How Condefi Works
          </h2>
          <p className="mt-4 text-lg text-foreground max-w-2xl mx-auto">
            Discover our comprehensive ecosystem for real estate investment and
            trading
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BackgroundGradient className="p-8 rounded-3xl bg-background/80 backdrop-blur-lg relative group">
            <div className="absolute -top-6 left-8 bg-primary/10 p-3 rounded-2xl group-hover:scale-110 transition-transform">
              <Building2 className="w-8 h-8 text-primary" />
            </div>
            <div className="flex flex-col justify-center items-center flex-grow">
              <h3 className="text-xl font-semibold mb-2">
                Crowdfunding Platform
              </h3>
              <p className="text-sm text-primary/80 mb-4">fund.condefi.com</p>
              <p className="text-foreground mb-6">
                Explore and invest in diverse real estate crowdfunding
                opportunities, with detailed investment information and
                real-time funding updates.
              </p>
              <HoverBorderGradient className="w-full">
                <a
                  href="https://fund.condefi.com"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-center text-sm font-medium bg-background text-primary z-10 px-4 py-2 rounded-[inherit]"
                >
                  Start Crowdfunding
                </a>
              </HoverBorderGradient>
            </div>
          </BackgroundGradient>

          <BackgroundGradient className="p-8 rounded-3xl bg-background/80 backdrop-blur-lg relative group">
            <div className="absolute -top-6 left-8 bg-primary/10 p-3 rounded-2xl group-hover:scale-110 transition-transform">
              <Coins className="w-8 h-8 text-primary" />
            </div>
            <div className="flex flex-col justify-center items-center flex-grow">
              <h3 className="text-xl font-semibold mb-2">
                Tokenized Marketplace
              </h3>
              <p className="text-sm text-primary/80 mb-4">buy.condefi.com</p>
              <p className="text-foreground mb-6 flex-grow">
                Trade tokenized real estate assets on our dedicated marketplace.
                Buy, sell, or adjust your portfolio with ease, all in one place,
                with no need for local residency.
              </p>
              <HoverBorderGradient className="w-full">
                <a
                  href="https://buy.condefi.com"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-center text-sm font-medium bg-background text-primary z-10 px-4 py-2 rounded-[inherit]"
                >
                  Explore Marketplace
                </a>
              </HoverBorderGradient>
            </div>
          </BackgroundGradient>

          <BackgroundGradient className="p-8 rounded-3xl bg-background/80 backdrop-blur-lg relative group">
            <div className="absolute -top-6 left-8 bg-primary/10 p-3 rounded-2xl group-hover:scale-110 transition-transform">
              <Smartphone className="w-8 h-8 text-primary" />
            </div>
            <div className="flex flex-col justify-center items-center flex-grow">
              <h3 className="text-xl font-semibold mb-2">Mobile App</h3>
              <p className="text-sm text-primary/80 mb-4">app.condefi.com</p>
              <p className="text-foreground mb-6">
                Access our complete platform on the go. Manage investments,
                trade assets, and participate in campaigns from your mobile
                device.
              </p>
              <HoverBorderGradient className="w-full">
                <a
                  href="https://app.condefi.com"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-center text-sm font-medium bg-background text-primary z-10 px-4 py-2 rounded-[inherit]"
                >
                  Download App
                </a>
              </HoverBorderGradient>
            </div>
          </BackgroundGradient>
        </div>
      </div>
    </div>
  );
};

export default Services;
