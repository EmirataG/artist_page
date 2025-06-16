"use client";
import { useState } from "react";
import Image from "next/image";
import type { Album } from "@/data";

// --- React Icons ---
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
import { FaSpotify, FaApple, FaYoutube } from "react-icons/fa";

import AlbumPiecesList from "./AlbumPiecesList";
import StreamServicesIcon from "./StreamServicesIcon";

const AlbumListEntry = ({ album }: { album: Album }) => {
  const [tracksShown, setTracksShown] = useState<boolean>(false);
  // 1. State to manage the visibility of the new overlay
  const [isOverlayVisible, setIsOverlayVisible] = useState<boolean>(false);

  return (
    <article className="flex overflow-scroll">
      <div className="flex flex-col gap-2">
        {/* 2. Added a relative container to position the overlay */}
        <div className="relative rounded-md hover:scale-101 duration-300 active:scale-99 cursor-pointer">
          <Image
            className="rounded-md select-none"
            width={288}
            height={288}
            src={album.artwork}
            objectFit="cover"
            alt={`cover art for the ${album.title} album`}
            // 3. Click handler to show the overlay
            onClick={() => setIsOverlayVisible(true)}
          />

          {/* 4. The Links Overlay */}
          <div
            className={`
              absolute inset-0 flex items-center justify-center rounded-md
              backdrop-blur-sm bg-black/50 transition-opacity duration-300
              ${
                isOverlayVisible
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
              }
            `}
            // Click the background to close the overlay
            onClick={() => setIsOverlayVisible(false)}
          >
            {/* This inner div prevents clicks on icons from closing the overlay */}
            <div className="flex gap-6" onClick={(e) => e.stopPropagation()}>
              <StreamServicesIcon href={album.links.spotify} icon={FaSpotify} />
              <StreamServicesIcon
                href={album.links.appleMusic}
                icon={FaApple}
              />
              <StreamServicesIcon href={album.links.youtube} icon={FaYoutube} />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-semibold">{album.title}</h3>
            <span>{`${album.numOfTracks} tracks`}</span>
          </div>
          {tracksShown ? (
            <IoIosArrowDropleft
              className="size-7 hover:scale-105 active:scale-97 duration-300 cursor-pointer"
              onClick={() =>
                setTracksShown((prevTracksShown) => !prevTracksShown)
              }
            />
          ) : (
            <IoIosArrowDropright
              className="size-7 hover:scale-105 active:scale-97 duration-300 cursor-pointer"
              onClick={() =>
                setTracksShown((prevTracksShown) => !prevTracksShown)
              }
            />
          )}
        </div>
      </div>
      <div
        className={`
          grid transition-all duration-500 ease-in-out
          ${tracksShown ? "grid-cols-[1fr] ml-4" : "grid-cols-[0fr]"}
        `}
      >
        <div className="overflow-scroll">
          <AlbumPiecesList album={album} />
        </div>
      </div>
    </article>
  );
};

export default AlbumListEntry;
