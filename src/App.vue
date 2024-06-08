<template>
  <NavbarPage />
  <div id="app">
 
    <RecipeSearch />
    <!-- Assuming RecipeSearch is the name of your component -->
  </div>
</template>

<script>
import NavbarPage from "@/components/NavbarPage.vue";
import RecipeSearch from "@/components/RecipeSearch.vue"; // Import your RecipeSearch component

export default {
  name: "App",
  components: {
    NavbarPage,
    RecipeSearch, // Register the RecipeSearch component
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased; */
  /* -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  /* color: #2c3e50; */
  /* margin-top: 60px; */
}
</style>
