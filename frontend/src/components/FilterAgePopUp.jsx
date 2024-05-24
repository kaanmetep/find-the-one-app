import { useApp } from "../hooks/useApp";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { useState } from "react";
import { useUser } from "../hooks/useUser";
function FilterAgePopUp() {
  const [error, setError] = useState("");
  const [ageRange, setAgeRange] = useState({
    min: "18",
    max: "80",
  });
  const handleAgeRange = (e) => {
    const { name, value } = e.target;
    setAgeRange({ ...ageRange, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (ageRange.min < 18 || ageRange.max < 18) {
      setError("You can't filter for people who is younger than 18!");
      return;
    }
    filterUsersByAge(ageRange);
    onSetShowFilterAge(false);
  };
  const { onSetShowFilterAge } = useApp();
  const { filterUsersByAge } = useUser();
  useOutsideClick(onSetShowFilterAge);
  return (
    <div className=" fixed top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center z-[100]   inset-0 backdrop-blur-sm bg-opacity-50 ">
      <div className="shadow-2xl bg-white px-16 pb-8 pt-4 rounded-md flex flex-col items-center relative popup ">
        <p className="mb-4 uppercase italic tracking-wide w-[61%] text-center text-sm">
          Filter age
        </p>
        <form>
          <div className="flex items-center gap-4 justify-center">
            <input
              type="text"
              className="border-2 border-red-200 w-6 text-sm"
              name="min"
              value={ageRange.min}
              onChange={handleAgeRange}
              maxLength={2}
            />
            <p className="italic text-lg">between</p>
            <input
              type="text"
              className="border-2 border-red-200 w-6 text-sm"
              name="max"
              value={ageRange.max}
              onChange={handleAgeRange}
              maxLength={2}
            />
          </div>
          <p className="text-center mt-2 text-red-500 font-semibold">
            {error && error}
          </p>
          <div className="flex justify-center">
            <button
              className="mt-4 py-1 px-4 bg-red-200 rounded-md"
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              Filter
            </button>
          </div>
        </form>
        <button
          className="absolute right-3 top-3 aspect-auto  text-slate-400  rounded-full text-lg flex items-center justify-center hover:text-slate-700 transition-all delay-[50ms] font-bold"
          onClick={() => onSetShowFilterAge(false)}
        >
          X
        </button>
      </div>
    </div>
  );
}

export default FilterAgePopUp;
