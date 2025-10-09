import type { Config } from "@react-router/dev/config";
import { categoryList } from "./src/data/sites";

export default {
  // 启用静态预渲染
  async prerender() {
    // 生成所有需要预渲染的路由
    const routes = [
      "/", // 首页 (全部分类)
      ...categoryList
        .filter(cat => cat.slug !== "all") // 排除 "all"，因为它对应首页
        .map(cat => `/category/${cat.slug}`)
    ];
    
    return routes;
  },
  
  // 禁用 SSR，只使用静态预渲染
  ssr: false,
} satisfies Config;
