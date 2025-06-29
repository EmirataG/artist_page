"use client";

import { FaSpotify, FaYoutube, FaApple } from "react-icons/fa";

import { useState } from "react";
import Image from "next/image";
import Vinyl from "./Vinyl";
import LinkIcon from "./LinkIcon";

import { type Album, type Piece } from "@/data";

const Anouncement = ({ work }: { work: Album | Piece }) => {
  const [vinylPieceIndex, setVinylPieceIndex] = useState<number>(
    "tracks" in work ? 0 : -1
  );
  const vinylPiece = "tracks" in work ? work.tracks[vinylPieceIndex] : work;
  // defining a track list component for convenience
  const TrackList = ({ work }: { work: Album | Piece }) => {
    return (
      <>
        {"tracks" in work ? (
          <ul className="space-y-2 overflow-scroll mt-6 text-black p-4">
            {work.tracks.map((track, index) => (
              <li key={index}>
                <div
                  onClick={() => {
                    if (vinylPieceIndex != index) setVinylPieceIndex(index);
                  }}
                  className={`flex justify-between items-center gap-2 p-2 rounded-md bg-slate-300 hover:scale-101 active:scale-99 duration-300 ${
                    vinylPieceIndex === index ? "opacity-100" : "opacity-85"
                  }`}
                >
                  <span className="hidden xl:block">🎵🎶🎵🎶</span>
                  <span className="flex-1 font-semibold text-center">{`${
                    index + 1
                  }. ${track.title}`}</span>
                  <span className="hidden xl:block">🎵🎶🎵🎶</span>
                </div>
              </li>
            ))}
          </ul>
        ) : null}
        <div className="flex p-4 gap-8 justify-center">
          <LinkIcon icon={FaSpotify} href={work.links?.spotify} />
          <LinkIcon icon={FaApple} href={work.links?.appleMusic} />
          {/* <LinkIcon
            icon={SiTidal}
            href="https://open.spotify.com/artist/6nr7knPIeK4euzFLEjDOWp"
          /> */}
          <LinkIcon icon={FaYoutube} href={work.links?.youtube} />
        </div>
      </>
    );
  };

  return (
    <div className="rounded-md bg-gray-900 sm:items-center flex flex-col sm:flex-row justify-between hover:scale-101 duration-300">
      <div className="p-4 text-center grow-1 sm:hidden">
        <h2 className="text-3xl font-bold">{`${work.title}`}</h2>
        <h4 className="text-xl">{"Is out now!!!"}</h4>
      </div>
      <div className="flex overflow-scroll flex-col sm:flex-row">
        <div className="shrink-0">
          <Image
            src={work.artwork!}
            style={{ objectFit: "cover" }}
            alt={`cover art for ${work.title}`}
            className="size-full sm:size-96 rounded-t-md rounded-b-none sm:rounded-r-none sm:rounded-l-md"
          />
        </div>
        <Vinyl
          key={vinylPiece.audioSrc}
          piece={vinylPiece}
          size={250}
          labelColor="#ef4444"
        />
      </div>
      <div className="p-4 text-center grow hidden sm:block">
        <h2 className="text-3xl font-bold">{`${work.title}`}</h2>
        <h4 className="text-xl">{"Is out now!!!"}</h4>
        <TrackList work={work} />
      </div>
      <div className="sm:hidden">
        <TrackList work={work} />
      </div>
    </div>
  );
};

export default Anouncement;
