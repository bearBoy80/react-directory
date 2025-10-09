import { useState, useEffect, useRef, useMemo } from "react";
import SearchBar from "@/components/SearchBar";
import SiteCard from "@/components/SiteCard";
import Sidebar from "@/components/Sidebar";
import { sites, categories, getSlugByCategory } from "@/data/sites";
import { SEO } from "@/components/SEO";
import { ThemeToggle } from "@/components/ThemeToggle";
import Footer from "@/components/Footer";
import MobileCategorySheet from "@/components/MobileCategorySheet";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [displayCount, setDisplayCount] = useState(24);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const activeCategory = "全部";

  const filteredSites = useMemo(() => {
    let filtered = sites;

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter((site) =>
        site.title.toLowerCase().includes(query) ||
        site.description?.toLowerCase().includes(query) ||
        site.tags?.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    return filtered;
  }, [searchQuery]);

  const displayedSites = useMemo(() => {
    return filteredSites.slice(0, displayCount);
  }, [filteredSites, displayCount]);

  const hasMore = displayCount < filteredSites.length;

  useEffect(() => {
    setDisplayCount(24);
  }, [searchQuery]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setDisplayCount((prev) => Math.min(prev + 24, filteredSites.length));
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = loadMoreRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasMore, filteredSites.length]);

  const title = "NavHub - 精选优质网站导航";
  const description = "发现并收藏互联网上最优质的网站资源，涵盖开发工具、设计资源、AI 工具、学习平台等多个分类";
  const canonical = "https://navhub.lovable.app";

  return (
    <>
      <SEO title={title} description={description} canonical={canonical} />
      
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
        <div className="flex">
          <div className="hidden lg:block">
            <Sidebar 
              categories={categories} 
              activeCategory={activeCategory}
              getSlugByCategory={getSlugByCategory}
              totalSites={sites.length}
            />
          </div>

          <main className="flex-1 relative">
            <div className="absolute top-4 right-4 z-10">
              <ThemeToggle />
            </div>

            <div className="relative overflow-hidden">
              <div 
                className="absolute inset-0 opacity-20 bg-cover bg-center"
                style={{
                  backgroundImage: `url('/src/assets/hero-bg.jpg')`,
                  filter: 'blur(8px)',
                }}
              />
              
              <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
                <div className="text-center mb-12 animate-fade-in">
                  <div className="flex items-center justify-center gap-2 mb-4 lg:hidden">
                    <MobileCategorySheet 
                      categories={categories}
                      activeCategory={activeCategory}
                      getSlugByCategory={getSlugByCategory}
                    />
                  </div>
                  
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60">
                    {activeCategory}
                  </h1>
                  <p className="text-lg md:text-xl text-muted-foreground mb-8">
                    浏览所有精选网站
                  </p>
                  
                  <SearchBar value={searchQuery} onChange={setSearchQuery} />
                </div>
              </div>
            </div>

            <div className="container mx-auto px-4 pb-16 relative z-10">
              {filteredSites.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {displayedSites.map((site) => (
                      <SiteCard key={site.id} site={site} />
                    ))}
                  </div>
                  
                  {hasMore && (
                    <div ref={loadMoreRef} className="flex justify-center py-8">
                      <div className="animate-pulse text-muted-foreground">
                        加载更多...
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-16">
                  <p className="text-muted-foreground text-lg">
                    未找到匹配的网站，试试其他关键词吧
                  </p>
                </div>
              )}
            </div>

            <Footer />
          </main>
        </div>
      </div>
    </>
  );
}
