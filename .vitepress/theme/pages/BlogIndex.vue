<script setup lang="ts">
import {data} from '../../data/blog.data'
import BlogCard from "../components/BlogCard.vue";
import ButtonPrimary from "../components/ButtonPrimary.vue";

const {frontmatter} = useData()
</script>

<template>
  <section class="space-y-16">
    <h1 class="text-6xl font-semibold">
      {{ frontmatter.title }}
    </h1>

    <div class="space-y-10">
      <BlogCard v-for="post in data" :key="post.url" :post="post"/>
    </div>
  </section>
  <ButtonPrimary href="/">
    Back to Home
  </ButtonPrimary>
</template>

<style scoped>

</style>