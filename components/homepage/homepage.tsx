"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Housing from "@/public/assets/Housing2.jpg";
import { motion } from "framer-motion";
import { Container } from "../container/container";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const router = useRouter();
  const t = useTranslations("homepage");

  return (
    <div className="flex flex-col min-h-screen">
      <div
        className="h-screen w-full bg-cover bg-center relative"
        style={{ backgroundImage: `url(${Housing.src})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-start text-white">
          <Container>
            <motion.h1
              className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              {t("title")}
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg md:text-xl mb-6 max-w-xl"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
            >
              {t("description")}
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              <Button
                className="px-6 py-3 text-base sm:text-lg font-semibold bg-primary hover:bg-secondary rounded-lg shadow-lg hover:shadow-xl transition duration-300"
                onClick={() => router.push("/bookings")}
              >
                {t("view_offers")}
              </Button>
              <Button
                className="px-6 py-3 text-base sm:text-lg font-semibold bg-muted text-foreground hover:bg-accent rounded-lg shadow-lg hover:shadow-xl transition duration-300"
                onClick={() => router.push("/rent-out")}
              >
                {t("rent_out")}
              </Button>
            </motion.div>
          </Container>
        </div>
      </div>
    </div>
  );
}
