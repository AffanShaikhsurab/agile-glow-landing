
import React, { useRef, useEffect, useState, ReactNode } from "react";

interface AnimatedContentProps {
  children: ReactNode;
  direction?: "vertical" | "horizontal";
  distance?: number;
  duration?: number;
  delay?: number;
  once?: boolean;
  className?: string;
  threshold?: number;
  reverse?: boolean;
}

export const AnimatedContent: React.FC<AnimatedContentProps> = ({
  children,
  direction = "vertical",
  distance = 50,
  duration = 0.6,
  delay = 0,
  once = true,
  className = "",
  threshold = 0.1,
  reverse = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: "0px",
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [once, threshold]);

  // Define the starting transform based on direction
  const getStartTransform = () => {
    if (direction === "vertical") {
      return reverse ? `translateY(-${distance}px)` : `translateY(${distance}px)`;
    } else {
      return reverse ? `translateX(-${distance}px)` : `translateX(${distance}px)`;
    }
  };

  const style = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translate(0, 0)" : getStartTransform(),
    transition: `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`,
  };

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
};

export default AnimatedContent;
