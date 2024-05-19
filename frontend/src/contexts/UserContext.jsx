import { createContext, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useAuth } from "../hooks/useAuth";

const UserContext = createContext();

function UserProvider({ children }) {
  const [newPassword, setNewPassword] = useState("");
  const [newRePassword, setNewRePassword] = useState("");
  const [response, setResponse] = useState("");
  const [passwordChangeIsLoading, setPasswordChangeIsLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [userData, setUserData] = useState({});
  const [users, setUsers] = useState([]);
  const { onSetIsAuthenticated } = useAuth();
  let decoded;
  if (localStorage.getItem("jwt")) {
    const token = localStorage.getItem("jwt");

    decoded = jwtDecode(token) || null;
  }

  const getUsers = async (data) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/v1/users?personelDetails.genderIdentity=${data.personelDetails.genderInterest}&excludeId=${data._id}`
      );
      const responseData = await response.json();
      setUsers(responseData.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleUserData = async () => {
    try {
      setIsLoading(true);

      const response = await fetch(
        `http://localhost:3000/api/v1/user/${decoded.id}`
      );
      const responseData = await response.json();
      setIsLoading(false);
      if (response.ok) {
        setUserData(responseData);
        return responseData.data;
      } else {
        console.log(responseData);
        setError(true);
      }
    } catch (err) {
      console.log(err.message);
    } finally {
      setIsLoading(false);
    }
  };
  const deleteUser = async () => {
    try {
      setIsLoading(true);

      const response = await fetch(
        `http://localhost:3000/api/v1/user/${decoded.id}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      const responseData = await response.json();
      setIsLoading(false);
      if (response.ok) {
        onSetIsAuthenticated(false);
        localStorage.removeItem("jwt");
      } else {
        console.log(responseData);
        setError(true);
      }
    } catch (err) {
      console.log(err.message);
    } finally {
      setIsLoading(false);
    }
  };
  const updateUserPassword = async () => {
    try {
      setPasswordChangeIsLoading(true);

      const response = await fetch(
        `http://localhost:3000/api/v1/user/${decoded.id}/password`,
        {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            newPassword,
            newRePassword,
          }),
        }
      );
      const responseData = await response.json();
      setPasswordChangeIsLoading(false);
      if (response.ok) {
        setResponse(responseData.data);
      } else {
        console.log(responseData);
        setError(true);
      }
    } catch (err) {
      console.log(err.message);
    } finally {
      setPasswordChangeIsLoading(false);
    }
  };
  const likeUser = async (likedUserId) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/v1/user/${decoded.id}/${likedUserId}/like`,
        {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      const responseData = await response.json();
      console.log(responseData);
    } catch (err) {
      console.log(err.message);
    }
  };
  const dislikeUser = async (dislikedUserId) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/v1/user/${decoded.id}/${dislikedUserId}/dislike`,
        {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      const responseData = await response.json();
      console.log(responseData);
    } catch (err) {
      console.log(err.message);
    }
  };
  const updateUserInfo = async (userInfoObj) => {
    try {
      setIsLoading(true);

      const response = await fetch(
        `http://localhost:3000/api/v1/user/${decoded.id}/info`,
        {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(userInfoObj),
        }
      );
      const responseData = await response.json();
      setIsLoading(false);
      setResponse(responseData.message);

      console.log(responseData);
    } catch (err) {
      console.log(err.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <UserContext.Provider
      value={{
        isLoading,
        error,
        handleUserData,
        userData,
        deleteUser,
        updateUserPassword,
        response,
        onSetResponse: setResponse,
        newPassword,
        newRePassword,
        onSetNewPassword: setNewPassword,
        onSetNewRePassword: setNewRePassword,
        passwordChangeIsLoading,
        users,
        getUsers,
        likeUser,
        dislikeUser,
        updateUserInfo,
        setUsers,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext };
