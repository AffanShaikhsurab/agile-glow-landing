
import React, { useState, useEffect, useRef } from "react";

interface TypewriterTextProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
  cursor?: boolean;
  onComplete?: () => void;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  className = "",
  speed = 50,
  delay = 0,
  cursor = true,
  onComplete,
}) => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    // Initial delay before typing starts
    timeoutRef.current = setTimeout(() => {
      setIsTyping(true);
      timeoutRef.current = null;
    }, delay);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [delay, text]);

  useEffect(() => {
    let charIndex = 0;
    
    if (!isTyping) return;

    const typeNextChar = () => {
      if (charIndex <= text.length) {
        setDisplayText(text.substring(0, charIndex));
        charIndex++;
        timeoutRef.current = setTimeout(typeNextChar, speed);
      } else {
        if (onComplete) onComplete();
      }
    };

    typeNextChar();

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isTyping, onComplete, speed, text]);

  return (
    <span className={className}>
      {displayText}
      {cursor && (
        <span 
          ref={cursorRef} 
          className={`border-r-2 ml-1 animate-blink-cursor ${displayText.length === text.length ? 'opacity-0' : ''}`}
          style={{ height: '1em', display: 'inline-block' }}
        >
          &nbsp;
        </span>
      )}
    </span>
  );
};

export default TypewriterText;
