import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sparkles, Code, Palette, Bot, BookOpen, Zap, Layers } from "lucide-react";

interface SidebarProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  totalSites: number;
}

const categoryIcons: Record<string, any> = {
  "全部": Layers,
  "开发工具": Code,
  "设计工具": Palette,
  "AI 工具": Bot,
  "学习资源": BookOpen,
  "效率工具": Zap,
};

const Sidebar = ({ categories, activeCategory, onCategoryChange, totalSites }: SidebarProps) => {
  return (
    <aside className="w-64 h-screen sticky top-0 border-r border-border/50 bg-card/30 backdrop-blur-xl flex flex-col">
      <div className="p-6 border-b border-border/50">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="h-5 w-5 text-primary" />
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
            
            return (
              <Button
                key={category}
                variant={isActive ? "default" : "ghost"}
                onClick={() => onCategoryChange(category)}
                className={`w-full justify-start gap-3 transition-all ${
                  isActive 
                    ? "bg-primary text-white dark:bg-gradient-primary dark:text-primary-foreground shadow-card" 
                    : "hover:bg-accent/20 hover:text-foreground dark:hover:bg-card/50"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{category}</span>
              </Button>
            );
          })}
        </nav>
      </ScrollArea>
    </aside>
  );
};

export default Sidebar;
