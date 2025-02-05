"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Container } from "../container/container";
import { ChevronDown, ChevronUp } from "lucide-react";

export const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 w-full bg-secondary text-muted-foreground p-2 shadow-xl">
      <Container>
        <div
          className="sm:hidden flex items-center justify-between bg-accent p-2 rounded cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex items-center gap-2">
            {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            <span>Search Options</span>
          </div>
        </div>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4`}
        >
          <div className="mb-4">
            <Select>
              <SelectTrigger className="w-full bg-accent text-foreground">
                <SelectValue placeholder="Select House Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apartment">Apartment</SelectItem>
                <SelectItem value="studio">Studio</SelectItem>
                <SelectItem value="shared-room">Shared Room</SelectItem>
                <SelectItem value="penthouse">Penthouse</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="mb-4">
            <Select>
              <SelectTrigger className="w-full bg-accent text-foreground">
                <SelectValue placeholder="Select Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="jakarta">Jakarta</SelectItem>
                <SelectItem value="bandung">Bandung</SelectItem>
                <SelectItem value="surabaya">Surabaya</SelectItem>
                <SelectItem value="yogyakarta">Yogyakarta</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <Button className="w-full bg-primaryColor hover:bg-secondaryColor rounded py-3">
              Search
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
