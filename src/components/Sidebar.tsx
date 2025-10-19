import { ScrollArea } from "@/components/ui/scroll-area";
import { Link } from "react-router-dom";
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
  Gamepad2,
  ChevronRight,
  Heart
} from "lucide-react";
import { categoryList } from "@/data/sites";
import { useState } from "react";

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
  activeCategory: string;
  totalSites: number;
}

const categoryIcons: Record<string, any> = {
  "全部": Layers,
  "收藏": Heart,
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

const Sidebar = ({ activeCategory, totalSites }: SidebarProps) => {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

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
        <nav className="p-4 space-y-1">
          {categoryList.map((category) => {
            const Icon = categoryIcons[category.name] || Layers;
            const isActive = activeCategory === category.name;
            const categorySlug = category.slug;
            const href = categorySlug === "all" ? "/" : `/category/${categorySlug}`;
            const hasSubCategories = category.subCategories && category.subCategories.length > 0;
            const isExpanded = expandedCategories.includes(category.name);
            
            return (
              <div key={category.name}>
                <div className="flex items-center gap-1">
                  <Link
                    to={href}
                    className={`group flex-1 justify-start gap-3 transition-all duration-200 inline-flex items-center rounded-xl text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-11 px-3.5 py-2 ${
                      isActive 
                        ? "bg-gradient-to-r from-primary/10 to-primary/5 text-foreground font-medium shadow-sm" 
                        : "text-muted-foreground hover:text-foreground hover:bg-accent/30"
                    }`}
                  >
                    <Icon className={`h-4 w-4 transition-colors ${isActive ? 'text-primary' : ''}`} />
                    <span>{category.name}</span>
                  </Link>
                  {hasSubCategories && (
                    <button
                      onClick={() => toggleCategory(category.name)}
                      className="p-2 hover:bg-accent/20 rounded-md transition-colors"
                    >
                      <ChevronRight 
                        className={`h-4 w-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`} 
                      />
                    </button>
                  )}
                </div>
                
                {hasSubCategories && isExpanded && (
                  <div className="ml-3 mt-1 space-y-0.5 pl-3 border-l border-border/40">
                    {category.subCategories!.map((subCat) => {
                      const isSubActive = activeCategory === subCat.name;
                      const subHref = `/category/${subCat.slug}`;
                      
                      return (
                        <Link
                          key={subCat.slug}
                          to={subHref}
                          className={`group relative w-full justify-start transition-all duration-200 inline-flex items-center rounded-lg text-sm h-9 px-3 py-1.5 ${
                            isSubActive 
                              ? "text-primary font-medium bg-primary/5" 
                              : "text-muted-foreground hover:text-foreground hover:bg-accent/20"
                          }`}
                        >
                          <span className="relative">
                            {subCat.name}
                            {isSubActive && (
                              <span className="absolute -left-6 top-1/2 -translate-y-1/2 w-1 h-1 bg-primary rounded-full"></span>
                            )}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </ScrollArea>
    </aside>
  );
};

export default Sidebar;
