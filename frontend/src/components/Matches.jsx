const tempData = [
  {
    id: 0,
    firstName: "Khaleesi",
    avatar: "https://i.pravatar.cc/300?img=0",
  },
  {
    id: 1,
    firstName: "Arya",
    avatar: "https://i.pravatar.cc/300?img=1",
    about: "I love walking.",
  },
  {
    id: 2,
    firstName: "Sansa",
    avatar: "https://i.pravatar.cc/300?img=10",
    about: "I love cats.",
  },
  {
    id: 3,
    firstName: "Cersei",
    avatar: "https://i.pravatar.cc/300?img=16",
    about: "I travel a lot!",
  },
  {
    id: 4,
    firstName: "Brienne",
    avatar: "https://i.pravatar.cc/300?img=20",
    about: "I love walking.",
  },
];

function Matches() {
  return (
    <ul className="mt-6 flex flex-col gap-6 ">
      {tempData.map((match) => (
        <Match matchObj={match} key={match.id} />
      ))}
    </ul>
  );
}

function Match({ matchObj }) {
  return (
    <li className="flex items-center gap-2 bg-gradient-to-r from-red-50 to-red-100 rounded-lg p-1 cursor-pointer tracking-wide  border-l-4 border-red-500">
      <img src={matchObj.avatar} alt="Avatar" className="w-8 rounded-full" />
      <p>{matchObj.firstName}</p>
    </li>
  );
}

export default Matches;
