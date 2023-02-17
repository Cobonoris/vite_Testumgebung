import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import { useStore } from 'vuex'
import { Product } from "./index"
import { createStore } from "vuex"

const store = createStore({
    state() {
        return {
            articles: [] as Product[]
        }
    },
    mutations: {
        updateWishlist(state, payload: { item: Product, method: string }) {
            if (payload.method == "add") {
               if (state.articles.indexOf(payload.item) == -1){ //filter auf item.code
                    state.articles.push(payload.item)
                    sessionStorage.setItem('sessionWishlist', JSON.stringify(state.articles))
                } 
            } else if(payload.method == "delete") {
                state.articles.splice(state.articles.indexOf(payload.item),1)
                sessionStorage.setItem('sessionWishlist', JSON.stringify(state.articles))
            }
        }
    }
})

var wish = sessionStorage.getItem('sessionWishlist') || '[]';
var wishLen = JSON.parse(wish).length;


for (var i = 0; i < wishLen; i++){
    const payload = {
        item: JSON.parse(wish)[i] as Product,
        method: "add"
    }
    store.commit('updateWishlist', payload)
}

const app = createApp(App);

app.use(store);
app.mount('#app');


