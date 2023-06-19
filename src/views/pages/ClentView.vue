<template>
    <!-- <SinglePageHeaderComponent :breadcrumbs="breadcrumbs"></SinglePageHeaderComponent> -->

    <section class="call-to-action section">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center">
                    <p></p>
                    <h2>บริษัท คาริโร โฟกัส โซลูชั่นส์ จำกัด</h2>
                    <p>เราเข้าใจและยินดีที่คุณสนใจมาใช้บริการของเรา</p>
                    <p>
                        เรามีทีมงานผู้เชี่ยวชาญที่จะช่วยคุณในการพัฒนาและสร้างเว็บแอปพลิเคชันที่คุณต้องการได้อย่างมืออาชีพและมีคุณภาพสูงครับ/ค่ะ
                    </p>
                    <router-link :to="{ name: 'view.contact' }" class="btn btn-main">ติดต่อเรา</router-link>
                </div>
            </div> <!-- End row -->
        </div> <!-- End container -->
    </section> <!-- End section -->
    <!-- Start Team Skills
		=========================================== -->

    <section class="team-skills section-sm" id="skills">
        <div class="container">
            <div class="row">

                <!-- section title -->
                <div class="col-12">
                    <div class="title text-center">
                        <h6 class="text-danger">เราสร้างมาเพื่อใคร</h6>
                        <h2>ลูกค้าองค์กรs</h2>
                        <p>ขอขอบคุณลูกค้าระดับองค์กรทั้งภาครัฐ เอกชน และต่างประเทศ
                            ที่ไว้วางใจบริษัทในการรับทำเว็บไซต์ รับเขียนโปรแกรม และทำการตลาดออนไลน์</p>
                        <div class="border"></div>
                    </div>
                </div>
                <!-- /section title -->



            </div> <!-- End row -->
            <div class="row">
                <div class="col-md-12">
                    <div id="clients-slider" class="clients-logo-slider">
                        <img src="/images/client-logo/logo1.png" alt="">
                        <img src="/images/client-logo/logo-2.png" alt="">
                        <img src="/images/client-logo/logo-3.png" alt="">
                        <img src="/images/client-logo/logo-4.png" alt="">
                        <img src="/images/client-logo/logo-5.png" alt="">
                        <img src="/images/client-logo/logo1.png" alt="">
                        <img src="/images/client-logo/logo-2.png" alt="">
                        <img src="/images/client-logo/logo-3.png" alt="">
                        <img src="/images/client-logo/logo-4.png" alt="">
                        <img src="/images/client-logo/logo-5.png" alt="">
                    </div>

                </div>
            </div>
        </div> <!-- End container -->
    </section> <!-- End section -->
    <!--
		Start Counter Section
		==================================== -->

    <section class="counter-wrapper section-sm">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center">
                    <div class="title">
                        <h2>มาสร้างบางสิ่งด้วยกัน</h2>
                        <h5>เรายึดมั่นวิสัยทัศน์</h5>
                        <p>ผลงานคุณภาพ บริการประทับใจ ตรงต่อเวลา</p>
                    </div>
                </div>
                <!-- first count item -->
                <div class="col-md-3 col-sm-6 col-xs-6 text-center ">
                    <div class="counters-item">
                        <i class="tf-ion-ios-alarm-outline"></i>
                        <div>
                            <span class="counter" data-count="150">0</span>
                        </div>
                        <h3>ลูกค้ามีความสุข</h3>
                    </div>
                </div>
                <!-- end first count item -->

                <!-- second count item -->
                <div class="col-md-3 col-sm-6 col-xs-6 text-center ">
                    <div class="counters-item">
                        <i class="tf-ion-ios-analytics-outline"></i>
                        <div>
                            <span class="counter" data-count="130">0</span>
                        </div>
                        <h3>โครงการเสร็จสมบูรณ์</h3>
                    </div>
                </div>
                <!-- end second count item -->

                <!-- third count item -->
                <div class="col-md-3 col-sm-6 col-xs-6 text-center ">
                    <div class="counters-item">
                        <i class="tf-ion-ios-compose-outline"></i>
                        <div>
                            <span class="counter" data-count="99">0</span>
                        </div>
                        <h3>ข้อเสนอแนะในเชิงบวก</h3>

                    </div>
                </div>
                <!-- end third count item -->

                <!-- fourth count item -->
                <div class="col-md-3 col-sm-6 col-xs-6 text-center ">
                    <div class="counters-item kill-border">
                        <i class="tf-ion-ios-bolt-outline"></i>
                        <div>
                            <span class="counter" data-count="250">0</span>
                        </div>
                        <h3>reward</h3>
                    </div>
                </div>
                <!-- end fourth count item -->
            </div> <!-- end row -->
        </div> <!-- end container -->
    </section> <!-- end section -->
    <!-- Start Portfolio Section
		=========================================== -->
</template>

<script>
import SinglePageHeaderComponent from '@/components/slider/SinglePageHeaderComponent.vue'

export default {
    name: "ClientView",
    components: {
        SinglePageHeaderComponent
    }, data() {
        return {

            breadcrumbs: [
                {
                    name: "Home",
                    url: {
                        name: 'view.dashboard'
                    }
                },
                {
                    name: "Atricle",
                    url: {
                        name: 'view.blog'
                    }
                }
                ,
                {
                    name: "END",
                    url: {
                        name: 'view.blog'
                    }
                }
            ]
        }
    }, mounted() {
        $('.clients-logo-slider').slick({
            infinite: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 5,
            slidesToScroll: 1
        });
    }
}
</script>

<style lang="scss" scoped></style>