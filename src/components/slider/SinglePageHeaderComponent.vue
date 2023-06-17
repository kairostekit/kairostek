<template>
    <section class="single-page-header">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <nav aria-label="breadcrumb  ">
                        <ol class="breadcrumb bg-transparent a">
                            <li v-for="pages in page" :key="page.name" class="breadcrumb-item"><a href="name">{{ page.name }}</a></li>

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
            pages: [
                1,2,3,4,5,6,7,8,9,10,11
            ]

        }
    }

}
</script>

<style lang="scss" scoped></style>