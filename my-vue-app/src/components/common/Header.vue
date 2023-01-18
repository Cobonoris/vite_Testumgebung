<script setup lang="ts">
const test = "test"

</script>

<template>
    <div class="header">
        <span class="title">
            Vue Testumgebung
        </span>
        <span class="sign">
            by <a target="_blank" href="https://www.xing.com/profile/Fabien_Czimmernings/cv">fcz</a>
        </span>
    </div>
    <div class="mg"></div>
</template>

<style lang="scss">

.header {
    position: fixed;
    top: 0;
    z-index: 5;
    width: 100%;
    margin: 0;
    padding: 10px;
    background-color: var(--color-green);
    color: var(--color-bg);
}

.title {
    font-weight: bold;
    font-size: 30px;
}

.sign {
    font-style: italic;

    a {
        text-decoration: none;
    }

    a:visited {
        color: var(--color-bg);
    }

    a:hover {
        text-decoration: underline;
    }
}


.mg {
  height: 50px;
  
}

</style>