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
                    <router-link :to="{name : 'view.contact'}" class="btn btn-main">ติดต่อเรา</router-link>
                </div>
            </div> <!-- End row -->
        </div> <!-- End container -->
    </section> <!-- End section -->

    <!--Start Contact Us
	=========================================== -->
    <section class="contact-us bg-light" id="contact">
        <div class="container">
            <div class="row">
                <!-- section title -->
                <div class="col-12">
                    <div class="title text-center">
                        <h2>ได้รับการติดต่อ</h2>
                        <p>
                            โดยที่การยอมรับศักดิ์ศรีแต่กำเนิด
                            และสิทธิที่เท่าเทียมกันและที่ไม่อาจเพิกถอนได้ของสมาชิกทั้งมวลแห่งครอบครัวมนุษยชาติ
                        </p>
                        <div class="border"></div>
                    </div>
                </div>
                <!-- /section title -->

                <!-- Contact Details -->

                <!-- / End Contact Details -->

                <!-- Contact Form -->
                <div class="contact-form col-md-6">
                    <h3>แบบฟอร์มสอบถาม</h3>
                    <form id="contact-form" method="post" role="form">
                        <div class="form-group">
                            <label class="" for="">บริการที่ต้องการ</label>
                            <select class="custom-select">
                                <option value="">เลือกบริการ</option>
                                <option value="">ออกแบบเว็บไซต์</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label class="" for="">ชื่อ - นามสกุล</label>
                            <input type="text" placeholder="ชื่อ - นามสกุล" class="form-control " name="name" id="name" />
                        </div>
                        <div class="form-group">
                            <label class="" for="">ชื่อบริษัท (ถ้ามี)</label>
                            <input type="text" placeholder="ชื่อบริษัท (ถ้ามี)" class="form-control" name="name"
                                id="name" />
                        </div>
                        <div class="form-row mb-3">
                            <div class="col">
                                <label class="" for="">เบอร์ติดต่อ</label>
                                <input type="tel" placeholder="เบอร์ติดต่อ" class="form-control" name="tel" id="tel">
                            </div>
                            <div class="col">
                                <label class="" for="">อีเมล</label>
                                <input type="email" placeholder="อีเมล" class="form-control" name="email" id="email">

                            </div>
                        </div>

                        <div class="form-group">
                            <label class="" for="">รายละเอียดเพิ่มเติ่ม</label>

                            <textarea rows="6" placeholder="รายละเอียดเพิ่มเติ่ม" class="form-control" name="message"
                                id="message"></textarea>
                        </div>

                        <div class="form-group">
                            <label class="" for=""> เอกสาร (ถ้ามี) * .pdf .doc</label>
                            <div class="input-group mb-3">
                                <div class="custom-file">
                                    <input type="file" class="custom-file-input" id="inputGroupFile01"
                                        aria-describedby="inputGroupFileAddon01">
                                    <label class="custom-file-label" for="inputGroupFile01">เอกสาร (ถ้ามี) * .pdf
                                        .doc</label>
                                </div>
                            </div>
                        </div>


                        <div id="cf-submit">
                            <input type="submit" id="contact-submit" class="btn btn-transparent" value="ส่ง" />
                        </div>
                    </form>
                </div>
                <div class="contact-details col-md-6">
                    <h3>รายละเอียด | ช่องทาง | การติดต่อ</h3>
                    <p>
                        โดยที่การยอมรับศักดิ์ศรีแต่กำเนิด
                        และสิทธิที่เท่าเทียมกันและที่ไม่อาจเพิกถอนได้ของสมาชิกทั้งมวลแห่งครอบครัวมนุษยชาติ
                        เป็นพื้นฐานแห่งอิสรภาพ ความยุติธรรม และสันติภาพในโลก
                        การไม่นำพาและการหมิ่นในคุณค่าของสิทธิมนุษยชน ยังผลให้มีการกระทำอันป่าเถื่อน
                        ซึ่งเป็นการขัดอย่างร้ายแรงต่อมโนธรรมของมนุษยชาติ
                        และการมาถึงของโลกที่ได้มีการประกาศให้ความมีอิสรภาพในการพูดและความเชื่อ
                        และอิสรภาพจากความหวาดกลัวและความต้องการของมนุษย์
                        เป็นความปรารถนาสูงสุดของประชาชนทั่วไป
                    </p>
                    <ul class="contact-short-info">
                        <li>
                            <i class="tf-ion-ios-home"></i>
                            <span> &nbsp; ที่อยู่ : &nbsp; 11 หมู่ 6 ตำบลเขิน อำเภอน้ำเกลี้ยง จังหวัดศรีสะเกษ 33130 </span>
                        </li>
                        <li>
                            <i class="tf-ion-android-phone-portrait"></i>
                            <span> เบอร์โทรศัพท์ : +66 96-163-2545</span>
                        </li>
                        <li>
                            <!-- <i class="tf-ion-android-globe"></i> -->
                            <!-- <span>Fax: +880-00-000-000</span> -->
                        </li>
                        <li>
                            <i class="tf-ion-android-mail"></i>
                            <span>ที่อยู่อีเมล : singsoft.sw#gmail.com</span>
                        </li>
                    </ul>
                    <!-- Footer Social Links -->
                    <div class="social-icon">
                        <ul>
                            <li>
                                <a href="https://www.facebook.com/somphol.wila/"><i class="tf-ion-social-facebook"></i></a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/somphol.wila/"><i class="tf-ion-social-twitter"></i></a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/somphol.wila/"><i
                                        class="tf-ion-social-dribbble-outline"></i></a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/somphol.wila/"><i
                                        class="tf-ion-social-linkedin-outline"></i></a>
                            </li>
                        </ul>
                    </div>
                    <!--/. End Footer Social Links -->
                </div>
                <div class="border"></div>

                <div class="col-12 mt-4">
                    <div class="title text-center">

                        <h3>ตามหาเราได้ที่นี้</h3>
                        <p> </p>
                        <p>ละติจูด : 14.823617 | ลองจิจูด : 104.599294</p>
                    </div>
                </div>

                <div class="border"></div>

                <div class="col-md-12">
                    <div class="google-map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d15879.86092189619!2d104.59929402436781!3d14.82361683766531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTTCsDQ5JzExLjQiTiAxMDTCsDM2JzA0LjYiRQ!5e0!3m2!1sth!2sth!4v1687180818038!5m2!1sth!2sth"
                            width="600" height="450" style="border: 0" allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <!-- ./End Contact Form -->
            </div>
            <!-- end row -->
        </div>
        <!-- end container -->
    </section>
    <!-- end section -->

    <!--================================
