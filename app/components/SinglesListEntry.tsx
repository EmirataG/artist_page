"use client";
import { useState, useEffect } from "react";
import type { Piece } from "@/data";

import Image from "next/image";
import { FaSpotify, FaApple, FaYoutube } from "react-icons/fa";

import StreamServicesIcon from "./StreamServicesIcon";

const SinglesListEntry = ({ piece }: { piece: Piece }) => {
  // --- State and handlers for the overlay functionality ---
  const [isOverlayMounted, setIsOverlayMounted] = useState<boolean>(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState<boolean>(false);

  const handleOpenOverlay = () => {
    setIsOverlayMounted(true);
  };

  const handleCloseOverlay = () => {
    setIsOverlayVisible(false);
  };

  // Effect to handle the fade-in transition smoothly
  useEffect(() => {
    if (isOverlayMounted) {
      const timer = setTimeout(() => {
        setIsOverlayVisible(true);
      }, 10); // Tiny delay to prevent visual flicker
      return () => clearTimeout(timer);
    }
  }, [isOverlayMounted]);

  // Effect to handle unmounting after the fade-out animation completes
  useEffect(() => {
    if (!isOverlayVisible && isOverlayMounted) {
      const timer = setTimeout(() => {
        setIsOverlayMounted(false);
      }, 300); // Must match the transition duration
      return () => clearTimeout(timer);
    }
  }, [isOverlayVisible, isOverlayMounted]);

  return (
    <article className="flex flex-col gap-2">
      {/* This relative container is the parent for the overlay */}
      <div className="relative hover:scale-101 duration-300 active:scale-99 cursor-pointer">
        <Image
          className="size-72 rounded-md select-none"
          src={piece.artwork!}
          objectFit="cover"
          alt={`cover art for ${piece.title}`}
          onClick={handleOpenOverlay}
        />

        {/* --- The Links Overlay --- */}
        {isOverlayMounted && (
          <div
            className={`
              absolute inset-0 flex items-center justify-center rounded-md
              backdrop-blur-md bg-black/50 transition-opacity duration-300
              ${isOverlayVisible ? "opacity-100" : "opacity-0"}
            `}
            onClick={handleCloseOverlay}
          >
            {/* Inner div to stop clicks on icons from closing the overlay */}
            <div className="flex gap-6" onClick={(e) => e.stopPropagation()}>
              <StreamServicesIcon
                href={piece.links?.spotify || "#"}
                icon={FaSpotify}
              />
              <StreamServicesIcon
                href={piece.links?.appleMusic || "#"}
                icon={FaApple}
              />
              <StreamServicesIcon
                href={piece.links?.youtube || "#"}
                icon={FaYoutube}
              />
            </div>
          </div>
        )}
      </div>
      <div>
        <h3 className="font-semibold">{piece.title}</h3>
      </div>
    </article>
  );
};

export default SinglesListEntry;
