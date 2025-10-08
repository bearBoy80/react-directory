import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface SiteCardProps {
  title: string;
  description: string;
  url: string;
  icon: string;
  iconUrl?: string;
  category: string;
}

const SiteCard = ({ title, description, url, icon, iconUrl, category }: SiteCardProps) => {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block group"
    >
      <Card className="h-full overflow-hidden bg-gradient-card backdrop-blur-xl border shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:border-primary/50">
        <CardContent className="p-6">
          <div className="flex items-start gap-4 mb-4">
            {/* Icon Container - Fixed size for alignment */}
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform">
              {iconUrl ? (
                <img 
                  src={iconUrl} 
                  alt={`${title} icon`}
                  className="w-12 h-12 rounded-lg object-contain"
                  onError={(e) => {
                    // 如果图片加载失败，显示 emoji
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
            
            {/* Content - Aligned to top */}
            <div className="flex-1 min-w-0 flex flex-col">
              <h3 className="font-semibold text-lg leading-tight mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                {title}
                <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
              </h3>
              <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary inline-block w-fit mb-3">
                {category}
              </span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
            {description}
          </p>
        </CardContent>
      </Card>
    </a>
  );
};

export default SiteCard;
