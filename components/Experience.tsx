import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorder";

export default function Experience() {
  return (
    <div className="my-28" id="experience">

      <h1 className="heading">
      {/* <BackgroundGradientAnimation> */}
        My <span className="bg-custom-gradient bg-clip-text text-transparent animate-gradient-move bg-[length:200%_200%]">Experience</span>
      {/* </BackgroundGradientAnimation> */}
      </h1>
      <div className="w-full mt-16 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            className="flex-1 text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:items-center p-4 md:p-5 lg:p-10 gap-4">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-24"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-10 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
}
