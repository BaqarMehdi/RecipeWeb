<template>
    <div class="recipe-details">
      <h2>{{ recipe.strMeal }}</h2>
      <img :src="recipe.strMealThumb" :alt="recipe.strMeal">
      <h3>Ingredients</h3>
      <ul>
        <li v-for="ingredient in ingredients" :key="ingredient">{{ ingredient }}</li>
      </ul>
      <h3>Instructions</h3>
      <p>{{ recipe.strInstructions }}</p>
      <button @click="$emit('close-details')">Close</button>
    </div>
  </template>
  
  <script>
  export default {
    props: ['recipe'],
    computed: {
      ingredients() {
        const ingredients = [];
        for (let i = 1; i <= 20; i++) {
          const ingredient = this.recipe['strIngredient' + i];
          const measure = this.recipe['strMeasure' + i];
          if (ingredient && measure) {
            ingredients.push(`${measure} ${ingredient}`);
          }
        }
        return ingredients;
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add your CSS styles here */
  </style>
  