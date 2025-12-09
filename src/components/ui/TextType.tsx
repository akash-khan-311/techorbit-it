/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import {
  ElementType,
  useEffect,
  useState,
  useRef,
  useMemo,
  useCallback,
  createElement,
} from "react";
import { gsap } from "gsap";

interface TextTypeProps {
  className?: string;
  showCursor?: boolean;
  hideCursorWhileTyping?: boolean;
  cursorCharacter?: string | React.ReactNode;
  cursorBlinkDuration?: number;
  cursorClassName?: string;
  text: string | string[];
  as?: ElementType;
  typingSpeed?: number;
  initialDelay?: number;
  pauseDuration?: number;
  deletingSpeed?: number;
  loop?: boolean;
  textColors?: string[];
  variableSpeed?: { min: number; max: number };
  startOnVisible?: boolean;
  reverseMode?: boolean;
}

const TextType = ({
  text,
  as: Component = "div",
  typingSpeed = 50,
  initialDelay = 0,
  pauseDuration = 2000,
  deletingSpeed = 30,
  loop = false, // একবারের জন্য default false
  className = "",
  showCursor = true,
  hideCursorWhileTyping = false,
  cursorCharacter = "|",
  cursorClassName = "",
  cursorBlinkDuration = 0.5,
  textColors = [],
  variableSpeed,
  startOnVisible = true,
  reverseMode = false,
}: TextTypeProps & React.HTMLAttributes<HTMLElement>) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isVisible, setIsVisible] = useState(!startOnVisible);
  const [completedOnce, setCompletedOnce] = useState(false);

  const cursorRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLElement>(null);

  const textArray = useMemo(
    () => (Array.isArray(text) ? text : [text]),
    [text]
  );

  const getRandomSpeed = useCallback(() => {
    if (!variableSpeed) return typingSpeed;
    const { min, max } = variableSpeed;
    return Math.random() * (max - min) + min;
  }, [variableSpeed, typingSpeed]);

  const getCurrentTextColor = () => {
    if (!textColors.length) return "#ffffff";
    return textColors[currentTextIndex % textColors.length];
  };

  // Scroll visibility trigger
  useEffect(() => {
    if (!startOnVisible || !containerRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [startOnVisible]);

  // Cursor animation
  useEffect(() => {
    if (!showCursor || !cursorRef.current) return;
    gsap.set(cursorRef.current, { opacity: 1 });
    gsap.to(cursorRef.current, {
      opacity: 0,
      duration: cursorBlinkDuration,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    });
  }, [showCursor, cursorBlinkDuration]);

  // Typing effect
  useEffect(() => {
    if (!isVisible || completedOnce) return;

    let timeout: NodeJS.Timeout;
    const currentText = textArray[currentTextIndex];
    const processedText = reverseMode
      ? currentText.split("").reverse().join("")
      : currentText;

    const type = () => {
      if (isDeleting) {
        if (displayedText === "") {
          setIsDeleting(false);
          if (!loop) setCompletedOnce(true);
        } else {
          timeout = setTimeout(() => {
            setDisplayedText((prev) => prev.slice(0, -1));
          }, deletingSpeed);
        }
      } else {
        if (currentCharIndex < processedText.length) {
          timeout = setTimeout(
            () => {
              setDisplayedText(
                (prev) => prev + processedText[currentCharIndex]
              );
              setCurrentCharIndex((prev) => prev + 1);
            },
            variableSpeed ? getRandomSpeed() : typingSpeed
          );
        } else {
          if (!loop) setCompletedOnce(true);
        }
      }
    };

    if (currentCharIndex === 0 && displayedText === "" && !isDeleting) {
      timeout = setTimeout(type, initialDelay);
    } else {
      type();
    }

    return () => clearTimeout(timeout);
  }, [
    isVisible,
    currentCharIndex,
    displayedText,
    isDeleting,
    textArray,
    currentTextIndex,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    loop,
    initialDelay,
    variableSpeed,
    getRandomSpeed,
    reverseMode,
    completedOnce,
  ]);

  const hideCursor =
    hideCursorWhileTyping &&
    (currentCharIndex < textArray[currentTextIndex].length || isDeleting);

  return createElement(
    Component,
    {
      ref: containerRef,
      className: ` whitespace-pre-wrap ${className}`,
    },
    <span style={{ color: getCurrentTextColor() }}>{displayedText}</span>,
    showCursor && !hideCursor && (
      <span ref={cursorRef} className={`ml-1 hidden  ${cursorClassName}`}>
        {cursorCharacter}
      </span>
    )
  );
};

export default TextType;
