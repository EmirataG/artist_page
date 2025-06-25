import { FaSpotify, FaYoutube, FaApple, FaInstagram } from "react-icons/fa";

import { bio } from "@/data";

import LinkIcon from "./LinkIcon";

const Header = () => {
  return (
    <header className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between sm:gap-4 p-4 bg-slate-200 text-black rounded-md hover:scale-101 duration-300 shadow-inner">
      <div className="flex shrink-0 flex-col gap-1 text-center sm:text-left">
        <h1 className="text-3xl font-semibold">Emir Bachtyar</h1>
        <h4>{"I write music 🎵🎶🎵🎶"}</h4>
      </div>
      <h4 className="hidden lg:block text-center max-w-xl px-6">{bio}</h4>
      <div className="flex gap-3">
        <LinkIcon
          icon={FaSpotify}
          href="https://open.spotify.com/artist/6nr7knPIeK4euzFLEjDOWp"
        />
        <LinkIcon
          icon={FaApple}
          href="https://music.apple.com/us/artist/emir-bachtyar/1763280269"
        />
        <LinkIcon
          icon={FaYoutube}
          href="https://www.youtube.com/channel/UCa6VqM6tg0ydyMpnO1zr7DA"
        />
        <LinkIcon
          icon={FaInstagram}
          href="https://www.instagram.com/emirbachtyar_composer"
        />
      </div>
    </header>
  );
};

export default Header;
