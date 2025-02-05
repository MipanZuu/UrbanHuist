import { Metadata } from "next";
import React from "react";
import HomePage from "@/components/homepage/homepage";
import { SearchBar } from "@/components/search-bar/search-bar";
import { PopularRooms } from "@/components/homepage/content/popular-rooms";
import HowDoesItWork from "@/components/homepage/how-does-it-work/how-does-it-work";

export const metadata: Metadata = {
  title: "Urban Huis | Kos-Kosan ITS, Kos-Kosan UNAIR",
  description:
    "Temukan kos-kosan terbaik di Surabaya dekat ITS, UNAIR, dan area strategis lainnya. Urban Huis menyediakan hunian nyaman, aman, dan terjangkau.",
  keywords: [
    "kos-kosan Surabaya",
    "kos Surabaya murah",
    "kos dekat ITS",
    "kos dekat UNAIR",
    "kos Surabaya nyaman",
    "kos mahasiswa Surabaya",
    "kos eksklusif Surabaya",
    "Urban Huis Surabaya",
    "kos Surabaya terjangkau",
    "kos strategis di Surabaya",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Kos-Kosan Surabaya - Urban Huis | Kos-Kosan ITS, Kos-Kosan UNAIR",
    description:
      "Temukan kos-kosan terbaik di Surabaya dekat ITS, UNAIR, dan area strategis lainnya. Urban Huis menyediakan hunian nyaman, aman, dan terjangkau.",
    url: "https://www.urbanhuis.com",
    siteName: "Urban Huis",
    images: [
      {
        url: "https://www.urbanhuis.com/assets/UrbanHuiseLogo.jpg",
        width: 800,
        height: 600,
        alt: "Urban Huis Surabaya",
      },
    ],
    locale: "id",
    type: "website",
  },
};

export default async function Page() {
  return (
    <>
      <HomePage />
      <SearchBar />
      <HowDoesItWork />
      <PopularRooms />
    </>
  );
}
