<template>
    <div class="recipe-card">
      <h2>{{ recipe.strMeal }}</h2>
      <img :src="recipe.strMealThumb" :alt="recipe.strMeal">
      <button @click="showDetails">Details</button>
    </div>
  </template>
  
  <script>
  export default {
    props: ['recipe'],
    methods: {
      showDetails() {
        this.$emit('show-details', this.recipe);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add your CSS styles here */
  img{
    width: 10rem;
    height: 10rem;
  }
  </style>
  