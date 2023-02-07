<script setup lang="ts">
import { Product } from "../index"
import ProductTile from './ProductTile/ProductTile.vue'
import Pagination from './Pagination/Pagination.vue'
import { ref } from "vue";

const props = defineProps<{ 
  list: Product[] 
}>()

var currentPage = ref(0);

var size = 10;
var step = 0;
var propArray: Product[][] = [];
var len = props.list.length;

while (step < len) {
	propArray.push(props.list.slice(step, step += size));
}

var Pages = propArray;

function updatePage(page: number) {
  currentPage.value = page;
}

console.log(propArray);
</script>

<template>
  <Pagination :list="list" :Pages="Pages" :currentPage="currentPage" @changePage="updatePage"/>
  <div class="productList">
    <div class="item-wrapper" v-for="item in propArray[currentPage]">
      <ProductTile :product="item"/>
    </div>
  </div>
</template>

<style lang="scss">

.productList {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100vw;
    height: 100%;
}

.item-wrapper {
    width: 100%;
    padding: 10px;
}

@media (min-width: 560px) {
	.item-wrapper {
		width: 50%;
        float: left;
	}
}
@media (min-width: 768px) {
	.item-wrapper {
		width: 33%;
        float: left;
	}
}

@media (min-width: 1024px) {
	.item-wrapper {
		width: 25%;
        float: left;
	}
}

@media (min-width: 1400px) {
	.item-wrapper {
		width: 345px;
        float: left;
	}
}

</style>