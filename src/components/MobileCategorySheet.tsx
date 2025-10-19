import { Menu, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
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
  Heart
} from "lucide-react";
import { useState } from "react";
import { categoryList } from "@/data/sites";

interface MobileCategorySheetProps {
  activeCategory: string;
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

const MobileCategorySheet = ({ activeCategory }: MobileCategorySheetProps) => {
  const [open, setOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-64 bg-card/95 backdrop-blur-xl">
        <SheetHeader>
          <SheetTitle>分类导航</SheetTitle>
          <SheetDescription>选择一个分类浏览网站</SheetDescription>
        </SheetHeader>
        <nav className="mt-6 space-y-1">
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
                    onClick={() => !hasSubCategories && setOpen(false)}
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
                          onClick={() => setOpen(false)}
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
      </SheetContent>
    </Sheet>
  );
};

export default MobileCategorySheet;
