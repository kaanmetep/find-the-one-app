import React, { useState, useMemo, useRef, useEffect } from "react";
import TinderCard from "react-tinder-card";
import { useUser } from "../hooks/useUser";
import { useApp } from "../hooks/useApp";
import Spinner from "./Spinner";

function UserProfileCard() {
  const {
    users,
    getUsers,
    handleUserData,
    userData,
    likeUser,
    dislikeUser,
    setUsers,
    createMatch,
    addMatch,
    isLoadingUsers,
  } = useUser();
  const { setMatchedText } = useApp();
  useEffect(() => {
    const fetchData = async () => {
      setUsers([]);
      const data = await handleUserData();
      if (data) {
        await getUsers(data);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    if (users.length > 0) {
      setCurrentIndex(users.length - 1);
    }
  }, [users]);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [lastDirection, setLastDirection] = useState("");
  // used for outOfFrame closure
  const currentIndexRef = useRef(currentIndex);

  const childRefs = useMemo(
    () =>
      Array(users.length)
        .fill(0)
        .map((i) => React.createRef()),
    [users.length]
  );

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canGoBack = currentIndex < users.length - 1;

  const canSwipe = currentIndex >= 0;

  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
  };

  const outOfFrame = async (name, idx, dir) => {
    if (name === "right") {
      await likeUser(users[currentIndex]._id);
      if (users[currentIndex].likedUsers.includes(userData.data._id)) {
        const matchId = await createMatch({
          user1_id: userData.data._id,
          user2_id: users[currentIndex]._id,
          matchedAt: Date.now(),
          status: true,
        });
        await addMatch(userData.data._id, matchId);
        setMatchedText("ITS A MATCH !!!");
        addMatch(users[currentIndex]._id, matchId);
      }
    }
    if (name === "left") {
      await dislikeUser(users[currentIndex]._id);
    }
  };

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < users.length) {
      await childRefs[currentIndex].current.swipe(dir);
    }
  };

  const goBack = async () => {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current.restoreCard();
  };

  return (
    <div className=" flex flex-col items-center">
      <div className="md:w-60 md:h-96 w-52 h-72 ">
        {isLoadingUsers ? (
          <div className="flex justify-center items-center  h-full flex-col gap-4">
            <Spinner />
            <p className="text-center font-semibold">
              We are trying to find best matches for you, hang tight!
            </p>
          </div>
        ) : (
          users.map((character, index) => (
            <TinderCard
              ref={childRefs[index]}
              className="absolute "
              key={character._id}
              onSwipe={(dir) => swiped(dir, character.firstName, index)}
              onCardLeftScreen={(dir) =>
                outOfFrame(dir, character.firstName, index)
              }
              preventSwipe={["up", "down"]}
              swipeRequirementType="position"
              swipeThreshold={30}
            >
              <div
                style={{ backgroundImage: `url(${character.image})` }}
                className="z-10 relative bg-white md:w-60 md:h-96 w-52 h-72 bg-cover bg-center rounded-lg"
              >
                <div className="absolute bottom-6 bg-white w-full py-2 flex flex-col items-center">
                  <div className="flex gap-2 justify-between px-4">
                    <h3 className="text-black flex  justify-center font-bold uppercase text-sm">
                      {character.firstName}
                    </h3>
                    <p className="w-6 h-6 rounded-3xl bg-black text-white flex items-center justify-center text-sm">
                      {Math.floor(
                        (new Date() - new Date(character.birthDate).getTime()) /
                          (365.25 * 24 * 60 * 60 * 1000)
                      )}
                    </p>
                  </div>
                  <p className="italic text-xs">
                    {character.personelDetails.about}
                  </p>
                </div>
              </div>
            </TinderCard>
          ))
        )}
        <div className="">
          {isLoadingUsers || (
            <p className=" mt-24 bg-slate-500 p-6 rounded-md text-white font-semibold lg:text-base text-xs">
              We couldn't find a suitable match for you. (This might be because
              you've already liked or disliked all users in the system, or there
              are no users in the system that match your preferences.)
            </p>
          )}
        </div>
      </div>

      <div className="flex justify-center items-center  gap-6 mt-6">
        <button
          onClick={() => swipe("left")}
          className={`bg-black text-white w-8 h-8 rounded-full ${
            !canSwipe ? "bg-gray-400" : ""
          }`}
          disabled={!canSwipe}
        >
          X
        </button>
        {/* <button
          onClick={() => goBack()}
          disabled={true}
          className="bg-gray-400 text-white py-1 px-3 rounded-full "
        >
          Undo
        </button> */}
        <button
          onClick={() => swipe("right")}
          className={`bg-black text-white w-8 h-8 rounded-full ${
            !canSwipe ? "bg-gray-400" : ""
          }`}
          disabled={!canSwipe}
        >
          💗
        </button>
      </div>
      {lastDirection ? (
        <h2 key={lastDirection} className="text-center mt-4 font-bold">
          You swiped {lastDirection}!
        </h2>
      ) : (
        <h2 key={lastDirection} className="text-center mt-4 font-bold">
          Start swiping or click one of the buttons above!
        </h2>
      )}
    </div>
  );
}
{
  /* <p>
We couldn't find a suitable match for you. (This might be
because you've already liked or disliked all users in the
system, or there are no users in the system that match your
preferences.)
</p> */
}
export default UserProfileCard;
