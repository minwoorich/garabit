<script setup lang="ts">
import {useData} from "vitepress";
import BlogIndex from "./pages/BlogIndex.vue";
import BlogShow from "./pages/blog/BlogShow.vue";

const { frontmatter } = useData()
</script>
<template>
  <div class="min-h-screen bg-[#FFFFFF] py-16">
    <main class="mx-auto max-w-screen-md">
      <BlogIndex v-if="frontmatter.layout === 'blog'" />
      <BlogShow v-else-if="frontmatter.layout === 'blog-show'" />
    </main>
  </div>
</template>

<style scoped>

</style>