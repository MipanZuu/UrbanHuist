import { Metadata } from "next";
import dynamic from "next/dynamic";
import React from "react";

const RoomDetails = dynamic(
  () => import("@/components/homepage/room-details/room-details"),
  {
    loading: () => <p>Loading room details...</p>,
  }
);

// Static Metadata for SEO
export const metadata: Metadata = {
  title: "Dorm Room 101 - Urban Huis",
  description:
    "Discover Dorm Room 101, a cozy student accommodation near ITS and UNAIR in Surabaya. Furnished with modern amenities, perfect for comfortable living.",
  openGraph: {
    title: "Dorm Room 101 - Urban Huis",
    description:
      "Explore Dorm Room 101 with modern facilities near ITS and UNAIR, Surabaya. Ideal for students seeking comfort and convenience.",
    url: "https://www.urbanhuis.com/room-details/1",
    siteName: "Urban Huis",
    images: [
      {
        url: "/assets/Housing.png", // Replace with actual image path
        width: 800,
        height: 600,
        alt: "Dorm Room 101 - Urban Huis",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  keywords: [
    "Dorm Room Surabaya",
    "Kos dekat ITS",
    "Kos UNAIR Surabaya",
    "Student Accommodation",
    "Urban Huis Kos",
  ],
  robots: "index, follow",
};

export default async function Page() {
  return (
    <>
      <RoomDetails />
    </>
  );
}
