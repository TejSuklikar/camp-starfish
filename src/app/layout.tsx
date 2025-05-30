import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "../components/Navbar"; // Adjust the path as needed
import AuthProvider from "@/auth/AuthProvider";
import Footer from "../components/Footer";


const lato = localFont({
  src: [
    {
      path: "../../public/fonts/Lato/Lato-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/fonts/Lato/Lato-BlackItalic.ttf",
      weight: "900",
      style: "italic",
    },
    {
      path: "../../public/fonts/Lato/Lato-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Lato/Lato-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/Lato/Lato-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Lato/Lato-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/Lato/Lato-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Lato/Lato-RegularItalic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/Lato/Lato-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/Lato/Lato-ThinItalic.ttf",
      weight: "100",
      style: "italic",
    },
  ],
  variable: "--font-lato",
});

const newSpirit = localFont({
  src: [
    {
      path: "../../public/fonts/NewSpirit/NewSpirit-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/NewSpirit/NewSpirit-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/NewSpirit/NewSpirit-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/NewSpirit/NewSpirit-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/NewSpirit/NewSpirit-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/NewSpirit/NewSpirit-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/NewSpirit/NewSpirit-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/NewSpirit/NewSpirit-RegularItalic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/NewSpirit/NewSpirit-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/NewSpirit/NewSpirit-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-newSpirit",
});

const besteam = localFont({
  src: "../../public/fonts/Besteam.ttf",
  weight: "400",
  style: "regular",
  variable: "--font-besteam",
});

export const metadata: Metadata = {
  title: "Camp Starfish",
  description: "Camp Starfish's photo portal and scheduling application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable} ${newSpirit.variable} ${besteam.variable} antialiased w-full min-h-screen flex flex-col`}
      >
        <AuthProvider>
          <>
            <div className="w-full">
              <Navbar />
            </div>
            <div className="flex-grow w-full">
              {children}
            </div>
            <div className="w-full">
              <Footer />
            </div>
          </>
        </AuthProvider>
      </body>
    </html>
  );
}