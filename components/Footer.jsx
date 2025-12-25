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
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-1">
              <span className="text-2xl font-bold text-white">BookMy</span>
              <span className="text-2xl font-bold text-pink-500">Vibe</span>
              <span className="text-pink-500 text-2xl">*</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Discover and book amazing events happening around you. From
              concerts to workshops, find your next vibe.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-pink-500 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-pink-500 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-pink-500 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-pink-500 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/explore"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Explore Events
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/create-event"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Create Event
                </Link>
              </li>
              <li>
                <Link
                  href="/my-tickets"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  My Tickets
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/explore?category=music"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Music & Concerts
                </Link>
              </li>
              <li>
                <Link
                  href="/explore?category=tech"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Tech & Workshops
                </Link>
              </li>
              <li>
                <Link
                  href="/explore?category=sports"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Sports & Fitness
                </Link>
              </li>
              <li>
                <Link
                  href="/explore?category=food"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Food & Drinks
                </Link>
              </li>
              <li>
                <Link
                  href="/explore?category=art"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Art & Culture
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-pink-500" />
                <span>support@bookmyvibe.com</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-pink-500" />
                <span>+91 1234 567 890</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-pink-500 mt-0.5" />
                <span>Mumbai, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} BookMyVibe. Made with ❤️ in India
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/refund"
              className="text-gray-400 hover:text-white text-sm transition-colors"
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
