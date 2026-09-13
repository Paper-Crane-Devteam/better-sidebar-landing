import * as path from 'node:path';
import { defineConfig } from '@rspress/core';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  base: '/better-sidebar/',
  route: { cleanUrls: true },
  title: 'Better Sidebar',
  description:
    'Better Sidebar for Gemini & AI Studio - Organize your AI conversations with folders, tags, search, and more.',
  lang: 'en',
  icon: '/plugin-icon.png',
  logo: '',
  locales: [
    {
      lang: 'en',
      label: 'English',
      title: 'Better Sidebar',
      description:
        'Better Sidebar for Gemini & AI Studio - Organize your AI conversations.',
    },
    {
      lang: 'zh',
      label: '简体中文',
      title: 'Better Sidebar',
      description:
        'Better Sidebar - Gemini 与 AI Studio 的增强侧边栏，文件夹、标签、搜索一应俱全。',
    },
    {
      lang: 'zh-tw',
      label: '繁體中文',
      title: 'Better Sidebar',
      description:
        'Better Sidebar - Gemini 與 AI Studio 的增強側邊欄，資料夾、標籤、搜尋一應俱全。',
    },
    {
      lang: 'ja',
      label: '日本語',
      title: 'Better Sidebar',
      description:
        'Better Sidebar for Gemini & AI Studio — フォルダ、タグ、検索で AI の会話を整理。',
    },
    {
      lang: 'es',
      label: 'Español',
      title: 'Better Sidebar',
      description:
        'Better Sidebar for Gemini & AI Studio: organiza tus conversaciones con carpetas, etiquetas y búsqueda.',
    },
  ],
  head: [
    [
      'link',
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
    ],
    [
      'link',
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: '',
      },
    ],
    [
      'link',
      {
        // Paper Crane Dev v2.0 三角色字体：
        // display = Playfair Display / text = Literata / mono = JetBrains Mono
        href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=Literata:opsz,wght@7..72,300;7..72,400;7..72,600&family=JetBrains+Mono:wght@400;500;600&display=swap',
        rel: 'stylesheet',
      },
    ],
  ],
  themeConfig: {
    localeRedirect: 'never',
    darkMode: false,
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content:
          'https://github.com/Paper-Crane-Devteam/better-sidebar-for-google-ai-studio',
      },
    ],
  },
});
