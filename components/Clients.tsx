import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";

export default function Clients() {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading">
        Kind Words from <span className="bg-custom-gradient bg-clip-text text-transparent animate-gradient-move bg-[length:200%_200%]">Satisfied Clients</span>
      </h1>
      <div className="flex flex-col items-center max-lg: mt-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg: mt-10 ">
          {companies.map(({ id, img, name, }) => (
            <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
              <img src={img} alt={name} className="md:w-40 w-28" />
              {/* <img src={nameImg} alt={name} className="md:w-24 w-20" /> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
