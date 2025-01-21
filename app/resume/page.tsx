"use client"; // This is necessary if you're using client-side features

import Image from "next/image";
import React from "react";
import { WobbleCard } from "../components/ui/wobble-card";
import socialbeings from "../images/socialbeingscropped.png";
import socialbeing2 from "../images/socialbeingscropped2.png";

// This is your main component
const WobbleCardDemo = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full mt-40">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance font-mono text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            P r o f i l e
          </h2>
          <p className="mt-4 text-left text-sm font-mono text-base/6 text-neutral-200">
            I am a passionate and obsessed Software Engineer with a little experience but have shown to be able to handle big projects which initially were beyond my scope of expertise. I have a desire to progress my career in the same way technology progresses.
          </p>
        </div>
        <Image
          src={socialbeings}
          width={500}
          height={10}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80 text-left font-mono text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          W O R K E X P E R I E N C E
        </h2>
        <p className="mt-4 max-w-[26rem] text-left text-sm font-mono text-base/6 text-neutral-200">
          Zimpost Ltd Pvt<br />
          February 2023 - February 2024<br />
          INTERN<br />
          Networking<br />
          System Maintenance<br />
          Web development<br />
          Server Administration<br />
          Cybersecurity
        </p>
        <br />
        <p className="mt-4 max-w-[26rem] text-left text-sm font-mono text-base/6 text-neutral-200">
          263tickets<br />
          February 2024 - Present<br />
          JUNIOR SOFTWARE ENGINEER<br />
          Application Programming Interface (API) development.<br />
          Android Application development in Java and Flutter.<br />
          Web development<br />
          Testing and debugging
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg font-mono text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            S k i l l s
          </h2>
          <p className="mt-4 max-w-[26rem] text-left font-mono text-base/6 text-neutral-200">
            Knowledge of the systems architecture<br />
            Communication skills<br />
            Problem-solving skills<br />
            Organization and time management skills<br />
            Ability to learn new programming languages fast
          </p>
        </div>
        <Image
          src={socialbeing2}
          width={500}
          height={100}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
};

// Default export for the Next.js page
export default WobbleCardDemo;