<script setup lang="ts">
import {Product} from "../../index"
import ProductTileTop from "./ProductTileTop.vue"
import ProductTileBottom from "./ProductTileBottom.vue"

defineProps<{ products: Product[] }>()

</script>

<template>
    <div class="item-wrapper" v-for="item in products" >
        <div class="item-tile">
            <ProductTileTop :item="item"/>
            <ProductTileBottom :item="item"/>
        </div>
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

.item-wrapper {
    width: 100%;
    padding: 10px;

    
}

@media (min-width: 560px) {
	.item-wrapper {
		width: 50%;
        float: left;
	}
}
@media (min-width: 768px) {
	.item-wrapper {
		width: 33%;
        float: left;
	}
}

@media (min-width: 1024px) {
	.item-wrapper {
		width: 25%;
        float: left;
	}
}

@media (min-width: 1400px) {
	.item-wrapper {
		width: 345px;
        float: left;
	}
}

</style>