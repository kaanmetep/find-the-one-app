import { createContext, useState } from "react";

const AppContext = createContext();

function AppProvider({ children }) {
  const [showLogInPopUp, setShowLogInPopUp] = useState(false);
  const [showFilterAge, setShowFilterAge] = useState(false);
  const [supFirstName, setSupFirstName] = useState("");
  const [supEmail, setSupEmail] = useState("");
  const [supMessage, setSupMessage] = useState("");
  return (
    <AppContext.Provider
      value={{
        showLogInPopUp,
        onSetShowLogInPopUp: setShowLogInPopUp,
        showFilterAge,
        onSetShowFilterAge: setShowFilterAge,
        supFirstName,
        supEmail,
        supMessage,
        onSetSupFirstName: setSupFirstName,
        onSetSupEmail: setSupEmail,
        onSetSupMessage: setSupMessage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppProvider, AppContext };
