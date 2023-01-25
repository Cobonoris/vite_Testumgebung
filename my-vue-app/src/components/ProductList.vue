<script setup lang="ts">
import { Product } from "../index"
import ProductTile from './ProductTile/ProductTile.vue'
import Pagination from './Pagination/Pagination.vue'

const props = defineProps<{ 
  list: Product[] 
}>()

var currentPage = 0;

var size = 6;
var step = 0
var propArray: Product[][] = []
var len = props.list.length;

while (step < len) {
	propArray.push(props.list.slice(step, step += size));
}

var Pages = propArray;

  console.log(propArray);



</script>

<template>
  <Pagination :list="list" :Pages="Pages" :currentPage="currentPage" />
  <div class="productList">
    <ProductTile :products="propArray[currentPage]" />
  </div>
</template>

<style lang="scss">

.productList {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

</style>