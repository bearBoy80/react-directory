import { ViteSSG } from 'vite-ssg/single-page'
import App from "./App.tsx";
import "./index.css";

export const createApp = ViteSSG(App);
