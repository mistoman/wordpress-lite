<template>
  <div>
    
    <v-app>
      <v-main>
      <HomeView />
      <AboutView />

      </v-main>
    </v-app>
  </div>

</template>

<script>
import AboutView from './views/AboutView.vue';
import HomeView from './views/HomeView.vue';

export default {
    name: "App",
    data: () => ({
    //
    }),
    components: { AboutView, HomeView }
}
</script>
