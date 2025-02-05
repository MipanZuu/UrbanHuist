"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Moon, Sun, Globe } from "lucide-react";

export default function FlyingButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showLanguageOptions, setShowLanguageOptions] = useState(false);
  const router = useRouter();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const changeLanguage = (locale: string) => {
    router.push(`/${locale}`);
    setShowLanguageOptions(false);
  };

  return (
    <div className="fixed bottom-10 right-10 z-50">
      <Button
        className="bg-primary text-white rounded-full p-3 shadow-lg hover:bg-secondary transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        ⚙️
      </Button>

      {isOpen && (
        <div className="mt-2 bg-background border border-border rounded-lg shadow-lg p-3 space-y-2 relative">
          <Button
            className="w-full flex items-center gap-2 bg-secondary text-foreground hover:bg-primary transition"
            onClick={() => setShowLanguageOptions(!showLanguageOptions)}
          >
            <Globe size={20} /> Language
          </Button>

          {showLanguageOptions && (
            <div className="flex flex-col gap-2 absolute right-full mr-2 bg-background border border-border rounded-lg shadow-lg p-2 bottom-2">
              <Button
                className="bg-accent text-foreground hover:bg-secondary"
                onClick={() => changeLanguage("en")}
              >
                English
              </Button>
              <Button
                className="bg-accent text-foreground hover:bg-secondary"
                onClick={() => changeLanguage("id")}
              >
                Indonesia
              </Button>
            </div>
          )}

          <Button
            className="w-full flex items-center gap-2 bg-secondary text-foreground hover:bg-primary transition"
            onClick={toggleDarkMode}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}{" "}
            {darkMode ? "Light Mode" : "Dark Mode"}
          </Button>
        </div>
      )}
    </div>
  );
}
