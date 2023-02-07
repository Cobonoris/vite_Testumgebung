<script setup lang="ts">
import { Product } from "../../index"
import WishlistArticle from './WishlistArticle.vue';
import { useStore } from 'vuex'
import { computed } from 'vue'

const wishlist = useStore()
var articles = computed(() => wishlist.state.articles)

var flyout: HTMLElement;

window.onload = init; 

function init() {
     flyout = document.getElementById("flyout")!;

     var wish = sessionStorage.getItem('sessionWishlist');
     var wishLen = JSON.parse(wish).length;
    
    for (var i = 0; i < wishLen; i++){
        wishlist.commit('add', JSON.parse(wish)[i])
    }
     
}

function displayWishlist() {
    if (flyout.classList.contains("disabled")) {
        flyout.classList.remove("disabled");
        flyout.classList.add("enabled");
    } else {
        flyout.classList.remove("enabled");
        flyout.classList.add("disabled");
    }
}                

</script>

<template>
    <div class="wishlist-nav" @click="displayWishlist">
        ❤
        <span v-if="articles.length > 0" class="wishlist-nav-number">{{ articles.length }}</span>
    </div>
    <div id="flyout" class="wishlist-flyout disabled">
        <h3>Merkliste</h3>
        <div class="content">
            <div class="alt" v-if="articles.length == 0">
                Keine Produkte auf der Merkliste
            </div>
            <div class="wishlist-articles">
                <WishlistArticle v-for="item in articles" :item="item" />
            </div> 
        </div>
        
    </div>
    
</template>

<style lang="scss">

.wishlist-nav {
    cursor: pointer;
    position: relative;
    vertical-align: middle;
    font-size: 32px;
    transition: 0.2s ease-in-out;

    &:hover {
        color: var(--color-yellow);
        transition: 0.2s ease-in-out;
    }

    &-number {
        position: absolute;
        right: -30%;
        top: 50%;
        color: white;
        font-size: 12px;
        background-color: red;
        border-radius: 50%;
        padding: 2px;
        height:auto;
        min-width: 20px;
        text-align: center;
    }
}

.wishlist-flyout {
    color: black;
    position: absolute;
    right: 10px;
    top: 70px;
    width: 500px;
    max-width: 95%;
    min-height: 50px;
    max-height: 80vh;
    background-color: white;
    box-shadow: 0px 0px 8px -5px black;
    transition: ease-in-out 0.2s;
    overflow-y: scroll;

    h3 {
        margin-left: 10px;
        font-size: 20px;
    }
}

::-webkit-scrollbar {
    display: none;
}

.wishlist-articles {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    margin: 10px;

}

.disabled {
    display: none;
}

.enabled {
    display: block;
}

.alt {
    margin: 20px;
}

</style>

