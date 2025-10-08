import { useState, useMemo } from "react";
import SearchBar from "@/components/SearchBar";
import CategoryFilter from "@/components/CategoryFilter";
import SiteCard from "@/components/SiteCard";
import { sites, categories } from "@/data/sites";
import heroBg from "@/assets/hero-bg.jpg";
import { Sparkles } from "lucide-react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("全部");

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

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <section 
        className="relative py-20 px-4 overflow-hidden"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium">
              <Sparkles className="h-4 w-4" />
              <span>精选优质网站导航</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              NavHub
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
              发现最好的工具、资源和灵感，让你的工作效率飞跃提升
            </p>
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 border-b bg-background/80 backdrop-blur-sm sticky top-0 z-20">
        <div className="container mx-auto">
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>
      </section>

      {/* Sites Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          {filteredSites.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-2xl text-muted-foreground">未找到相关网站</p>
              <p className="text-muted-foreground mt-2">试试其他关键词或分类</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in">
              {filteredSites.map((site, index) => (
                <div
                  key={site.id}
                  className="animate-scale-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <SiteCard {...site} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>
            © 2024 NavHub - 持续更新中 · 收录 {sites.length} 个优质网站
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
