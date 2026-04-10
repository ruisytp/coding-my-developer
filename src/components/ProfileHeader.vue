<script setup lang="ts">
// 个人资料数据
const profile = {
  name: '张三',
  title: '全栈开发工程师',
  description: '专注于构建现代化 Web 应用程序，热爱技术，追求卓越。'
};
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen text-center">
    <!-- 头像 -->
    <div class="mb-8">
      <div class="w-32 h-32 rounded-full bg-[var(--color-primary-500)]/20 flex items-center justify-center overflow-hidden border-4 border-[var(--color-primary-500)]/30">
        <div class="w-full h-full bg-[var(--color-surface)] flex items-center justify-center text-[var(--color-text-secondary)]">
          👤
        </div>
      </div>
    </div>
    
    <!-- 姓名 -->
    <h1 class="text-4xl md:text-6xl font-bold mb-4 text-primary-gradient">
      {{ profile.name }}
    </h1>
    
    <!-- 职位 -->
    <h2 class="text-xl md:text-2xl text-[var(--color-text-secondary)] mb-6">
      {{ profile.title }}
    </h2>
    
    <!-- 简介 -->
    <p class="text-[var(--color-text-secondary)] max-w-2xl mb-8 leading-relaxed">
      {{ profile.description }}
    </p>
    
    <!-- 滚动提示 -->
    <div class="animate-bounce">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        class="h-6 w-6 text-[var(--color-text-secondary)]" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          stroke-width="2" 
          d="M19 14l-7 7m0 0l-7-7m7 7V3" 
        />
      </svg>
    </div>
  </div>
</template>

<style scoped>
/* 添加平滑滚动动画 */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

h1, h2, p {
  animation: fadeInUp 1s ease-out forwards;
}

h1 { animation-delay: 0.2s; }
h2 { animation-delay: 0.4s; }
p { animation-delay: 0.6s; }
</style>