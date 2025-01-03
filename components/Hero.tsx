import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
// import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { ShootingStars } from "./ui/ShootingStars";
import { StarsBackground } from "./ui/StarsBg";

export default function Hero() {
  return (
    <div className="mb-28 mt-56 md:mt-72">
      <ShootingStars />
      <StarsBackground />
      {/* <div>
        
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div> */}
      {/* <div
        className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center 
      justify-center absolute top-0 left-0"
      >
        <ShootingStars />
        <StarsBackground />
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white 
        [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div> */}
      <div className="flex justify-center relative  z-10">
        <div className="max-w-[90vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue">
            Dynamic Web Magic built with Next.js & Tailwind
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Transforming Concepts into Seamless User-Experiences"
          />

          <p className="text-center md:tracking-wider mb-10 text-sm font-medium md:text-lg lg:text-2xl">
            Hi, I&apos;m Cyrus, a Full Stack Developer based in New Zealand
          </p>
          <a href="#projects">
            <MagicButton
              title="My Recent Projects"
              icon={<FaLocationArrow className="rotate-[135deg] mb-1"/>}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
