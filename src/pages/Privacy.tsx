import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const META = {
  title: "Privacy Policy - Better Sidebar for Gemini & AI Studio",
  description:
    "Learn how Better Sidebar handles your data. Local-first architecture, no data collection, full privacy.",
  ogTitle: "Privacy Policy - Better Sidebar",
  ogDescription:
    "Our commitment to your privacy. Local-first, no cloud, no tracking.",
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

const springTransition = { type: "spring" as const, stiffness: 100, damping: 20 };

const GITHUB_ISSUES = "https://github.com/Paper-Crane-Devteam/better-sidebar-for-google-ai-studio/issues";

export default function Privacy() {
  useEffect(() => {
    setMeta(META);
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main className="py-20 md:py-28">
        <div className="max-w-[800px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={springTransition}
          >
            <h1 className="text-3xl md:text-5xl tracking-tighter font-semibold text-zinc-900 leading-none">
              Privacy Policy
            </h1>
            <p className="mt-3 text-sm text-zinc-400">Last Updated: March 10, 2026</p>
          </motion.div>

          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springTransition, delay: 0.1 }}
            className="mt-12 flex flex-col gap-10 text-base text-zinc-600 leading-relaxed"
          >
            <p>
              This Privacy Policy describes how <strong className="text-zinc-900">Better Sidebar for Gemini & AI Studio</strong> ("we", "our", or "the Extension") handles your information. We are committed to protecting your privacy and ensuring you have full control over your data.
            </p>

            <Section title="1. Local-First Architecture">
              <p>The Extension is designed with a "Local-First" architecture:</p>
              <ul className="list-disc pl-5 mt-2 flex flex-col gap-1.5">
                <li>All organizational data (folders, tags, favorites, notes) is stored locally on your device using an embedded <strong className="text-zinc-900">SQLite WASM</strong> database within your browser.</li>
                <li>We do not operate a cloud server to store your data. Your data stays on your machine.</li>
                <li>The Extension interacts with the Gemini and AI Studio pages to identify your conversations for organizing them. We do not transmit this content to any third-party servers.</li>
              </ul>
            </Section>

            <Section title="2. What We Do NOT Collect">
              <ul className="list-disc pl-5 flex flex-col gap-1.5">
                <li>We do <strong className="text-zinc-900">not</strong> collect, store, or transmit your chat history, prompts, or generated responses to our servers.</li>
                <li>We do <strong className="text-zinc-900">not</strong> collect personal identification information (PII) such as your name, email address, or phone number.</li>
                <li>We do <strong className="text-zinc-900">not</strong> track your browsing history outside of the supported platform domains.</li>
              </ul>
            </Section>

            <Section title="3. Google Drive Sync">
              <p>The Extension offers an optional Google Drive sync feature:</p>
              <ul className="list-disc pl-5 mt-2 flex flex-col gap-1.5">
                <li><strong className="text-zinc-900">What is synced:</strong> Settings, prompts, and configuration data only.</li>
                <li><strong className="text-zinc-900">What is NOT synced:</strong> Chat history, conversation content, and personal messages are never uploaded to Google Drive.</li>
                <li><strong className="text-zinc-900">OAuth scope:</strong> The Extension uses the <code className="text-sm bg-zinc-100 px-1.5 py-0.5 rounded">drive.appdata</code> scope, which limits access to a hidden, app-specific folder in your Google Drive. The Extension cannot read or modify any other files in your Drive.</li>
                <li>Sync is initiated manually by you. No automatic background uploads occur.</li>
              </ul>
            </Section>

            <Section title="4. Permissions">
              <p>The Extension requires specific permissions to function:</p>
              <ul className="list-disc pl-5 mt-2 flex flex-col gap-1.5">
                <li><code className="text-sm bg-zinc-100 px-1.5 py-0.5 rounded">storage</code>: To save your settings and preferences locally.</li>
                <li><code className="text-sm bg-zinc-100 px-1.5 py-0.5 rounded">activeTab</code> / <code className="text-sm bg-zinc-100 px-1.5 py-0.5 rounded">host_permissions</code>: To modify the interface on <strong className="text-zinc-900">gemini.google.com</strong> and <strong className="text-zinc-900">aistudio.google.com</strong> (injecting the sidebar overlay) and read conversation titles/IDs to enable folder organization.</li>
                <li><code className="text-sm bg-zinc-100 px-1.5 py-0.5 rounded">offscreen</code>: To run the SQLite database securely in a separate context.</li>
                <li><code className="text-sm bg-zinc-100 px-1.5 py-0.5 rounded">identity</code>: To authenticate with Google for the optional Drive sync feature.</li>
              </ul>
            </Section>

            <Section title="5. Third-Party Services">
              <ul className="list-disc pl-5 flex flex-col gap-1.5">
                <li><strong className="text-zinc-900">Google Gemini & AI Studio:</strong> The Extension operates on top of these platforms. Your use of them is subject to Google's own Privacy Policy and Terms of Service.</li>
                <li><strong className="text-zinc-900">Google Drive:</strong> Used only for the optional sync feature described in Section 3. Data is stored in a hidden app-specific folder and is not accessible to other applications.</li>
                <li><strong className="text-zinc-900">Feedback Form:</strong> If you use the Feedback form, the message (including your email if provided) is sent via a third-party email service (EmailJS) directly to our support team. This is the only instance where data leaves your browser, and it is initiated solely by you.</li>
              </ul>
            </Section>

            <Section title="6. Data Backup and Export">
              <p>
                Since your data is stored locally, you are responsible for backing it up. The Extension provides an Export feature that generates a DB file of your organizational data. We strongly recommend regular backups, especially before clearing your browser data.
              </p>
            </Section>

            <Section title="7. Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
              </p>
            </Section>

            <Section title="8. Contact Us">
              <p>
                If you have any questions about this Privacy Policy, please contact us via the{" "}
                <a
                  href={GITHUB_ISSUES}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-600 hover:text-accent-700 underline underline-offset-2"
                >
                  GitHub Issues page
                </a>.
              </p>
            </Section>
          </motion.article>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-zinc-900 tracking-tight mb-3">{title}</h2>
      {children}
    </section>
  );
}
