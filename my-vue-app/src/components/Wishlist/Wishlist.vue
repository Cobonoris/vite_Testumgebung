<script setup lang="ts">
import { Product } from "../../index"
import WishlistArticle from './WishlistArticle.vue';
import { useStore } from 'vuex'
import { computed } from 'vue'

const wishlist = useStore()
var articles = computed(() => wishlist.state.articles!)

function displayWishlist() {
    const flyout = document.getElementById('wishlist-flyout')
    if (flyout?.getAttribute('data-toggle') == "") {
        flyout.setAttribute('data-toggle', "1")
    } else {
        flyout?.setAttribute('data-toggle', "");
    }
}                

</script>

<template>
    <div class="wishlist-nav" @click="displayWishlist">
        ❤
        <span v-if="articles.length > 0" class="wishlist-nav-number">{{ articles.length }}</span>
    </div>
    <div id="wishlist-flyout" class="wishlist-flyout" data-toggle="">
        <h3>Merkliste</h3>
        <div class="wishlist-flyout-content">
            <div class="wishlist-flyout-alt" v-if="articles.length == 0">
                Keine Produkte auf der Merkliste
            </div>
            <div class="wishlist-flyout-articles">
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
    display: none;
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

    &[data-toggle="1"] {
        display: block;
    }

    &-alt {
        margin: 20px;
    }

    &-articles {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: space-between;
        margin: 10px;

    }
}

::-webkit-scrollbar {
    display: none;
}


</style>

