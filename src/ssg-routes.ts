import { categoryList } from "./data/sites";

// 为 SSG 生成所有需要预渲染的路由
export const ssgRoutes = [
  '/',
  ...categoryList
    .filter(cat => cat.slug !== 'all')
    .map(cat => `/category/${cat.slug}`)
];
