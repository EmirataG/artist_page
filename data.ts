import type { StaticImageData } from "next/image";

import thoughtdriftsArt from "@/public/images/Thoughtdrifts.jpg";
import waltzesForQuietHoursArt from "@/public/images/Waltzes for Quiet Hours.png";
import stargazeArt from "@/public/images/Stargaze.jpeg";

export interface Album {
  title: string;
  numOfTracks: number;
  artwork: StaticImageData;
  tracks: Piece[];
}

export interface MockWork {
  title: string;
  numOfTracks: number | string;
  artworkText: string;
}

export interface Piece {
  title: string;
  artwork: StaticImageData | null;
}

export const albums: Album[] = [
  {
    title: "Waltzes for Quiet Hours",
    numOfTracks: 3,
    artwork: waltzesForQuietHoursArt,
    tracks: [
      { title: "The Bottom Drawer", artwork: null },
      { title: "Mismatched Socks", artwork: null },
      { title: "Loose Floorboards", artwork: null },
    ],
  },
  {
    title: "Thoughtdrifts",
    numOfTracks: 3,
    artwork: thoughtdriftsArt,
    tracks: [
      { title: "Darkness & Fireflies", artwork: null },
      { title: "Moonlight & Snow", artwork: null },
      { title: "Shining & Clouds", artwork: null },
    ],
  },
];

export const singles: Piece[] = [{ title: "Stargaze", artwork: stargazeArt }];

export const mockWorks: MockWork[] = [
  {
    title: "Writing music takes time...",
    numOfTracks: "???",
    artworkText: "More Coming",
  },
  {
    title: "Working on some pieces...",
    numOfTracks: "???",
    artworkText: "I promise 🙏",
  },
  {
    title: "Stay tuned!",
    numOfTracks: "???",
    artworkText: "I just need some time! 🦖",
  },
];

export const bio: string =
  "Hey! A selft-thaught pianist composer and pianist here.";

export const releaseToBeAnounced: Album = albums[0];
