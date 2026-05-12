# Campus Quest

## 中文版

Campus Quest 是一款面向大学生校园场景的赛季制运动游戏化产品。它以校园地图为核心载体，把步行、跑步、骑行、训练、拉伸和临时组队等真实运动行为接入统一的任务、徽章和赛季成长体系，让日常校园移动变成可探索、可协作、可持续参与的运动体验。

当前仓库是 Campus Quest 的 MVP 高保真 Web 原型，包含产品落地页、移动端 Demo、网页端 Demo、登录入口和 Supabase 数据结构草案。

### 产品定位

- 面向有运动意愿但难以长期坚持的普通大学生。
- 强调校园真实地理空间，而不是通用运动 App 的校园换皮版本。
- 使用学期赛季、地图任务、徽章成长和轻协作机制提升持续参与感。
- 通过低压力的临时组队和地图偶遇，让运动从个人打卡变成校园共玩体验。

### MVP 功能

- Season Hub：展示赛季主题、今日任务、活力值、赛季积分、徽章进度和协作任务摘要。
- Campus Quest Map：基于校园点位呈现路线任务、区域点亮、限时事件和地图热力状态。
- 多运动输入系统：支持探索类、训练类、恢复类和社交类运动进入同一成长框架。
- Badge & Season Archive：沉淀任务徽章、地点徽章、赛季限定徽章、阶段称号和历史赛季档案。
- Campus Play：支持轻协作、临时组队和低压力地图偶遇互动。

### 技术栈

- React 18
- Vite 5
- Supabase JavaScript SDK
- Supabase Auth 与 PostgreSQL schema 草案
- GitHub Pages 部署脚本

### 本地运行

```bash
npm install
npm run dev
```

构建生产版本：

```bash
npm run build
```

本地预览生产构建：

```bash
npm run preview
```

### Supabase 配置

如果需要启用真实登录和用户进度读取，请在本地创建 `.env` 文件并提供：

```bash
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

没有配置 Supabase 环境变量时，应用会自动使用本地 demo 登录模式。数据库 schema 草案位于 `src/lib/schema.sql`。

### 部署

仓库包含 GitHub Pages 部署脚本：

```bash
npm run deploy
```

该脚本会先执行 Vite 构建，再将 `dist/` 发布到 `gh-pages` 分支。执行前请确认远程仓库已配置 `origin`，并且当前账号有推送权限。

### 主要文件

- `PRD.md`：产品需求文档。
- `src/App.jsx`：React 入口应用与 demo 选择页。
- `src/components/DemoFrame.jsx`：移动端与网页端 Demo 外层承载组件。
- `src/components/LoginModal.jsx`：Demo 登录与 Supabase 登录入口。
- `src/lib/demoData.js`：核心模块、产品亮点和 demo 链路文案。
- `src/lib/supabase.js`：Supabase 客户端初始化。
- `src/lib/schema.sql`：用户档案、进度、徽章和共玩记录的数据表草案。
- `vite.config.js`：Vite 构建入口与 GitHub Pages base 配置。

## English Version

Campus Quest is a season-based gamified fitness product designed for university campuses. It uses the campus map as the core experience layer and connects real-world movement, training, recovery, and lightweight group play into one quest, badge, and seasonal progression system.

This repository contains the MVP hi-fi web prototype for Campus Quest, including the landing page, mobile demo, desktop web demo, login entry, and a draft Supabase data schema.

### Product Positioning

- Built for college students who want to stay active but struggle with long-term consistency.
- Designed around real campus geography instead of being a generic fitness app with a campus skin.
- Uses semester-length seasons, map quests, badge progression, and lightweight collaboration to increase retention.
- Turns solo check-ins into a shared campus play experience through low-pressure temporary teams and map-based encounters.

### MVP Features

- Season Hub: shows the current season theme, daily quests, vitality score, season points, badge progress, and collaboration summaries.
- Campus Quest Map: presents campus routes, location-based quests, area lighting progress, limited-time events, and activity heat.
- Multi-sport Input System: supports exploration, training, recovery, and social sports within one growth framework.
- Badge & Season Archive: stores quest badges, location badges, limited season badges, titles, and historical season records.
- Campus Play: supports lightweight collaboration, temporary teams, and ambient map interactions.

### Tech Stack

- React 18
- Vite 5
- Supabase JavaScript SDK
- Supabase Auth and draft PostgreSQL schema
- GitHub Pages deployment script

### Local Development

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

### Supabase Setup

To enable real login and user progress data, create a local `.env` file with:

```bash
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

If these variables are not configured, the app falls back to local demo login mode. The draft database schema is located at `src/lib/schema.sql`.

### Deployment

The repository includes a GitHub Pages deployment script:

```bash
npm run deploy
```

The script builds the Vite app and publishes `dist/` to the `gh-pages` branch. Before running it, make sure the remote named `origin` is configured and that your account has push permission.

### Key Files

- `PRD.md`: product requirements document.
- `src/App.jsx`: React app entry and demo selection experience.
- `src/components/DemoFrame.jsx`: wrapper for the mobile and desktop demos.
- `src/components/LoginModal.jsx`: demo login and Supabase login entry.
- `src/lib/demoData.js`: module, highlight, and demo-flow copy.
- `src/lib/supabase.js`: Supabase client initialization.
- `src/lib/schema.sql`: draft tables for profiles, progress, badges, and campus play joins.
- `vite.config.js`: Vite build inputs and GitHub Pages base configuration.
