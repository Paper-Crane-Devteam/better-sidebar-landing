import { motion } from "framer-motion";
import {
  Globe,
  FolderSimple,
  BookOpen,
  MagnifyingGlass,
  CloudArrowUp,
  Palette,
  Users,
  Export,
  Image,
} from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";

const springTransition = {
  type: "spring" as const,
  stiffness: 100,
  damping: 20,
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: springTransition },
};

interface Feature {
  id: string;
  icon: Icon;
  titleKey: string;
  descKey: string;
}

const FEATURES: Feature[] = [
  { id: "multi-platform", icon: Globe, titleKey: "features.multiPlatform", descKey: "features.multiPlatformDesc" },
  { id: "folders-tags", icon: FolderSimple, titleKey: "features.foldersTags", descKey: "features.foldersTagsDesc" },
  { id: "prompt-library", icon: BookOpen, titleKey: "features.promptLibrary", descKey: "features.promptLibraryDesc" },
  { id: "search", icon: MagnifyingGlass, titleKey: "features.search", descKey: "features.searchDesc" },
  { id: "drive-sync", icon: CloudArrowUp, titleKey: "features.driveSync", descKey: "features.driveSyncDesc" },
  { id: "ui-custom", icon: Palette, titleKey: "features.uiCustom", descKey: "features.uiCustomDesc" },
  { id: "multi-account", icon: Users, titleKey: "features.multiAccount", descKey: "features.multiAccountDesc" },
  { id: "export", icon: Export, titleKey: "features.export", descKey: "features.exportDesc" },
  { id: "image-download", icon: Image, titleKey: "features.imageDownload", descKey: "features.imageDownloadDesc" },
];

export default function FeatureSection() {
  const { t } = useTranslation();

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={springTransition}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-5xl tracking-tighter font-semibold text-zinc-900 leading-none">
            {t("features.heading")}{" "}
            <span className="text-accent-500">{t("features.headingHighlight")}</span>
          </h2>
          <p className="mt-4 text-base text-zinc-500 leading-relaxed max-w-[65ch]">
            {t("features.subtitle")}
          </p>
        </motion.div>

        <div className="flex flex-col gap-16 md:gap-24">
          {FEATURES.map((feature, index) => {
            const isEven = index % 2 === 1;
            const IconComponent = feature.icon;

            return (
              <motion.div
                key={feature.id}
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  isEven ? "lg:direction-rtl" : ""
                }`}
              >
                <motion.div
                  variants={fadeInUp}
                  className={`flex items-center justify-center ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-accent-50 flex items-center justify-center">
                    <IconComponent
                      size={48}
                      weight="duotone"
                      className="text-accent-500 md:w-16 md:h-16"
                    />
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className={`flex flex-col gap-3 ${
                    isEven ? "lg:order-1 lg:text-right" : "lg:order-2"
                  }`}
                >
                  <h3 className="text-xl md:text-2xl tracking-tighter font-semibold text-zinc-900 leading-none">
                    {t(feature.titleKey)}
                  </h3>
                  <p className="text-base text-zinc-500 leading-relaxed max-w-[65ch]">
                    {t(feature.descKey)}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
