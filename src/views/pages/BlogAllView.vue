<template>
    <section class="single-page-header">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <nav aria-label="breadcrumb  ">
                        <ol class="breadcrumb bg-transparent a">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item"><a href="#">Blog</a></li>
                            <li class="breadcrumb-item active" aria-current="page">All</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </section>



    <section class="posts section">
        <div class="container">
            <div class="row">
                <!-- /section title -->
                <!-- single blog post -->
                <article class="col-md-4 col-sm-6 col-xs-12 clearfix ">
                    <div class="post-item">
                        <div class="media-wrapper">
                            <img src="/images/blog/post-1.jpg" alt="amazing caves coverimage" class="img-fluid">
                        </div>

                        <div class="content">
                            <h3><a href="single-post.html">Reasons to Smile</a></h3>
                            <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                                squid. 3 wolf
                                moon officia aute, non skateboard dolor brunch.</p>
                            <router-link :to="{ name: 'view.blog.single' }" class="btn btn-main">Read more</router-link>
                            
                        </div>
                    </div>
                </article>
                <!-- /single blog post -->

                <!-- single blog post -->
                <article class="col-md-4 col-sm-6 col-xs-12 ">
                    <div class="post-item">
                        <div class="media-wrapper">
                            <img src="/images/blog/post-2.jpg" alt="amazing caves coverimage" class="img-fluid">
                        </div>

                        <div class="content">
                            <h3><a href="single-post.html">A Few Moments</a></h3>
                            <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                                squid. 3 wolf
                                moon officia aute, non skateboard dolor brunch.</p>
                             <router-link :to="{ name: 'view.blog.single' }" class="btn btn-main">Read more</router-link>
                        </div>
                    </div>
                </article>
                <!-- end single blog post -->

                <!-- single blog post -->
                <article class="col-md-4 col-sm-6 col-xs-12 ">
                    <div class="post-item">
                        <div class="media-wrapper">
                            <img src="/images/blog/post-3.jpg" alt="amazing caves coverimage" class="img-fluid">
                        </div>

                        <div class="content">
                            <h3><a href="single-post.html">Hints for Life</a></h3>
                            <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                                squid. 3 wolf
                                moon officia aute, non skateboard dolor brunch.</p>
                             <router-link :to="{ name: 'view.blog.single' }" class="btn btn-main">Read more</router-link>
                        </div>
                    </div>
                </article>
                <!-- /section title -->
                <!-- single blog post -->
                <article class="col-md-4 col-sm-6 col-xs-12 clearfix ">
                    <div class="post-item">
                        <div class="media-wrapper">
                            <img src="/images/blog/post-4.jpg" alt="amazing caves coverimage" class="img-fluid">
                        </div>

                        <div class="content">
                            <h3><a href="single-post.html">Looking Back</a></h3>
                            <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                                squid. 3 wolf
                                moon officia aute, non skateboard dolor brunch.</p>
                             <router-link :to="{ name: 'view.blog.single' }" class="btn btn-main">Read more</router-link>
                        </div>
                    </div>
                </article>
                <!-- /single blog post -->

                <!-- single blog post -->
                <article class="col-md-4 col-sm-6 col-xs-12 ">
                    <div class="post-item">
                        <div class="media-wrapper">
                            <img src="/images/blog/post-5.jpg" alt="amazing caves coverimage" class="img-fluid">
                        </div>

                        <div class="content">
                            <h3><a href="single-post.html">Laugh and Cry</a></h3>
                            <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                                squid. 3 wolf
                                moon officia aute, non skateboard dolor brunch.</p>
                             <router-link :to="{ name: 'view.blog.single' }" class="btn btn-main">Read more</router-link>
                        </div>
                    </div>
                </article>
                <!-- end single blog post -->

                <!-- single blog post -->
                <article class="col-md-4 col-sm-6 col-xs-12 ">
                    <div class="post-item">
                        <div class="media-wrapper">
                            <img src="/images/blog/post-6.jpg" alt="amazing caves coverimage" class="img-fluid">
                        </div>

                        <div class="content">
                            <h3><a href="single-post.html">Regret No More</a></h3>
                            <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                                squid. 3 wolf
                                moon officia aute, non skateboard dolor brunch.</p>
                             <router-link :to="{ name: 'view.blog.single' }" class="btn btn-main">Read more</router-link>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>