import { sites } from "@/data/sites";

const Footer = () => {
  return (
    <footer className="py-6 px-4 border-t border-border/50 bg-card/20 backdrop-blur-xl relative z-10">
      <div className="container mx-auto text-center text-sm text-muted-foreground">
        <p>
          © 2024 NavHub - 持续更新中 · 收录 {sites.length} 个优质网站
        </p>
      </div>
    </footer>
  );
};

export default Footer;
