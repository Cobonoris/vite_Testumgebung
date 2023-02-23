<script setup lang="ts">
import NavWish from './NavWish.vue'

const test = 'test'

</script>

<template>
    <div class="header-nav">
        <NavWish />
    </div>
</template>

<style lang="scss">

.header-nav {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
}

</style>