<script setup lang="ts">
// 联系方式数据
const contactLinks = [
  {
    name: '邮箱',
    icon: '📧',
    url: 'mailto:YTP@gmail.com',
    value: 'YTP@gmail.com'
  },
  {
    name: 'GitHub',
    icon: '🐱',
    url: 'https://github.com/YTP',
    value: 'YTP@GitHub'
  },
  {
    name: 'LinkedIn',
    icon: '🔗',
    url: 'https://linkedin.com/in/YTP',
    value: 'YTP@LinkedIn'
  },
  {
    name: 'Twitter',
    icon: '🐦',
    url: 'https://twitter.com/YTP',
    value: 'YTP@Twitter'
  }
];
</script>

<template>
  <div class="flex items-center h-full w-full">
    <a 
      v-for="(link, index) in contactLinks" 
      :key="index"
      :href="link.url"
      target="_blank"
      rel="noopener noreferrer"
      class="flex-1 flex items-center justify-center gap-2 text-[var(--color-primary-400)] hover:text-[var(--color-primary-500)] transition-colors duration-300 group h-full px-2"
    >
      <span class="text-lg group-hover:scale-110 transition-transform duration-300">
        {{ link.icon }}
      </span>
      <span class="text-sm font-medium truncate">
        {{ link.name }}：{{ link.value }}
      </span>
    </a>
  </div>
</template>