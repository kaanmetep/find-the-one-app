import { useUser } from "../hooks/useUser";
import { useEffect, useState } from "react";
import { useApp } from "../hooks/useApp";
import UserInfoCard from "./UserInfoCard";
function Matches() {
  const [matchedUsers, setMatchedUsers] = useState([]);
  const [matchInfo, setMatchInfo] = useState([]);
  const { handleUserData, getUsersByIds } = useUser();
  const [selectedUser, setSelectedUser] = useState(null);
  const { setMatchedText, matchedText } = useApp();
  useEffect(() => {
    const fetchData = async () => {
      let users;
      const user = await handleUserData();
      const matchesArr = user.matchedUsers;
      const matchedIds = matchesArr?.map((match) => {
        if (match.user1_id === user._id) {
          return { matchId: match._id, matchedUser: match.user2_id };
        }
        return { matchId: match._id, matchedUser: match.user1_id };
      });
      setMatchInfo(matchedIds);
      if (matchedIds.length > 0) {
        users = await getUsersByIds(
          matchedIds.map((match) => match.matchedUser)
        );
      }
      setMatchedUsers(users);
    };
    fetchData();
  }, [matchedText]);
  useEffect(() => {
    let timeoutId;
    if (matchedText !== "") {
      timeoutId = setTimeout(() => {
        setMatchedText("");
      }, 1000);
    }
    return () => clearTimeout(timeoutId);
  }, [matchedText]);

  return (
    <div>
      {matchedText !== "" && (
        <div className="flex gap-2 items-center justify-center mt-4 text-red-700 font-semibold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
            />
          </svg>
          <p className="text-center  text-red-600 uppercase tracking-wide font-semibold">
            {matchedText}
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
            />
          </svg>
        </div>
      )}
      <ul className="mt-6 flex flex-col gap-6 ">
        {matchedUsers?.map((match) => (
          <Match
            matchObj={match}
            key={match.matchId}
            setSelectedUser={setSelectedUser}
          />
        ))}
      </ul>
      {selectedUser && (
        <UserInfoCard
          setSelectedUser={setSelectedUser}
          selectedUser={selectedUser}
          matchInfo={matchInfo}
        />
      )}
    </div>
  );
}

function Match({ matchObj, setSelectedUser }) {
  return (
    <li
      className="flex items-center gap-2 bg-gradient-to-r from-red-50 to-red-100 rounded-lg p-1 cursor-pointer tracking-wide  border-l-4 border-red-500"
      onClick={() => {
        setSelectedUser(matchObj);
      }}
    >
      <img src={matchObj.image} alt="Avatar" className="w-8 rounded-full" />
      <p>{matchObj.firstName}</p>
    </li>
  );
}

export default Matches;
