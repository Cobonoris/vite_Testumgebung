<script setup lang="ts">
import { Product } from "../index"
import ProductTile from './ProductTile/ProductTile.vue'
import Pagination from './Pagination/Pagination.vue'


defineProps<{ list: Product[] }>()

</script>

<template>
  <Pagination :list="list" />
  <div class="productList">
    <ProductTile :products="list" />
  </div>
</template>

<style lang="scss">

.productList {
    display: flex;
    flex-wrap: wrap;
}

</style>