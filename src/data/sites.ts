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
  },
  {
    id: 16,
    title: "VS Code",
    description: "微软开发的免费代码编辑器",
    url: "https://code.visualstudio.com",
    icon: "💙",
    category: "开发工具"
  },
  {
    id: 17,
    title: "Adobe XD",
    description: "专业的用户体验设计工具",
    url: "https://adobe.com/products/xd.html",
    icon: "🎯",
    category: "设计工具"
  },
  {
    id: 18,
    title: "Claude",
    description: "Anthropic 开发的 AI 助手",
    url: "https://claude.ai",
    icon: "🧠",
    category: "AI 工具"
  },
  {
    id: 19,
    title: "freeCodeCamp",
    description: "免费学习编程的在线平台",
    url: "https://freecodecamp.org",
    icon: "🔥",
    category: "学习资源"
  },
  {
    id: 20,
    title: "Trello",
    description: "可视化的项目管理工具",
    url: "https://trello.com",
    icon: "📋",
    category: "效率工具"
  },
  {
    id: 21,
    title: "CodePen",
    description: "前端代码在线编辑和分享平台",
    url: "https://codepen.io",
    icon: "✏️",
    category: "开发工具"
  },
  {
    id: 22,
    title: "Behance",
    description: "Adobe 旗下的创意作品展示平台",
    url: "https://behance.net",
    icon: "🎪",
    category: "设计工具"
  },
  {
    id: 23,
    title: "Stable Diffusion",
    description: "开源的 AI 图像生成模型",
    url: "https://stability.ai",
    icon: "🌌",
    category: "AI 工具"
  },
  {
    id: 24,
    title: "Udemy",
    description: "全球领先的在线学习平台",
    url: "https://udemy.com",
    icon: "🎬",
    category: "学习资源"
  },
  {
    id: 25,
    title: "Slack",
    description: "团队协作和沟通工具",
    url: "https://slack.com",
    icon: "💬",
    category: "效率工具"
  },
  {
    id: 26,
    title: "GitLab",
    description: "DevOps 全生命周期管理平台",
    url: "https://gitlab.com",
    icon: "🦊",
    category: "开发工具"
  },
  {
    id: 27,
    title: "Sketch",
    description: "Mac 平台专业的 UI 设计工具",
    url: "https://sketch.com",
    icon: "💎",
    category: "设计工具"
  },
  {
    id: 28,
    title: "Google Gemini",
    description: "Google 的多模态 AI 模型",
    url: "https://gemini.google.com",
    icon: "✨",
    category: "AI 工具"
  },
  {
    id: 29,
    title: "Khan Academy",
    description: "免费的世界级教育平台",
    url: "https://khanacademy.org",
    icon: "🌟",
    category: "学习资源"
  },
  {
    id: 30,
    title: "Todoist",
    description: "简洁强大的待办事项管理工具",
    url: "https://todoist.com",
    icon: "✅",
    category: "效率工具"
  },
  {
    id: 31,
    title: "Next.js",
    description: "React 全栈开发框架",
    url: "https://nextjs.org",
    icon: "⚡",
    category: "开发工具"
  },
  {
    id: 32,
    title: "Framer",
    description: "交互式原型设计工具",
    url: "https://framer.com",
    icon: "🎨",
    category: "设计工具"
  },
  {
    id: 33,
    title: "Perplexity",
    description: "AI 驱动的搜索引擎",
    url: "https://perplexity.ai",
    icon: "🔍",
    category: "AI 工具"
  },
  {
    id: 34,
    title: "LeetCode",
    description: "编程算法练习平台",
    url: "https://leetcode.com",
    icon: "🧩",
    category: "学习资源"
  },
  {
    id: 35,
    title: "Asana",
    description: "项目和工作流程管理工具",
    url: "https://asana.com",
    icon: "🎯",
    category: "效率工具"
  },
  {
    id: 36,
    title: "Docker",
    description: "容器化应用开发平台",
    url: "https://docker.com",
    icon: "🐳",
    category: "开发工具"
  },
  {
    id: 37,
    title: "InVision",
    description: "数字产品设计协作平台",
    url: "https://invisionapp.com",
    icon: "💫",
    category: "设计工具"
  },
  {
    id: 38,
    title: "Runway",
    description: "AI 视频生成和编辑工具",
    url: "https://runwayml.com",
    icon: "🎥",
    category: "AI 工具"
  },
  {
    id: 39,
    title: "Codecademy",
    description: "交互式编程学习平台",
    url: "https://codecademy.com",
    icon: "📖",
    category: "学习资源"
  },
  {
    id: 40,
    title: "Evernote",
    description: "笔记和信息管理工具",
    url: "https://evernote.com",
    icon: "🐘",
    category: "效率工具"
  },
  {
    id: 41,
    title: "Supabase",
    description: "开源的 Firebase 替代方案",
    url: "https://supabase.com",
    icon: "⚡",
    category: "开发工具"
  },
  {
    id: 42,
    title: "Pexels",
    description: "免费高质量图片和视频素材",
    url: "https://pexels.com",
    icon: "🌅",
    category: "设计工具"
  },
  {
    id: 43,
    title: "Hugging Face",
    description: "机器学习模型和数据集社区",
    url: "https://huggingface.co",
    icon: "🤗",
    category: "AI 工具"
  },
  {
    id: 44,
    title: "W3Schools",
    description: "Web 开发技术教程网站",
    url: "https://w3schools.com",
    icon: "📚",
    category: "学习资源"
  },
  {
    id: 45,
    title: "Google Calendar",
    description: "日程管理和时间规划工具",
    url: "https://calendar.google.com",
    icon: "📅",
    category: "效率工具"
  },
  {
    id: 46,
    title: "Postman",
    description: "API 开发和测试平台",
    url: "https://postman.com",
    icon: "📮",
    category: "开发工具"
  },
  {
    id: 47,
    title: "Coolors",
    description: "配色方案生成器",
    url: "https://coolors.co",
    icon: "🎨",
    category: "设计工具"
  },
  {
    id: 48,
    title: "Copy.ai",
    description: "AI 文案生成工具",
    url: "https://copy.ai",
    icon: "✍️",
    category: "AI 工具"
  },
  {
    id: 49,
    title: "Pluralsight",
    description: "技术技能学习平台",
    url: "https://pluralsight.com",
    icon: "🎓",
    category: "学习资源"
  },
  {
    id: 50,
    title: "ClickUp",
    description: "一站式项目管理平台",
    url: "https://clickup.com",
    icon: "🚀",
    category: "效率工具"
  },
  {
    id: 51,
    title: "npm",
    description: "Node.js 包管理器",
    url: "https://npmjs.com",
    icon: "📦",
    category: "开发工具"
  },
  {
    id: 52,
    title: "Iconify",
    description: "统一的图标框架",
    url: "https://iconify.design",
    icon: "🎯",
    category: "设计工具"
  },
  {
    id: 53,
    title: "ElevenLabs",
    description: "AI 语音合成和克隆",
    url: "https://elevenlabs.io",
    icon: "🎙️",
    category: "AI 工具"
  },
  {
    id: 54,
    title: "YouTube Learning",
    description: "YouTube 教育频道合集",
    url: "https://youtube.com/learning",
    icon: "▶️",
    category: "学习资源"
  },
  {
    id: 55,
    title: "Monday.com",
    description: "工作操作系统",
    url: "https://monday.com",
    icon: "📊",
    category: "效率工具"
  },
  {
    id: 56,
    title: "Netlify",
    description: "现代 Web 项目部署平台",
    url: "https://netlify.com",
    icon: "🌐",
    category: "开发工具"
  },
  {
    id: 57,
    title: "Fontshare",
    description: "免费高质量字体库",
    url: "https://fontshare.com",
    icon: "🔤",
    category: "设计工具"
  },
  {
    id: 58,
    title: "Jasper",
    description: "企业级 AI 内容创作平台",
    url: "https://jasper.ai",
    icon: "📝",
    category: "AI 工具"
  },
  {
    id: 59,
    title: "Brilliant",
    description: "STEM 科目互动学习平台",
    url: "https://brilliant.org",
    icon: "💡",
    category: "学习资源"
  },
  {
    id: 60,
    title: "Obsidian",
    description: "强大的知识管理工具",
    url: "https://obsidian.md",
    icon: "💎",
    category: "效率工具"
  },
  {
    id: 61,
    title: "Railway",
    description: "简化的云服务部署平台",
    url: "https://railway.app",
    icon: "🚂",
    category: "开发工具"
  },
  {
    id: 62,
    title: "Mobbin",
    description: "移动应用设计灵感库",
    url: "https://mobbin.com",
    icon: "📱",
    category: "设计工具"
  },
  {
    id: 63,
    title: "Character.AI",
    description: "AI 角色对话平台",
    url: "https://character.ai",
    icon: "🎭",
    category: "AI 工具"
  },
  {
    id: 64,
    title: "edX",
    description: "世界名校在线课程平台",
    url: "https://edx.org",
    icon: "🏛️",
    category: "学习资源"
  },
  {
    id: 65,
    title: "Airtable",
    description: "云端协作数据库",
    url: "https://airtable.com",
    icon: "📊",
    category: "效率工具"
  },
  {
    id: 66,
    title: "Replit",
    description: "在线协作编程环境",
    url: "https://replit.com",
    icon: "👨‍💻",
    category: "开发工具"
  },
  {
    id: 67,
    title: "Lottie Files",
    description: "动画设计和分享平台",
    url: "https://lottiefiles.com",
    icon: "🎬",
    category: "设计工具"
  },
  {
    id: 68,
    title: "Synthesia",
    description: "AI 视频生成平台",
    url: "https://synthesia.io",
    icon: "🎥",
    category: "AI 工具"
  },
  {
    id: 69,
    title: "Scrimba",
    description: "交互式编程学习平台",
    url: "https://scrimba.com",
    icon: "🎮",
    category: "学习资源"
  },
  {
    id: 70,
    title: "Calendly",
    description: "会议日程安排工具",
    url: "https://calendly.com",
    icon: "🗓️",
    category: "效率工具"
  },
  {
    id: 71,
    title: "Firebase",
    description: "Google 移动和 Web 应用开发平台",
    url: "https://firebase.google.com",
    icon: "🔥",
    category: "开发工具"
  },
  {
    id: 72,
    title: "Spline",
    description: "3D 设计协作工具",
    url: "https://spline.design",
    icon: "🎲",
    category: "设计工具"
  },
  {
    id: 73,
    title: "Notion AI",
    description: "Notion 集成的 AI 写作助手",
    url: "https://notion.so/product/ai",
    icon: "🤖",
    category: "AI 工具"
  },
  {
    id: 74,
    title: "Skillshare",
    description: "创意技能在线学习社区",
    url: "https://skillshare.com",
    icon: "🎨",
    category: "学习资源"
  },
  {
    id: 75,
    title: "Zapier",
    description: "自动化工作流程工具",
    url: "https://zapier.com",
    icon: "⚡",
    category: "效率工具"
  },
  {
    id: 76,
    title: "Vite",
    description: "新一代前端构建工具",
    url: "https://vitejs.dev",
    icon: "⚡",
    category: "开发工具"
  },
  {
    id: 77,
    title: "Rive",
    description: "实时交互动画设计工具",
    url: "https://rive.app",
    icon: "🌊",
    category: "设计工具"
  },
  {
    id: 78,
    title: "Anthropic",
    description: "AI 安全研究公司",
    url: "https://anthropic.com",
    icon: "🔬",
    category: "AI 工具"
  },
  {
    id: 79,
    title: "MDN Plus",
    description: "MDN 高级学习资源",
    url: "https://developer.mozilla.org/plus",
    icon: "➕",
    category: "学习资源"
  },
  {
    id: 80,
    title: "Microsoft To Do",
    description: "微软待办事项管理工具",
    url: "https://todo.microsoft.com",
    icon: "✔️",
    category: "效率工具"
  },
  {
    id: 81,
    title: "Render",
    description: "统一的云平台",
    url: "https://render.com",
    icon: "☁️",
    category: "开发工具"
  },
  {
    id: 82,
    title: "ColorHunt",
    description: "流行配色方案分享平台",
    url: "https://colorhunt.co",
    icon: "🌈",
    category: "设计工具"
  },
  {
    id: 83,
    title: "Writesonic",
    description: "AI 内容创作工具",
    url: "https://writesonic.com",
    icon: "✨",
    category: "AI 工具"
  },
  {
    id: 84,
    title: "Frontend Masters",
    description: "前端开发深度课程平台",
    url: "https://frontendmasters.com",
    icon: "🎯",
    category: "学习资源"
  },
  {
    id: 85,
    title: "Forest",
    description: "专注力培养应用",
    url: "https://forestapp.cc",
    icon: "🌲",
    category: "效率工具"
  },
  {
    id: 86,
    title: "PlanetScale",
    description: "MySQL 兼容的无服务器数据库",
    url: "https://planetscale.com",
    icon: "🌍",
    category: "开发工具"
  },
  {
    id: 87,
    title: "UI8",
    description: "优质 UI 设计资源市场",
    url: "https://ui8.net",
    icon: "🎁",
    category: "设计工具"
  },
  {
    id: 88,
    title: "D-ID",
    description: "AI 数字人视频生成",
    url: "https://d-id.com",
    icon: "👤",
    category: "AI 工具"
  },
  {
    id: 89,
    title: "Laracasts",
    description: "Laravel 和 PHP 学习平台",
    url: "https://laracasts.com",
    icon: "🎬",
    category: "学习资源"
  },
  {
    id: 90,
    title: "Todoist Business",
    description: "团队任务管理解决方案",
    url: "https://todoist.com/business",
    icon: "💼",
    category: "效率工具"
  },
  {
    id: 91,
    title: "Cloudflare",
    description: "Web 性能和安全服务",
    url: "https://cloudflare.com",
    icon: "🛡️",
    category: "开发工具"
  },
  {
    id: 92,
    title: "Muzli",
    description: "设计师的灵感收集工具",
    url: "https://muz.li",
    icon: "🔖",
    category: "设计工具"
  },
  {
    id: 93,
    title: "Otter.ai",
    description: "AI 会议记录和转录",
    url: "https://otter.ai",
    icon: "🦦",
    category: "AI 工具"
  },
  {
    id: 94,
    title: "Udacity",
    description: "科技职业发展课程平台",
    url: "https://udacity.com",
    icon: "🚗",
    category: "学习资源"
  },
  {
    id: 95,
    title: "Raindrop.io",
    description: "智能书签管理工具",
    url: "https://raindrop.io",
    icon: "💧",
    category: "效率工具"
  },
  {
    id: 96,
    title: "Heroku",
    description: "云应用平台",
    url: "https://heroku.com",
    icon: "💜",
    category: "开发工具"
  },
  {
    id: 97,
    title: "Awwwards",
    description: "优秀网页设计展示平台",
    url: "https://awwwards.com",
    icon: "🏆",
    category: "设计工具"
  },
  {
    id: 98,
    title: "Leonardo.ai",
    description: "AI 艺术图像生成工具",
    url: "https://leonardo.ai",
    icon: "🖼️",
    category: "AI 工具"
  },
  {
    id: 99,
    title: "The Odin Project",
    description: "免费全栈开发课程",
    url: "https://theodinproject.com",
    icon: "⚔️",
    category: "学习资源"
  },
  {
    id: 100,
    title: "RescueTime",
    description: "时间追踪和生产力分析",
    url: "https://rescuetime.com",
    icon: "⏱️",
    category: "效率工具"
  }
];

export const categories = ["全部", "开发工具", "设计工具", "AI 工具", "学习资源", "效率工具"];
