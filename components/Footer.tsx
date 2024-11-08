import MagicButton from "./ui/MagicButton";
import { socialMedia } from "@/data";
import { BackgroundGradientAnimation } from "./ui/GradientBg";
import Lottie from "react-lottie";
import animationData from "@/data/confetti.json";
import { useState } from "react";
import { SiMinutemailer } from "react-icons/si";

export default function Footer() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    // Set the clicked state to true to trigger the animation
    setClicked(true);

    // Delay the mailto action to allow the animation to play
    setTimeout(() => {
      window.location.href = "mailto:cyrusw369@gmail.com";
    }, 1000); // Adjust the delay time (in ms) if necessary

    // Reset the clicked state to false after 3 seconds (3000ms)
    setTimeout(() => {
      setClicked(false);
      console.log({clicked})
    }, 5000); // 3000 ms = 3 seconds
  };
  return (
    <footer className="w-full flex flex-col items-center mt-16 mb-20" id="contact">
      <div className="flex flex-col items-center justify-center gap-10">
      {/* <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:contact@jsmastery.pro">
          <MagicButton
            title="Let's get in touch"
            icon={<SiMinutemailer />}
            position="right"
          />
        </a> */}

        <div className="relative flex justify-center items-center overflow-hidden h-[400px] md:w-[500px] w-[90%] rounded-3xl border border-white/[0.1]">
          <BackgroundGradientAnimation></BackgroundGradientAnimation>
          <div className="relative h-full w-full flex justify-evenly items-center flex-col">
            <div className="font-sans font-bold text-3xl md:text-4xl lg:text-5xl w-3/4 z-10 text-center">
              Ready to take your digital presence to the next level?
            </div>
            <div className="absolute z-500">
              <Lottie
                options={{
                  loop: clicked,
                  autoplay: clicked,
                  animationData: animationData,
                  rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice",
                  },
                }}
              />
            </div>
            <div className="z-300">
              <MagicButton
                title="Send me an e-mail"
                icon={<SiMinutemailer  />}
                position="right"
                handleClick={handleClick}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-[80%] mt-16 md:flex-row justify-between items-center gap-9 flex-col-reverse">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Skywalker.Design
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <a
              key={profile.id}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border-2 border-white-100"
            >
              <img
                src={profile.img}
                alt={`icon-${profile.id}`}
                width={22}                
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
