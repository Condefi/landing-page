"use client";

import { BackgroundGradient } from "@/components/ui/background-gradient";
import { motion } from "framer-motion";
import {
  Building2,
  Coins,
  LineChart,
  Target,
  TrendingUp,
  Wallet,
} from "lucide-react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

const Benefits = () => {
  const benefits = [
    {
      title: "Hotel Management Benefits",
      icon: Building2,
      items: [
        {
          icon: LineChart,
          title: "Capital Efficiency",
          description:
            "Grow the number of hotels under management without significant real estate investments.",
        },
        {
          icon: Target,
          title: "Operational Focus",
          description:
            "Dedicate resources to managing the hotel and maximizing guest experience rather than property ownership.",
        },
      ],
      link: "https://fund.condefi.com",
    },
    {
      title: "Unit Owner Benefits",
      icon: Coins,
      items: [
        {
          icon: Wallet,
          title: "Passive Income",
          description:
            "Generate stable passive income through rental income, without the hassle of property management.",
        },
        {
          icon: TrendingUp,
          title: "Real Estate Appreciation",
          description:
            "The value of the condotel unit can appreciate over time, offering long-term financial benefits.",
        },
      ],
      link: "https://buy.condefi.com",
    },
  ];

  return (
    <div className="py-10 md:py-20 px-12 lg:px-24 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[hsl(var(--gradient-start))] to-[hsl(var(--gradient-end))] text-center font-sans font-bold">
            Benefits of Condefi
          </h2>
          <p className="mt-2 md:mt-4 text-base md:text-lg text-foreground max-w-2xl mx-auto px-4">
            Creating value for both hotel management groups and unit owners
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32">
          {benefits.map((benefit, index) => (
            <BackgroundGradient
              key={index}
              className="p-4 md:p-8 rounded-3xl bg-background/80 backdrop-blur-lg relative group"
            >
              <div className="absolute -top-6 left-4 md:left-8 bg-primary/10 p-2 md:p-3 rounded-2xl group-hover:scale-110 transition-transform">
                <benefit.icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
              </div>
              <div className="flex flex-col justify-center items-center flex-grow">
                <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 mt-4">
                  {benefit.title}
                </h3>
                <div className="text-foreground mb-4 md:mb-6 space-y-6 md:space-y-8">
                  {benefit.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-3">
                      <item.icon className="w-4 h-4 md:w-5 md:h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-sm md:text-base">
                          {item.title}
                        </h4>
                        <p className="text-sm md:text-base">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <HoverBorderGradient className="w-full">
                  <a
                    href={benefit.link}
                    target="_blank"
                    rel="noreferrer"
                    className="block text-center text-xs md:text-sm font-medium bg-background text-primary z-10 px-3 md:px-4 py-2 rounded-[inherit]"
                  >
                    Learn More
                  </a>
                </HoverBorderGradient>
              </div>
            </BackgroundGradient>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
