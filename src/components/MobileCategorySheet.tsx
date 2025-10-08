import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Code, Palette, Bot, BookOpen, Zap, Layers } from "lucide-react";

interface MobileCategorySheetProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const categoryIcons: Record<string, any> = {
  "全部": Layers,
  "开发工具": Code,
  "设计工具": Palette,
  "AI 工具": Bot,
  "学习资源": BookOpen,
  "效率工具": Zap,
};

const MobileCategorySheet = ({ categories, activeCategory, onCategoryChange }: MobileCategorySheetProps) => {
  return (
    <Sheet>
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
            
            return (
              <Button
                key={category}
                variant={isActive ? "default" : "ghost"}
                onClick={() => onCategoryChange(category)}
                className={`w-full justify-start gap-3 transition-all ${
                  isActive 
                    ? "bg-gradient-primary shadow-card" 
                    : "hover:bg-card/50"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{category}</span>
              </Button>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileCategorySheet;
