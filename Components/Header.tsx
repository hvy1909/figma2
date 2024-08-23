"use client";
import Image from "next/image";
import { useState } from "react";
import logo from "/public/logo.png";
import Button from "@mui/material/Button";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="bg-[#000000]/70 max-lg:bg-[#000000] h-[111px] flex items-center w-full lg:fixed z-20 justify-evenly">
        {/* Logo */}
        <div className="flex items-center">
          <Image src={logo} alt="AceLounge Logo" width={250} height={80} />
        </div>

        {/* Hamburger Menu Icon for Mobile */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {/* Hamburger Image */}
            <Image
              src="/hamberger.png" // Đảm bảo bạn đã đặt file này trong thư mục public
              alt="Menu"
              width={80}
              height={30}
            />
          </button>
        </div>

        {/* Navigation Links for Desktop */}
        <nav className="hidden lg:flex items-center space-x-6 lg:space-x-12">
          <a
            href=""
            className="text-[16px] text-white font-bold cursor-pointer hover:opacity-80"
          >
            About us
          </a>
          <a
            href="#"
            className="text-[16px] text-white font-bold cursor-pointer hover:opacity-80"
          >
            Quick Deposit
          </a>
          <a
            href="#"
            className="text-[16px] text-white font-bold cursor-pointer hover:opacity-80"
          >
            Quick Withdrawal
          </a>
        </nav>

        {/* Download Button for Desktop */}
        <div className="xs:hidden lg:block">
          <Button
            className="w-[150px] h-14 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]"
            startIcon={<img width="22px" height="22px" src="/dow.png" />}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "20",
              background: "linear-gradient(180deg, #FF0000, #831414)",
              borderRadius: "10px",
              "&:hover": {
                background: "linear-gradient(180deg, #FF0000, #831414)",
              },
              width: 150,
            }}
          >
            DOWLOAD
          </Button>
        </div>
      </header>

      {/* Mobile Menu (only visible when toggled) */}
      {isOpen && (
        <nav className="lg:hidden bg-[#000000] flex flex-col items-center space-y-4 py-4">
          <a
            href="#"
            className="text-white text-sm lg:text-base hover:text-gray-300"
          >
            About us
          </a>
          <a
            href="#"
            className="text-white text-sm lg:text-base hover:text-gray-300"
          >
            Quick Deposit
          </a>
          <a
            href="#"
            className="text-white text-sm lg:text-base hover:text-gray-300"
          >
            Quick Withdrawal
          </a>
        </nav>
      )}

      {/* Download Button below Header for Mobile */}
      <div className="lg:hidden xs:hidden flex justify-center mt-4">
        <Button
          className="shadow-lg z-10"
          startIcon={<img width="15px" height="18px" src="/icondowload.png" />}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "16",
            background: "linear-gradient(180deg, #ff0000, #831414)",
            borderRadius: "15px",
            "&:hover": {
              background: "linear-gradient(180deg, #ff0000, #831414)",
            },
          }}
        >
          DOWNLOAD
        </Button>
      </div>
    </>
  );
}

export default Header;
