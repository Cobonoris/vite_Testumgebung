<script setup lang="ts">
import Wishlist from "../Wishlist/Wishlist.vue"
import { computed, defineComponent } from 'vue';
import { useStore } from "vuex";

const test = "Testumgebung"

const wishlist = useStore()
var articles = computed(() => wishlist.state.articles!)

</script>

<template>
    <div class="header">
        <div>
             <span class="title">
                <router-link class="title-link" to="/">Vue {{ test }}</router-link>
            </span>
            <span class="sign">
                by <a target="_blank" href="https://www.xing.com/profile/Fabien_Czimmernings/cv">fcz</a>
            </span> 
        </div>
        <div class="wishlist-nav">
          <router-link to="/wishlist">❤</router-link>
          <span v-if="articles.length > 0" class="wishlist-nav-number">{{ articles.length }}</span>  
        </div>
    </div>
    <div class="header-mg"></div>
   
</template>

<style lang="scss">

.wishlist-nav {
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
        font-size: 12px;
        background-color: red;
        border-radius: 50%;
        padding: 2px;
        height:auto;
        min-width: 20px;
        text-align: center;
    }
}

.header {
    justify-content: space-between;
    display: flex;
    position: fixed;
    top: 0;
    z-index: 5;
    width: 100%;
    margin: 0;
    padding: 10px;
    background-color: var(--color-green);
    color: var(--color-bg);

    .title {
        font-weight: bold;
        font-size: 25px;

        &-link {
            position: relative;
            top: 5px;
        }
    }

    .sign {
        font-style: italic;
        position: relative;
        top: 5px;
    }

    &-mg {
        height: 50px;
    }
}

@media (min-width: 560px) {
    .header .title {
        font-size: 30px;

        &-link {
           top: 0px; 
        }
    }
    .header .sign {
        top: 0px;
    }
}




</style>