"use client";

import { useParams } from "next/navigation";
import { Container } from "@/components/container/container";
import Housing from "@/public/assets/Housing.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { MdOpenInFull, MdOutlineCloseFullscreen } from "react-icons/md";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const properties = [
  {
    id: 1,
    images: [Housing, Housing, Housing, Housing, Housing],
    title: "Dorm Room 101",
    price: "Rp. 1.500.000",
    address: "Jalan Keputih Tegal Timur 3B No.15 Keputih, Sukolilo Surabaya",
    rooms: 101,
    size: 16,
    furnished: true,
    availableDate: "2025-03-07",
    type: "Dorm room",
    description:
      "A cozy dorm room perfect for students, located near ITS and UNAIR. Enjoy a vibrant community with nearby amenities for convenience.",
    amenities: ["Wi-Fi", "Air Conditioning", "Study Desk", "Shared Kitchen"],
    isAvailable: true,
  },
];

export default function RoomDetails() {
  const { id } = useParams();
  const property = properties.find((prop) => prop.id === Number(id));
  const [isFullscreen, setIsFullscreen] = useState(false);

  if (!property) {
    return (
      <Container>
        <h1 className="text-2xl font-bold text-center text-red-500 mt-10">
          Room not found
        </h1>
      </Container>
    );
  }

  return (
    <Container>
      <div className="p-4">
        <div className="relative">
          <Carousel className="w-full">
            <CarouselContent>
              {property.images.map((image, index) => (
                <CarouselItem key={index} className="w-full relative">
                  <Image
                    src={image}
                    alt={`${property.title} Image ${index + 1}`}
                    className="rounded-lg w-full object-cover h-64 sm:h-80 md:h-[50vh]"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full" />
            <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full" />

            <Button
              className="absolute top-4 right-4 w-8 h-8 text-white p-1 rounded-full bg-black"
              onClick={() => setIsFullscreen(true)}
            >
              <MdOpenInFull size={20} />
            </Button>
          </Carousel>
        </div>

        {isFullscreen && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 overflow-y-auto">
            <div className="relative w-full max-w-4xl mx-auto p-4">
              <Carousel className="w-full">
                <CarouselContent>
                  {property.images.map((image, index) => (
                    <CarouselItem key={index} className="w-full">
                      <Image
                        src={image}
                        alt={`${property.title} Fullscreen Image ${index + 1}`}
                        className="w-full max-h-screen object-contain rounded-lg"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full" />
                <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full" />

                <Button
                  className="absolute top-4 right-4 w-8 h-8 text-white p-1 rounded-full bg-black"
                  onClick={() => setIsFullscreen(false)}
                >
                  <MdOutlineCloseFullscreen size={20} />
                </Button>
              </Carousel>
            </div>
          </div>
        )}

        <h1 className="text-4xl font-bold text-primary mt-4">
          {property.title}
        </h1>
        <p className="text-2xl text-primaryColor mt-2 font-semibold">
          {property.price}
        </p>
        <p className="text-muted-foreground mt-1 text-sm italic">
          {property.address}
        </p>

        <div className="mt-2">
          <span
            className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${
              property.isAvailable
                ? "bg-green-500 text-white"
                : "bg-red-500 text-white"
            }`}
          >
            {property.isAvailable ? "Available" : "Not Available"}
          </span>
        </div>

        <p className="text-base mt-4 leading-relaxed">{property.description}</p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
          <div className="p-3 bg-accent rounded shadow">
            <strong>Rooms:</strong>
            <p>{property.rooms}</p>
          </div>
          <div className="p-3 bg-accent rounded shadow">
            <strong>Size:</strong>
            <p>{property.size} m²</p>
          </div>
          <div className="p-3 bg-accent rounded shadow">
            <strong>Furnished:</strong>
            <p>{property.furnished ? "Yes" : "No"}</p>
          </div>
          <div className="p-3 bg-accent rounded shadow">
            <strong>Available From:</strong>
            <p>{property.availableDate}</p>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold text-primary mb-2">
            Amenities:
          </h3>
          <ul className="list-disc list-inside text-sm text-foreground">
            {property.amenities.map((amenity, index) => (
              <li key={index}>{amenity}</li>
            ))}
          </ul>
        </div>

        <Button
          className={`w-full mt-6 text-lg py-3 rounded-lg shadow-md ${
            property.isAvailable
              ? "bg-primary hover:bg-secondaryColor"
              : "bg-gray-400 cursor-not-allowed"
          }`}
          disabled={!property.isAvailable}
        >
          {property.isAvailable ? "Book Now" : "Unavailable"}
        </Button>
      </div>
    </Container>
  );
}
