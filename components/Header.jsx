import { Ticket } from "lucide-react";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <nav className="fixed top-0 right-0  left-0 bg-background/80 backdrop-blur-xl z-20 border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-center ">
          <Link href="/" className="flex items-center ">
            <span className="text-2xl font-bold text-white">BookMy</span>
            <span className="text-2xl font-bold text-pink-500">Vibe</span>
            {/* probadge */}
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
