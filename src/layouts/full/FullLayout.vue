
<script setup>

import NavigationLayout from '@/layouts/full/NavigationLayout.vue'
import FooterLayout from '@/layouts/full/FooterLayout.vue'
</script>
<template>
     <NavigationLayout></NavigationLayout>

     <router-view></router-view>

     <FooterLayout></FooterLayout>
</template>

