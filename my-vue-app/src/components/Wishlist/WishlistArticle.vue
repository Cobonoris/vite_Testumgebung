<script setup lang="ts">
import { Product } from "../../index"
import App from "../../App.vue";
import { useStore } from 'vuex'
import { computed } from 'vue'

const wishlist = useStore()
const articles = computed(() => wishlist.state.articles)

const props = defineProps<{ 
    item: Product 
}>()

const payload = {
    item: props.item,
    method: "delete"
}

function commitWish() {
    wishlist.commit('updateWishlist', payload)
    var saveBtn = document.getElementById("save-" + props.item.code)
    if (saveBtn?.getAttribute('data-inWish') == "1") {
        saveBtn.setAttribute('data-inWish', "")
    }
}

</script>

<template>
    <div class="wishlist-article">
        <div class="wishlist-article-flex">
            <div class="wishlist-article-wrap">
                <img class="wishlist-article-img" :src="item.imageURL"/>
            </div>
            <span class="wishlist-article-title">{{ item.title }}</span>
        </div>
        <div class="wishlist-article-flex">
            <span class="wishlist-article-price">{{ item.price }}</span>
            <span class="wishlist-article-delete" @click="commitWish()">+</span>
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
    width: 100%;
    height: 80px;
    margin: 10px 0 10px 0;
    padding: 10px;
    transition: ease-in-out 0.2s;

    &:hover {
        background-color: var(--color-bg);
        border-radius: 5px;
    }

    &-title {
        width: 200px;
        margin-left: 10px;
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
}

</style>

