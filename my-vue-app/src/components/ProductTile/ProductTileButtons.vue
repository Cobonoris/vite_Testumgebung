<script setup lang="ts">
import {Product} from "../../index"
import { useStore } from "vuex"
import { computed } from 'vue'


const store = useStore()
const articles = computed(() => store.state.wishlistStore.articles)

var wish = sessionStorage.getItem('sessionWishlist');

const props = defineProps<{ 
    item: Product 
}>()

const payload = {
    item: props.item,
    method: "add"
}

function toggleInWish(elem: HTMLElement) {
    for (let i = 0; i < articles.value.length; i++){
        if (props.item.code == articles.value[i].code) {
            elem.setAttribute('data-inWish', "1")
        }
    }
}

function wishCommit(event: Event) {
    store.commit('updateWishlist', payload)
    var elem = event.target as HTMLElement
    toggleInWish(elem)
}

</script>

<template>
    <div class="item-bottom-buttons">
        <button :id="'save-' + props.item.code" type="button" class="item-bottom-buttons-save" @click="wishCommit($event)" data-inWish>
        </button>
        <button type="button" class="item-bottom-buttons-buy">
            kaufen
        </button>
    </div>
</template>

<style lang="scss">



.item-bottom-buttons {
    position: relative;
    width: 100%;
    height: 40px;
    font-size: 14px;
    
    button {
        padding: 0;
    }

    &-save {
        cursor: pointer;
        width: 30%;
        height: 40px;
        appearance: none;
        border: 0;
        background-color: #f0f0f0;
        transition: 0.2s ease-in-out;

        &[data-inWish="1"] {
            background-color: var(--color-yellow);
        }

        &::after {
            position: relative;
            content: "";
            width: 100%;
            height: 80%;
            border-top: 0px;
            border-right: gray solid 5px;
            border-left: gray solid 5px;
            border-bottom: transparent solid 3px;
            
        }
        
        &:hover {
            background-color: var(--color-yellow);
            transition: 0.2s ease-in-out; 
            
            &::after {
                border-right: var(--color-font) solid 5px;
                border-left: var(--color-font) solid 5px;
            }
        }
    }

    &-buy {
        cursor: pointer;
        position: absolute;
        width: 70%;
        height: 40px;
        appearance: none;
        border: 0;
        background-color: var(--color-green);
        display: inline;
        font-weight: bold;
        color: white;

        &:hover {
            background-color: var(--color-yellow);
            color: var(--color-font);
            font-weight: bold;
            transition: 0.2s ease-in-out; 
        }
    }
    
}

</style>