<script setup lang="ts">
import {Product} from "../index"

defineProps<{ products: Product[] }>()

</script>

<template>
    <div class="item" v-for="item in products" >
        <div class="item__wrapper">
            <div class="item__wrapper-top">
                <div class="item__wrapper-top-ribbon" v-if="item.ribbon != undefined">
                    {{ item.ribbon }}
                </div>
                <div class="item__wrapper-top-img">
                    <img :src="item.imageURL" alt="kein Bild verfügbar"/>
                </div>
                <div class="item__wrapper-top-divider"></div>
                <div class="item__wrapper-top-title">
                    {{ item.title }}
                </div>
            </div>
            <div class="item__wrapper-bottom">
                <div v-if="item.variants != undefined">
                    {{ item.variants }} Varianten verfügbar
                </div>
                <div class="item__wrapper-bottom-price">
                    <span class="item__wrapper-bottom-price-slashed" v-if="item.oldPrice != undefined">
                        {{ item.oldPrice }}
                    </span>
                    <span>
                        {{ item.price }}
                    </span>
                </div>
                <div v-if="item.availability == 'in_stock'">
                    verfügbar
                </div>
                <div v-if="item.availability == 'low_stock'">
                    wenige verfügbar
                </div>
                <div v-if="item.availability == 'out_of_stock'">
                    nicht verfügbar
                </div>
            </div>
            <div>
                BUTTON
            </div>
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
        align-content: flex-start;

        &-top-ribbon {
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

        &-top-ribbon::after {
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

        &-top-img {
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
                transition: all 0.5s ease-in-out;
            }
            
            img:hover {
                transform: scale(1.2);
                transition: all 0.5s ease-in-out;
            }
        }

        &-top-divider {
            width: 100%;
            height: 1px;
            background-color: #bbb;
        }

        &-top-title {
            margin: 10px;
            font-weight: bold;
            color: var(--color-font);
        }

        &-bottom-variants {
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

		&-bottom-price {
            margin: 10px;
            color: var(--color-font);
            font-weight: bold;
            font-size: 18px;

            &-slashed {
                color: #aaa;
                position: relative;
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

    }
}

</style>