import { createContext, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useAuth } from "../hooks/useAuth";
import { usersEndpointUrl, matchEndpointUrl } from "../constants.js";

const UserContext = createContext();

function UserProvider({ children }) {
  const [response, setResponse] = useState("");
  const [passwordChangeIsLoading, setPasswordChangeIsLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingTotalLikes, setIsLoadingTotalLikes] = useState(false);
  const [isLoadingUsers, setIsLoadingUsers] = useState(false);
  const [error, setError] = useState(false);
  const [userData, setUserData] = useState({});
  const [users, setUsers] = useState([]);
  const [totalLikedByPeople, setTotalLikedByPeople] = useState();
  const { onSetIsAuthenticated } = useAuth();
  let decoded;
  if (localStorage.getItem("jwt")) {
    const token = localStorage.getItem("jwt");

    decoded = jwtDecode(token) || null;
  }

  const filterUsersByAge = async (data) => {
    try {
      setIsLoadingUsers(true);
      const response = await fetch(
        `${usersEndpointUrl}?personelDetails.genderIdentity=${userData.data.personelDetails.genderInterest}&excludeId=${userData.data._id}&age=${data.min}-${data.max}`
      );
      const responseData = await response.json();
      setUsers(responseData.data);
      setIsLoadingUsers(false);
    } catch (err) {
      console.log(err.message);
    }
  };

  const getUsers = async (data) => {
    try {
      setIsLoadingUsers(true);
      const response = await fetch(
        `${usersEndpointUrl}?personelDetails.genderIdentity=${data.personelDetails.genderInterest}&excludeId=${data._id}`
      );
      const responseData = await response.json();
      setUsers(responseData.data);
      setIsLoadingUsers(false);
    } catch (err) {
      console.log(err.message);
    }
  };
  const getUsersByIds = async (ids) => {
    try {
      const response = await fetch(`${usersEndpointUrl}?ids=${ids.join(",")}`);
      const responseData = await response.json();
      return responseData.data;
    } catch (err) {
      console.log(err.message);
    }
  };

  const getTotalLikedByPeople = async (data) => {
    try {
      setIsLoadingTotalLikes(true);
      let totalLikedByPeople;
      const response = await fetch(
        `${usersEndpointUrl}?personelDetails.genderIdentity=${data.personelDetails.genderInterest}`
      );
      const responseData = await response.json();
      totalLikedByPeople = responseData.data.reduce((acc, curr) => {
        if (curr.likedUsers.includes(data._id)) {
          return acc + 1;
        }
        return acc;
      }, 0);
      setTotalLikedByPeople(totalLikedByPeople);
      setIsLoadingTotalLikes(false);
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleUserData = async (userId = null) => {
    try {
      setIsLoading(true);

      const response = await fetch(
        `${usersEndpointUrl}/${userId === null ? decoded.id : userId}`
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

      const response = await fetch(`${usersEndpointUrl}/${decoded.id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      });
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
  const updateUserPassword = async (newPassword, newRePassword) => {
    try {
      setPasswordChangeIsLoading(true);

      const response = await fetch(
        `${usersEndpointUrl}/${decoded.id}/password`,
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
        setResponse(responseData.message);
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
        `${usersEndpointUrl}/${decoded.id}/${likedUserId}/like`,
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
        `${usersEndpointUrl}/${decoded.id}/${dislikedUserId}/dislike`,
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

      const response = await fetch(`${usersEndpointUrl}/${decoded.id}/info`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(userInfoObj),
      });
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
  const addMatch = async (userId, matchId) => {
    try {
      const response = await fetch(
        `${usersEndpointUrl}/${userId}/${matchId}/match`,
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
  const createMatch = async (matchInfo) => {
    try {
      const response = await fetch(`${matchEndpointUrl}`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(matchInfo),
      });
      const responseData = await response.json();
      console.log(responseData);
      return responseData.data._id;
    } catch (err) {
      console.log(err.message);
    }
  };
  const deleteMatch = async (matchId) => {
    try {
      const response = await fetch(`${matchEndpointUrl}/${matchId}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      });
    } catch (err) {
      console.log(err.message);
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
        passwordChangeIsLoading,
        users,
        getUsers,
        likeUser,
        dislikeUser,
        updateUserInfo,
        setUsers,
        getTotalLikedByPeople,
        totalLikedByPeople,
        isLoadingTotalLikes,
        createMatch,
        addMatch,
        getUsersByIds,
        isLoadingUsers,
        filterUsersByAge,
        deleteMatch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext };
