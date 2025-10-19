import { useState } from "react";
import { ExternalLink, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface SiteCardProps {
  id: number;
  slug?: string;
  title: string;
  description: string;
  url: string;
  icon: string;
  iconUrl?: string;
  category: string;
  categories?: string[]; // 支持多个分类
  isFavorite?: boolean;
  onToggleFavorite?: (slug: string | undefined) => void;
}

const SiteCard = ({ id, slug, title, description, url, icon, iconUrl, category, categories, isFavorite = false, onToggleFavorite }: SiteCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log('handleFavoriteClick called for slug:', slug);
    console.log('onToggleFavorite exists:', !!onToggleFavorite);
    onToggleFavorite?.(slug);
  };

  return (
    <>
      <div 
        onClick={() => setIsOpen(true)}
        className="block group cursor-pointer animate-fade-in"
      >
        <Card className="h-full min-h-[200px] overflow-hidden bg-gradient-card backdrop-blur-xl border shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:border-primary/50 flex flex-col relative">
          <button
            onClick={handleFavoriteClick}
            className="absolute top-3 right-3 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
            aria-label={isFavorite ? "取消收藏" : "添加收藏"}
          >
            <Heart 
              className={`h-4 w-4 transition-colors ${
                isFavorite ? 'fill-red-500 text-red-500' : 'text-muted-foreground hover:text-red-500'
              }`} 
            />
          </button>
          <CardContent className="p-6 flex flex-col gap-3">
            <div className="flex items-start gap-4">
              {/* Icon Container - Fixed size for alignment */}
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform">
                {iconUrl ? (
                  <img 
                    src={iconUrl} 
                    alt={`${title} icon`}
                    className="w-12 h-12 rounded-lg object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                ) : null}
                <div 
                  className="text-4xl leading-none flex items-center justify-center w-full h-full"
                  style={{ display: iconUrl ? 'none' : 'flex' }}
                >
                  {icon}
                </div>
              </div>
              
              {/* Content - Title aligned with icon top */}
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-lg leading-tight group-hover:text-primary transition-colors flex items-center gap-2">
                  {title}
                  <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                </h3>
              </div>
            </div>
            
            {/* Categories */}
            <div className="flex flex-wrap gap-1.5">
              {categories && categories.length > 0 ? (
                categories.map((cat, index) => (
                  <span key={index} className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary inline-block">
                    {cat}
                  </span>
                ))
              ) : (
                <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary inline-block">
                  {category}
                </span>
              )}
            </div>
            
            {/* Description */}
            <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
              {description}
            </p>
          </CardContent>
        </Card>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center">
                {iconUrl ? (
                  <img 
                    src={iconUrl} 
                    alt={`${title} icon`}
                    className="w-16 h-16 rounded-lg object-contain"
                  />
                ) : (
                  <div className="text-5xl leading-none">{icon}</div>
                )}
              </div>
              <div className="flex-1">
                <DialogTitle className="text-2xl mb-2">{title}</DialogTitle>
                <div className="flex flex-wrap gap-1.5">
                  {categories && categories.length > 0 ? (
                    categories.map((cat, index) => (
                      <span key={index} className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary inline-block">
                        {cat}
                      </span>
                    ))
                  ) : (
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary inline-block">
                      {category}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <DialogDescription className="text-base leading-relaxed">
              {description}
            </DialogDescription>
          </DialogHeader>
          <div className="flex gap-3 mt-4">
            <Button 
              asChild 
              className="flex-1"
            >
              <a href={url} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                访问网站
              </a>
            </Button>
            <Button 
              variant={isFavorite ? "destructive" : "default"}
              onClick={handleFavoriteClick}
            >
              <Heart className={`mr-2 h-4 w-4 ${isFavorite ? 'fill-current' : ''}`} />
              {isFavorite ? '取消收藏' : '收藏'}
            </Button>
            <Button 
              variant="outline" 
              onClick={() => setIsOpen(false)}
            >
              关闭
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SiteCard;
