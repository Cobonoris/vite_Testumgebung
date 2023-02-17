<script setup lang="ts">
import { Product } from "../index"
import ProductTile from './ProductTile/ProductTile.vue'
import Pagination from './Pagination/Pagination.vue'
import PageSizer from "./Pagination/PageSizer.vue";
import { ref } from "vue";

const props = defineProps<{ 
  list: Product[] 
}>()

var currentPage = ref(0);
var pageSize = ref(10);

function arraySlice(){
  var propArray: Product[][] = [];
  var step = 0;
  var len = props.list.length;

  while (step < len) {
    propArray.push(props.list.slice(step, step += pageSize.value));
  }
  return propArray
}

function updatePage(page: number) {
  currentPage.value = page;
}

function updateSize(size: number) {
  pageSize.value = size;
}

console.log(arraySlice())
</script>

<template>
  <div class="productList-head">
    <PageSizer :pageSize="pageSize" @changeSize="updateSize"/>
    <Pagination :list="list" :Pages="arraySlice()" :currentPage="currentPage" @changePage="updatePage"/>
  </div>
  <div class="productList">
    <div class="productList-item-wrapper" v-for="item in arraySlice()[currentPage]">
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

    &-head {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    &-item-wrapper {
      width: 100%;
      padding: 10px;
    }
}

@media (min-width: 560px) {
	.productList-item-wrapper {
		width: 50%;
        float: left;
	}
}
@media (min-width: 768px) {
	.productList-item-wrapper {
		width: 33%;
        float: left;
	}
}

@media (min-width: 1024px) {
	.productList-item-wrapper {
		width: 25%;
        float: left;
	}
}

@media (min-width: 1400px) {
	.productList-item-wrapper {
		width: 345px;
        float: left;
	}
}

</style>