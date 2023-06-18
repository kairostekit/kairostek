
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


          <!-- <></NavigationLayout> -->

          
          <NavigationLayout></NavigationLayout>

          <router-view></router-view>

          <FooterLayout></FooterLayout>

     </div>
</template>


<script>

import NavigationLayout from '@/layouts/full/NavigationLayout.vue'
import FooterLayout from '@/layouts/full/FooterLayout.vue'

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
          window.addEventListener("load", this.onWindowLoad);
     },
     methods: {
          onWindowLoad() {
               console.log("window load event");
          },
     },
     mounted() {
          (function ($) {
               'use strict';


               $(window).on('load', function () {
                    $('#preloader').fadeOut('slow', function () {
                         $(this).remove();
                    });
               });

               setTimeout(function () {
                    var containerEl = document.querySelector('.filtr-container');
                    var filterizd;
                    if (containerEl) {
                         filterizd = $('.filtr-container').filterizr({});
                    }
               }, 500);

             

               $('#contact-form').validate({
                    rules: {
                         name: {
                              required: true,
                              minlength: 4
                         },
                         email: {
                              required: true,
                              email: true
                         },
                         subject: {
                              required: false
                         },
                         message: {
                              required: true
                         }
                    },
                    messages: {
                         user_name: {
                              required: 'Come on, you have a name don\'t you?',
                              minlength: 'Your name must consist of at least 2 characters'
                         },
                         email: {
                              required: 'Please put your email address'
                         },
                         message: {
                              required: 'Put some messages here?',
                              minlength: 'Your name must consist of at least 2 characters'
                         }
                    },
                    submitHandler: function (form) {
                         $(form).ajaxSubmit({
                              type: 'POST',
                              data: $(form).serialize(),
                              url: 'sendmail.php',
                              success: function () {
                                   $('#contact-form #success').fadeIn();
                              },
                              error: function () {
                                   $('#contact-form #error').fadeIn();
                              }
                         });
                    }
               }

               );

              

          })(jQuery);

     }
}
</script>

