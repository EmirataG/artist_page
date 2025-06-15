"use client";
import { useState } from "react";

import Image from "next/image";
import type { Album } from "@/data";

import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";

import AlbumPiecesList from "./AlbumPiecesList";

const AlbumListEntry = ({ album }: { album: Album }) => {
  const [tracksShown, setTracksShown] = useState<boolean>(false);

  return (
    <article className="flex overflow-scroll">
      <div className="flex flex-col gap-2">
        <Image
          className="rounded-md select-none hover:scale-101 duration-300 active:scale-99"
          width={288}
          height={288}
          src={album.artwork}
          objectFit="cover"
          alt={`cover art for the ${album.title} album`}
        />
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
        {/*
          This inner div is crucial for the animation to work correctly.
          - `overflow-hidden`: Prevents content from spilling out or being visible during the transition.
          - The content inside this div will define the final width of the `1fr` column.
        */}
        <div className="overflow-scroll">
          <AlbumPiecesList album={album} />
        </div>
      </div>
    </article>
  );
};

export default AlbumListEntry;
