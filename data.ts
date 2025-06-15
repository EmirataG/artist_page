import type { StaticImageData } from "next/image";

import thoughtdriftsArt from "@/public/images/Thoughtdrifts.jpg";
import waltzesForQuietHoursArt from "@/public/images/Waltzes for Quiet Hours.png";
import stargazeArt from "@/public/images/Stargaze.jpeg";

export interface Album {
  title: string;
  numOfTracks: number;
  artwork: StaticImageData;
  tracks: Piece[];
  description: string;
}

export interface MockWork {
  title: string;
  numOfTracks: number | string;
  artworkText: string;
}

export interface Piece {
  title: string;
  artwork: StaticImageData | null;
  audioSrc: string | null;
}

export const albums: Album[] = [
  {
    title: "Waltzes for Quiet Hours",
    numOfTracks: 3,
    artwork: waltzesForQuietHoursArt,
    tracks: [
      {
        title: "The Bottom Drawer",
        artwork: null,
        audioSrc: "bottom_drawer.mp3",
      },
      {
        title: "Mismatched Socks",
        artwork: null,
        audioSrc: "mismatched_socks.mp3",
      },
      {
        title: "Loose Floorboards",
        artwork: null,
        audioSrc: "loose_floorboards.mp3",
      },
    ],
    description:
      "A collection of 3 gentle watzes that for some reason remind me of random things that I did in my childhood.",
  },
  {
    title: "Thoughtdrifts",
    numOfTracks: 3,
    artwork: thoughtdriftsArt,
    tracks: [
      { title: "Darkness & Fireflies", artwork: null, audioSrc: null },
      { title: "Moonlight & Snow", artwork: null, audioSrc: null },
      { title: "Shining & Clouds", artwork: null, audioSrc: null },
    ],
    description: "hey",
  },
];

export const singles: Piece[] = [
  { title: "Stargaze", artwork: stargazeArt, audioSrc: null },
];

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
  "Hey! I think that music says nothing but tells everyone something different. I hope my pieces tell you something... 🌽";

export const releaseToBeAnounced: Album = albums[0];
