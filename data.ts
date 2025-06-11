import type { StaticImageData } from "next/image";

import thoughtdriftsArt from "@/public/images/Thoughtdrifts.jpg";
import waltzesForQuietHoursArt from "@/public/images/Waltzes for Quiet Hours.png";
import stargazeArt from "@/public/images/Stargaze.jpeg";

export interface Album {
  title: string;
  numOfTracks: number;
  albumCover: StaticImageData;
  tracks: Piece[];
}

export interface Piece {
  title: string;
  artwork: StaticImageData | null;
}

export const albums: Album[] = [
  {
    title: "Waltzes for Quiet Hours",
    numOfTracks: 3,
    albumCover: waltzesForQuietHoursArt,
    tracks: [
      { title: "The Bottom Drawer", artwork: null },
      { title: "Mismatched Socks", artwork: null },
      { title: "Loose Floorboards", artwork: null },
    ],
  },
  {
    title: "Thoughtdrifts",
    numOfTracks: 3,
    albumCover: thoughtdriftsArt,
    tracks: [
      { title: "Darkness & Fireflies", artwork: null },
      { title: "Moonlight & Snow", artwork: null },
      { title: "Shining & Clouds", artwork: null },
    ],
  },
];

export const singles: Piece[] = [{ title: "Stargaze", artwork: stargazeArt }];
