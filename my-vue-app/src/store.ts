import { createStore } from "vuex"
import { Product } from "./index"
import productlistStore from "./Stores/products"
import wishlistStore from "./Stores/wishlist"

const store = createStore({
    state: Object,
    modules: {
        produclistStore: productlistStore,
        wishlistStore: wishlistStore
    }
})

export default store