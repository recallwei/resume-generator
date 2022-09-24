<script setup lang="ts">
import { reactive } from "vue";
interface Book {
  title: string;
}
const book: Book = reactive({ title: "text" });
</script>
<template>
  <main>
    <div>{{ book.title }}</div>
  </main>
</template>

<style></style>
