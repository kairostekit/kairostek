<script setup >
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
    <header class="navigation fixed-top">
        <div class="container">
            <!-- main nav -->
            <nav class="navbar navbar-expand-lg navbar-light">
                <!-- logo -->
                <a class="navbar-brand logo" href="index.html">
                    <img class="logo-default" src="/images/logo.png" alt="logo" />
                    <img class="logo-white" src="/images/logo-white.png" alt="logo" />
                </a>
                <!-- /logo -->
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation"
                    aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navigation">
                <ul class="navbar-nav ml-auto text-center">
                    <!-- <li class="nav-item dropdown active">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Homepage
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <RouterLink to="/dashboard" class="dropdown-item">Homepage</RouterLink>
                                    </div>
                                </li> -->
                        <li class="nav-item ">
                            <RouterLink to="/dashboard" class="nav-link">Homepage</RouterLink>
                        </li>
                        <li class="nav-item ">
                            <RouterLink to="/dashboard/About" class="nav-link">About Us</RouterLink>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link" href="service.html">Services</a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link" href="portfolio.html">Portfolio</a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link" href="team.html">Team</a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link" href="pricing.html">Pricing</a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link" href="contact.html">Contact</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Pages
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="404.html">404 Page</a>
                                <a class="dropdown-item" href="blog.html">Blog Page</a>
                                <a class="dropdown-item" href="single-post.html">Blog Single Page</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
            <!-- /main nav -->
        </div>
    </header>
</template>

<script>
export default {
    mounted() {

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
    }
}
</script>