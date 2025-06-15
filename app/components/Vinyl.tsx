"use client";
import { FaPlay } from "react-icons/fa6";

import { FaPause } from "react-icons/fa6";
import { Piece } from "@/data";

import React, { useState, useRef, useEffect } from "react";

/**
 * An interactive, spinning vinyl record component that plays audio.
 *
 * @param {object} props - The component's props.
 * @param {Piece} props.piece - The musical piece data, including title and audioSrc.
 * @param {number} props.size - The width and height of the SVG in pixels.
 * @param {string} props.labelColor - The color of the vinyl's center label.
 * @returns {React.ReactElement} A React component rendering an SVG vinyl record.
 */
const Vinyl = ({
  piece,
  size,
  labelColor,
}: {
  piece: Piece;
  size: number;
  labelColor: string;
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // This effect hook syncs the audio playback with the isPlaying state.
  useEffect(() => {
    if (isPlaying) {
      audioRef.current
        ?.play()
        .catch((error) => console.error("Audio play failed", error));
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying]);

  // This effect resets the play button when the audio track finishes on its own.
  useEffect(() => {
    const audioElement = audioRef.current;
    const handleAudioEnd = () => setIsPlaying(false);

    audioElement?.addEventListener("ended", handleAudioEnd);

    // Cleanup function to remove the event listener.
    return () => {
      audioElement?.removeEventListener("ended", handleAudioEnd);
    };
  }, []);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // --- SVG and Animation Constants ---
  const viewBoxSize = 200;
  const center = viewBoxSize / 2;
  const vinylRadius = 98;
  const labelRadius = 40;
  const holeRadius = 6;
  const textPathRadius = 32;

  const startAngle = (210 * Math.PI) / 180;
  const endAngle = (330 * Math.PI) / 180;
  const startX = center + textPathRadius * Math.cos(startAngle);
  const startY = center + textPathRadius * Math.sin(startAngle);
  const endX = center + textPathRadius * Math.cos(endAngle);
  const endY = center + textPathRadius * Math.sin(endAngle);
  const textArcPath = `M ${startX} ${startY} A ${textPathRadius} ${textPathRadius} 0 1 0 ${endX} ${endY}`;

  const spinAnimation = `
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    .spinning {
      animation: spin 4s linear infinite;
      transform-origin: center;
    }
  `;

  return (
    <div className="bg-[#c2a293] p-4 sm:rounded-r-md flex flex-col items-center gap-4 justify-around">
      {piece.audioSrc && (
        <audio ref={audioRef} src={`/music/${piece.audioSrc}`} preload="auto" />
      )}

      <div style={{ position: "relative", width: size, height: size }}>
        <style>{spinAnimation}</style>
        <svg
          className="shrink-0"
          width="100%"
          height="100%"
          viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
          aria-label={`A vinyl record for the piece: ${piece.title}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <path
              id="vinylTextPath"
              d={textArcPath}
              fill="none"
              stroke="none"
            />
          </defs>

          <g
            className="spinning"
            style={{ animationPlayState: isPlaying ? "running" : "paused" }}
          >
            <circle cx={center} cy={center} r={vinylRadius} fill="#1a1a1a" />

            {Array.from({ length: 30 }).map((_, i) => (
              <circle
                key={`groove-${i}`}
                cx={center}
                cy={center}
                r={labelRadius + 2 + i * 1.8}
                fill="none"
                stroke="rgba(0,0,0,0.6)"
                strokeWidth="0.4"
              />
            ))}

            <circle cx={center} cy={center} r={labelRadius} fill={labelColor} />
            <circle
              cx={center}
              cy={center}
              r={labelRadius - 0.5}
              fill="none"
              stroke="rgba(0,0,0,0.1)"
              strokeWidth="0.5"
            />

            <text
              fill="#ffffff"
              fontSize="8px"
              fontWeight="600"
              letterSpacing="0.5px"
              style={{ textTransform: "uppercase" }}
            >
              <textPath
                href="#vinylTextPath"
                startOffset="50%"
                textAnchor="middle"
              >
                {piece.title}
              </textPath>
            </text>
          </g>

          <circle cx={center} cy={center} r={holeRadius} fill="#f0f0f0" />
          <circle
            cx={center}
            cy={center}
            r={holeRadius - 0.5}
            stroke="#1a1a1a"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>

      <button
        className=""
        onClick={togglePlayPause}
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? (
          <FaPause
            color="black"
            size={32}
            className="hover:scale-105 active:scale-95 duration-300"
          />
        ) : (
          <FaPlay
            color="black"
            size={32}
            className="hover:scale-105 active:scale-95 duration-300"
          />
        )}
      </button>
    </div>
  );
};

export default Vinyl;
