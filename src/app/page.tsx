"use client";
import dynamic from "next/dynamic";
import { Suspense, useEffect, useState } from "react";
import { Spinner } from "@/components/ui/spinner";
import Header from "@/components/Header";

interface LayoutProps {
  darkMode: boolean;
  onDarkModeChange: React.Dispatch<React.SetStateAction<boolean>>;
}

const HomeSection = dynamic(
  () => import("@/components/home").then((mod) => mod.HomeSection),
  { ssr: false }
);
const AboutSection = dynamic(
  () => import("@/components/about").then((mod) => mod.AboutSection),
  { ssr: false }
);
const ProjectsSection = dynamic(
  () => import("@/components/projects").then((mod) => mod.ProjectsSection),
  { ssr: false }
);

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode");
    if (isDarkMode === null) {
      localStorage.setItem("darkMode", "true");
    } else {
      setDarkMode(isDarkMode === "true");
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1000); // Adjust timeout as needed
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen">
      <Header darkMode={darkMode} onDarkModeChange={setDarkMode} />
      <main className="pt-20">
        {loading ? (
          <Spinner
            className="transition-all ease-in-out animate-spin"
            size={"medium"}
          />
        ) : (
          <>
            <Suspense fallback={<Spinner className="animate-spin" />}>
              <HomeSection />
            </Suspense>
            <Suspense fallback={<Spinner className="animate-spin" />}>
              <AboutSection />
            </Suspense>
            <Suspense fallback={<Spinner className="animate-spin" />}>
              <ProjectsSection />
            </Suspense>
          </>
        )}
      </main>
    </div>
  );
}
