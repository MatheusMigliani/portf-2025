// src/app/page.tsx
"use client";

import { HomeSection } from "@/components/home"; // {{ edit_1 }} Import HomeSection
import { AboutSection } from "@/components/about"; // {{ edit_2 }} Import AboutSection
import { ProjectsSection } from "@/components/projects"; // {{ edit_3 }} Import ProjectsSection

export default function Home() {
  // ... existing state and hooks ...

  return (
    <div className="min-h-screen">
      <main className="pt-20">
        <HomeSection /> //
        <AboutSection /> //
        <ProjectsSection /> //
      </main>
    </div>
  );
}
