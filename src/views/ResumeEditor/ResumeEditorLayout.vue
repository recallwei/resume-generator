<script setup lang="ts">
import ResumeEditorHeader from "./ResumeEditorHeader.vue";
import ResumeEditorSidebar from "./ResumeEditorSidebar.vue";
import ResumeEditor from "./ResumeEditor.vue";
</script>

<template>
  <el-container class="h-screen">
    <el-header height="64px" class="border-b flex items-center gap-2">
      <ResumeEditorHeader />
    </el-header>
    <el-container>
      <el-aside width="200px" class="border-r">
        <ResumeEditorSidebar />
      </el-aside>
      <el-main>
        <ResumeEditor />
      </el-main>
    </el-container>
  </el-container>
</template>
