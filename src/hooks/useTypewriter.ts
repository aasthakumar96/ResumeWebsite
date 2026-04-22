import { useEffect, useState } from "react";

export function useTypewriter(words: string[], speed = 90, pause = 1300) {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const activeWord = words[wordIndex % words.length];
    const isWordComplete = displayedText === activeWord;
    const isWordEmpty = displayedText.length === 0;

    const timeout = window.setTimeout(
      () => {
        if (!isDeleting && !isWordComplete) {
          setDisplayedText(activeWord.slice(0, displayedText.length + 1));
          return;
        }

        if (!isDeleting && isWordComplete) {
          setIsDeleting(true);
          return;
        }

        if (isDeleting && !isWordEmpty) {
          setDisplayedText(activeWord.slice(0, displayedText.length - 1));
          return;
        }

        setIsDeleting(false);
        setWordIndex((current) => (current + 1) % words.length);
      },
      isDeleting ? speed / 2 : isWordComplete ? pause : speed,
    );

    return () => window.clearTimeout(timeout);
  }, [displayedText, isDeleting, pause, speed, wordIndex, words]);

  return displayedText;
}
