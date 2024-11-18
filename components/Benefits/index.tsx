"use client";

import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { AnimatePresence, motion } from "framer-motion";
import {
  BarChart3,
  BookOpen,
  Briefcase,
  Building2,
  Pointer,
} from "lucide-react";
import React from "react";

const Benefits = () => {
  const benefits = [
    {
      icon: BarChart3,
      title: "Passive Income",
      subtitle: "Generate income without hassle",
      description:
        "Generate income through rental revenue without property management hassle.",
      colors: [
        [59, 130, 246],
        [139, 92, 246],
      ],
      containerClassName: "bg-emerald-900",
    },
    {
      icon: Building2,
      title: "Price Appreciation",
      subtitle: "Long-term value growth and tax benefits",
      description: "Benefit from long-term property value appreciation.",
      colors: [
        [236, 72, 153],
        [232, 121, 249],
      ],
      containerClassName: "bg-sky-600",
    },
    {
      icon: BookOpen,
      title: "Complimentary Stay",
      subtitle: "Annual free stays for 8% ownership andm or more",
      description:
        "Free hotel stay annually for 8% ownership, subject to hotel policy.",
      colors: [
        [59, 130, 246],
        [139, 92, 246],
      ],
      containerClassName: "bg-purple-900",
    },
    {
      icon: Briefcase,
      title: "Full Transparency",
      subtitle: "Detailed reporting",
      description: "Detailed annual audit reports from hotel management.",
      colors: [
        [236, 72, 153],
        [232, 121, 249],
      ],
      containerClassName: "bg-pink-600",
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
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              icon={<benefit.icon className="w-8 h-8 text-blue-500" />}
              title={benefit.title}
              subtitle={benefit.subtitle}
              description={benefit.description}
              alignStart={benefit.title === "Real Estate Appreciation"}
            >
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName={benefit.containerClassName}
                colors={benefit.colors}
                dotSize={2}
              />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

const Card = ({
  icon,
  title,
  subtitle,
  description,
  children,
  alignStart = false,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  children?: React.ReactNode;
  alignStart?: boolean;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex flex-col items-center justify-start dark:border-white/[0.2] max-w-md w-full mx-auto p-4 relative h-[30rem]"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-blue-500" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-blue-500" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-blue-500" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-blue-500" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
            <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
              <p className="text-white text-center leading-relaxed">
                {description}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 h-full flex flex-col items-center justify-center gap-1">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200">
          {icon}
        </div>
        <h2
          className={`text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[hsl(var(--gradient-start))] to-[hsl(var(--gradient-end))] group-hover/canvas-card:opacity-0 transition duration-200 ${
            alignStart ? "text-left w-full" : "text-center"
          }`}
        >
          {title}
        </h2>
        <p className="text-center text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--gradient-start))] to-[hsl(var(--gradient-end))] group-hover/canvas-card:opacity-0 transition duration-200">
          {subtitle}
        </p>
        <motion.div
          animate={{
            y: [0, -3, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-4 flex flex-col items-center group-hover/canvas-card:opacity-0 transition-opacity bg-gradient-to-r from-[hsl(var(--gradient-start))] to-[hsl(var(--gradient-end))] text-transparent bg-clip-text"
        >
          <Pointer className="w-5 h-5 opacity-30 dark:opacity-50 text-blue-500" />
          <span className="text-md font-semibold opacity-30 dark:opacity-50 text-blue-500">
            Hover me
          </span>
        </motion.div>
      </div>
    </div>
  );
};

const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default Benefits;
