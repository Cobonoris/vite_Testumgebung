<script setup lang="ts">
import { Product } from "../../index"
import ProductTile from '../ProductTile/ProductTile.vue'
import Pagination from '../Pagination/Pagination.vue'
import PageSizer from "../Pagination/PageSizer.vue";
import { computed, ref } from "vue";
import * as listJSON from '../../quellen/products.json';
import { useStore } from "vuex";

var currentPage = ref(1);
var pageSize = ref(9);

const store = useStore()
const products = store.state.produclistStore.products

function arraySlice(){
  return products.slice((currentPage.value - 1) * (pageSize.value + 1), currentPage.value * (pageSize.value + 1));
}

function getTotalPages() {
  var totalPages = Math.ceil(products.length / pageSize.value)
  return totalPages
}

function updatePage(page: number) {
  currentPage.value = page;
}

function updateSize(size: number) {
  pageSize.value = size;
  currentPage = ref(1);
}

</script>

<template>
  <h1>Produktliste</h1>
  <div class="list-wrap">
    <div class="productList-head">
      <PageSizer :pageSize="pageSize" @changeSize="updateSize"/>
      <Pagination :totalPages="getTotalPages()" :currentPage="currentPage" @changePage="updatePage"/>
    </div>
    <div class="productList">
      <div class="productList-item-wrapper" v-for="item in arraySlice()">
        <ProductTile :product="item"/>
      </div>
    </div>
  </div>
</template>

<style lang="scss">

.list-wrap {
  display:  flex;
  flex-direction: column;
  align-items: center;
  max-width: 1400px;
  margin: auto;
  align-content: center;
}

.productList {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    height: 100%;
    max-width: 1400px;
    margin: auto;

    &-head {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
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
	}

  .productList-head {
      flex-direction: row;
  }
}

@media (min-width: 1024px) {
	.productList-item-wrapper {
		width: 25%;  
	}
}

@media (min-width: 1400px) {
	.productList-item-wrapper {
		width: 345px;
	}
}

</style>