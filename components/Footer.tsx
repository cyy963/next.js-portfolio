// import { FaLocationArrow } from "react-icons/fa6";
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
    }, 3000); // 3000 ms = 3 seconds
  };
  return (
    <footer className="w-full pt-5 mb-[30px] pb-10" id="contact">
      <div className="flex flex-col items-center justify-center gap-10">
        {/* <h1 className="heading lg:max-w-[45vw]">
          Ready to take{" "}
          <span className="bg-custom-gradient bg-clip-text text-transparent animate-gradient-move bg-[length:200%_200%]">
            your
          </span>{" "}
          digital presence to the next level?
        </h1> */}

        <div className="relative flex justify-center items-center overflow-hidden h-[400px] md:w-[500px] w-[90%] rounded-3xl border border-white/[0.1]">
          <BackgroundGradientAnimation></BackgroundGradientAnimation>
          <div className="relative h-full w-full flex justify-evenly items-center flex-col">
            {/* <div className="absolute -bottom-9 -right-[120px]"> */}
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
          {/* </div> */}
        </div>
      </div>
      <div className="flex mt-16 md:flex-row justify-between items-center gap-9 flex-col-reverse">
        <p className="md:text-base text-sm md:font-normal font-light">
          COPYRIGHT © 2024 CYRUSKYWALKER
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
                width={25}
                height={25}
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
