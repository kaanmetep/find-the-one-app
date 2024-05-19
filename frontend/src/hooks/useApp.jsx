import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined)
    throw new Error("AppContext was used outside of the AppProvider");
  return context;
}
