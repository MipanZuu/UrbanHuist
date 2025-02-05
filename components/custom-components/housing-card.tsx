"use client";

import Image, { StaticImageData } from "next/image";
import {
  FaBed,
  FaRulerCombined,
  FaCalendarAlt,
  FaCheckCircle,
} from "react-icons/fa";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { useRouter } from "next/navigation";

export type Property = {
  id: number;
  image: StaticImageData;
  title: string;
  price: string;
  address: string;
  rooms: number;
  size: number;
  furnished: boolean;
  availableDate: string;
  type: string;
};

export default function PropertyCard({
  property,
}: {
  property: Array<Property>;
}) {
  const router = useRouter();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {property.map((property, index) => (
        <Card
          key={index}
          className="bg-background border border-border rounded-lg shadow-lg"
          onClick={() => router.push(`/room-details/${property.id}`)}
        >
          <CardHeader className="p-0">
            <Image
              src={property.image}
              alt={property.title}
              className="w-full h-40 object-cover rounded-t-lg"
              width={400}
              height={300}
            />
          </CardHeader>

          <CardContent className="p-4">
            <span className="inline-block bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full mb-2">
              {property.type}
            </span>

            <CardTitle className="text-xl font-semibold text-foreground mb-1">
              {property.price}
            </CardTitle>

            <p className="text-sm text-secondary-foreground mb-3">
              {property.address}
            </p>
          </CardContent>

          <CardFooter className="grid grid-cols-2 gap-4 text-sm text-muted-foreground p-4">
            <div className="flex items-center gap-2">
              <FaBed className="text-muted-foreground" />
              <span>{property.rooms} room(s)</span>
            </div>
            <div className="flex items-center gap-2 justify-end">
              <FaRulerCombined className="text-muted-foreground" />
              <span>{property.size} m²</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-muted-foreground" />
              <span>{property.furnished ? "Furnished" : "Unfurnished"}</span>
            </div>
            <div className="flex items-center gap-2 justify-end">
              <FaCalendarAlt className="text-muted-foreground" />
              <span>{property.availableDate}</span>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
