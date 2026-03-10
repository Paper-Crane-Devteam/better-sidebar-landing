import { useEffect } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import VideoSection from "../components/VideoSection";
import InstallSection from "../components/InstallSection";
import OpenSourceBanner from "../components/OpenSourceBanner";
import Footer from "../components/Footer";

const META = {
  title: "Better Sidebar for Gemini & AI Studio - Organize Your AI Conversations",
  description:
    "Folders, tags, full-text search, prompt library, and Google Drive sync for Gemini and AI Studio. Privacy-first, open source.",
  ogTitle: "Better Sidebar for Gemini & AI Studio",
  ogDescription:
    "The missing sidebar for your AI conversations. Organize with folders, tags, and powerful search.",
  ogImage: "/og-image.png",
};

function setMeta(meta: typeof META) {
  document.title = meta.title;

  const setOrCreate = (attr: string, key: string, content: string) => {
    let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute(attr, key);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  };

  setOrCreate("name", "description", meta.description);
  setOrCreate("property", "og:title", meta.ogTitle);
  setOrCreate("property", "og:description", meta.ogDescription);
  setOrCreate("property", "og:image", meta.ogImage);
}

export default function Home() {
  useEffect(() => {
    setMeta(META);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeatureSection />
        <VideoSection />
        <InstallSection />
        <OpenSourceBanner />
      </main>
      <Footer />
    </>
  );
}
