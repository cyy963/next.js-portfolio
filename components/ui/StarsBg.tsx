"use client";
import { cn } from "@/lib/utils";
import React, {
  useState,
  useEffect,
  useRef,
  RefObject,
  useCallback,
} from "react";

interface StarProps {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  color: string;
  twinkleSpeed: number | null;
  twinklePhase: number; // New: random phase for twinkle timing
}

interface StarBackgroundProps {
  starDensity?: number;
  allStarsTwinkle?: boolean;
  twinkleProbability?: number;
  minTwinkleSpeed?: number;
  maxTwinkleSpeed?: number;
  className?: string;
}

export const StarsBackground: React.FC<StarBackgroundProps> = ({
  starDensity = 0.00045,
  allStarsTwinkle = true,
  twinkleProbability = 0.7,
  minTwinkleSpeed = 0.5,
  maxTwinkleSpeed = 1,
  className,
}) => {
  const [stars, setStars] = useState<StarProps[]>([]);
  const canvasRef: RefObject<HTMLCanvasElement> =
    useRef<HTMLCanvasElement>(null);

  const generateStars = useCallback(
    (width: number, height: number): StarProps[] => {
      const area = width * height;
      const numStars = Math.floor(area * starDensity);

      // Array of colors representing only blue, purple, and pink hues
      const starColors = [
        "#BB86FC", // Light purple
        "#6200EE", // Deep purple
        "#03A9F4", // Light blue
        "#3700B3", // Dark purple
        "#F48FB1", // Pink
        "#B39DDB", // Lavender
        "#5C6BC0", // Soft blue
      ];

      return Array.from({ length: numStars }, () => {
        const shouldTwinkle =
          allStarsTwinkle || Math.random() < twinkleProbability;

        // Random color from the starColors array
        const color = starColors[Math.floor(Math.random() * starColors.length)];

        // Adjust size so that most stars are small, and bigger stars are only slightly larger
        const isLargeStar = Math.random() < 0.05; // 5% chance for a larger star
        const radius = isLargeStar
          ? Math.random() * 1.0 + 0.6 // Slightly larger stars (max radius 1.6)
          : Math.random() * 0.4 + 0.2; // Smaller stars (max radius 0.6)

        // New: Assign random phase to make twinkle timing independent
        const twinklePhase = Math.random() * Math.PI * 2; // Random phase between 0 and 2π

        return {
          x: Math.random() * width,
          y: Math.random() * height,
          radius,
          opacity: Math.random() * 0.5 + 0.5,
          color,
          twinkleSpeed: shouldTwinkle
            ? minTwinkleSpeed +
              Math.random() * (maxTwinkleSpeed - minTwinkleSpeed)
            : null,
          twinklePhase, // Assign random twinkle phase
        };
      });
    },
    [
      starDensity,
      allStarsTwinkle,
      twinkleProbability,
      minTwinkleSpeed,
      maxTwinkleSpeed,
    ]
  );

  useEffect(() => {
    const updateStars = () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const { width, height } = canvas.getBoundingClientRect();
        canvas.width = width;
        canvas.height = height;
        setStars(generateStars(width, height));
      }
    };

    updateStars();

    const resizeObserver = new ResizeObserver(updateStars);
    if (canvasRef.current) {
      resizeObserver.observe(canvasRef.current);
    }

    return () => {
      if (canvasRef.current) {
        resizeObserver.unobserve(canvasRef.current);
      }
    };
  }, [
    starDensity,
    allStarsTwinkle,
    twinkleProbability,
    minTwinkleSpeed,
    maxTwinkleSpeed,
    generateStars,
  ]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const time = Date.now() * 0.001;

      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${parseInt(star.color.slice(1, 3), 16)}, 
                             ${parseInt(star.color.slice(3, 5), 16)}, 
                             ${parseInt(star.color.slice(5, 7), 16)}, 
                             ${star.opacity})`;
        ctx.fill();

        // Randomized twinkle based on the twinkle phase and speed
        if (star.twinkleSpeed !== null) {
          star.opacity =
            0.5 +
            Math.abs(
              Math.sin((time / star.twinkleSpeed) + star.twinklePhase) * 0.5
            );
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [stars]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("h-full w-full absolute inset-0", className)}
    />
  );
};
