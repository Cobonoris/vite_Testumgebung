<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
import ProductList from './components/ProductList.vue';
import * as listJSON from './quellen/products.json';

</script>

<template>
  <ProductList :list="listJSON.products"/>
</template>

<style scoped>

body {
  color: black;
}

</style>
