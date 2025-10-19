import { useState, useMemo, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SearchBar from "@/components/SearchBar";
import Sidebar from "@/components/Sidebar";
import MobileCategorySheet from "@/components/MobileCategorySheet";
import SiteCard from "@/components/SiteCard";
import Footer from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";
import { SEO } from "@/components/SEO";
import { sites, categories, categoryList, getCategoryBySlug, getSlugByCategory, getParentCategory } from "@/data/sites";
import { useFavorites } from "@/hooks/use-favorites";
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

const CategoryPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [displayCount, setDisplayCount] = useState(12);
  const loadMoreRef = useRef<HTMLDivElement>(null);
  const { favorites, toggleFavorite, isFavorite } = useFavorites();

  // 从 URL slug 获取分类名称
  console.log('URL slug from useParams:', slug);
  const activeCategory = slug ? (getCategoryBySlug(slug) || "全部") : "全部";
  console.log('Computed activeCategory:', activeCategory);

  // 验证 slug 是否有效，无效则跳转首页
  useEffect(() => {
    if (slug && !getCategoryBySlug(slug)) {
      navigate("/", { replace: true });
    }
  }, [slug, navigate]);

  const filteredSites = useMemo(() => {
    console.log('activeCategory:', activeCategory);
    console.log('favorites:', favorites);
    console.log('slug:', slug);
    
    let result = sites.filter((site) => {
      const matchesSearch =
        site.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        site.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      // 收藏页面
      if (activeCategory === "收藏") {
        const siteSlug = site.slug || site.title.toLowerCase().replace(/\s+/g, '-');
        const isFavorited = favorites.includes(siteSlug);
        console.log(`Site ${site.title} (slug: ${siteSlug}): isFavorited = ${isFavorited}`);
        return matchesSearch && isFavorited;
      }
      
      // 如果是"全部"，显示所有
      if (activeCategory === "全部") {
        return matchesSearch;
      }
      
      // 检查是否匹配主分类（显示该主分类下所有网站）
      const matchesCategory = site.category === activeCategory;
      
      // 检查是否匹配子分类（只显示该子分类的网站）
      const matchesSubCategory = site.subCategory === activeCategory;
      
      return matchesSearch && (matchesCategory || matchesSubCategory);
    });
    
    console.log('filteredSites count:', result.length);
    return result;
  }, [searchQuery, activeCategory, favorites, slug]);

  const displayedSites = useMemo(() => {
    return filteredSites.slice(0, displayCount);
  }, [filteredSites, displayCount]);

  const hasMore = displayCount < filteredSites.length;

  useEffect(() => {
    setDisplayCount(12);
  }, [searchQuery, activeCategory]);

  useEffect(() => {
    if (!loadMoreRef.current || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setDisplayCount((prev) => prev + 12);
        }
      },
      { rootMargin: "100px" }
    );

    observer.observe(loadMoreRef.current);

    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, [hasMore, displayCount]);

  const handleCategoryChange = (newCategory: string) => {
    const categorySlug = getSlugByCategory(newCategory);
    if (categorySlug === "all") {
      window.location.href = "/";
    } else if (categorySlug) {
      window.location.href = `/category/${categorySlug}`;
    }
  };

  // SEO 配置
  const categoryInfo = categoryList.find(cat => cat.name === activeCategory);
  const seoTitle = activeCategory === "全部"
    ? "NavHub - 精选网站导航 | 发现最优质的工具、设计、AI、学习资源"
    : `${activeCategory} - NavHub 精选网站导航`;
  
  const seoDescription = activeCategory === "全部"
    ? `NavHub 收录${sites.length}+精选网站，涵盖开发工具、设计工具、AI工具、学习资源等${categories.length - 1}大分类，助力你的工作效率飞跃提升`
    : `${categoryInfo?.description || activeCategory} - 发现最优质的${activeCategory}工具和资源，${filteredSites.length}个精选网站推荐`;

  const canonicalUrl = activeCategory === "全部" 
    ? "https://navhub.lovable.app"
    : `https://navhub.lovable.app/category/${slug || getSlugByCategory(activeCategory)}`;

  return (
    <>
      <SEO 
        title={seoTitle}
        description={seoDescription}
        category={activeCategory !== "全部" ? activeCategory : undefined}
        canonical={canonicalUrl}
      />
      
      <div className="flex min-h-screen bg-gradient-hero">
        <div className="fixed inset-0 bg-[image:var(--gradient-mesh)] opacity-40 pointer-events-none" />
        
        <div className="hidden md:block relative z-10">
          <Sidebar 
            activeCategory={activeCategory}
            totalSites={sites.length}
          />
        </div>

        <main className="flex-1 flex flex-col relative min-h-screen" role="main">
          {/* 顶部导航栏 */}
          <header className="sticky top-0 z-30 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 gap-6">
              {/* 左侧：Logo + 标题 + 移动端菜单 */}
              <div className="flex items-center gap-2 min-w-fit">
                <MobileCategorySheet 
                  activeCategory={activeCategory}
                />
                <HubIcon className="h-6 w-6 text-primary" />
                <span className="font-semibold text-base whitespace-nowrap">NavSphere导航</span>
              </div>
              
              {/* 中间：搜索框 */}
              <div className="flex-1 max-w-2xl">
                <SearchBar value={searchQuery} onChange={setSearchQuery} />
              </div>
              
              {/* 右侧：图标按钮组 */}
              <div className="flex items-center gap-1">
                <ThemeToggle />
              </div>
            </div>
          </header>

          <section className="py-8 md:py-12 px-4 relative z-10 flex-1">
            <div className="container mx-auto">
              {filteredSites.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-xl md:text-2xl text-muted-foreground">未找到相关网站</p>
                  <p className="text-muted-foreground mt-2">试试其他关键词或分类</p>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                    {displayedSites.map((site) => {
                      const siteSlug = site.slug || site.title.toLowerCase().replace(/\s+/g, '-');
                      return (
                        <div key={site.id}>
                          <SiteCard 
                            {...site}
                            slug={siteSlug}
                            isFavorite={isFavorite(siteSlug)}
                            onToggleFavorite={toggleFavorite}
                          />
                        </div>
                      );
                    })}
                  </div>
                  
                  {hasMore && (
                    <div ref={loadMoreRef} className="flex justify-center py-8">
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

          <Footer />
        </main>
      </div>
    </>
  );
};

export default CategoryPage;
