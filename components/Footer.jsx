import React from "react";
import Link from "next/link";
import {
  Instagram,
  Twitter,
  Facebook,
  Youtube,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-gray-950/50 backdrop-blur-sm mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="space-y-3 sm:space-y-4">
            <Link href="/" className="flex items-center gap-1">
              <span className="text-xl sm:text-2xl font-bold text-white">
                BookMy
              </span>
              <span className="text-xl sm:text-2xl font-bold text-pink-500">
                Vibe
              </span>
              <span className="text-pink-500 text-xl sm:text-2xl">*</span>
            </Link>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Discover and book amazing events happening around you. From
              concerts to workshops, find your next vibe.
            </p>
            <div className="flex items-center gap-3 sm:gap-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-pink-500 transition-colors"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-pink-500 transition-colors"
              >
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-pink-500 transition-colors"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-pink-500 transition-colors"
              >
                <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-white font-semibold text-sm sm:text-base">
              Quick Links
            </h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <Link
                  href="/explore"
                  className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors block"
                >
                  Explore Events
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors block"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/create-event"
                  className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors block"
                >
                  Create Event
                </Link>
              </li>
              <li>
                <Link
                  href="/my-tickets"
                  className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors block"
                >
                  My Tickets
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-white font-semibold text-sm sm:text-base">
              Categories
            </h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <Link
                  href="/explore?category=music"
                  className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors block"
                >
                  Music & Concerts
                </Link>
              </li>
              <li>
                <Link
                  href="/explore?category=tech"
                  className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors block"
                >
                  Tech & Workshops
                </Link>
              </li>
              <li>
                <Link
                  href="/explore?category=sports"
                  className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors block"
                >
                  Sports & Fitness
                </Link>
              </li>
              <li>
                <Link
                  href="/explore?category=food"
                  className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors block"
                >
                  Food & Drinks
                </Link>
              </li>
              <li>
                <Link
                  href="/explore?category=art"
                  className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors block"
                >
                  Art & Culture
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-white font-semibold text-sm sm:text-base">
              Contact Us
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-center gap-2 sm:gap-3 text-gray-400 text-xs sm:text-sm">
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-pink-500 flex-shrink-0" />
                <span className="break-all">support@bookmyvibe.com</span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3 text-gray-400 text-xs sm:text-sm">
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-pink-500 flex-shrink-0" />
                <span>+91 1234 567 890</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 text-gray-400 text-xs sm:text-sm">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-pink-500 mt-0.5 flex-shrink-0" />
                <span>Mumbai, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-6 sm:mt-8 lg:mt-10 pt-4 sm:pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
            © {new Date().getFullYear()} BookMyVibe. Made with ❤️ in India
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors whitespace-nowrap"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors whitespace-nowrap"
            >
              Terms of Service
            </Link>
            <Link
              href="/refund"
              className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors whitespace-nowrap"
            >
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