=            Google Map            =
=================================-->
</template>

<script>
import SinglePageHeaderComponent from "@/components/slider/SinglePageHeaderComponent.vue";
export default {
    name: "ContactView",
    components: {
        SinglePageHeaderComponent,
    },
    data() {
        return {
            breadcrumbs: [
                {
                    name: "Home",
                    url: {
                        name: "view.dashboard",
                    },
                },
                {
                    name: "Atricle",
                    url: {
                        name: "view.blog",
                    },
                },
                {
                    name: "END",
                    url: {
                        name: "view.blog",
                    },
                },
            ],
        };
    },
    mounted() {
        $("#contact-form").validate({
            rules: {
                name: {
                    required: true,
                    minlength: 4,
                },
                email: {
                    required: true,
                    email: true,
                },
                subject: {
                    required: false,
                },
                message: {
                    required: true,
                },
            },
            messages: {
                user_name: {
                    required: "Come on, you have a name don't you?",
                    minlength: "Your name must consist of at least 2 characters",
                },
                email: {
                    required: "Please put your email address",
                },
                message: {
                    required: "Put some messages here?",
                    minlength: "Your name must consist of at least 2 characters",
                },
            },
            submitHandler: function (form) {
                $(form).ajaxSubmit({
                    type: "POST",
                    data: $(form).serialize(),
                    url: "sendmail.php",
                    success: function () {
                        $("#contact-form #success").fadeIn();
                    },
                    error: function () {
                        $("#contact-form #error").fadeIn();
                    },
                });
            },
        });
    },
};
</script>

<style scoped>
.google-map {
    padding-bottom: 50%;
    position: relative;
}

.google-map iframe {
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    position: absolute;
}
</style>
