"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FaHeart } from "react-icons/fa";
import Image from "next/image";
import Housing from "@/public/assets/Housing.png";

export default function Available() {
  const [searchQuery, setSearchQuery] = useState("");
  const properties = [
    {
      id: 1,
      image: Housing,
      title: "Modern Apartment in Jakarta",
      price: "IDR 1,200,000,000",
      location: "Jakarta, Indonesia",
      status: "New",
    },
    {
      id: 2,
      image: Housing,
      title: "Cozy House in Bandung",
      price: "IDR 850,000,000",
      location: "Bandung, Indonesia",
      status: "Featured",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-teal-700 text-white p-4 shadow-md">
        <h1 className="text-3xl font-bold">Urban Huis</h1>
        <p className="text-sm">Your Gateway to Modern Living in Indonesia</p>
      </header>

      <div className="p-4">
        <div className="flex gap-2 mb-4">
          <Input
            placeholder="Search by location, price, or property type..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1"
          />
          <Button>Search</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {properties.map((property) => (
            <Card key={property.id} className="relative">
              <Image
                src={property.image}
                alt={property.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardContent className="p-4">
                <h2 className="text-xl font-semibold">{property.title}</h2>
                <p className="text-teal-700 font-bold">{property.price}</p>
                <p className="text-gray-600">{property.location}</p>
                <span className="absolute top-2 right-2 bg-yellow-400 text-black text-xs px-2 py-1 rounded">
                  {property.status}
                </span>
                <button className="absolute bottom-2 right-2 text-red-500 hover:text-red-700">
                  <FaHeart />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <footer className="bg-gray-800 text-white text-center p-4">
        <p>
          &copy; {new Date().getFullYear()} Urban Huis. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
