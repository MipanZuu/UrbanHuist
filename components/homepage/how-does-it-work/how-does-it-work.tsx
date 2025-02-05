"use client";

import { Container } from "@/components/container/container";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselItem,
  CarouselContent,
} from "@/components/ui/carousel";

const steps = [
  {
    title: "Browse Available Rooms",
    description:
      "Explore the wide range of rooms listed on our website to find your perfect fit.",
  },
  {
    title: "Contact the Agency",
    description:
      "Use the contact button to easily reach out to the agency for any inquiries.",
  },
  {
    title: "Confirm Availability & Price",
    description:
      "Verify the availability and confirm the pricing details with the agency.",
  },
  {
    title: "Make a Payment",
    description:
      "Complete your booking by making a secure payment. (Book and payment through the website will be updated soon)",
  },
];

export default function HowItWorks() {
  return (
    <Container>
      <div className="bg-background text-foreground pt-12">
        <h2 className="text-3xl font-bold mb-8">How It Works</h2>

        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="border border-border rounded-lg shadow-md"
            >
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-primary">
                  Step {index + 1}: {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="sm:hidden">
          <Carousel>
            <CarouselContent>
              {steps.map((step, index) => (
                <CarouselItem key={index} className="w-full">
                  <Card className="border border-border rounded-lg shadow-md w-full h-full">
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold text-primary">
                        Step {index + 1}: {step.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                      <p>{step.description}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </Container>
  );
}
