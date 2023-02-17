<script setup lang="ts">
import Wishlist from "../Wishlist/Wishlist.vue"
import { defineComponent } from 'vue';

const test = "Testumgebung"

</script>

<template>
    <div class="header">
        <div>
             <span class="title">
                Vue {{ test }}
            </span>
            <span class="sign">
                by <a target="_blank" href="https://www.xing.com/profile/Fabien_Czimmernings/cv">fcz</a>
            </span> 
        </div>
        <Wishlist />
    </div>
    <div class="header-mg"></div>
   
</template>

<style lang="scss">

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
        font-size: 30px;
    }

    .sign {
        font-style: italic;

        a {
            text-decoration: none;
        }

        a:visited {
            color: var(--color-bg);
        }

        a:hover {
            text-decoration: underline;
        }
    }

    &-mg {
        height: 50px;
    }
}






</style>