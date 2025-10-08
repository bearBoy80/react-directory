import { useState, useMemo } from "react";
import SearchBar from "@/components/SearchBar";
import Sidebar from "@/components/Sidebar";
import MobileCategorySheet from "@/components/MobileCategorySheet";
import SiteCard from "@/components/SiteCard";
import Footer from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";
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
            <div className="absolute top-0 right-4">
              <ThemeToggle />
            </div>
            
            <div className="text-center mb-8 md:mb-12 animate-fade-in">
              <div className="flex items-center justify-center gap-4 mb-4">
                <MobileCategorySheet 
                  categories={categories}
                  activeCategory={activeCategory}
                  onCategoryChange={setActiveCategory}
                />
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium border border-primary/20 backdrop-blur-sm">
                  <Sparkles className="h-4 w-4" />
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
        <section className="py-8 md:py-12 px-4 relative z-10">{/* removed flex-1 */}
          <div className="container mx-auto">
            {filteredSites.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-xl md:text-2xl text-muted-foreground">未找到相关网站</p>
                <p className="text-muted-foreground mt-2">试试其他关键词或分类</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 animate-fade-in">
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
        <Footer />
      </div>
    </div>
  );
};

export default Index;
