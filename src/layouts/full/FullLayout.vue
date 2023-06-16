
<script setup>

import NavigationLayout from '@/layouts/full/NavigationLayout.vue'
import FooterLayout from '@/layouts/full/FooterLayout.vue'
import {RouterView} from 'vue-router';

</script>
<template>
     <!-- <div id="preloader">
          <div class='preloader'>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
               </div>
          </div> -->


     <NavigationLayout></NavigationLayout>

     <RouterView />


     <FooterLayout></FooterLayout>
</template>

