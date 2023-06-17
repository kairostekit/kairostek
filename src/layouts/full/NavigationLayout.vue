<script setup >
import { RouterLink } from 'vue-router'

</script>

<template>
    <header class="navigation fixed-top">

        <div class="container">
            <!-- main nav -->
            <nav class="navbar navbar-expand-lg navbar-light">
                <!-- logo -->
                <RouterLink :to="{ name: 'view.dashboard' }" class="navbar-brand logo">
                    <img class="logo-default" src="/images/logo.png" alt="logo" />
                    <img class="logo-white" src="/images/logo-white.png" alt="logo" />
                </RouterLink>
                <!-- /logo -->
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation"
                    aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navigation">
                    <ul class="navbar-nav ml-auto text-center">

                        <li class="nav-item ">
                            <RouterLink :to="{ name: 'view.dashboard' }" class="nav-link">HOME</RouterLink>
                        </li>
                        <li class="nav-item ">

                            <RouterLink :to="{ name: 'view.service' }" class="nav-link"> OUR SERVIVES </RouterLink>
                        </li>
                    <li class="nav-item ">
                        <RouterLink :to="{ name: 'view.about' }" class="nav-link">ABOUT US</RouterLink>
                        </li>

                        <!-- <li class="nav-item ">
                                <RouterLink :to="{ name: 'view.atricle' }" class="nav-link">ATRICLES</RouterLink>
                            </li> -->
                        <li class="nav-item ">
                            <RouterLink :to="{ name: 'view.blog' }" class="nav-link">ATRICLES</RouterLink>
                        </li>
                        <li class="nav-item ">
                            <RouterLink :to="{ name: 'view.clent' }" class="nav-link">CLIENTS</RouterLink>

                        </li>
                        <li class="nav-item ">
                            <RouterLink :to="{ name: 'view.contact' }" class="nav-link">CONTACT</RouterLink>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    name: "NavigationLayout",
    mounted() {
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