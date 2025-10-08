import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
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
  Gamepad2 
} from "lucide-react";
import { useState } from "react";

interface MobileCategorySheetProps {
  categories: string[];
  activeCategory: string;
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

const MobileCategorySheet = ({ categories, activeCategory, getSlugByCategory }: MobileCategorySheetProps) => {
  const [open, setOpen] = useState(false);

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
        <nav className="mt-6 space-y-2">
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
      </SheetContent>
    </Sheet>
  );
};

export default MobileCategorySheet;
