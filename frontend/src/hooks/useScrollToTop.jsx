import { useEffect, useState } from "react";
export function useScrollToTop() {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const mainSection = document.querySelector(".main");
      const threshold = mainSection.getBoundingClientRect().bottom;

      setShowButton(threshold <= 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return { showButton };
}
