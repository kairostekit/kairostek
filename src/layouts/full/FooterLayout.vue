<script setup>

import { RouterLink } from 'vue-router';


</script>
<template>
    <footer id="footer" class="bg-one">
        <div class="top-footer">
            <div class="container">
                <div class="row">
                    <div class="col-sm-3 col-md-3 col-lg-3">
                        <h3>เกี่ยวกับ</h3>
                        <p>
                            ทั้งอยู่ที่ 115/54 หมู่ 4 ตำบลอนิจา อำเภออังจารัจ จังหวัดอิติมาเต 19008
                        </p>
                    </div>
                    <!-- End of .col-sm-3 -->

                    <div class="col-sm-3 col-md-3 col-lg-3">
                        <ul>
                            <li>
                                <h3>บริการของเรา</h3>
                            </li>
                            <li><a href="#">Graphic Design</a></li>
                            <li><a href="#">Web Design</a></li>
                            <li><a href="#">Web Development</a></li>
                            <li><a href="#">App Development</a></li>
                        </ul>
                    </div>
                    <!-- End of .col-sm-3 -->

                    <div class="col-sm-3 col-md-3 col-lg-3">
                        <ul>
                            <li>
                                <h3>ลิงค์ด่วน</h3>
                            </li>
                            <li>
                                <RouterLink tag="button" :to="{ name: 'view.dashboard' }">HOME</RouterLink>
                            </li>
                            <li>
                                <RouterLink tag="button" :to="{ name: 'view.service' }">OUR SERVIVES</RouterLink>
                            </li>
                            <li>
                                <RouterLink tag="button" :to="{ name: 'view.about' }">ABOUT US</RouterLink>
                            </li>
                            <li>
                                <RouterLink tag="button" :to="{ name: 'view.blog' }">ATRICLES</RouterLink>
                            </li>
                            <li>
                                <RouterLink tag="button" :to="{ name: 'view.clent' }">CLIENTS</RouterLink>
                            </li>
                            <li>
                                <RouterLink tag="button" :to="{ name: 'view.contact' }">CONTACT</RouterLink>
                            </li>
                        </ul>
                    </div>
                    <!-- End of .col-sm-3 -->

                    <div class="col-sm-3 col-md-3 col-lg-3">
                        <ul>
                            <li>
                                <h3>โซเชียล</h3>
                            </li>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Youtube</a></li>
                            <li><a href="#">Pinterest</a></li>
                        </ul>
                    </div>
                    <!-- End of .col-sm-3 -->

                </div>
            </div> <!-- end container -->
        </div>
        <div class="footer-bottom">
            <h5>Copyright {{ CopyrightTime }}. All rights reserved.</h5>
        </div>
    </footer>
</template>
<script>


export default {
    name: "FooterLayout",
    components: {
    },
    data() {
        return {
            CopyrightTime: new Date().getFullYear(),
        }
    },
    methods() {

    },
    mounted() {

    }
}
</script>