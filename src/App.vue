<script setup lang="ts">
// 导入组件
import ProfileHeader from './components/ProfileHeader.vue';
import ProjectList from './components/ProjectList.vue';
import ContactLinks from './components/ContactLinks.vue';

// 页面数据
const aboutMe = {
  title: '关于我',
  description: '我是一名全栈开发工程师，专注于构建现代化、高性能的 Web 应用程序。拥有丰富的前端和后端开发经验，擅长使用 Vue.js、React、Node.js 等技术栈。我热爱学习新技术，注重代码质量和用户体验。',
  skills: [
    'Vue.js', 'React', 'TypeScript', 'Node.js', 
    'MongoDB', 'MySQL', 'Docker', 'Git'
  ]
};
</script>

<template>
  <div class="min-h-screen bg-[var(--color-background)]">
    <!-- 首页 -->
    <section id="home" class="section">
      <div class="container">
        <ProfileHeader />
      </div>
    </section>

    <!-- 关于我 -->
    <section id="about" class="section bg-[var(--color-surface)]">
      <div class="container">
        <h2 class="text-3xl md:text-4xl font-bold mb-8 text-[var(--color-text-primary)]">
          {{ aboutMe.title }}
        </h2>
        <p class="text-[var(--color-text-secondary)] mb-8 leading-relaxed">
          {{ aboutMe.description }}
        </p>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div 
            v-for="(skill, index) in aboutMe.skills" 
            :key="index"
            class="bg-[var(--color-primary-500)]/10 text-[var(--color-primary-400)] px-4 py-2 rounded-lg text-center"
          >
            {{ skill }}
          </div>
        </div>
      </div>
    </section>

    <!-- 项目展示 -->
    <section id="projects" class="section">
      <div class="container">
        <h2 class="text-3xl md:text-4xl font-bold mb-12 text-[var(--color-text-primary)]">
          项目展示
        </h2>
        <ProjectList />
      </div>
    </section>

    <!-- 联系方式 -->
    <section id="contact" class="section bg-[var(--color-surface)]">
      <div class="container">
        <h2 class="text-3xl md:text-4xl font-bold mb-8 text-[var(--color-text-primary)]">
          联系方式
        </h2>
        <ContactLinks />
      </div>
    </section>

    <!-- 页脚 -->
    <footer class="py-8 border-t border-[var(--color-border)]">
      <div class="container text-center text-[var(--color-text-secondary)]">
        <p>&copy; {{ new Date().getFullYear() }} 个人作品集. 保留所有权利.</p>
      </div>
    </footer>
  </div>
</template>