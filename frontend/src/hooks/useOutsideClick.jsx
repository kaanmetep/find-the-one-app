import { useEffect } from "react";
export function useOutsideClick(handleFunc) {
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest(".popup")) {
        handleFunc(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  });
}
