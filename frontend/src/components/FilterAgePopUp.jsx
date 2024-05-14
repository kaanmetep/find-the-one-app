import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
function FilterAgePopUp() {
  const { onSetShowFilterAge } = useContext(AppContext);
  return (
    <div className=" fixed top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center z-[100]   inset-0 backdrop-blur-sm bg-opacity-50 ">
      <div className="shadow-2xl bg-white px-16 pb-8 pt-4 rounded-md flex flex-col items-center relative  ">
        <p className="mb-4 uppercase italic tracking-wide w-[61%] text-center text-sm">
          Filter age
        </p>
        <form>
          <div className="flex items-center gap-4">
            <input
              type="text"
              className="border-2 border-red-200 w-6 text-sm"
            />
            <p className="italic text-lg">between</p>
            <input
              type="text"
              className="border-2 border-red-200 w-6 text-sm"
            />
          </div>
          <div className="flex justify-center">
            <button
              className="mt-4 py-1 px-4 bg-red-200 rounded-md"
              onClick={(e) => {
                e.preventDefault();
                onSetShowFilterAge(false);
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
