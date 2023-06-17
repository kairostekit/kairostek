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
                         บริษัท คาริโร โฟกัส โซลูชั่นส์ จำกัด
                        </p>
                        <p>
                         11 หมู่ 6 ตำบลเขิน อำเภอน้ำเกลี้ยง จังหวัดศรีสะเกษ 33130
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
                                <RouterLink tag="button" :to="{ name: 'view.service' }">SERVIVES</RouterLink>
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
                            <li><a href="https://www.facebook.com/somphol.wila/">Facebook</a></li>
                            <li><a href="https://www.facebook.com/somphol.wila/">Twitter</a></li>
                            <li><a href="https://www.facebook.com/somphol.wila/">Youtube</a></li>
                            <li><a href="https://www.facebook.com/somphol.wila/">Pinterest</a></li>
                        </ul>
                    </div>
                    <!-- End of .col-sm-3 -->

                </div>
            </div> <!-- end container -->
        </div>
        <div class="footer-bottom">
            <h5>Copyright 2023 - {{ CopyrightTime }}. CARIRO FOCUS SOLUTIONS COMPANY LIMITED. All rights reserved.</h5>
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