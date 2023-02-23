<script setup lang="ts">
import { isTemplateNode } from "@vue/compiler-core";
import {Product} from "../../index"

const props = defineProps<{ 
    item: Product 
}>()


</script>

<template>
    <router-link :to="{ name: 'ProductDetail', params: { code: props.item.code } }" class="item-top">
        <div class="item-top-ribbon" v-if="item.ribbon != undefined">
            <span>
                {{ item.ribbon }}
            </span>
        </div>
        <div class="item-top-img">
            <img :src="item.imageURL" alt="kein Bild verfügbar"/>
        </div>
        <div class="item-top-divider"></div>
        <div class="item-top-title">
            {{ item.title }}
        </div>
    </router-link>
</template>

<style lang="scss">

.item-top {

    &-ribbon {
        width: 100%;
        height: 10px;
        position: absolute;

        &::after {
            position: absolute;
            content: '';
            height: 5px;
            border: 5px solid #707070;
            right: -10px;
            top: 170px;
            z-index: -1;
            border-bottom-color: transparent;
            border-right-color: transparent;
            border-top-color: transparent;
        }

        span {
            position: absolute;
            padding: 3px 5px 3px 5px;
            right: -5px;
            top: 160px;
            background-color: var(--color-green);
            box-shadow: 0 5px 10px rgba(0,0,0,.1);
            color: #fff;
            text-align: center;
            font-weight: bold;
            font-size: 12px;
            box-shadow: 1px 1px 5px -2px black;
            border-radius: 0 3px 0 0;
            z-index: 2;
        }
    } 

    &-img {
        width: 100%;
        height: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: zoom-in;

        img {
            max-width: 80%;
            max-height: 80%;
            transform: scale(1);
            border-radius: 5px;
            transition: all 0.5s ease-in-out;
        }
        
        img:hover {
            transform: scale(1.2);
            transition: all 0.5s ease-in-out;
        }
    }

    &-divider {
        width: 100%;
        height: 1px;
        background-color: #bbb;
    }

    &-title {
        margin: 10px;
        font-weight: bold;
        color: var(--color-font);
    }
}


</style>