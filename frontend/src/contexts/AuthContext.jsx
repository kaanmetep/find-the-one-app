import { createContext, useState } from "react";
import { authEndpointUrl } from "../constants";
const AuthContext = createContext();
function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [signUpError, setSignUpError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [currUser, setCurrUser] = useState({
    currUserEmail: "",
    currUserPassword: "",
  });

  const handleCurrUser = (e) => {
    const { name, value } = e.target;
    setCurrUser({ ...currUser, [name]: value });
  };
  const signup = async (newUser) => {
    try {
      setIsLoading(true);
      const response = await fetch(`${authEndpointUrl}/signup`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
      const responseData = await response.json();
      setIsLoading(false);
      if (response.ok) {
        localStorage.setItem("jwt", responseData.token);
        setIsAuthenticated(true);
        setSignUpError("");
      } else {
        console.log(responseData);
        setSignUpError(responseData.result);
      }
    } catch (err) {
      console.log(err.message);
    } finally {
      setIsLoading(false);
    }
  };
  const login = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${authEndpointUrl}/login`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(currUser),
      });
      const responseData = await response.json();
      setIsLoading(false);
      if (response.ok) {
        localStorage.setItem("jwt", responseData.token);
        setIsAuthenticated(true);
        setLoginError("");
      } else {
        console.log(responseData);
        setLoginError(responseData.result);
      }
    } catch (err) {
      console.log(err.message);
    } finally {
      setIsLoading(false);
    }
  };
  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("jwt");
  };
  return (
    <AuthContext.Provider
      value={{
        currUser,
        onHandleCurrUser: handleCurrUser,
        signup,
        isAuthenticated,
        logout,
        login,
        onSetIsAuthenticated: setIsAuthenticated,
        loginError,
        signUpError,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
