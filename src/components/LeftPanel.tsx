import Avatar from "./Avatar";
//import Title from "./Title";

const LeftPanel = () => {
  return (
    <div className="h-full flex items-start mx-10 flex-col gap-5 font-['Inter'] font-light">
      <Avatar
        url="https://c8.alamy.com/compfr/rdkygt/plage-tropicale-avec-palmiers-et-transats-rdkygt.jpg"
        size={160}
      />

      <h1 className="text-2xl font-bold pt-5 tracking-wider text-black">
        CEIF NEVER DEBUG
      </h1>
      <p className="text-gray-600 text-lg">🇫🇷 Born in France</p>
      <p className="text-gray-600 text-lg">📖 History enthousiast</p>
      <p className="text-gray-600 text-lg">💻 Studying Software Engeneering</p>
      <p>Citation</p>
    </div>
  );
};

export default LeftPanel;
/*
 *
      <div className="flex items-center flex-col gap-5">

      </div>
 */
