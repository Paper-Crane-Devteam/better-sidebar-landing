/**
 * Paper Crane Dev 的产品列表，用于页脚的互链。
 * 新增产品时在这里加一项即可，页脚会自动排版（并排除当前站点自己）。
 * Better Playlists 落地页（chrome-extensions/youtube-extensions/Better Playlists/landing-page/
 * public/better-playlists/*.html 的 `footer-family`）里也写了一份，加产品时两边一起改。
 * 工作室主页 studio/index.html（papercranedev.com/）的产品卡片和页脚也要加一项。
 */
export type Lang = 'en' | 'zh' | 'zh-tw' | 'ja' | 'es';

export interface FamilyProduct {
  id: string;
  name: string;
  href: string;
  icon: string;
  desc: Record<Lang, string>;
}

export const FAMILY: FamilyProduct[] = [
  {
    id: 'better-sidebar',
    name: 'Better Sidebar',
    href: '/better-sidebar/',
    icon: '/better-sidebar/plugin-icon.png',
    desc: {
      en: 'Folders, tags and search for Gemini & AI Studio',
      zh: '为 Gemini 与 AI Studio 加上文件夹、标签和搜索',
      'zh-tw': '為 Gemini 與 AI Studio 加上資料夾、標籤和搜尋',
      ja: 'Gemini と AI Studio にフォルダ・タグ・検索を',
      es: 'Carpetas, etiquetas y búsqueda para Gemini y AI Studio',
    },
  },
  {
    id: 'better-playlists',
    name: 'Better Playlists',
    href: '/better-playlists/',
    icon: '/better-playlists/assets/icon128.png',
    desc: {
      en: 'Sidebar, batch editing and search for YouTube playlists',
      zh: '为 YouTube 播放列表加上侧栏、批量编辑和搜索',
      'zh-tw': '為 YouTube 播放清單加上側欄、批次編輯和搜尋',
      ja: 'YouTube の再生リストにサイドバー・一括編集・検索を',
      es: 'Barra lateral, edición por lotes y búsqueda para listas de YouTube',
    },
  },
];

export const FAMILY_LABEL: Record<Lang, string> = {
  en: 'Also by Paper Crane Dev',
  zh: 'Paper Crane Dev 的其他作品',
  'zh-tw': 'Paper Crane Dev 的其他作品',
  ja: 'Paper Crane Dev のほかの作品',
  es: 'También de Paper Crane Dev',
};
