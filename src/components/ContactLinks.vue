<script setup lang="ts">
// 联系方式数据
const contactLinks = [
  {
    name: '邮箱',
    icon: '📧',
    url: 'mailto:your.email@example.com',
    label: 'your.email@example.com'
  },
  {
    name: 'GitHub',
    icon: '🐱',
    url: 'https://github.com/yourusername',
    label: '@yourusername'
  },
  {
    name: 'LinkedIn',
    icon: '🔗',
    url: 'https://linkedin.com/in/yourprofile',
    label: 'your profile'
  },
  {
    name: 'Twitter',
    icon: '🐦',
    url: 'https://twitter.com/yourhandle',
    label: '@yourhandle'
  }
];
</script>

<template>
  <div class="flex flex-wrap justify-center gap-6">
    <a 
      v-for="(link, index) in contactLinks" 
      :key="index"
      :href="link.url"
      target="_blank"
      rel="noopener noreferrer"
      class="flex items-center gap-3 text-[var(--color-text-secondary)] hover:text-[var(--color-primary-400)] transition-colors duration-300 group"
    >
      <span class="text-2xl group-hover:scale-110 transition-transform duration-300">
        {{ link.icon }}
      </span>
      <span class="text-lg font-medium">
        {{ link.name }}
      </span>
      <span class="text-[var(--color-text-secondary)]/80 group-hover:text-[var(--color-primary-400)]/80">
        {{ link.label }}
      </span>
    </a>
  </div>
</template>