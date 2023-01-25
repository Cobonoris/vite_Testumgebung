<script setup lang="ts">
import {Product} from "../../index"

defineProps<{ item: Product }>()

</script>

<template>
    <div class="item-bottom-buttons">
        <button type="button" class="save">
        </button>
        <button type="button" class="buy">
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

    .save {
        cursor: pointer;
        width: 30%;
        height: 40px;
        appearance: none;
        border: 0;
        background-color: #f0f0f0;
        transition: 0.2s ease-in-out;
    }

    .save::after {
        position: relative;
        content: "";
        width: 100%;
        height: 80%;
        border-top: 0px;
        border-right: gray solid 5px;
        border-left: gray solid 5px;
        border-bottom: transparent solid 3px;
        
    }
    
    .save:hover {
        background-color: var(--color-yellow);
        transition: 0.2s ease-in-out; 
        
        &::after {
            border-right: var(--color-font) solid 5px;
            border-left: var(--color-font) solid 5px;
        }
    }

    .buy {
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
    }
    .buy:hover {
        background-color: var(--color-yellow);
        color: var(--color-font);
        font-weight: bold;
        transition: 0.2s ease-in-out; 
    }
}

</style>