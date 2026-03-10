# 实现计划：Landing Page

## 概述

为 "Better Sidebar for Gemini & AI Studio" 浏览器扩展构建两页式 Landing Page 网站（首页 + 隐私政策页）。使用 Vite 脚手架初始化 React + TypeScript 项目，集成 Tailwind CSS 4、React Router v7、Framer Motion 等依赖，逐步实现各页面组件并完成 PRIVACY.md 更新。

## 任务

- [x] 1. 使用 Vite 脚手架初始化项目并配置依赖
  - 使用 `npm create vite@latest` 初始化 React + TypeScript 项目（模板：`react-ts`）
  - 安装核心依赖：`react-router-dom`、`framer-motion`、`@phosphor-icons/react`
  - 安装开发依赖：`vitest`、`@testing-library/react`、`@testing-library/jest-dom`、`fast-check`、`jsdom`
  - 配置 Tailwind CSS 4（通过 `@tailwindcss/vite` 插件集成）
  - 在 `index.html` 中引入 Google Fonts Outfit 字体
  - 配置 `src/index.css` 添加 Tailwind 指令和全局样式（字体、配色变量等）
  - 配置 Vitest（`vitest.config.ts` 或在 `vite.config.ts` 中配置 test 选项，使用 jsdom 环境）
  - 清理脚手架生成的默认内容（App.tsx 默认模板、默认 CSS 等）
  - _需求: 1.3_

- [x] 2. 实现基础布局组件（Logo、Navbar、Footer）
  - [x] 2.1 实现 Logo.tsx 手写 SVG 组件
    - 手写 SVG 图形模仿 icon.png 的样式（不直接引用 icon.png）
    - 支持 `size` 和 `className` props
    - _需求: 2.1_

  - [x] 2.2 实现 Navbar.tsx 导航栏组件
    - 包含 Logo、首页链接、隐私政策链接、GitHub 仓库链接
    - 移动端使用汉堡菜单展开/收起
    - 使用 React Router 的 `Link` 组件进行页面内导航
    - 外部链接使用 `target="_blank"` 和 `rel="noopener noreferrer"`
    - _需求: 1.4_

  - [x] 2.3 实现 Footer.tsx 页脚组件
    - 包含链接：GitHub 仓库、隐私政策页面、Chrome Web Store、Firefox Add-ons
    - 展示 GPL-3.0 开源许可证信息
    - 包含 "This is an independent project and is not affiliated with Google" 免责声明
    - 外部链接使用 `target="_blank"` 和 `rel="noopener noreferrer"`
    - _需求: 8.1, 8.2, 8.3_

  - [ ]* 2.4 编写 Footer 链接完整性属性测试
    - **Property 3: Footer 链接完整性**
    - 验证 Footer 包含 GitHub 仓库、隐私政策、Chrome Web Store、Firefox Add-ons 的链接
    - **验证: 需求 8.1**

- [x] 3. 实现首页核心区域组件
  - [x] 3.1 实现 HeroSection.tsx
    - Split Screen 布局：左侧文案 + CTA 按钮，右侧视觉展示
    - 展示扩展名称 "Better Sidebar for Gemini & AI Studio"
    - 包含价值描述文案
    - 包含 Chrome Web Store 和 Firefox Add-ons 两个 CTA 按钮
    - 展示扩展主视觉图片（img 标签需包含 alt 属性）
    - 响应式：移动端堆叠为单列
    - 使用 Framer Motion fadeInUp 入场动画
    - _需求: 2.1, 2.2, 2.3, 2.4_

  - [x] 3.2 实现 FeatureSection.tsx
    - 定义 FEATURES 常量数组（9 个核心功能：多平台支持、文件夹与标签管理、提示词库、全文搜索、Google Drive 同步、UI 自定义、多账户支持、对话导出、图片下载去水印）
    - Zig-Zag 交替布局展示功能，每个功能包含 Phosphor 图标 + 标题 + 描述
    - 使用 Framer Motion staggerChildren 瀑布式入场动画 + whileInView 滚动触发
    - 响应式：移动端单列垂直排列
    - _需求: 3.1, 3.2, 3.3_

  - [ ]* 3.3 编写功能特性渲染完整性属性测试
    - **Property 1: 功能特性渲染完整性**
    - 使用 fast-check 生成随机 Feature 对象，验证渲染包含 title、icon、description
    - **验证: 需求 3.1, 3.3**

  - [x] 3.4 实现 VideoSection.tsx
    - 包含标题文案
    - 使用 youtube-nocookie.com 隐私增强模式嵌入 YouTube iframe
    - 保持 16:9 宽高比，使用 `loading="lazy"` 延迟加载
    - iframe 加载失败时显示 fallback 占位区域
    - _需求: 4.1, 4.2, 4.3, 4.4_

  - [x] 3.5 实现 InstallSection.tsx
    - 定义 BROWSER_LINKS 常量数组（Chrome、Firefox、Edge）
    - Chrome 和 Firefox 显示安装链接，Edge 显示 "Coming Soon"
    - 安装链接使用 `target="_blank"` 在新标签页打开
    - 卡片使用 `rounded-[2.5rem]` 圆角 + diffusion shadow
    - _需求: 5.1, 5.2, 5.3_

  - [ ]* 3.6 编写安装链接正确性属性测试
    - **Property 2: 安装链接正确性**
    - 使用 fast-check 生成随机 BrowserLink 对象（available=true），验证 anchor 有正确 href 和 target="_blank"
    - **验证: 需求 5.1, 5.3**

  - [x] 3.7 实现 OpenSourceBanner.tsx
    - 展示 GPL-3.0 开源许可证信息
    - 提供 GitHub 仓库链接
    - 包含 "独立项目，与 Google 无关" 声明
    - _需求: 9.1, 9.2, 9.3_

