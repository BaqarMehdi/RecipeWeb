<template>
  <div>
    <h1>Recipe</h1>
    <input
      type="text"
      class="inp"
      v-model="searchQuery"
      @input="searchRecipes"
      placeholder="Search for a recipe"
    />
    <div v-if="error" class="error">{{ error }}</div>
    <div class="flex">
      <div class="recipe-cards">
        <RecipeCard
          class="recipe-card"
          v-for="recipe in recipes"
          :key="recipe.idMeal"
          :recipe="recipe"
          @show-details="showDetails"
        />
      </div>
      <RecipeDetails
        :recipe="selectedRecipe"
        v-if="selectedRecipe"
        @close-details="selectedRecipe = null"
      />
    </div>
  </div>
</template>

<script>
import RecipeCard from "./RecipeCard.vue";
import RecipeDetails from "./RecipeDetails.vue";

export default {
  name: "RecipeSearch",
  data() {
    return {
      searchQuery: "",
      recipes: [],
      selectedRecipe: null,
      error: "",
    };
  },
  methods: {
    async searchRecipes() {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${this.searchQuery}`
        );
        const data = await response.json();
        if (data.meals) {
          this.recipes = data.meals;
          this.error = "";
        } else {
          this.error = "No recipes found.";
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        this.error = "An error occurred while fetching data.";
      }
    },
    showDetails(recipe) {
      this.selectedRecipe = recipe;
    },
  },
  components: {
    RecipeCard,
    RecipeDetails,
  },
};
</script>

<style scoped>

*{
  margin-top: 60px;
}
.flex{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.recipe-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; /* Adjust alignment as needed */
  max-height: 400px; /* Limit the height of the container */
  overflow-y: auto; /* Enable vertical scrolling */
}
.recipe-card {
  flex-basis: calc(
    30% - 10px
  ); /* Each card takes up 25% width with some spacing */
  margin-bottom: 20px; /* Spacing between cards */
  /* Additional styling for your recipe card */
}
.inp{
  padding: 0.5rem;
  border-radius: 1rem;
}
</style>
