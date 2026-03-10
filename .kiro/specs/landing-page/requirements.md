# 需求文档

## 简介

为 Chrome 扩展 "Better Sidebar for Gemini & AI Studio" 创建一个 Landing Page 网站。网站用于展示扩展的功能特性、提供安装链接、嵌入 YouTube 介绍视频，并包含符合 Google Drive 数据同步功能要求的隐私政策页面。同时需要更新现有的 PRIVACY.md 文件以反映最新的功能变化。

## 术语表

- **Landing_Page**: 扩展的官方宣传网站，包含首页和隐私政策页面
- **Extension**: Better Sidebar for Gemini & AI Studio 浏览器扩展
- **Privacy_Policy_Page**: 网站中的隐私政策页面，详细说明数据处理方式
- **Hero_Section**: 首页顶部的核心展示区域，包含标题、副标题和行动号召按钮
- **Feature_Section**: 首页中展示扩展功能特性的区域
- **Video_Section**: 首页中嵌入 YouTube 介绍视频的区域
- **CTA_Button**: 行动号召按钮，引导用户前往浏览器商店安装扩展
- **Footer**: 页面底部区域，包含链接和版权信息
- **PRIVACY_MD**: 项目仓库中的 PRIVACY.md 文件

## 需求

### 需求 1：网站整体结构

**用户故事：** 作为潜在用户，我希望访问一个结构清晰的 Landing Page，以便快速了解扩展的价值并完成安装。

#### 验收标准

1. THE Landing_Page SHALL 包含两个页面：首页（index）和隐私政策页面（privacy）
2. THE Landing_Page SHALL 采用响应式设计，在桌面端（≥1024px）、平板端（768px-1023px）和移动端（<768px）均可正常浏览
3. THE Landing_Page SHALL 使用静态 HTML、CSS 和 JavaScript 构建，无需后端服务器
4. THE Landing_Page SHALL 在每个页面包含统一的导航栏和 Footer

### 需求 2：首页 Hero Section

**用户故事：** 作为潜在用户，我希望在首页顶部看到扩展的核心价值主张，以便快速判断是否满足我的需求。

#### 验收标准

1. THE Hero_Section SHALL 展示扩展名称 "Better Sidebar for Gemini & AI Studio"
2. THE Hero_Section SHALL 展示一段简洁的价值描述文案，说明扩展解决的核心问题
3. THE Hero_Section SHALL 包含至少两个 CTA_Button，分别链接到 Chrome Web Store 和 Firefox Add-ons 安装页面
4. THE Hero_Section SHALL 展示扩展的主视觉图片或截图

### 需求 3：功能特性展示

**用户故事：** 作为潜在用户，我希望了解扩展的所有主要功能，以便评估扩展是否值得安装。

#### 验收标准

1. THE Feature_Section SHALL 以卡片或分区形式展示以下核心功能：多平台支持、文件夹与标签管理、提示词库、全文搜索、Google Drive 同步、UI 自定义、多账户支持、对话导出、图片下载去水印
2. WHEN 用户在移动端浏览时，THE Feature_Section SHALL 将功能卡片调整为单列垂直排列
3. THE Feature_Section SHALL 为每个功能提供图标和简短描述文案

### 需求 4：YouTube 视频嵌入

**用户故事：** 作为潜在用户，我希望观看一段介绍视频，以便直观了解扩展的使用方式。

#### 验收标准

1. THE Video_Section SHALL 嵌入一个 YouTube 视频播放器，使用 iframe 嵌入方式
2. THE Video_Section SHALL 包含视频区域的标题文案（如 "看看它是如何工作的"）
3. THE Video_Section SHALL 确保视频播放器在不同屏幕尺寸下保持 16:9 的宽高比
4. THE Video_Section SHALL 使用 YouTube 的隐私增强模式（youtube-nocookie.com）嵌入视频


### 需求 5：安装引导区域

**用户故事：** 作为潜在用户，我希望在页面中方便地找到各浏览器的安装入口，以便在我使用的浏览器上安装扩展。

#### 验收标准

