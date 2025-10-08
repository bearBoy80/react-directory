export interface Site {
  id: number;
  title: string;
  description: string;
  url: string;
  icon: string;
  iconUrl?: string; // 支持外部图标链接
  category: string;
}

export const sites: Site[] = [
  {
    id: 1,
    title: "GitHub",
    description: "全球最大的代码托管平台，开发者协作的首选",
    url: "https://github.com",
    icon: "💻",
    iconUrl: "https://github.githubassets.com/favicons/favicon.svg",
    category: "开发工具"
  },
  {
    id: 2,
    title: "Figma",
    description: "强大的在线协作设计工具，UI/UX 设计师必备",
    url: "https://figma.com",
    icon: "🎨",
    iconUrl: "https://static.figma.com/app/icon/1/favicon.svg",
    category: "设计工具"
  },
  {
    id: 3,
    title: "ChatGPT",
    description: "OpenAI 开发的智能对话 AI 助手",
    url: "https://chat.openai.com",
    icon: "🤖",
    iconUrl: "https://cdn.oaistatic.com/assets/apple-touch-icon-mz9nytnj.webp",
    category: "AI 工具"
  },
  {
    id: 4,
    title: "MDN Web Docs",
    description: "Mozilla 提供的 Web 开发权威文档",
    url: "https://developer.mozilla.org",
    icon: "📚",
    category: "学习资源"
  },
  {
    id: 5,
    title: "Dribbble",
    description: "设计师社区，展示和发现创意作品",
    url: "https://dribbble.com",
    icon: "🏀",
    iconUrl: "https://cdn.dribbble.com/assets/favicon-b38525134603b9513174ec887944bde1a869eb6cd414f4d640ee48ab2a15a26b.ico",
    category: "设计工具"
  },
  {
    id: 6,
    title: "Stack Overflow",
    description: "全球最大的程序员问答社区",
    url: "https://stackoverflow.com",
    icon: "💡",
    category: "学习资源"
  },
  {
    id: 7,
    title: "Notion",
    description: "All-in-one 的工作空间，笔记、任务、数据库",
    url: "https://notion.so",
    icon: "📝",
    iconUrl: "https://www.notion.so/images/favicon.ico",
    category: "效率工具"
  },
  {
    id: 8,
    title: "Unsplash",
    description: "免费高质量图片素材库",
    url: "https://unsplash.com",
    icon: "📸",
    category: "设计工具"
  },
  {
    id: 9,
    title: "Midjourney",
    description: "AI 生成艺术图像，创意无限",
    url: "https://midjourney.com",
    icon: "🎭",
    category: "AI 工具"
  },
  {
    id: 10,
    title: "Vercel",
    description: "前端项目部署平台，快速简单",
    url: "https://vercel.com",
    icon: "▲",
    category: "开发工具"
  },
  {
    id: 11,
    title: "Canva",
    description: "简单易用的在线平面设计工具",
    url: "https://canva.com",
    icon: "🖼️",
    category: "设计工具"
  },
  {
    id: 12,
    title: "Lovable",
    description: "AI 驱动的全栈开发平台",
    url: "https://lovable.dev",
    icon: "💜",
    category: "开发工具"
  },
  {
    id: 13,
    title: "Linear",
    description: "现代化的项目管理和问题追踪工具",
    url: "https://linear.app",
    icon: "📊",
    category: "效率工具"
  },
  {
    id: 14,
    title: "Coursera",
    description: "全球顶尖大学的在线课程平台",
    url: "https://coursera.org",
    icon: "🎓",
    category: "学习资源"
  },
  {
    id: 15,
    title: "Tailwind CSS",
    description: "实用优先的 CSS 框架",
    url: "https://tailwindcss.com",
    icon: "🌊",
    category: "开发工具"
  }
];

export const categories = ["全部", "开发工具", "设计工具", "AI 工具", "学习资源", "效率工具"];
