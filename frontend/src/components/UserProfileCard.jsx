import React, { useState, useMemo, useRef, useEffect } from "react";
import TinderCard from "react-tinder-card";
import { useUser } from "../hooks/useUser";

function UserProfileCard() {
  const {
    users,
    getUsers,
    handleUserData,
    userData,
    likeUser,
    dislikeUser,
    setUsers,
  } = useUser();
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
      console.log(userData);
    }
    if (name === "left") {
      await dislikeUser(users[currentIndex]._id);
      console.log(userData);
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
      <div className="md:w-60 md:h-96 w-52 h-72  ">
        {users.map((character, index) => (
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
              className="relative bg-white md:w-60 md:h-96 w-52 h-72 bg-cover bg-center rounded-lg"
            >
              <div className="absolute bottom-6 bg-white w-full py-2 flex flex-col items-center">
                <div className="flex gap-2 justify-between px-4">
                  <h3 className="text-black flex  justify-center font-bold uppercase text-sm">
                    {character.firstName}
                  </h3>
                  <p className="w-6 h-6 rounded-3xl bg-black text-white flex items-center justify-center text-sm">
                    24
                  </p>
                </div>
                <p className="italic text-xs">
                  {character.personelDetails.about}
                </p>
              </div>
            </div>
          </TinderCard>
        ))}
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
        <button
          onClick={() => goBack()}
          disabled={true}
          className="bg-gray-400 text-white py-1 px-3 rounded-full"
        >
          Undo
        </button>
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