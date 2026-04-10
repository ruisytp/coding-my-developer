<script setup lang="ts">
// 导入组件
import ProjectList from './components/ProjectList.vue';
import ContactLinks from './components/ContactLinks.vue';

// 页面数据
const profile = {
  name: 'YTP',
  title: '全栈开发工程师',
  description: '专注于构建现代化 Web 应用程序，热爱技术，追求卓越。'
};

const aboutMe = {
  title: '关于我',
  description: '我是一名全栈开发工程师，专注于构建现代化、高性能的 Web 应用程序。拥有丰富的前端和后端开发经验，擅长使用 Vue.js、React、Node.js 等主流技术栈进行高效开发。同时，我积极拓展在大数据领域的技术能力，熟悉 Hadoop、Spark、Kafka 等核心大数据生态组件，能够处理海量数据的采集、存储、计算与可视化。掌握 Java、Python 和 Scala 等大数据常用编程语言，并具备使用 Hive、HBase、Elasticsearch 等工具进行数据建模与分析的经验。我热爱学习新技术，注重代码质量、系统性能与用户体验，并致力于将大数据能力与 Web 应用深度融合，打造数据驱动的智能产品。'
};
</script>

<template>
  <div class="h-screen bg-[var(--color-background)] flex flex-col">
    <!-- 主要内容区域 - 占85%高度 -->
    <div class="flex-grow flex" style="height: 85vh;">
      <!-- 左侧列 (2/5 宽度) -->
      <div class="w-2/5 flex flex-col p-8">
        <!-- 上方：头像和简介模块 -->
        <div class="flex flex-col items-center text-center h-1/2 justify-center">
          <!-- 头像 -->
          <div class="mb-6">
            <div class="w-32 h-32 rounded-full bg-[var(--color-primary-500)]/20 flex items-center justify-center overflow-hidden border-4 border-[var(--color-primary-500)]/30 mx-auto">
              <div class="w-full h-full bg-[var(--color-surface)] flex items-center justify-center text-[var(--color-text-secondary)]">
                👤
              </div>
            </div>
          </div>
          
          <!-- 姓名 -->
          <h1 class="text-3xl md:text-4xl font-bold mb-2 text-primary-gradient">
            {{ profile.name }}
          </h1>
          
          <!-- 职位 -->
          <h2 class="text-lg md:text-xl text-[var(--color-text-secondary)] mb-4">
            {{ profile.title }}
          </h2>
          
          <!-- 简介 -->
          <p class="text-[var(--color-text-secondary)] max-w-md leading-relaxed">
            {{ profile.description }}
          </p>
        </div>
        
        <!-- 下方：关于我模块 -->
        <div class="flex flex-col items-center text-center h-1/2 justify-center mt-4 border border-[var(--color-border)]/50 rounded-xl p-4">
          <h3 class="text-2xl font-bold mb-4 text-[var(--color-text-primary)]">
            {{ aboutMe.title }}
          </h3>
          <p class="text-[var(--color-text-secondary)] leading-relaxed text-center">
            {{ aboutMe.description }}
          </p>
        </div>
      </div>
      
      <!-- 右侧列 (3/5 宽度) -->
      <div class="w-3/5 flex flex-col p-8">
        <!-- 项目展示标题 -->
        <div class="flex justify-center mb-6">
          <h2 class="text-3xl font-bold text-[var(--color-text-primary)]">
            项目展示
          </h2>
        </div>
        
        <!-- 项目展示内容 -->
        <div class="flex-grow">
          <ProjectList />
        </div>
      </div>
    </div>
    
    <!-- 页面底部：联系方式区域 (占10%高度) -->
    <div class="h-10vh min-h-12 bg-[var(--color-surface)] flex items-center px-8" style="height: 10vh; min-height: 60px;">
      <!-- 联系方式标题（最左侧） -->
      <h2 class="text-xl font-bold text-[var(--color-text-primary)] mr-8">
        联系方式
      </h2>
      <!-- 联系方式链接（右侧水平排列） -->
      <div class="flex-1">
        <ContactLinks />
      </div>
    </div>
    
    <!-- 页脚 -->
    <footer class="py-4 border-t border-[var(--color-border)]">
      <div class="container mx-auto px-4 text-center text-[var(--color-text-secondary)]">
        <p class="font-bold text-sm">&copy; {{ new Date().getFullYear() }} 个人作品集. 保留所有权利.</p>
      </div>
    </footer>
  </div>
</template>