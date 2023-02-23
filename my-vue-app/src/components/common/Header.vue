<script setup lang="ts">
import Nav from '../Nav/Nav.vue'

const test = "Testumgebung"

</script>

<template>
    <div class="header">
        <div>
             <span class="title">
                <router-link class="title-link" to="/">Vue {{ test }}</router-link>
            </span>
            <span class="sign">
                by <a target="_blank" href="https://www.xing.com/profile/Fabien_Czimmernings/cv">fcz</a>
            </span> 
        </div>
        <Nav />
    </div>
    <div class="header-mg"></div>
   
</template>

<style lang="scss">

.header {
    justify-content: space-between;
    display: flex;
    position: fixed;
    top: 0;
    z-index: 5;
    width: 100%;
    margin: 0;
    padding: 10px;
    background-color: var(--color-green);
    color: var(--color-bg);

    .title {
        font-weight: bold;
        font-size: 25px;

        &-link {
            position: relative;
            top: 5px;
        }
    }

    .sign {
        font-style: italic;
        position: relative;
        top: 5px;
    }

    &-mg {
        height: 50px;
    }
}

@media (min-width: 560px) {
    .header .title {
        font-size: 30px;

        &-link {
           top: 0px; 
        }
    }
    .header .sign {
        top: 0px;
    }
}




</style>