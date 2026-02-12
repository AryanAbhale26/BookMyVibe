import { Instagram, Mail, Twitter, Youtube, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-800/50 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-teal-500 to-emerald-400 bg-clip-text text-transparent mb-4">
              BookMyVibe
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              AI-powered event management platform making every event memorable.
            </p>
            <div className="flex gap-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/explore" className="text-gray-400 hover:text-cyan-400 transition-colors">Explore Events</Link></li>
              <li><Link href="/create-event" className="text-gray-400 hover:text-cyan-400 transition-colors">Create Event</Link></li>
              <li><Link href="/my-tickets" className="text-gray-400 hover:text-cyan-400 transition-colors">My Tickets</Link></li>
              <li><Link href="/my-events" className="text-gray-400 hover:text-cyan-400 transition-colors">My Events</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} BookMyVibe. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Made with ❤️ for event organizers worldwide
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
