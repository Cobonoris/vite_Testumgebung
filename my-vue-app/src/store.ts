import { createStore } from "vuex"
import { Product } from "./index"

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

export default store