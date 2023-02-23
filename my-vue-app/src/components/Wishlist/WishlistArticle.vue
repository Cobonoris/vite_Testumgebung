<script setup lang="ts">
import { Product } from "../../index"
import App from "../../App.vue";
import { useStore } from 'vuex'
import { computed, ref } from 'vue'
import { isTemplateNode } from "@vue/compiler-core";

const wishlist = useStore()
const articles = computed(() => wishlist.state.articles)

const props = defineProps<{ 
    item: Product 
}>()

const payload = {
    item: props.item,
    method: "delete"
}

function commitWish(pay: any) {
    wishlist.commit('updateWishlist', pay)
    console.log(props.item)
    console.log(pay.item)
    var saveBtn = document.getElementById("save-" + props.item.code)
    saveBtn?.setAttribute('data-inWish', "")
    
}

</script>

<template>
    <div :id="'article-' + payload.item.code" class="wishlist-article">
        <div class="wishlist-article-flex">
            <div class="wishlist-article-wrap">
                <img class="wishlist-article-img" :src="item.imageURL"/>
            </div>
            <span class="wishlist-article-title">{{ item.title }}</span>
        </div>
        <div class="wishlist-article-flex">
            <span class="wishlist-article-availability" :class="'stockinfo ' + item.availability"></span>
            <span class="wishlist-article-price">{{ item.price }}</span>
            <span class="wishlist-article-delete" @click="commitWish(payload)">+</span>
        </div>
    </div>
</template>

<style lang="scss">

.wishlist-article {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;
    justify-content: space-between;
    background-color: white;
    border-radius: 5px;
    width: 100%;
    height: 80px;
    max-width: 1400px;
    margin: 10px 0 10px 0;
    padding: 10px;
    transition: ease-in-out 0.2s;

    &:hover {
        background-color: var(--color-bg);
        border-radius: 5px;
    }

    &-title {
        margin-left: 10px;
    }

    &-availability {
        margin-right: 10px;

        &.stockinfo {
            content: '';
            width: 15px;
            height: 15px;
            border-radius: 50%;
            cursor: pointer;

            &.low_stock {
                background-color: var(--color-yellow); 
            }

            &.in_stock {
                background-color: var(--color-green);
            }

            &.out_of_stock {
                background-color: red;
            }
        }
    }

    &-img {
        position: relative;
        max-width: 70px;
        max-height: 70px;
        border-radius: 5px;

    }

    &-price {
        margin-left: 10px;
        font-weight: bold;
        margin-right: 10px;
    }

    &-flex {
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: nowrap;
    }

    &-wrap {
        width: 90px;
        text-align: center;
        vertical-align: center;
    }

    &-delete {
        color: black;
        cursor: pointer;
        font-weight: bold;
        margin-left: 10px;
        font-size: 25px;
        transition: ease-in-out 0.2s;
        transform: rotate(45deg); 

        &::before {
            position: absolute;
            z-index: -1;
            content: '';
            width: 10px;
            height: 10px;
            padding: 5px;
            right: -15%;
            top: 15%;
            border-radius: 50%;
            transition: ease-in-out 0.2s;
            
        }
        
        &:hover {
            color: white;
            &::before {
                background-color: red;
            }
        }
    }
}

@media (max-width: 560px) {
    .wishlist-article-title {
        width: 120px;
        overflow: auto;
	    -moz-text-overflow: ellipsis;
		text-overflow: ellipsis;
	    white-space: nowrap;
    }

    .wishlist-article-img {
        max-width: 40px;
        max-height: 40px;
    }

    .wishlist-article-wrap {
        width: 50px;
        text-align: center;
        vertical-align: center;
    }
}

</style>

