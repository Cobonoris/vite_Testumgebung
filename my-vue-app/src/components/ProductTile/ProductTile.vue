<script setup lang="ts">
import {Product} from "../../index"
import ProductTileTop from "./ProductTileTop.vue"
import ProductTileBottom from "./ProductTileBottom.vue"

defineProps<{ products: Product[] }>()

</script>

<template>
    <div class="item" v-for="item in products" >
        <div class="item__wrapper">
            <ProductTileTop :item="item"/>
            <ProductTileBottom :item="item"/>
        </div>
    </div>
</template>

<style lang="scss">

.item {
    display: flex;
	position: relative;

    &__wrapper {
        margin: 10px;
        min-width: calc(100% - 20px);
        box-shadow: 0px 0px 8px -5px black;
        position: relative;
        background-color: white;
        z-index: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

    }
}

@media (max-width: 560px) {
	.item {
		width: 90%;
		flex-direction: column;
	}
}

@media (min-width: 560px) {
	.item {
		width: 45%;
	}
}
@media (min-width: 768px) {
	.item {
		width: 32%;
	}
}

@media (min-width: 1024px) {
	.item {
		width: 24%;
	}
}

@media (min-width: 1400px) {
	.item {
		width: 330px;
	}
}

</style>