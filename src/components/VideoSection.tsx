import { motion } from "framer-motion";
import { Play } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";

const springTransition = {
  type: "spring" as const,
  stiffness: 100,
  damping: 20,
};

interface VideoSectionProps {
  videoId?: string;
}

export default function VideoSection({ videoId = "YOUR_VIDEO_ID" }: VideoSectionProps) {
  const { t } = useTranslation();
  const hasVideo = videoId !== "YOUR_VIDEO_ID";

  return (
    <section className="py-24 md:py-32 bg-zinc-50/60">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={springTransition}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl tracking-tighter font-semibold text-zinc-900 leading-none">
            {t("video.heading")}
          </h2>
          <p className="mt-4 text-base text-zinc-500 leading-relaxed max-w-[65ch]">
            {t("video.subtitle")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ ...springTransition, delay: 0.15 }}
          className="relative w-full rounded-[2.5rem] overflow-hidden bg-zinc-900 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]"
          style={{ aspectRatio: "16 / 9" }}
        >
          {hasVideo ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${videoId}`}
              title="Better Sidebar for Gemini & AI Studio — Introduction"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="absolute inset-0 w-full h-full border-0"
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full bg-accent-500/20 flex items-center justify-center">
                <Play size={32} weight="fill" className="text-accent-400 ml-1" />
              </div>
              <p className="text-zinc-400 text-sm">{t("video.comingSoon")}</p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
