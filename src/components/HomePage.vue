<template>
  <NavBar></NavBar>
  <Home></Home>
  <Healthplan></Healthplan>
  <Clients></Clients>
  <Testimonial></Testimonial>
  <Footer></Footer>
</template>

<script>
import NavBar from "./TheNavbar.vue";
import Home from "./HomeSection.vue";
import Healthplan from "./3_column_cards.vue";
import Clients from "./OurClients";
import Footer from "./TheFooter.vue";
import Testimonial from "./testimonial_slides";

export default {
  components: {
    NavBar,
    Home,
    Healthplan,
    Clients,
    Testimonial,
    Footer,
  },
};
</script>
