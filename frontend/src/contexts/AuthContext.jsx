import { createContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [userEmail, setUserEmail] = useState("kaanpmete@gmail.com");
  const [userPassword, setUserPassword] = useState("123456");
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    birthDate: "",
    gender: "man",
    genderPreference: "woman",
    about: "",
    photo: "",
  });
  const handleSetNewUser = (e) => {
    const { name, value } = e.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };
  return (
    <AuthContext.Provider
      value={{
        userEmail,
        userPassword,
        onSetUserEmail: setUserEmail,
        onSetUserPassword: setUserPassword,
        newUser,
        onHandleSetNewUser: handleSetNewUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
