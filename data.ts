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
  links: {
    spotify: string | null;
    appleMusic: string | null;
    youtube: string | null;
  };
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
  links: {
    spotify: string | null;
    appleMusic: string | null;
    youtube: string | null;
  } | null;
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
        links: null,
      },
      {
        title: "Mismatched Socks",
        artwork: null,
        audioSrc: "mismatched_socks.mp3",
        links: null,
      },
      {
        title: "Loose Floorboards",
        artwork: null,
        audioSrc: "loose_floorboards.mp3",
        links: null,
      },
    ],
    description:
      "A collection of three gentle waltzes, inspired by the fleeting and whimsical memories of childhood. They are intended as a gentle companion for solitude in the quiet hours of the day or night.",
    links: {
      spotify: "https://open.spotify.com/album/2a2xsWfDCamRlsy5i8kTZ7",
      youtube:
        "https://www.youtube.com/playlist?list=OLAK5uy_m3F5W2Qzyu11_G1_UZuziQTBSJDjgx5OQ",
      appleMusic:
        "https://music.apple.com/us/album/thoughtdrifts-single/1763280872",
    },
  },
  {
    title: "Thoughtdrifts",
    numOfTracks: 3,
    artwork: thoughtdriftsArt,
    tracks: [
      {
        title: "Darkness & Fireflies",
        artwork: null,
        audioSrc: null,
        links: null,
      },
      { title: "Moonlight & Snow", artwork: null, audioSrc: null, links: null },
      { title: "Shining & Clouds", artwork: null, audioSrc: null, links: null },
    ],
    links: {
      spotify: "https://open.spotify.com/album/2a2xsWfDCamRlsy5i8kTZ7",
      youtube:
        "https://www.youtube.com/playlist?list=OLAK5uy_m3F5W2Qzyu11_G1_UZuziQTBSJDjgx5OQ",
      appleMusic:
        "https://music.apple.com/us/album/thoughtdrifts-single/1763280872",
    },
    description:
      "I've put together three meditative piano pieces that try to capture the feeling of being in nature. I had my own scenes in mind, but I'm more interested in what you see. Don't worry about the titles—just press play and let the music create its own imagery for you.",
  },
];

export const singles: Piece[] = [
  {
    title: "Stargaze",
    artwork: stargazeArt,
    audioSrc: null,
    links: {
      spotify: "https://open.spotify.com/album/2a2xsWfDCamRlsy5i8kTZ7",
      youtube:
        "https://www.youtube.com/playlist?list=OLAK5uy_m3F5W2Qzyu11_G1_UZuziQTBSJDjgx5OQ",
      appleMusic:
        "https://music.apple.com/us/album/thoughtdrifts-single/1763280872",
    },
  },
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
  "Hello there! I think that music says nothing but tells everyone something different.🤔 I hope my music tells you something... 🌽";

export const releaseToBeAnounced: Album = albums[0];
