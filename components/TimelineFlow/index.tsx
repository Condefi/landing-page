"use client";
import { Timeline } from "@/components/ui/timeline";

const TimelineFlow = () => {
  const timelineData = [
    {
      title: "Crowdfunding",
      content: (
        <div className="bg-white/5 backdrop-blur-lg rounded-lg p-4 md:p-6 space-y-8 md:space-y-72">
          <div className="space-y-2">
            <h4 className="font-semibold text-lg text-foreground">
              Explore & Invest
            </h4>
            <p className="text-card-foreground text-sm md:text-base">
              Browse and invest in diverse real estate crowdfunding
              opportunities through our fund.condefi.com platform, similar to an
              ICO experience for properties.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-lg text-foreground">
              Detailed Information
            </h4>
            <p className="text-card-foreground text-sm md:text-base">
              Each campaign provides comprehensive investment details, project
              timelines, and funding progress updates for your chosen property.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-lg text-foreground">
              Tokenization
            </h4>
            <p className="text-card-foreground text-sm md:text-base">
              Upon successful funding completion, the property is acquired and
              ownership is fractionalized into tokens for investors.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Tokenization",
      content: (
        <div className="bg-white/5 backdrop-blur-lg rounded-lg p-4 md:p-6 space-y-8 md:space-y-72">
          <div className="space-y-2">
            <h4 className="font-semibold text-lg text-foreground">
              Secondary Market
            </h4>
            <p className="text-card-foreground text-sm md:text-base">
              Trade your tokenized property shares on buy.condefi.com, our
              dedicated marketplace for buying, selling, and trading real estate
              tokens.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-lg text-foreground">
              Portfolio Management
            </h4>
            <p className="text-card-foreground text-sm md:text-base">
              Easily adjust your real estate portfolio or exit investments
              through our transparent marketplace that tracks each
              property&apos;s performance.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-lg text-foreground">
              Secure Trading
            </h4>
            <p className="text-card-foreground text-sm md:text-base">
              Trade with confidence in our secure environment designed
              specifically for tokenized real estate transactions.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center py-10 md:py-20 min-h-screen dark:bg-background bg-background relative w-full px-4 lg:px-24">
      <h3 className="text-2xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[hsl(var(--gradient-start))] to-[hsl(var(--gradient-end))] text-center font-sans font-bold">
        How it works
      </h3>
      <Timeline data={timelineData} />
    </div>
  );
};

export default TimelineFlow;
