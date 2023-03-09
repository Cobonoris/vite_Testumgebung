<script setup lang="ts">
import { Product } from "../../index"

const emit = defineEmits(
	["changeSize"]
)

var sizes: number[]
sizes = [10, 20, 30]

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
        <div v-for="item in sizes" :class="{ 'active' : pageSize + 1 == item }" class="pagesizer-sizer" @click="changeSize">
            {{ item }}
        </div>
        <div class="pagesizer-title">
            Produkte pro Seite
        </div>
    </div>
</template>

<style lang="scss">

.pagesizer {
    margin: 10px;
    display: flex;
    width: 280px;
    justify-content: space-between;
    align-items: center;

    &-title {
        font-weight: bold;
    }

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

@media (min-width: 560px) {
	.pagesizer {
        width: 300px;
    }
}

</style>