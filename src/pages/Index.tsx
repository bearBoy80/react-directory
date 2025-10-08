import { useState, useMemo, useEffect, useRef } from "react";
import SearchBar from "@/components/SearchBar";
import Sidebar from "@/components/Sidebar";
import MobileCategorySheet from "@/components/MobileCategorySheet";
import SiteCard from "@/components/SiteCard";
import Footer from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";
import { sites, categories } from "@/data/sites";
import heroBg from "@/assets/hero-bg.jpg";

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

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("全部");
  const [displayCount, setDisplayCount] = useState(12); // 初始显示12个
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const filteredSites = useMemo(() => {
    return sites.filter((site) => {
      const matchesSearch =
        site.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        site.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        activeCategory === "全部" || site.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  // 显示的数据（限制数量）
  const displayedSites = useMemo(() => {
    return filteredSites.slice(0, displayCount);
  }, [filteredSites, displayCount]);

  // 是否还有更多数据
  const hasMore = displayCount < filteredSites.length;

  // 重置显示数量当筛选条件改变时
  useEffect(() => {
    setDisplayCount(12);
  }, [searchQuery, activeCategory]);

  // 无限滚动 - Intersection Observer
  useEffect(() => {
    if (!loadMoreRef.current || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          // 加载更多 - 每次增加12个
          setDisplayCount((prev) => prev + 12);
        }
      },
      {
        rootMargin: "100px", // 提前100px开始加载
      }
    );

    observer.observe(loadMoreRef.current);

    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, [hasMore, displayCount]);

  return (
    <div className="flex min-h-screen bg-gradient-hero">
      {/* Mesh Gradient Background */}
      <div className="fixed inset-0 bg-[image:var(--gradient-mesh)] opacity-40 pointer-events-none" />
      
      {/* Desktop Sidebar */}
      <div className="hidden md:block relative z-10">
        <Sidebar 
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          totalSites={sites.length}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col relative">
        {/* Theme Toggle - Aligned with Sidebar Header */}
        <div className="absolute top-6 right-6 z-20">
          <ThemeToggle />
        </div>
        
        {/* Hero Section */}
        <section className="relative py-12 md:py-20 px-4 overflow-hidden border-b border-border/50">
          <div className="absolute inset-0 opacity-30" 
            style={{
              backgroundImage: `url(${heroBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              mixBlendMode: 'overlay'
            }} 
          />
          
          <div className="container mx-auto relative z-10">
            <div className="text-center mb-8 md:mb-12 animate-fade-in">
              <div className="flex items-center justify-center gap-4 mb-4">
                <MobileCategorySheet 
                  categories={categories}
                  activeCategory={activeCategory}
                  onCategoryChange={setActiveCategory}
                />
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium border border-primary/20 backdrop-blur-sm">
                  <HubIcon className="h-4 w-4" />
                  <span className="hidden sm:inline">精选优质网站导航</span>
                  <span className="sm:hidden">精选导航</span>
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 bg-gradient-primary bg-clip-text text-transparent drop-shadow-2xl">
                NavHub
              </h1>
              <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-12 px-4">
                发现最好的工具、资源和灵感，让你的工作效率飞跃提升
              </p>
              <SearchBar value={searchQuery} onChange={setSearchQuery} />
            </div>
          </div>
        </section>

        {/* Sites Grid */}
        <section className="py-8 md:py-12 px-4 relative z-10">
          <div className="container mx-auto">
            {filteredSites.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-xl md:text-2xl text-muted-foreground">未找到相关网站</p>
                <p className="text-muted-foreground mt-2">试试其他关键词或分类</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 animate-fade-in">
                  {displayedSites.map((site, index) => (
                    <div
                      key={site.id}
                      className="animate-scale-in"
                      style={{ animationDelay: `${(index % 12) * 0.05}s` }}
                    >
                      <SiteCard {...site} />
                    </div>
                  ))}
                </div>
                
                {/* 加载更多触发器 */}
                {hasMore && (
                  <div 
                    ref={loadMoreRef} 
                    className="flex justify-center py-8"
                  >
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: "0.2s" }} />
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: "0.4s" }} />
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Index;
