function Statistics() {
  return (
    <div className="flex justify-center mt-4 md:mt-12  h-full">
      <div className="flex flex-col gap-12 font-semibold">
        <div className="flex justify-center">
          <h2 className="text-center uppercase tracking-widest border-b-2 border-b-black pb-2 w-2/3">
            Profile Statistics
          </h2>
        </div>
        <p className="bg-gradient-to-r from-red-50 to-red-200 py-4 px-6 rounded-md text-center ">
          You have been liked by{" "}
          <span className="mx-3 bg-gradient-to-r from-red-300 to-red-500 p-2 font-bold">
            10
          </span>{" "}
          people so far.
        </p>
        <p className="bg-gradient-to-r from-red-50 to-red-200 py-4 px-6 rounded-md text-center">
          You liked{" "}
          <span className="mx-3 bg-gradient-to-r from-red-300 to-red-500 p-2 font-bold">
            12
          </span>{" "}
          people.
        </p>
        <p className="bg-gradient-to-r from-red-50 to-red-200 py-4 px-6 rounded-md text-center">
          You have{" "}
          <span className="mx-3 bg-gradient-to-r from-red-300 to-red-500 p-2 font-bold">
            5
          </span>{" "}
          current matches.
        </p>
      </div>
    </div>
  );
}

export default Statistics;
