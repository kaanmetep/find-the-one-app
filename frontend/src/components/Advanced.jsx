import React, { useState, useMemo, useRef } from "react";
import TinderCard from "react-tinder-card";
const db = [
  {
    name: "Richard Hendricks",
    url: "https://i.pravatar.cc/300?img=12",
  },
  {
    name: "Erlich Bachman",
    url: "https://i.pravatar.cc/300?img=1",
  },
  {
    name: "Monica Hall",
    url: "https://i.pravatar.cc/300?img=29",
  },
  {
    name: "Jared Dunn",
    url: "https://i.pravatar.cc/300?img=3",
  },
  {
    name: "Dinesh Chugtai",
    url: "https://i.pravatar.cc/300?img=24",
  },
];

function Advanced() {
  const [currentIndex, setCurrentIndex] = useState(db.length - 1);
  const [lastDirection, setLastDirection] = useState();
  // used for outOfFrame closure
  const currentIndexRef = useRef(currentIndex);

  const childRefs = useMemo(
    () =>
      Array(db.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canGoBack = currentIndex < db.length - 1;

  const canSwipe = currentIndex >= 0;

  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
  };

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current);

    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
  };

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < db.length) {
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
        {db.map((character, index) => (
          <TinderCard
            ref={childRefs[index]}
            className="absolute "
            key={character.name}
            onSwipe={(dir) => swiped(dir, character.name, index)}
            onCardLeftScreen={() => outOfFrame(character.name, index)}
            preventSwipe={["up", "down"]}
            swipeRequirementType="position"
            swipeThreshold={30}
          >
            <div
              style={{ backgroundImage: "url(" + character.url + ")" }}
              className="relative bg-white md:w-60 md:h-96 w-52 h-72 bg-cover bg-center rounded-lg"
            >
              <div className="absolute bottom-6 bg-white w-full py-2 flex flex-col items-center">
                <div className="flex gap-2 justify-between px-4">
                  <h3 className="text-black flex  justify-center font-bold uppercase text-sm">
                    {character.name}
                  </h3>
                  <p className="w-6 h-6 rounded-3xl bg-black text-white flex items-center justify-center text-sm">
                    24
                  </p>
                </div>
                <p className="italic text-xs">I go to gym every day.</p>
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
          disabled={!canGoBack}
          className={`bg-black text-white py-1 px-3 rounded-full ${
            !canGoBack ? "bg-gray-400" : ""
          }`}
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
        ""
      )}
    </div>
  );
}

export default Advanced;
