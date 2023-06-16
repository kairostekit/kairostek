<script setup >

import('@/assets/plugins/bootstrap/css/bootstrap.min.css');
// import('@/assets/plugins/themefisher-font/style.css')
// import('@/assets/plugins/lightbox2/dist/css/lightbox.min.css')
import('@/assets/plugins/animate/animate.css')
import('@/assets/plugins/slick/slick.css')
import('@/assets/css/style.css')


// Add Scripts Basse
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

</script>


<template>
    <div id="body">
        <router-view></router-view>

    </div>
</template>




<script >
export default {
    name: "FullLayout",
    mounted() {
        
    }
}
</script>
