"use client";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const WhyInvest = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 md:py-20 min-h-screen dark:bg-background bg-background relative w-full px-4 lg:px-24">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-2xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[hsl(var(--gradient-start))] to-[hsl(var(--gradient-end))] text-left font-sans font-bold mb-12"
        >
          Why Invest in Tokenized Condotels?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Card
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8 text-blue-500"
              >
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
              </svg>
            }
            title="Trusted Quality"
            subtitle="Managed by reputable hotel brands"
            description="Our condotels are managed by internationally recognized hotel brands, ensuring consistent quality maintenance, professional service standards, and a strong market reputation. This partnership guarantees that your investment is maintained to the highest industry standards, potentially increasing property value over time."
          >
            <CanvasRevealEffect
              animationSpeed={5}
              containerClassName="bg-emerald-900"
              colors={[
                [59, 130, 246],
                [139, 92, 246],
              ]}
              dotSize={3}
            />
          </Card>

          <Card
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8 text-blue-500"
              >
                <circle cx="8" cy="8" r="6"></circle>
                <path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path>
                <path d="M7 6h1v4"></path>
                <path d="m16.71 13.88.7.71-2.82 2.82"></path>
              </svg>
            }
            title="Fractional Ownership"
            subtitle="Accessible real estate investment"
            description="Through innovative tokenization technology, we've made luxury real estate investment accessible to everyone. Start with a smaller investment and gradually build your portfolio. This revolutionary approach eliminates traditional barriers to entry while maintaining all the benefits of property ownership."
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-sky-600"
              colors={[
                [236, 72, 153],
                [232, 121, 249],
              ]}
              dotSize={2}
            />
          </Card>
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
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex flex-col items-center justify-start dark:border-white/[0.2] max-w-lg w-full mx-auto p-4 relative h-[30rem]"
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

      <div className="relative z-20 h-full flex flex-col items-center justify-center gap-4">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200">
          {icon}
        </div>
        <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[hsl(var(--gradient-start))] to-[hsl(var(--gradient-end))] group-hover/canvas-card:opacity-0 transition duration-200">
          {title}
        </h2>
        <p className="text-center text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--gradient-start))] to-[hsl(var(--gradient-end))] group-hover/canvas-card:opacity-0 transition duration-200">
          {subtitle}
        </p>
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

export default WhyInvest;
