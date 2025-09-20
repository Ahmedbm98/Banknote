import liveChatImg from "../../assets/Imgs/HeroSilces/live-chat1.png";
function LiveChat() {
  return (
    <button
      className=" absolute right-10 bottom-[30%] w-[50px] hidden md:block"
      aria-label="Open live chat"
    >
      <img
        src={liveChatImg}
        alt="Live chat"
        className="w-full h-full object-cover"
      />
    </button>
  );
}

export default LiveChat;
