"use client";
import { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SparklesCore } from "@/components/ui/sparkles";

import type { Metadata } from "next";

export const data: Metadata = {
  title: "Matheus Migliani",
  description: "Personal portfolio and blog showcasing my work and thoughts",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  return (
    <html lang="en" className={darkMode ? "dark" : ""}>
      <body
        className={`${inter.className}  dark:bg-black text-gray-900 dark:text-white transition-colors duration-300`}
      >
        <div className="flex flex-col min-h-screen">
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          
          <main className="flex-grow relative">
            <SparklesCore
              id="tsparticles"
              background="transparent"
              minSize={0.5}
              maxSize={2}
              particleDensity={100}
              className="absolute top-0 left-0 w-full h-full -z-10"
              particleColor={darkMode ? "#003D87FF" : "#3B82F6"}
            />
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
