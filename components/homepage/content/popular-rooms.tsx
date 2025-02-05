import { Container } from "@/components/container/container";
import HousingCard from "@/components/custom-components/housing-card";
import Housing from "@/public/assets/Housing.png";
import { type Property } from "@/components/custom-components/housing-card";
import React from "react";

const properties: Array<Property> = [
  {
    id: 1,
    image: Housing,
    title: "Dorm Room 101",
    price: "Rp. 1.500.000",
    address: "Jalan Keputih Tegal Timur 3B No.15 Keputih, Sukolilo Surabaya",
    rooms: 101,
    size: 16,
    furnished: true,
    availableDate: "2025-03-07",
    type: "Dorm room",
  },
  {
    id: 2,
    image: Housing,
    title: "Dorm Room 102",
    price: "Rp. 1.500.000",
    address: "Jalan Keputih Tegal Timur 3B No.15 Keputih, Sukolilo Surabaya",
    rooms: 102,
    size: 17,
    furnished: false,
    availableDate: "2025-03-10",
    type: "Dorm room",
  },
  {
    id: 3,
    image: Housing,
    title: "Apartment 103",
    price: "Rp. 1.500.000",
    address: "Jalan Keputih Tegal Timur 3B No.15 Keputih, Sukolilo Surabaya",
    rooms: 103,
    size: 45,
    furnished: true,
    availableDate: "2025-04-01",
    type: "Apartment",
  },
  {
    id: 4,
    image: Housing,
    title: "Apartment 104",
    price: "Rp. 1.500.000",
    address: "Jalan Keputih Tegal Timur 3B No.15 Keputih, Sukolilo Surabaya",
    rooms: 104,
    size: 50,
    furnished: false,
    availableDate: "2025-04-15",
    type: "Apartment",
  },
  {
    id: 5,
    image: Housing,
    title: "Studio 105",
    price: "Rp. 1.500.000",
    address: "Jalan Keputih Tegal Timur 3B No.15 Keputih, Sukolilo Surabaya",
    rooms: 105,
    size: 30,
    furnished: true,
    availableDate: "2025-05-01",
    type: "Studio",
  },
  {
    id: 6,
    image: Housing,
    title: "Studio 106",
    price: "Rp. 1.500.000",
    address: "Jalan Keputih Tegal Timur 3B No.15 Keputih, Sukolilo Surabaya",
    rooms: 106,
    size: 28,
    furnished: false,
    availableDate: "2025-05-10",
    type: "Studio",
  },
  {
    id: 7,
    image: Housing,
    title: "Shared Room 107",
    price: "Rp. 1.500.000",
    address: "Jalan Keputih Tegal Timur 3B No.15 Keputih, Sukolilo Surabaya",
    rooms: 107,
    size: 12,
    furnished: true,
    availableDate: "2025-06-01",
    type: "Shared room",
  },
  {
    id: 8,
    image: Housing,
    title: "Shared Room 108",
    price: "Rp. 1.500.000",
    address: "Jalan Keputih Tegal Timur 3B No.15 Keputih, Sukolilo Surabaya",
    rooms: 108,
    size: 14,
    furnished: false,
    availableDate: "2025-06-15",
    type: "Shared room",
  },
  {
    id: 9,
    image: Housing,
    title: "Penthouse 109",
    price: "Rp. 1.500.000",
    address: "Jalan Keputih Tegal Timur 3B No.15 Keputih, Sukolilo Surabaya",
    rooms: 109,
    size: 120,
    furnished: true,
    availableDate: "2025-07-01",
    type: "Penthouse",
  },
  {
    id: 10,
    image: Housing,
    title: "Penthouse 110",
    price: "Rp. 1.500.000",
    address: "Jalan Keputih Tegal Timur 3B No.15 Keputih, Sukolilo Surabaya",
    rooms: 110,
    size: 130,
    furnished: false,
    availableDate: "2025-07-15",
    type: "Penthouse",
  },
];
export const PopularRooms = () => {
  return (
    <Container>
      <div className="py-8">
        <h1 className="text-3xl font-bold text-primary mb-4">Popular Rooms</h1>
        <p className="text-sm text-muted-foreground mb-6 max-w-2xl">
          Discover the most popular rooms available for rent. Find your perfect
          living space with all the amenities you need. We have various types of
          rooms to suit your preferences.
        </p>

        <div>
          <HousingCard property={properties} />
        </div>
      </div>
    </Container>
  );
};
