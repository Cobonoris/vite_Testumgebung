<script setup lang="ts">
import {Product} from "../../index"
import ProductTileTop from "./ProductTileTop.vue"
import ProductTileBottom from "./ProductTileBottom.vue"

var props = defineProps<{ product: Product }>()



</script>

<template>
    <div class="item-tile">
        <ProductTileTop :item="product"/>
        <ProductTileBottom :item="product"/>
    </div>
</template>

<style lang="scss">

.item-tile {
    background-color: white;
    box-shadow: 0px 0px 8px -5px black;
    height: 100%;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
}

</style>