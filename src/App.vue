<template>
  <div id="app">
    <h1>Recipe</h1>
    <RecipeSearch /> <!-- Assuming RecipeSearch is the name of your component -->
  </div>
</template>

<script>
import RecipeSearch from '@/components/RecipeSearch.vue'; // Import your RecipeSearch component

export default {
  name: 'App',
  components: {
    RecipeSearch // Register the RecipeSearch component
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
