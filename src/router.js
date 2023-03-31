import { nextTick } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import NavBar from "./components/NavBar.vue";
import NavBarr from "./components/NavBarr.vue";
import Nav from "./components/TheNavbar.vue";
import Home from "./components/HomeSection.vue";
import Login from "./components/TheLogin.vue";
import HomePage from "./components/HomePage.vue";
import Healthplan from "./components/3_column_cards.vue";
import Footer from "./components/FooterDetails.vue";
import Footerr from "./components/TheFooter.vue";
import Clients from "./components/OurClients";
import Testimonial from "./components/testimonial_slides";
import Testbackground from "./components/with_background_image.vue";
import Theprice from "./components/with_four_tiers_and_feature_list.vue";
import Theprice2 from "./components/with_comparison_table.vue";
import Theprice3 from "./components/with_split_brand_panel.vue";
import Theprice4 from "./components/with_three_tiers_and_feature_comparison.vue";
import Theprice5 from "./components/with_three_tiers_and_testimonial.vue";
import Checkout from "./components/two_column_with_quantity_dropdown.vue";
import Payment from "./components/split_with_order_summary.vue";
import Pay from "./components/single_step_with_order_summary.vue";
//import DesignandEng from "./pages/DesignEng.vue";
//import ProjectMagt from "./pages/ProjectMagt.vue";
//import FireFighting from "./pages/FireFighting.vue";
//import BasicEng from "./pages/BasicEng.vue";
//import ConstructionDetails from "./pages/ConstructionDetails.vue";
//import StructuralWorks from "./pages/StructuralWorks.vue";
//import PowerGenerations from "./pages/PowerGenerations.vue";
//import DetailedEng from "./pages/DetailedEng.vue";
//import ElectricalWorks from "./pages/ElectricalWorks.vue";
//import PipelineMagt from "./pages/PipelineMagt.vue";
//import NotFound from "./components/NotFound.vue";
//import OurClients from "./components/OurClients.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      meta: { title: "Home - Oillead Services" },
    },
    {
      path: "/home",
      name: "HomePage",
      component: HomePage,
      meta: { title: "Home - Oillead Services" },
    },
    {
      path: "/navbar",
      name: "NavBar",
      component: NavBar,
      meta: { title: "Home - Oillead Services" },
    },
    {
      path: "/nav",
      name: "NavBarr",
      component: NavBarr,
      meta: { title: "Home - Oillead Services" },
    },
    {
      path: "/navv",
      name: "Nav",
      component: Nav,
      meta: { title: "Home - Oillead Services" },
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
      meta: { title: "Home - Oillead Services" },
    },
    {
      path: "/healthplan",
      name: "Healthplan",
      component: Healthplan,
      meta: { title: "Home - Oillead Services" },
    },
    {
      path: "/footer",
      name: "Footer",
      component: Footer,
      meta: { title: "Home - Oillead Services" },
    },
    {
      path: "/footerr",
      name: "Footerr",
      component: Footerr,
      meta: { title: "Home - Oillead Services" },
    },
    {
      path: "/clients",
      name: "Clients",
      component: Clients,
      meta: { title: "Home - Oillead Services" },
    },
    {
      path: "/testimonial",
      name: "Testimonial",
      component: Testimonial,
      meta: { title: "Home - Oillead Services" },
    },
    {
      path: "/testbackground",
      name: "Testbackground",
      component: Testbackground,
      meta: { title: "Home - Oillead Services" },
    },
    {
      path: "/price1",
      name: "Theprice",
      component: Theprice,
      meta: { title: "Home - Oillead Services" },
    },

    {
      path: "/ourplans",
      name: "Theprice2",
      component: Theprice2,
      meta: { title: "Home - Oillead Services" },
    },

    {
      path: "/price3",
      name: "Theprice3",
      component: Theprice3,
      meta: { title: "Home - Oillead Services" },
    },
    {
      path: "/price4",
      name: "Theprice4",
      component: Theprice4,
      meta: { title: "Home - Oillead Services" },
    },
    {
      path: "/price5",
      name: "Theprice5",
      component: Theprice5,
      meta: { title: "Home - Oillead Services" },
    },
    {
      path: "/checkout",
      name: "Checkout",
      component: Checkout,
      meta: { title: "Home - Oillead Services" },
    },
    {
      path: "/payment",
      name: "Payment",
      component: Payment,
      meta: { title: "Home - Oillead Services" },
    },
    {
      path: "/pay",
      name: "Pay",
      component: Pay,
      meta: { title: "Home - Oillead Services" },
    },
    /*
    {
      path: "/ourclients",
      name: "OurClients",
      component: OurClients,
      meta: { title: "Our Clients - Oillead Services" },
    },
    {
      path: "/designandengineering",
      name: "DesignandEng",
      component: DesignandEng,
      meta: { title: "Design and Engineering - Oillead Services" },
    },
    {
      path: "/projectmanagement",
      name: "ProjectMagt",
      component: ProjectMagt,
      meta: { title: "Project Management - Oillead Services" },
    },
    {
      path: "/fireandprotection",
      name: "FireFighting",
      component: FireFighting,
      meta: { title: "Fire Fighting and Protection System - Oillead Services" },
    },
    {
      path: "/basicengineering",
      name: "BasicEng",
      component: BasicEng,
      meta: { title: "Feed/Basic Engineering - Oillead Services" },
    },
    {
      path: "/constructiondetails",
      name: "ConstructionDetails",
      component: ConstructionDetails,
      meta: { title: "Fabrication and Construction - Oillead Services" },
    },
    {
      path: "/structuralworks",
      name: "StructuralWorks",
      component: StructuralWorks,
      meta: { title: "Civil and Structural Works - Oillead Services" },
    },
    {
      path: "/powergenerations",
      name: "PowerGenerations",
      component: PowerGenerations,
      meta: { title: "Power and Generations - Oillead Services" },
    },
    {
      path: "/detailedengineering",
      name: "DetailedEng",
      component: DetailedEng,
      meta: { title: "Detailed Engineering - Oillead Services" },
    },
    {
      path: "/electricalworks",
      name: "ElectricalWorks",
      component: ElectricalWorks,
      meta: { title: "Electrical Works - Oillead Services" },
    },
    {
      path: "/pipelinemanagement",
      name: "PipelineMagt",
      component: PipelineMagt,
      meta: {
        title: "Pipeline Integrity Management Services - Oillead Services",
      },
    },
    {
      path: "/:notFound(.*)",
      name: "NotFound",
      component: NotFound,
      meta: { title: "Not Found - Oillead Services" },
    },*/
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});

const DEFAULT_TITLE = "Oillead Services";
router.afterEach((to) => {
  nextTick(() => {
    document.title = to.meta.title || DEFAULT_TITLE;
  });
});

export default router;
