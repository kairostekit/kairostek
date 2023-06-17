<template>
    <section class="single-page-header">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <nav aria-label="breadcrumb  ">
                        <ol class="breadcrumb bg-transparent a">
                            <!-- <li v-for="page in pages" class="breadcrumb-item"><a href="#">{{ pages.name}}</a></li> -->

                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item"><a href="#">Library</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Data</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    data() {
        return {
            page: [
                {
                    name: "Home",
                    link: { name: 'view.dashboard' }
                },
                {
                    name: "Library",
                    link: { name: 'view.dashboard' }
                }
            ]

        }
    }

}
</script>

<style lang="scss" scoped></style>