1. THE Landing_Page SHALL 在首页提供一个安装引导区域，包含 Chrome Web Store（https://chromewebstore.google.com/detail/better-sidebar-for-google/cjeoaidogoaekodkbhijgljhenknkenj）和 Firefox Add-ons（https://addons.mozilla.org/en-US/firefox/addon/better-sidebar-for-ai-studio）的安装链接
2. THE Landing_Page SHALL 标注 Edge Add-ons 为 "Coming Soon" 状态
3. WHEN 用户点击安装链接时，THE Landing_Page SHALL 在新标签页中打开对应的浏览器商店页面

### 需求 6：隐私政策页面

**用户故事：** 作为用户，我希望查看详细的隐私政策，以便了解扩展如何处理我的数据，特别是 Google Drive 同步功能。

#### 验收标准

1. THE Privacy_Policy_Page SHALL 说明扩展采用本地优先架构，使用 SQLite WASM 嵌入式数据库存储数据
2. THE Privacy_Policy_Page SHALL 明确列出扩展不收集的数据类型：聊天记录、个人身份信息（PII）、浏览历史
3. THE Privacy_Policy_Page SHALL 详细说明 Google Drive 同步功能的数据处理方式：仅同步设置、提示词和配置数据，不包括聊天记录
4. THE Privacy_Policy_Page SHALL 说明 Google Drive 同步所需的 OAuth 权限范围及其用途
5. THE Privacy_Policy_Page SHALL 说明扩展在 Gemini（gemini.google.com）和 AI Studio（aistudio.google.com）两个平台上运行所需的权限
6. THE Privacy_Policy_Page SHALL 包含最后更新日期
7. THE Privacy_Policy_Page SHALL 提供联系方式（GitHub Issues 页面链接）

### 需求 7：更新 PRIVACY.md 文件

**用户故事：** 作为开源项目维护者，我希望 PRIVACY.md 文件反映最新的功能变化，以便用户和审核人员获取准确的隐私信息。

#### 验收标准

1. THE PRIVACY_MD SHALL 在权限说明中包含 Gemini 平台（gemini.google.com）的 host_permissions
2. THE PRIVACY_MD SHALL 新增 Google Drive 同步功能的专门章节，说明同步的数据范围（设置、提示词、配置数据）
3. THE PRIVACY_MD SHALL 说明 Google Drive 同步所需的 OAuth 权限（drive.appdata 范围）及其用途
4. THE PRIVACY_MD SHALL 明确说明 Google Drive 同步不包括聊天记录内容
5. THE PRIVACY_MD SHALL 在第三方服务章节中新增 Google Drive 相关说明
6. THE PRIVACY_MD SHALL 更新最后更新日期

### 需求 8：页面 Footer

**用户故事：** 作为用户，我希望在页面底部找到项目相关的重要链接，以便快速导航到所需资源。

#### 验收标准

1. THE Footer SHALL 包含以下链接：GitHub 仓库、隐私政策页面、Chrome Web Store、Firefox Add-ons
2. THE Footer SHALL 展示开源许可证信息（GPL-3.0）
3. THE Footer SHALL 包含 "This is an independent project and is not affiliated with Google" 的免责声明

### 需求 9：开源与品牌展示

**用户故事：** 作为开发者或潜在贡献者，我希望在网站上看到项目的开源信息，以便了解如何参与贡献。

#### 验收标准

1. THE Landing_Page SHALL 在首页展示项目为 GPL-3.0 开源许可证
2. THE Landing_Page SHALL 提供 GitHub 仓库链接，引导用户查看源码或参与贡献
3. THE Landing_Page SHALL 包含 "独立项目，与 Google 无关" 的声明

### 需求 10：SEO 与元数据

**用户故事：** 作为项目维护者，我希望网站具备良好的 SEO 基础，以便潜在用户能通过搜索引擎找到扩展。

#### 验收标准

1. THE Landing_Page SHALL 为每个页面设置合适的 title 和 meta description 标签
2. THE Landing_Page SHALL 包含 Open Graph 元数据（og:title、og:description、og:image），以便在社交媒体分享时展示正确的预览信息
3. THE Landing_Page SHALL 为所有图片提供 alt 属性描述文本
