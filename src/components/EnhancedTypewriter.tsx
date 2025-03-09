
import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface EnhancedTypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
  className?: string;
  cursorClassName?: string;
  infinite?: boolean;
}

const EnhancedTypewriter: React.FC<EnhancedTypewriterProps> = ({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenWords = 1500,
  className = "",
  cursorClassName = "",
  infinite = true,
}) => {
  const [currentWord, setCurrentWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [isTypingPaused, setIsTypingPaused] = useState(false);
  
  useEffect(() => {
    if (!words.length) return;
    
    const currentFullWord = words[wordIndex];
    
    const handleTyping = () => {
      // Typing logic
      if (!isDeleting && currentWord === currentFullWord) {
        // Finished typing the word
        setIsTypingPaused(true);
        setTimeout(() => {
          setIsTypingPaused(false);
          setIsDeleting(true);
        }, delayBetweenWords);
        return;
      }

      // Deleting logic
      if (isDeleting && currentWord === "") {
        // Finished deleting the word
        setIsDeleting(false);
        setWordIndex((prev) => {
          if (prev === words.length - 1) {
            return infinite ? 0 : prev;
          }
          return prev + 1;
        });
        return;
      }

      // Set timeout for typing or deleting
      const timeout = setTimeout(() => {
        if (isDeleting) {
          // Delete a character
          setCurrentWord((prev) => prev.substring(0, prev.length - 1));
        } else {
          // Add a character
          setCurrentWord((prev) => 
            currentFullWord.substring(0, prev.length + 1)
          );
        }
      }, isDeleting ? deletingSpeed : typingSpeed);

      return () => clearTimeout(timeout);
    };

    if (!isTypingPaused) {
      const timeout = handleTyping();
      return () => {
        if (timeout) clearTimeout(timeout);
      };
    }
  }, [
    words, 
    wordIndex, 
    currentWord, 
    isDeleting, 
    isTypingPaused, 
    typingSpeed, 
    deletingSpeed, 
    delayBetweenWords, 
    infinite
  ]);

  return (
    <span className={className}>
      {currentWord}
      <span className={cn("animate-blink-cursor", cursorClassName)}>|</span>
    </span>
  );
};

export default EnhancedTypewriter;
