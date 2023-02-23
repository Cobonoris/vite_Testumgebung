<script setup lang="ts">
import { Product } from "../../index"
import WishlistArticle from './WishlistArticle.vue';
import { useStore } from 'vuex'
import { computed } from 'vue'

const wishlist = useStore()
var articles = computed(() => wishlist.state.articles!)
             
</script>

<template>
    <div class="wishlist-page" enabled>
        <h1>Merkliste</h1>
        <div class="wishlist-page-content">
            <div class="wishlist-page-alt" v-if="articles.length == 0">
                Keine Produkte auf der Merkliste
            </div>
            <div class="wishlist-page-articles">
                <WishlistArticle v-for="item in articles" :item="item" />
            </div> 
        </div>
    </div>
</template>

<style lang="scss">



.wishlist-page {
    display: none;
    color: black;

    h1 {
        margin-left: 10px;
    }

    &[enabled] {
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

