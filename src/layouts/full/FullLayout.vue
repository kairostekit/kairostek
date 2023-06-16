
<script setup>

import NavigationLayout from '@/layouts/full/NavigationLayout.vue'
import FooterLayout from '@/layouts/full/FooterLayout.vue'
import { RouterView } from 'vue-router';




// import('@/assets/plugins/jquery/jquery.min.js')
// import('@/assets/plugins/google-map/gmap.js')
// import('@/assets/plugins/form-validation/jquery.form.js')
// import('@/assets/plugins/form-validation/jquery.validate.min.js')
// import('@/assets/plugins/bootstrap/js/bootstrap.min.js');
// import('@/assets/plugins/parallax/jquery.parallax-1.1.3.js')
// import('@/assets/plugins/lightbox2/dist/js/lightbox.min.js')
// import('@/assets/plugins/slick/slick.min.js')
// import('@/assets/plugins/filterizr/jquery.filterizr.min.js')
// import('@/assets/plugins/smooth-scroll/smooth-scroll.min.js')

// import { onVnodeUnmounted } from 'vue';
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


<script>
export default {
     mounted() {
          (function ($) {
               'use strict';

               /* ========================================================================= */
               /*	Page Preloader
               /* ========================================================================= */

               // window.load = function () {
               // 	document.getElementById('preloader').style.display = 'none';
               // }

               $(window).on('load', function () {
                    $('#preloader').fadeOut('slow', function () {
                         $(this).remove();
                    });
               });





               /* ========================================================================= */
               /*	Header Scroll Background Change
               /* ========================================================================= */

               $(window).scroll(function () {
                    var scroll = $(window).scrollTop();
                    //console.log(scroll);
                    if (scroll > 200) {
                         //console.log('a');
                         $('.navigation').addClass('sticky-header');
                    } else {
                         //console.log('a');
                         $('.navigation').removeClass('sticky-header');
                    }
               });

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

               //Init the slider
               $('.clients-logo-slider').slick({
                    infinite: true,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    slidesToShow: 5,
                    slidesToScroll: 1
               });






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

