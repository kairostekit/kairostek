<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeadLayoutComponent from './components/layout/HeadLayoutComponent.vue'
import FooterLayoutComponent from './components/layout/FooterLayoutComponent.vue';
</script>

<template>
    <body id="body">

        <HeadLayoutComponent />
        
        <RouterView />

        <FooterLayoutComponent />
    </body>
</template>

<style scoped></style>
