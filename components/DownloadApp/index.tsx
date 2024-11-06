"use client";

import appStore from "@/public/assets/app-store.png";
import playStore from "@/public/assets/google-play.png";
import Image from "next/image";

const DownloadApp = () => {
  return (
    <div className="py-20 px-24 bg-background ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[hsl(var(--gradient-start))] to-[hsl(var(--gradient-end))] text-center font-sans font-bold">
            Download Our Mobile App
          </h2>
          <p className="mt-4 text-lg text-foreground max-w-2xl mx-auto">
            Manage your investments and trade tokenized assets on the go
          </p>
        </div>

        <div className="flex flex-row justify-center gap-4">
          <Image
            src={appStore}
            alt="App Store"
            className="w-32 cursor-pointer"
          />
          <Image
            src={playStore}
            alt="Play Store"
            className="w-32 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
