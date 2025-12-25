import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ConvexClientProvider } from "./ConvexClientProvider";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "BookMyVibe",
  description: "Create and book amazing events",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-linear-to-br from-gray-950 via-zinc-900 to-stone-900 text-white`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ClerkProvider
            appearance={{
              theme: dark,
            }}
          >
            <ConvexClientProvider>
              <Header />
              <main className="relative min-h-screen  container mx-auto pt-40 md:pt-32">
                {/* glow */}
                <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                  <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl animate-pulse [animation-duration:8s]" />
                  <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl animate-pulse [animation-duration:10s] [animation-delay:2s]" />
                  <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-purple-600/15 rounded-full blur-3xl animate-pulse [animation-duration:12s] [animation-delay:4s]" />
                  <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse [animation-duration:14s] [animation-delay:6s]" />
                </div>

                <div className="relative z-10 min-h-[80vh]">{children}</div>
              </main>
              <Footer />
            </ConvexClientProvider>
          </ClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
