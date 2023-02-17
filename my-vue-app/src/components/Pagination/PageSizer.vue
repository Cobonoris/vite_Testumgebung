<script setup lang="ts">
import { Product } from "../../index"

const emit = defineEmits(
	["changeSize"]
)

var sizes: number[]
sizes = [3, 6, 10]

const props = defineProps<{ 
	pageSize: number
}>()

function changeSize(event: any) {
	let size = parseInt(event.target.innerHTML || "0") - 1;
	emit("changeSize", size);
}

</script>

<template>
    <div class="pagesizer">
        <div v-for="item in sizes" :class="{ 'active' : pageSize == item }" class="pagesizer-sizer" @click="changeSize">
            {{ item }}
        </div>
    </div>
</template>

<style lang="scss">

.pagesizer {
    margin: 20px;
    display: flex;
    width: 160px;
    justify-content: space-between;
    align-items: center;

    &-sizer {
        width: 40px;
        height: 40px;
        text-align: center;
        vertical-align: middle;
        line-height: 40px;
        background-color: #bbb;
        color: white;
        font-weight: bold;
        transition: ease-in-out 0.2s;

        &:hover {
            background-color: #008c46;
        }
        
    }

    .active {
        background-color: #008c46;
    }
}

</style>