<script setup lang="ts">import { computed } from 'vue';
import { storeKey, useStore } from 'vuex';

const store = useStore()
var articles = store.state.wishlistStore.articles

</script>

<template>
    <div class="header-nav-wishlist">
        <!--<router-link to="/wishlist" class="heart">❤</router-link>-->
        <span v-if="articles.length > 0" class="header-nav-wishlist-number">{{ articles.length }}</span> 
    </div>
    
</template>

<style lang="scss">

.header-nav-wishlist {
    cursor: pointer;
    position: relative;
    vertical-align: middle;
    font-size: 32px;
    transition: 0.2s ease-in-out;
    right: 10px;

    &:hover {
        color: var(--color-yellow);
        transition: 0.2s ease-in-out;

    }

    &-number {
        position: absolute;
        right: -30%;
        top: 50%;
        color: white;
        z-index: 10;
        font-size: 12px;
        background-color: red;
        border-radius: 50%;
        padding: 2px;
        height:auto;
        min-width: 20px;
        text-align: center;
        
    }
}

</style>