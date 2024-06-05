// import { createApp } from 'vue'
// import Vue from 'vue'
// import App from './App.vue'

// import RecipeSearch from '@/components/RecipeSearch.vue'

// new Vue({
//     el: '#app',
//     components:{
//         RecipeSearch
//     }
// }).$mount('#app')

// createApp(App).mount('#app')
import { createApp } from 'vue';
import App from './App.vue';
import RecipeSearch from '@/components/RecipeSearch.vue';

// Create a Vue app instance
const app = createApp(App);

// Register RecipeSearch component globally
app.component('recipe-search', RecipeSearch);

// Mount the app instance to an element with id 'app'
app.mount('#app');
