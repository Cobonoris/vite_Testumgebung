<script setup lang="ts">
const test = "test"

</script>

<template>
    <div class="footer">
        <a href="https://r.mtdv.me/articles/heheWO">Testy McTestface</a>
    </div>
</template>

<style lang="scss">

.footer {
    width: 100%;
    padding: 10px 10px 0px 10px;
    bottom: 0;
    /* Height of the footer*/
    height: 30px;
    background: grey;
    color: var(--color-bg);
    z-index: 5;

    a {
        text-decoration: none;
    }
    a:visited {
        color: var(--color-bg);
    }
}

</style>