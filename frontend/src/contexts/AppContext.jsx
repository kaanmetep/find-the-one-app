import { createContext, useState } from "react";

const AppContext = createContext();

function AppProvider({ children }) {
  const [showLogInPopUp, setShowLogInPopUp] = useState(false);
  const [showFilterAge, setShowFilterAge] = useState(false);
  return (
    <AppContext.Provider
      value={{
        showLogInPopUp,
        onSetShowLogInPopUp: setShowLogInPopUp,
        showFilterAge,
        onSetShowFilterAge: setShowFilterAge,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppProvider, AppContext };
