<script setup lang="ts">
import { useRoute } from "vue-router";
import {Product} from "../../index"
import * as listJSON from '../../quellen/products.json';


const route = useRoute()
const index = listJSON.products.findIndex(s => s.code == route.params.code)
const product = listJSON.products[index]

console.log(product)

</script>

<template>
    <h1>Produktdetails</h1>
    <div class="productDetail">
        <div class="productDetail-img">
            <img :src="product.imageURL" alt="kein Bild verfügbar"/>
        </div>
        <div class="productDetail-content">
            <h2>{{ product.title }}</h2>
            <div class="productDetail-content-code">
                Artikelnummer: {{ product.code }}
            </div>
            <div class="productDetail-content-price">
                <span class="oldPrice">{{ product.oldPrice }}</span>
                <span>{{ product.price }}</span>
            </div>
            <div class="productDetail-content-stockinfo">
                <span v-if="product.availability == 'low_stock'" :class="product.availability">wenige verfügbar</span>
                <span v-if="product.availability == 'out_of_stock'" :class="product.availability">keine verfügbar</span>
                <span v-if="product.availability == 'in_stock'" :class="product.availability">verfügbar</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss">

.productDetail {
    display:flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: flex-start;
    margin: 20px auto;
    max-width: 1400px;

    &-img {
        height: 400px;
        cursor: zoom-in;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;

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

    &-content {
        margin-left: 20px;
        width: 400px;
        height: auto;
        background-color: white;
        padding: 10px;

        h2 {
            margin: 0;
        }

        &-code {
            margin-bottom: 20px;
        }

        &-price {
            font-weight: bold;
            font-size: 25px;

            .oldPrice {
                color: #aaa;
                position: relative;
                margin-right: 10px;

                &::after {
                    position: absolute;
                    content: "";
                    color: red;
                    width: 100%;
                    border: 1px solid;
                    border-color: red;
                    z-index: 1;
                    transform: rotate(-10deg);
                    top: 12px;
                    left: 0;
                }
            }
        }

    }
}

</style>