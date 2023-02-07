import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import { createStore } from 'vuex'
import { Product } from "./index"

const wishlist = createStore({
    state() {
        return {
            articles: []
        }
      },
      mutations: {
        add(state, item: Product) {
            if (state.articles.indexOf(item) == -1){
                state.articles.push(item)
            }
        },
        delete(state, item: Product) {
            state.articles.splice(state.articles.indexOf(item),1)
        }
      }
})

const app = createApp(App);

app.use(wishlist);
app.mount('#app');


