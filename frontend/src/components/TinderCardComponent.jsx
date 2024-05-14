import TinderCard from "react-tinder-card";
import React, { useState, useMemo, useRef } from "react";
const db = [
  {
    name: "Richard Hendricks",
    url: "https://i.pravatar.cc/300?img=0",
  },
  {
    name: "Erlich Bachman",
    url: "https://i.pravatar.cc/300?img=1",
  },
  {
    name: "Monica Hall",
    url: "https://i.pravatar.cc/300?img=2",
  },
  {
    name: "Jared Dunn",
    url: "https://i.pravatar.cc/300?img=3",
  },
  {
    name: "Dinesh Chugtai",
    url: "https://i.pravatar.cc/300?img=4",
  },
];
function TinderCardComponent({ character, onSetLastDirection, index }) {
  const [currentIndex, setCurrentIndex] = useState(db.length - 1);

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
  const canSwipe = currentIndex >= 0;

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current);
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
  };
  const swipe = async (dir) => {
    if (canSwipe && currentIndex < db.length) {
      await childRefs[currentIndex].current.swipe(dir);
    }
  };
  const swiped = (direction, nameToDelete, index) => {
    console.log("removing: " + nameToDelete);
    onSetLastDirection(direction);
    updateCurrentIndex(index - 1);
  };
  return (
    <TinderCard
      ref={childRefs[index]}
      className="absolute h-full w-full"
      onSwipe={(dir) => swiped(dir, character.name, index)}
      onCardLeftScreen={() => outOfFrame(character.name, index)}
      preventSwipe={["up", "down"]}
      swipeRequirementType="position"
      swipeThreshold={30}
    >
      <div
        style={{ backgroundImage: "url(" + character.url + ")" }}
        className=" h-full w-full shadow-lg rounded-lg bg-cover bg-center overflow-hidden"
      >
        <div className="absolute bottom-10 bg-white w-full py-2 flex flex-col items-center">
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
      <div className="buttons">
        <button onClick={() => swipe("left")}>Swipe left!</button>

        <button onClick={() => swipe("right")}>Swipe right!</button>
      </div>
    </TinderCard>
  );
}

export default TinderCardComponent;
