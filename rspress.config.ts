import * as path from 'node:path';
import { defineConfig } from '@rspress/core';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  base: '/better-sidebar/',
  title: 'Better Sidebar',
  description:
    'Better Sidebar for Gemini & AI Studio - Organize your AI conversations with folders, tags, search, and more.',
  lang: 'en',
  icon: '/fav.png',
  logo: '/fav.png',
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
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap',
        rel: 'stylesheet',
      },
    ],
  ],
  themeConfig: {
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
