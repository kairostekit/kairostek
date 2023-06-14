<script setup >
import NavigationLayout from '../components/layouts/NavigationLayout.vue';
import FooterLayout from '../components/layouts/FooterLayout.vue';
import HomeView from './HomeView.vue';
import { RouterLink, RouterView } from 'vue-router'



</script>


<template>
    <NavigationLayout />

    <RouterView />

    <FooterLayout />
</template>


<script>

export default {
    mounted() {

    }
}
</script>
