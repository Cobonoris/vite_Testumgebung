<script setup lang="ts" type="module">
import ProductList from './components/ProductList/ProductList.vue';
import Header from './components/common/Header.vue'
import Footer from './components/common/Footer.vue'
import * as listJSON from './quellen/products.json';

</script>

<template>
  <Header/>
  <router-view/>
  <Footer/>
</template>

<style scoped>

</style>
