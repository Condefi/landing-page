"use client";

import appStore from "@/assets/app-store.svg";
import playStore from "@/assets/google-play.svg";
import Image from "next/image";

const DownloadApp = () => {
  return (
    <div className="py-10 md:py-20 px-4 md:px-24 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[hsl(var(--gradient-start))] to-[hsl(var(--gradient-end))] text-center font-sans font-bold">
            Download Our Mobile App
          </h2>
          <p className="mt-2 md:mt-4 text-base md:text-lg text-foreground max-w-2xl mx-auto px-4">
            Manage your investments and trade tokenized assets on the go
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-start gap-4">
          <Image
            src={appStore}
            alt="App Store"
            className="w-40 h-auto object-contain cursor-pointer"
          />
          <Image
            src={playStore}
            alt="Play Store"
            className="w-40 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
