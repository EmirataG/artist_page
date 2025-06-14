"use client";
import React from "react";

import { FaPlay } from "react-icons/fa6";
import { FaPause } from "react-icons/fa6";

/**
 * A minimalist SVG vinyl record component.
 *
 * @param {object} props - The component's props.
 * @param {string} props.pieceName - The name of the musical piece to display on the label.
 * @param {number} props.size - The width and height of the SVG in pixels.
 * @param {string} props.labelColor - The color of the vinyl's center label.
 * @returns {React.ReactElement} A React component rendering an SVG vinyl record.
 */
const Vinyl = ({
  pieceName = "Your Piece Name",
  size = 250,
  labelColor = "#ef4444", // A nice shade of red
}) => {
  const [isPlaying, setIsPlaying] = React.useState(false);

  // Constants for SVG dimensions
  const viewBoxSize = 200;
  const center = viewBoxSize / 2;
  const vinylRadius = 98;
  const labelRadius = 40;
  const holeRadius = 6;
  const textPathRadius = 32;

  // Defines a longer path for the text
  const startAngle = (210 * Math.PI) / 180;
  const endAngle = (330 * Math.PI) / 180;
  const startX = center + textPathRadius * Math.cos(startAngle);
  const startY = center + textPathRadius * Math.sin(startAngle);
  const endX = center + textPathRadius * Math.cos(endAngle);
  const endY = center + textPathRadius * Math.sin(endAngle);
  const textArcPath = `M ${startX} ${startY} A ${textPathRadius} ${textPathRadius} 0 1 0 ${endX} ${endY}`;

  // Inline CSS for the spinning animation
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
    <div className="bg-[#c2a293] p-4 rounded-md flex flex-col items-center gap-4 justify-around">
      <div style={{ position: "relative", width: size, height: size }}>
        <style>{spinAnimation}</style>
        <svg
          className="shrink-0"
          width="100%"
          height="100%"
          viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
          aria-label={`A vinyl record for the piece: ${pieceName}`}
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

          {/* Main group for all vinyl elements - conditional class for spinning */}
          <g className={isPlaying ? "spinning" : ""}>
            {/* 1. The main black disc of the vinyl */}
            <circle cx={center} cy={center} r={vinylRadius} fill="#1a1a1a" />

            {/* 2. Subtle grooves for a more realistic effect */}
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

            {/* 3. The center label of the record */}
            <circle cx={center} cy={center} r={labelRadius} fill={labelColor} />
            <circle
              cx={center}
              cy={center}
              r={labelRadius - 0.5}
              fill="none"
              stroke="rgba(0,0,0,0.1)"
              strokeWidth="0.5"
            />

            {/* 4. The text for the piece name */}
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
                {pieceName}
              </textPath>
            </text>
          </g>

          {/* The hole is outside the spinning group so it appears stationary */}
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
      </div>{" "}
      {/* Play/Pause Button */}
      <button
        className=""
        onClick={() => setIsPlaying(!isPlaying)}
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? (
          // Pause Icon
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
          // Play Icon
        )}
      </button>
    </div>
  );
};

export default Vinyl;
