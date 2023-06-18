<template>
    <section class="single-page-header">
        <div class="container">
            <div class="row">
                <div class="col-md-12 ">
                    <nav aria-label="breadcrumb  align-text-bottom ">
                        <ol class="breadcrumb bg-transparent a">

                            <!-- <li class="breadcrumb-item"><a href="#">Library</a></li> -->

                            <li class="breadcrumb-item" v-for="(breadcrumb, key) in breadcrumbs" v-bind:key="key" tag="button">
                                <router-link v-if="key + 1 < breadcrumbs.length" :to="breadcrumb.url">
                                    {{ breadcrumb.name }}
                                </router-link>

                                <span v-show="key + 1 == breadcrumbs.length"  class="text-light">
                                    {{ breadcrumb.name }}
                                </span>
                            </li>
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
            

        }
    },
    props : ['breadcrumbs']

}
</script>

<style lang="scss" scoped></style>