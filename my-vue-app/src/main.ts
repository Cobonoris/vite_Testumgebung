import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import { useStore } from 'vuex'
import { Product } from './index'
import router from './router'
import store from './store'


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

app.use(router);
app.use(store);
app.mount('#app');


