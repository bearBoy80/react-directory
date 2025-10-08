import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Code, 
  Palette, 
  Bot, 
  BookOpen, 
  Zap, 
  Layers, 
  Users, 
  Video, 
  PenTool, 
  BarChart3, 
  Megaphone, 
  Gamepad2 
} from "lucide-react";

const HubIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="3" />
    <circle cx="12" cy="4" r="1.5" />
    <circle cx="12" cy="20" r="1.5" />
    <circle cx="4" cy="12" r="1.5" />
    <circle cx="20" cy="12" r="1.5" />
    <circle cx="6.5" cy="6.5" r="1.5" />
    <circle cx="17.5" cy="17.5" r="1.5" />
    <circle cx="17.5" cy="6.5" r="1.5" />
    <circle cx="6.5" cy="17.5" r="1.5" />
    <line x1="12" y1="9" x2="12" y2="5.5" />
    <line x1="12" y1="18.5" x2="12" y2="15" />
    <line x1="9" y1="12" x2="5.5" y2="12" />
    <line x1="18.5" y1="12" x2="15" y2="12" />
    <line x1="10.2" y1="10.2" x2="8" y2="8" />
    <line x1="16" y1="16" x2="13.8" y2="13.8" />
    <line x1="13.8" y1="10.2" x2="16" y2="8" />
    <line x1="8" y1="16" x2="10.2" y2="13.8" />
  </svg>
);

interface SidebarProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange?: (category: string) => void;
  totalSites: number;
  getSlugByCategory: (category: string) => string | undefined;
}

const categoryIcons: Record<string, any> = {
  "全部": Layers,
  "开发工具": Code,
  "设计工具": Palette,
  "AI 工具": Bot,
  "学习资源": BookOpen,
  "效率工具": Zap,
  "社交媒体": Users,
  "音视频工具": Video,
  "写作工具": PenTool,
  "数据分析": BarChart3,
  "营销工具": Megaphone,
  "娱乐休闲": Gamepad2,
};

const Sidebar = ({ categories, activeCategory, getSlugByCategory, totalSites }: SidebarProps) => {
  return (
    <aside className="w-64 h-screen sticky top-0 border-r border-border/50 bg-card/30 backdrop-blur-xl flex flex-col">
      <div className="p-6 border-b border-border/50">
        <div className="flex items-center gap-2 mb-2">
          <HubIcon className="h-5 w-5 text-primary" />
          <h2 className="font-bold text-lg">分类导航</h2>
        </div>
        <p className="text-sm text-muted-foreground">
          共 {totalSites} 个网站
        </p>
      </div>

      <ScrollArea className="flex-1">
        <nav className="p-4 space-y-2">
          {categories.map((category) => {
            const Icon = categoryIcons[category] || Layers;
            const isActive = activeCategory === category;
            const categorySlug = getSlugByCategory(category);
            const href = categorySlug === "all" ? "/" : `/category/${categorySlug}`;
            
            return (
              <a
                key={category}
                href={href}
                className={`w-full justify-start gap-3 transition-all inline-flex items-center rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 ${
                  isActive 
                    ? "bg-primary text-white dark:bg-gradient-primary dark:text-primary-foreground shadow-card" 
                    : "hover:bg-accent/20 hover:text-foreground dark:hover:bg-card/50"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{category}</span>
              </a>
            );
          })}
        </nav>
      </ScrollArea>
    </aside>
  );
};

export default Sidebar;
