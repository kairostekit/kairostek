
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

          <button @click="this.topFunction()" id="back_to_top" title="Go to top">Top</button>

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

          },
          topFunction: () => {
               document.body.scrollTop = 0;
               document.documentElement.scrollTop = 0;
          },



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
          // Get the button

          // When the user scrolls down 20px from the top of the document, show the button
          window.onscroll = function () {
               scrollFunction()
          };


          const scrollFunction = () => {
               // let back_to_top = this.$refs.back_to_top
               let back_to_top = document.getElementById("back_to_top");
               if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                    back_to_top.style.display = "block";
               } else {
                    back_to_top.style.display = "none";
               }

               // console.log(back_to_top)
          }

          // When the user clicks on the button, scroll to the top of the document




          $(window).on('load', function () {
               $('#preloader').fadeOut('slow', function () {
                    $(this).remove();
               });
          });




          // })(jQuery);

     }
}
</script>


<style>
#back_to_top {
     display: none;
     position: fixed;
     bottom: 20px;
     right: 30px;
     z-index: 99;
     font-size: 18px;
     border: none;
     outline: none;
     background-color: red;
     color: white;
     cursor: pointer;
     padding: 15px;
     border-radius: 4px;
}

#back_to_top:hover {
     background-color: #555;
}
</style>