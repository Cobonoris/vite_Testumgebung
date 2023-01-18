<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
import ProductList from './components/ProductList.vue';
import Pagination from './components/Pagination/Pagination.vue'
import Header from './components/common/Header.vue'
import Footer from './components/common/Footer.vue'
import * as listJSON from './quellen/products.json';

</script>

<template>
  <Header/>
  <h1>Produktliste</h1>
  <Pagination :list="listJSON.products"/>
  <ProductList :list="listJSON.products"/>
  <Footer/>
</template>

<style scoped>



</style>
