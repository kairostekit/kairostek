
<script setup>


import { RouterView } from 'vue-router';





</script>
<template>
     <div id="body">

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

          <NavigationLayout></NavigationLayout>

          <router-view></router-view>

          <FooterLayout></FooterLayout>

     </div>
</template>


<script>

import NavigationLayout from '@/layouts/full/NavigationLayout.vue'
import FooterLayout from '@/layouts/full/FooterLayout.vue'
import axios from 'axios'
// import axios from 'axios'


import('@/assets/css/lightbox2/css/lightbox.css')
import('@/assets/css/themefisher-font/style.css')
import('@/assets/css/animate.css')
import('@/assets/css/slick.css')
import('@/assets/css/style.css')


export default {
     name: "FullLayout",
     components: {
          NavigationLayout,
          FooterLayout
     },
     create() {

     },
     methods: {
          getData() {

          }

     },
     mounted() {
          // axios({
          //      method: 'get',
          //      url: 'https://jsonplaceholder.typicode.com/posts',
          //      data: {
          //           title: 'Article title',
          //           body: 'Article body content',
          //           userId: 1,
          //      }
          // }).then((response) => {
          //      console.log(response);
          // })

          // (function ($) {
          //      'use strict';


          $(window).on('load', function () {
               $('#preloader').fadeOut('slow', function () {
                    $(this).remove();
               });
          });




          // })(jQuery);

     }
}
</script>

