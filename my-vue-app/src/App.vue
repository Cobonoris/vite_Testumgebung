<script setup lang="ts" type="module">
import ProductList from './components/ProductList.vue';
import Header from './components/common/Header.vue'
import Footer from './components/common/Footer.vue'
import * as listJSON from './quellen/products.json';

</script>

<template>
  <Header/>
  <h1>Produktliste</h1>
  <div class="list-wrap">
    <ProductList :list="listJSON.products"/>
  </div>
  <Footer/>
</template>

<style scoped>

h1 {
  margin-left: 10px;
}

.list-wrap {
  display:  flex;
  flex-direction: column;
  align-items: center;
}

</style>
