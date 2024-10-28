import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SparklesCore } from "@/components/ui/sparkles";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Matheus Migliani - Full-stack Developer",
  description:
    "Personal portfolio and blog showcasing my work in web and mobile development",
  openGraph: {
    title: "Matheus Migliani - Full-stack Developer",
    description:
      "Personal portfolio and blog showcasing my work in web and mobile development",
    url: "https://www.matheusmigliani.com",
    siteName: "Matheus Migliani Portfolio",
    images: [
      {
        url: "https://www.matheusmigliani.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} text-gray-900 dark:text-white transition-colors duration-300`}
      >
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow relative">
            <SparklesCore
              id="tsparticles"
              background="transparent"
              minSize={0.5}
              maxSize={1.5}
              particleDensity={40}
              className="absolute top-0 left-0 w-full h-full -z-10"
              particleColor="#003D87FF"
            />
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