- [x] 4. 检查点 - 确保所有组件可独立渲染
  - 确保所有测试通过，如有问题请询问用户。

- [x] 5. 组装页面与配置路由
  - [x] 5.1 实现 Home.tsx 首页
    - 按顺序组装：Navbar → HeroSection → FeatureSection → VideoSection → InstallSection → OpenSourceBanner → Footer
    - 设置首页 SEO 元数据（title、meta description、Open Graph 标签）
    - _需求: 1.1, 1.4, 10.1, 10.2_

  - [x] 5.2 实现 Privacy.tsx 隐私政策页
    - 组装：Navbar → 隐私政策内容 → Footer
    - 以 React 组件形式编写隐私政策内容，包含以下章节：本地优先架构、不收集的数据、Google Drive 同步、权限说明、第三方服务、更新日期与联系方式
    - 设置隐私政策页 SEO 元数据
    - _需求: 1.1, 1.4, 6.1, 6.2, 6.3, 6.4, 6.5, 6.6, 6.7, 10.1, 10.2_

  - [x] 5.3 配置 App.tsx 路由
    - 使用 React Router v7 配置 `/` 和 `/privacy` 路由
    - 配置 catch-all 路由重定向到首页
    - 配置 main.tsx 入口文件（BrowserRouter 包裹）
    - _需求: 1.1_

  - [ ]* 5.4 编写页面元数据完整性属性测试
    - **Property 4: 页面元数据完整性**
    - 验证 Home 和 Privacy 页面均包含 title、meta description、OG tags
    - **验证: 需求 10.1, 10.2**

  - [ ]* 5.5 编写图片无障碍访问属性测试
    - **Property 5: 图片无障碍访问**
    - 渲染各页面，遍历所有 img 元素，验证每个都有非空 alt 属性
    - **验证: 需求 10.3**

- [x] 6. 检查点 - 确保页面路由和整体布局正常
  - 确保所有测试通过，如有问题请询问用户。

- [x] 7. 更新 PRIVACY.md 文件
  - 在权限说明中新增 Gemini 平台（`gemini.google.com`）的 host_permissions
  - 新增 Google Drive 同步功能专门章节：同步数据范围（设置、提示词、配置数据）、OAuth 权限（drive.appdata）、明确排除聊天记录
  - 在第三方服务章节新增 Google Drive 相关说明
  - 更新最后更新日期
  - _需求: 7.1, 7.2, 7.3, 7.4, 7.5, 7.6_

- [x] 8. 响应式适配与最终集成
  - [x] 8.1 响应式布局验证与调整
    - 确保所有组件在桌面端（≥1024px）、平板端（768px-1023px）、移动端（<768px）正常显示
    - Hero 区域移动端堆叠、功能卡片移动端单列、视频 16:9 比例保持
    - _需求: 1.2, 3.2, 4.3_

  - [x] 8.2 配置 Vite 构建选项
    - 配置 `base` 路径以适配部署环境
    - 确保构建输出到 `dist/` 目录
    - _需求: 1.3_

- [x] 9. 最终检查点 - 确保所有测试通过
  - 确保所有测试通过，如有问题请询问用户。

## 备注

- 标记 `*` 的任务为可选任务，可跳过以加速 MVP 开发
- 每个任务引用了具体的需求编号以确保可追溯性
- 检查点任务确保增量验证
- 属性测试验证通用正确性属性，单元测试验证具体示例和边界情况
- Logo 组件必须手写 SVG，不得直接引用 icon.png
- 第一个任务使用脚手架工具初始化项目，避免手动创建配置文件
