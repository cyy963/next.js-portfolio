import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

export default function Grid() {
  return (    
    <div id="about" className="mb-28 mt-16">
      <BentoGrid>
        {gridItems.map(({id, title, description, className, img, imgClassName, titleClassName, spareImg }) => (
          <BentoGridItem 
            id={id}
            key={id}
            title={title}
            description={description}
            className={className}
            img={img}
            imgClassName={imgClassName}
            titleClassName={titleClassName}
            spareImg={spareImg}
          />
        ))}
      </BentoGrid>
    </div>
  )
}