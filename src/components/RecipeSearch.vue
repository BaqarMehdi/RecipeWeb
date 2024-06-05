<template>

    <div>
      <input type="text" v-model="searchQuery" @input="searchRecipes" placeholder="Search for a recipe">
      <div v-if="error" class="error">{{ error }}</div>
      <div class="recipe-cards">
        <RecipeCard v-for="recipe in recipes" :key="recipe.idMeal" :recipe="recipe" @show-details="showDetails"/>
      </div>
      <RecipeDetails :recipe="selectedRecipe" v-if="selectedRecipe" @close-details="selectedRecipe = null"/>
    </div>

</template>
  

<script>

import RecipeCard from './RecipeCard.vue';
  import RecipeDetails from './RecipeDetails.vue';
  
  export default {
    name: 'RecipeSearch',
    data() {
      return {
        searchQuery: '',
        recipes: [],
        selectedRecipe: null,
        error: ''
      };
    },
    methods: {
      async searchRecipes() {
        try {
          const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${this.searchQuery}`);
          const data = await response.json();
          if (data.meals) {
            this.recipes = data.meals;
            this.error = '';
          } else {
            this.error = 'No recipes found.';
          }
        } catch (error) {
          console.error('Error fetching data:', error);
          this.error = 'An error occurred while fetching data.';
        }
      },
      showDetails(recipe) {
        this.selectedRecipe = recipe;
      }
    },
    components: {
      RecipeCard,
      RecipeDetails
    }
  };
  </script>
  
  <style scoped>
  
  /* Add your CSS styles here */
  .recipe-cards{
    height: 2rem;
    width: 2rem;
  }
  </style>
  