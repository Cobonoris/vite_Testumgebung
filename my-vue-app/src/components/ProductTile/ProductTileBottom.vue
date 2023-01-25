<script setup lang="ts">
import {Product} from "../../index"
import ProductTileButtons from "./ProductTileButtons.vue"

defineProps<{ item: Product }>()

</script>

<template>
   <div class="item-bottom">
        <div class="item-bottom-variants" v-if="item.variants != undefined">
            {{ item.variants }} Varianten verfügbar
        </div>
        <div class="item-bottom-price">
            <span class="item-bottom-price-slashed" v-if="item.oldPrice != undefined">
                {{ item.oldPrice }}
            </span>
            <span>
                {{ item.price }} / Stück
            </span>
        </div>
        <div class="item-bottom-availability" v-if="item.availability == 'in_stock'">
            verfügbar
            <div class="stockbar instock"></div>
        </div>
        <div class="item-bottom-availability" v-if="item.availability == 'low_stock'">
            wenige verfügbar
            <div class="stockbar lowstock"></div>
        </div>
        <div class="item-bottom-availability" v-if="item.availability == 'out_of_stock'">
            nicht verfügbar
            <div class="stockbar outofstock"></div>
        </div>
        <ProductTileButtons :item="item"/>
    </div> 
</template>

<style lang="scss">

.item-bottom-variants {
    margin: 10px;
    padding: 10px;
    font-size: 15px;
    background-color: #ddd;
    color: var(--color-font);
    cursor: normal;

    &-icon {
        width: 14px;
        opacity: 50%;
        position: relative;
        top: 1px;
        left: -2px;
    }

    span::before {
        content: attr(value);
    }
}

.item-bottom-price {
    margin: 10px;
    color: var(--color-font);
    font-weight: bold;
    font-size: 18px;

    &-slashed {
        color: #aaa;
        position: relative;
        margin-right: 5px;
    }

    &-slashed::before {
        position: absolute;
        content: "";
        color: red;
        width: 100%;
        border: 1px solid;
        border-color: red;
        z-index: 1;
        transform: rotate(-10deg);
        top: 9px;
    }
}

.item-bottom-availability {
    width: 100%;
	height: 40px;
    color: var(--color-font);
    font-size: 10px;
    margin-left: 10px;
}

.stockbar {
    display: block;
    position: relative;
    left: -10px;
    width: 100%;
    height: 7px;
    margin-top: 7px;
    content: "";
}

.instock {
    background: linear-gradient(
        90deg,
        var(--color-green) 0%,
        var(--color-green) 33%,
        white 33%,
        white 33.5%,
        var(--color-green) 33.5%,
        var(--color-green) 66.5%,
        white 66.5%,
        white 67%,
        var(--color-green) 67%,
        var(--color-green) 100%,
    );
}

.lowstock {
    background: linear-gradient(
        90deg,
        var(--color-green) 0%,
        var(--color-green) 33%,
        white 33%,
        white 33.5%,
        var(--color-yellow) 33.5%,
        var(--color-yellow) 66.5%,
        white 66.5%,
        white 67%,
        var(--color-yellow) 67%,
        var(--color-yellow) 100%,
    );
}

.outofstock {
    background: linear-gradient(
        90deg,
        red 0%,
        red 33%,
        white 33%,
        white 33.5%,
        red 33.5%,
        red 66.5%,
        white 66.5%,
        white 67%,
        red 67%,
        red 100%,
    );
}

</style>