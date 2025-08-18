"use client";
import * as React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { RxHamburgerMenu } from "react-icons/rx";

export function Navbar() {
  const [position, setPosition] = React.useState("bottom");

  return (
    <div>
      <nav className="fixed top-0 z-50 border-0 w-full lg:px-20 px-10 py-4 bg-[#212121]">
        <div className="flex items-center justify-between mx-auto text-white">
          <h6 className="font-bold">Tailwind UI</h6>
          <ul className="space-x-4 font-medium hidden lg:flex">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Docs</li>
          </ul>
          <div className="items-center space-x-4 hidden lg:flex">
            <div className="flex space-x-4 items-center">
              <FaTwitter className="w-4 h-4" />
              <FaFacebook className="w-4 h-4" />
              <FaInstagram className="w-4 h-4" />
            </div>
            <div>
              <Button variant={"secondary"}>BLOCKS</Button>
            </div>
          </div>
          <div className="lg:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <RxHamburgerMenu className="w-5 h-5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mr-5">
                <DropdownMenuLabel>Menu</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  value={position}
                  onValueChange={setPosition}
                >
                  <DropdownMenuRadioItem value="Home">
                    Home
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="About Us">
                    About Us
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="Contact Us">
                    Contact Us
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="Docs">
                    Docs
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="Docs">
                    <div className="flex space-x-4 items-center">
                      <FaTwitter className="w-4 h-4" />
                      <FaFacebook className="w-4 h-4" />
                      <FaInstagram className="w-4 h-4" />
                    </div>
                    <div>
                      <Button variant={"secondary"}>BLOCKS</Button>
                    </div>
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
