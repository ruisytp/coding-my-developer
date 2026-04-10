<script setup lang="ts">
import { projects } from '../data/projects';

interface ProjectCardProps {
  project: typeof projects[0];
}
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div 
      v-for="project in projects" 
      :key="project.id"
      class="card hover:shadow-xl transition-shadow duration-300"
    >
      <!-- 项目图片占位符 -->
      <div class="mb-4 overflow-hidden rounded-lg bg-[var(--color-surface)] flex items-center justify-center h-48">
        <span class="text-[var(--color-text-secondary)]">项目截图</span>
      </div>
      
      <!-- 项目信息 -->
      <h3 class="text-xl font-bold mb-2 text-[var(--color-text-primary)]">
        {{ project.title }}
      </h3>
      
      <p class="text-[var(--color-text-secondary)] mb-4 leading-relaxed">
        {{ project.description }}
      </p>
      
      <!-- 技术栈 -->
      <div class="flex flex-wrap gap-2 mb-4">
        <span 
          v-for="(tech, index) in project.technologies" 
          :key="index"
          class="bg-[var(--color-primary-500)]/10 text-[var(--color-primary-400)] px-2 py-1 rounded text-sm"
        >
          {{ tech }}
        </span>
      </div>
      
      <!-- 项目链接 -->
      <div class="flex gap-3">
        <a 
          v-if="project.githubUrl"
          :href="project.githubUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-outline flex-1"
        >
          GitHub
        </a>
        <a 
          v-if="project.demoUrl"
          :href="project.demoUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-primary flex-1"
        >
          演示
        </a>
      </div>
    </div>
  </div>
</template>