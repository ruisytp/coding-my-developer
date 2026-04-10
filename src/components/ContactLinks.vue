<script setup lang="ts">
// 联系方式数据
const contactLinks = [
  {
    name: '邮箱',
    icon: '📧',
    url: 'mailto:zhangsan@gmail.com',
    value: 'zhangsan@gmail.com'
  },
  {
    name: 'GitHub',
    icon: '🐱',
    url: 'https://github.com/zhangsan',
    value: 'zhangsan'
  },
  {
    name: 'LinkedIn',
    icon: '🔗',
    url: 'https://linkedin.com/in/zhangsan',
    value: 'zhangsan'
  },
  {
    name: 'Twitter',
    icon: '🐦',
    url: 'https://twitter.com/zhangsan',
    value: '@zhangsan'
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
      class="flex-1 flex items-center justify-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-primary-400)] transition-colors duration-300 group h-full px-2"
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