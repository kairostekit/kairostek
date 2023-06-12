<template >
    <!--
  Start Preloader
  ==================================== -->
    <div id="preloader">
        <div class='preloader'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
    <!--
  End Preloader
  ==================================== -->

  <NavigationLayoutComponent/>


<!-- <RouterView></RouterView> -->
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavigationLayoutComponent from './NavigationLayoutComponent.vue';

</script>

<style lang="scss" scoped></style>