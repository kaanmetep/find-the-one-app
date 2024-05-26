import { createContext, useState } from "react";
import { resizeFile, dataURItoBlob } from "../utils";
import { authEndpointUrl } from "../constants";
const AuthContext = createContext();
function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [signUpError, setSignUpError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [currUser, setCurrUser] = useState({
    currUserEmail: "kaanpmete@gmail.com",
    currUserPassword: "123456",
  });
  const [newUser, setNewUser] = useState({
    email: "",
    hashedPassword: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    birthDate: "",
    gender: "man",
    genderPreference: "woman",
    about: "",
    instagramUsername: "",
    photo: null,
  });

  const handleImage = async (name, value, e) => {
    let file = e.target.files[0];
    const resizedImage = await resizeFile(file);
    const reader = new FileReader();
    reader.onload = (e) => {
      setNewUser({ ...newUser, [name]: e.target.result });
      console.log(e.target.result);
    };
    reader.readAsDataURL(dataURItoBlob(resizedImage));
  };
  const handleSetNewUser = (e) => {
    const { name, value } = e.target;
    if (name === "photo") {
      handleImage(name, value, e);
    } else {
      setNewUser({
        ...newUser,
        [name]: value,
      });
    }
  };
  const handleCurrUser = (e) => {
    const { name, value } = e.target;
    setCurrUser({ ...currUser, [name]: value });
  };
  const signup = async () => {
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
        console.log("user is created successfully.");
        console.log(responseData.token);
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
        console.log("user is logged in succesfully");
        console.log(responseData);
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
        newUser,
        onHandleSetNewUser: handleSetNewUser,
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
