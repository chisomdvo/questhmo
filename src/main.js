import { createApp } from "vue";
import router from "./router.js";
import App from "./App.vue";
import smoothscroll from "smoothscroll-polyfill";
import "./assets/tailwind.css";
import "./assets/carousel.css";
smoothscroll.polyfill();
const app = createApp(App);
app.use(router);

app.mount("#app");
