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
            <div className="flex-shrink-0 group-hover:scale-110 transition-transform">
              {iconUrl ? (
                <img 
                  src={iconUrl} 
                  alt={`${title} icon`}
                  className="w-12 h-12 rounded-lg object-contain"
                  onError={(e) => {
                    // 如果图片加载失败，显示 emoji
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'block';
                  }}
                />
              ) : null}
              <div 
                className="text-5xl"
                style={{ display: iconUrl ? 'none' : 'block' }}
              >
                {icon}
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors flex items-center gap-2">
                {title}
                <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary inline-block">
                {category}
              </span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
        </CardContent>
      </Card>
    </a>
  );
};

export default SiteCard;
