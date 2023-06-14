
<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>
<template>
    <section class="single-page-header">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h2>Error Page</h2>
                    
                </div>
            </div>
        </div>
    </section>
    <section class="page-404 section text-center">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1>404</h1>
                    <h2>Page Not Found</h2>
                    <p>Sorry, but the page you were trying to view does not exist.</p>
                    <RouterLink to="/Home" class="btn btn-main mt-20">Go Home</RouterLink>
                </div>
            </div>
        </div>
    </section>
</template>


<script >
export default {
    mounted() {
        (function ($) {
            'use strict';

            /* ========================================================================= */
            /*	Page Preloader
            /* ========================================================================= */

            window.load = function () {
                $('.navigation').addClass('sticky-header');
                document.getElementById('preloader').style.display = 'none';
            }


            //Hero Slider
            $('.hero-slider').slick({
                autoplay: true,
                infinite: true,
                arrows: true,
                prevArrow: '<button type=\'button\' class=\'prevArrow\'></button>',
                nextArrow: '<button type=\'button\' class=\'nextArrow\'></button>',
                dots: false,
                autoplaySpeed: 7000,
                pauseOnFocus: false,
                pauseOnHover: false
            });
            $('.hero-slider').slickAnimation();


            /* ========================================================================= */
            /*	Header Scroll Background Change
            /* ========================================================================= */

            $(window).scroll(function () {
                var scroll = $(window).scrollTop();
                $('.navigation').addClass('sticky-header');
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
            $('.testimonial-slider').slick({
                infinite: true,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 2000
            });


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
            /*	Company Slider Carousel
            /* =========================================================================  */
            $('.company-gallery').slick({
                infinite: true,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 2000,
                slidesToShow: 5,
                slidesToScroll: 1
            });



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


<style lang="scss" scoped></style>