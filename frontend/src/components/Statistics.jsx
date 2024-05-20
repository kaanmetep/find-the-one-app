import { useEffect } from "react";
import { useUser } from "../hooks/useUser";
import Spinner from "./Spinner";
function Statistics() {
  const {
    handleUserData,
    userData,
    isLoading,
    getTotalLikedByPeople,
    totalLikedByPeople,
    isLoadingTotalLikes,
  } = useUser();
  useEffect(() => {
    const fetchData = async () => {
      const data = await handleUserData();
      if (data) {
        await getTotalLikedByPeople(data);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex justify-center mt-4 md:mt-12  h-full">
      {isLoading ? (
        <div className="mt-12">
          <Spinner />
        </div>
      ) : (
        <div className="flex flex-col gap-12 font-semibold">
          <div className="flex justify-center">
            <h2 className="text-center uppercase tracking-widest border-b-2 border-b-black pb-2 w-2/3">
              Statistics
            </h2>
          </div>
          {isLoadingTotalLikes ? (
            <div className="flex justify-center">
              <Spinner />
            </div>
          ) : (
            <p className="bg-gradient-to-r from-red-50 to-red-200 py-4 px-6 rounded-md text-center ">
              You have been liked by{" "}
              <span className="mx-3 bg-gradient-to-r from-red-300 to-red-500 p-2 font-bold">
                {totalLikedByPeople}
              </span>{" "}
              people so far.
            </p>
          )}
          <p className="bg-gradient-to-r from-red-50 to-red-200 py-4 px-6 rounded-md text-center">
            You liked{" "}
            <span className="mx-3 bg-gradient-to-r from-red-300 to-red-500 p-2 font-bold">
              {userData.data?.likedUsers.length}
            </span>{" "}
            people.
          </p>
          <p className="bg-gradient-to-r from-red-50 to-red-200 py-4 px-6 rounded-md text-center">
            You have{" "}
            <span className="mx-3 bg-gradient-to-r from-red-300 to-red-500 p-2 font-bold">
              {userData.data?.matchedUsers.length}
            </span>{" "}
            current matches.
          </p>
        </div>
      )}
    </div>
  );
}

export default Statistics;
