<template>
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


    <section class="posts section">
        <div class="container">
            <div class="row">

                <div class="col-12">
                    <div class="title text-center">
                        <h6 class="text-danger">คลังความรู้ไม่สิ้นสุด</h6>
                        <h2>บทความ</h2>
                        <p>นอกจากบริการที่เรารับทำ เรายังถ่ายทอดความรู้เป็นการศึกษาแบบเปิด</p>
                        <div class="border"></div>
                    </div>
                </div>
                <div class="col-3">
                    <!-- sidebar -->
                    <aside class="sidebar">
                        <div class="widget-search widget">
                            <form action="#">
                                <!-- Search bar -->
                                <input class="form-control" type="text" placeholder="Search..." name="search">
                                <button type="submit" class="widget-search-btn">
                                    <i class="tf-ion-ios-search"></i>
                                </button>
                            </form>
                        </div>
                        <div class="widget-categories widget">
                            <h2>Categories</h2>
                            <!-- widget categories list -->
                            <ul class="widget-categories-list">
                                <li>
                                    <a href="#">Financial Advise</a>
                                </li>
                                <li>
                                    <a href="#">Businee Growth</a>
                                </li>
                                <li>
                                    <a href="#">Investment Marketing</a>
                                </li>
                                <li>
                                    <a href="#">Business Consulting</a>
                                </li>
                                <li>
                                    <a href="#">Advanced Analytics</a>
                                </li>
                                <li>
                                    <a href="#">Investment Marketing</a>
                                </li>
                            </ul>
                        </div>
                        <div class="widget-post widget">
                            <h2>Latest Post</h2>
                            <!-- latest post -->
                            <ul class="widget-post-list">
                                <li class="widget-post-list-item">
                                    <div class="widget-post-image">
                                        <a href="single-post.html">
                                            <img src="/images/blog/post-1.jpg" alt="post-img">
                                        </a>
                                    </div>
                                    <div class="widget-post-content">
                                        <a href="single-post.html">
                                            <h5>Condentum Quam Vitae Ligu. tempor bibendum.</h5>
                                        </a>
                                        <h6>Aug 20, 2018</h6>
                                    </div>
                                </li>
                                <li class="widget-post-list-item">
                                    <div class="widget-post-image">
                                        <a href="single-post.html">
                                            <img src="/images/blog/post-2.jpg" alt="post-img">
                                        </a>
                                    </div>
                                    <div class="widget-post-content">
                                        <a href="single-post.html">
                                            <h5>Condentum Quam Vitae Ligu. tempor bibendum.</h5>
                                        </a>
                                        <h6>Aug 20, 2018</h6>
                                    </div>
                                </li>
                                <li class="widget-post-list-item">
                                    <div class="widget-post-image">
                                        <a href="single-post.html">
                                            <img src="/images/blog/post-3.jpg" alt="post-img">
                                        </a>
                                    </div>
                                    <div class="widget-post-content">
                                        <a href="single-post.html">
                                            <h5>Condentum Quam Vitae Ligu. tempor bibendum.</h5>
                                        </a>
                                        <h6>Aug 20, 2018</h6>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </aside>
                </div>
                <div class="col-9">

                    <!-- /section title -->
                    <!-- single blog post -->
                    <div class="row">
                        <article class="col-sm-6 clearfix ">
                            <div class="post-item">
                                <div class="media-wrapper">
                                    <img src="/images/blog/post-1.jpg" alt="amazing caves coverimage" class="img-fluid">
                                </div>

                                <div class="content">
                                    <h3><a href="single-post.html">Reasons to Smile</a></h3>
                                    <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson
                                        ad
                                        squid. 3 wolf
                                        moon officia aute, non skateboard dolor brunch.</p>
                                    <router-link :to="{ name: 'view.blog.single' }" class="btn btn-main">Read
                                        more</router-link>

                                </div>
                            </div>
                        </article>
                        <!-- /single blog post -->

                        <!-- single blog post -->
                        <article class="col-sm-6 ">
                            <div class="post-item">
                                <div class="media-wrapper">
                                    <img src="/images/blog/post-2.jpg" alt="amazing caves coverimage" class="img-fluid">
                                </div>

                                <div class="content">
                                    <h3><a href="single-post.html">A Few Moments</a></h3>
                                    <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson
                                        ad
                                        squid. 3 wolf
                                        moon officia aute, non skateboard dolor brunch.</p>
                                    <router-link :to="{ name: 'view.blog.single' }" class="btn btn-main">Read
                                        more</router-link>
                                </div>
                            </div>
                        </article>
                        <!-- end single blog post -->

                        <!-- single blog post -->
                        <article class="col-sm-6 ">
                            <div class="post-item">
                                <div class="media-wrapper">
                                    <img src="/images/blog/post-3.jpg" alt="amazing caves coverimage" class="img-fluid">
                                </div>

                                <div class="content">
                                    <h3><a href="single-post.html">Hints for Life</a></h3>
                                    <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson
                                        ad
                                        squid. 3 wolf
                                        moon officia aute, non skateboard dolor brunch.</p>
                                    <router-link :to="{ name: 'view.blog.single' }" class="btn btn-main">Read
                                        more</router-link>
                                </div>
                            </div>
                        </article>
                        <!-- /section title -->
                        <!-- single blog post -->
                        <article class="col-sm-6 clearfix ">
                            <div class="post-item">
                                <div class="media-wrapper">
                                    <img src="/images/blog/post-4.jpg" alt="amazing caves coverimage" class="img-fluid">
                                </div>

                                <div class="content">
                                    <h3><a href="single-post.html">Looking Back</a></h3>
                                    <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson
                                        ad
                                        squid. 3 wolf
                                        moon officia aute, non skateboard dolor brunch.</p>
                                    <router-link :to="{ name: 'view.blog.single' }" class="btn btn-main">Read
                                        more</router-link>
                                </div>
                            </div>
                        </article>
                        <!-- /single blog post -->

                        <!-- single blog post -->
                        <article class="col-sm-6 ">
                            <div class="post-item">
                                <div class="media-wrapper">
                                    <img src="/images/blog/post-5.jpg" alt="amazing caves coverimage" class="img-fluid">
                                </div>

                                <div class="content">
                                    <h3><a href="single-post.html">Laugh and Cry</a></h3>
                                    <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson
                                        ad
                                        squid. 3 wolf
                                        moon officia aute, non skateboard dolor brunch.</p>
                                    <router-link :to="{ name: 'view.blog.single' }" class="btn btn-main">Read
                                        more</router-link>
                                </div>
                            </div>
                        </article>
                        <!-- end single blog post -->

                        <!-- single blog post -->
                        <article class="col-sm-6 ">
                            <div class="post-item">
                                <div class="media-wrapper">
                                    <img src="/images/blog/post-6.jpg" alt="amazing caves coverimage" class="img-fluid">
                                </div>

                                <div class="content">
                                    <h3><a href="single-post.html">Regret No More</a></h3>
                                    <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson
                                        ad
                                        squid. 3 wolf
                                        moon officia aute, non skateboard dolor brunch.</p>
                                    <router-link :to="{ name: 'view.blog.single' }" class="btn btn-main">Read
                                        more</router-link>
                                </div>
                            </div>
                        </article>
                    </div>

                </div>


            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>