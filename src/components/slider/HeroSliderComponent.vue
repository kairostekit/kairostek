<template>
    <div class="hero-slider">

        <div class="slider-item th-fullpage hero-area" style="background-image: url('/images/slider/slider-bg-1.jpg');">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <h1 data-duration-in=".3" data-animation-in="fadeInUp" data-delay-in=".1">Crafting Digital <br>
                            Experience</h1>
                        <p data-duration-in=".3" data-animation-in="fadeInUp" data-delay-in=".5">Lorem ipsum dolor sit
                            amet, consectetur adipisicing elit. Quod, <br> veritatis tempore nostrum id
                            officia quaerat eum corrupti, <br> ipsa aliquam velit.</p>
                        <a data-duration-in=".3" data-animation-in="fadeInUp" data-delay-in=".8" class="btn btn-main"
                            href="javascript:void(0)" @click="$e => $router.push({ name: 'view.about' })">Explore Us</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="slider-item th-fullpage hero-area" style="background-image: url('/images/slider/slider-bg-2.jpg');">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <h1 data-duration-in=".3" data-animation-in="fadeInDown" data-delay-in=".1">We Combine Design
                            <br> and
                            Creativity
                        </h1>
                        <p data-duration-in=".3" data-animation-in="fadeInDown" data-delay-in=".5">Create just what you
                            need
                            for your Perfect Website. Choose from a wide range
                            <br> of Elements & simply put them on our Canvas.
                        </p>
                        <a data-duration-in=".3" data-animation-in="fadeInDown" data-delay-in=".8" class="btn btn-main"
                            href="javascript:void(0)" @click="$e => $router.push({ name: 'view.about' })"> Explore
                            Us</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="slider-item th-fullpage hero-area" style="background-image: url('/images/slider/slider-bg-2.jpg');">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <h1 data-duration-in=".3" data-animation-in="fadeInDown" data-delay-in=".1">We Combine Design
                            <br> and
                            Creativity
                        </h1>
                        <p data-duration-in=".3" data-animation-in="fadeInDown" data-delay-in=".5">Create just what you
                            need
                            for your Perfect Website. Choose from a wide range
                            <br> of Elements & simply put them on our Canvas.
                        </p>
                        <a data-duration-in=".3" data-animation-in="fadeInDown" data-delay-in=".8" class="btn btn-main"
                            href="javascript:void(0)" @click="$e => $router.push({ name: 'view.about' })"> Explore
                            Us</a>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
export default {
    mounted() {
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
    }

}
</script>

<style lang="scss" scoped></style>