
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

import('@/assets/plugins/animate/animate.css')
import('@/assets/plugins/slick/slick.css')
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

               /* ========================================================================= */
               /*	Page Preloader
               /* ========================================================================= */

               // window.load = function () {
               //      document.getElementById('preloader').style.display = 'none';
               //      alert('Page Preloader');
               // }

               $(window).on('load', function () {
                    $('#preloader').fadeOut('slow', function () {
                         $(this).remove();
                    });
               });





               /* ========================================================================= */
               /*	Header Scroll Background Change
               /* ========================================================================= */



               /* ========================================================================= */
               /*	Portfolio Filtering Hook
               /* =========================================================================  */

               // filter
               setTimeout(function () {
                    var containerEl = document.querySelector('.filtr-container');
                    var filterizd;
                    if (containerEl) {
                         filterizd = $('.filtr-container').filterizr({});
                    }
               }, 500);

               /* ========================================================================= */
               /*	Testimonial Carousel
               /* =========================================================================  */

               //Init the slider

               /* ========================================================================= */
               /*	Clients Slider Carousel
               /* =========================================================================  */





               /* ========================================================================= */
               /*   Contact Form Validating
               /* ========================================================================= */

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

               /* ========================================================================= */
               /*	On scroll fade/bounce effect
               /* ========================================================================= */
               var scroll = new SmoothScroll('a[href*="#"]');

               // -----------------------------
               //  Count Up
               // -----------------------------
               function counter() {
                    if ($('.counter').length !== 0) {
                         var oTop = $('.counter').offset().top - window.innerHeight;
                    }
                    if ($(window).scrollTop() > oTop) {
                         $('.counter').each(function () {
                              var $this = $(this),
                                   countTo = $this.attr('data-count');
                              $({
                                   countNum: $this.text()
                              }).animate({
                                   countNum: countTo
                              }, {
                                   duration: 1000,
                                   easing: 'swing',
                                   step: function () {
                                        $this.text(Math.floor(this.countNum));
                                   },
                                   complete: function () {
                                        $this.text(this.countNum);
                                   }
                              });
                         });
                    }
               }
               // -----------------------------
               //  On Scroll
               // -----------------------------
               $(window).scroll(function () {
                    counter();
               });

          })(jQuery);

     }
}
</script>

