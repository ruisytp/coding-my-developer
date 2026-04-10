<script setup lang="ts">
import { projects } from '../data/projects';
import { ref, onMounted } from 'vue';

interface ProjectCardProps {
  project: typeof projects[0];
}

// 为每个项目维护图片URL状态
const projectImages = ref<Record<number, string | undefined>>({});

// 加载存储的项目图片
const loadProjectImages = () => {
  try {
    projects.forEach(project => {
      const storedImage = localStorage.getItem(`project-image-${project.id}`);
      if (storedImage) {
        projectImages.value[project.id] = storedImage;
      } else {
        projectImages.value[project.id] = undefined;
      }
    });
  } catch (error) {
    console.warn('Failed to load project images from localStorage:', error);
  }
};

// 保存项目图片到localStorage
const saveProjectImage = (projectId: number, file: File) => {
  // 检查文件大小限制
  if (file.size > 5 * 1024 * 1024) {
    alert('项目图片大小不能超过5MB');
    return;
  }
  
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      localStorage.setItem(`project-image-${projectId}`, e.target?.result as string);
      projectImages.value[projectId] = e.target?.result as string;
    } catch (error) {
      console.error('Failed to save project image to localStorage:', error);
      alert('存储失败：存储空间不足或浏览器不支持');
    }
  };
  reader.readAsDataURL(file);
};

// 处理文件选择
const handleFileSelect = (event: Event, projectId: number) => {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];
  
  if (file) {
    // 验证文件类型
    if (!file.type.startsWith('image/')) {
      alert('请选择图片文件');
      return;
    }
    
    saveProjectImage(projectId, file);
  }
};

// 触发文件选择
const triggerFileSelect = (projectId: number) => {
  const fileInput = document.getElementById(`file-input-${projectId}`) as HTMLInputElement;
  if (fileInput) {
    fileInput.click();
  }
};

// 清除项目图片
const clearProjectImage = (projectId: number) => {
  try {
    localStorage.removeItem(`project-image-${projectId}`);
    projectImages.value[projectId] = undefined;
  } catch (error) {
    console.error('Failed to clear project image:', error);
  }
};

// 组件挂载时加载存储的图片
onMounted(() => {
  loadProjectImages();
});
</script>

<template>
  <div class="w-full h-full grid grid-cols-3 gap-6">
    <div 
      v-for="project in projects" 
      :key="project.id"
      class="card hover:shadow-xl transition-shadow duration-300 flex flex-col h-full relative"
    >
      <!-- 项目图片占位符 -->
      <div class="mb-4 overflow-hidden rounded-lg bg-[var(--color-surface)] flex items-center justify-center h-32 flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity duration-200 relative group" @click="triggerFileSelect(project.id)">
        <img 
          v-if="projectImages[project.id]" 
          :src="projectImages[project.id]" 
          alt="项目截图" 
          class="w-full h-full object-cover"
          @error="projectImages[project.id] = undefined"
        />
        <span v-else class="text-[var(--color-text-secondary)] text-lg font-medium">项目截图</span>
        
        <!-- 上传提示 -->
        <div class="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg">
          <span class="text-white text-sm font-medium">点击上传</span>
        </div>
        
        <!-- 清除按钮（仅在有图片时显示） -->
        <button 
          v-if="projectImages[project.id]"
          @click.stop="clearProjectImage(project.id)"
          class="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-red-600 z-10"
          title="清除图片"
        >
          ×
        </button>
        
        <!-- 隐藏的文件输入 -->
        <input 
          :id="`file-input-${project.id}`"
          type="file" 
          accept="image/*" 
          class="hidden" 
          @change="(event) => handleFileSelect(event, project.id)"
        />
      </div>
      
      <!-- 项目信息 -->
      <h3 class="text-xl font-bold mb-3 text-[var(--color-text-primary)] flex-shrink-0 text-center mt-2">
        {{ project.title }}
      </h3>
      
      <p class="text-[var(--color-text-secondary)] mb-4 leading-relaxed flex-grow text-sm text-center px-2">
        {{ project.description }}
      </p>
      
      <!-- 技术栈 -->
      <div class="flex flex-wrap gap-1 mb-4 flex-shrink-0 justify-center">
        <span 
          v-for="(tech, index) in project.technologies" 
          :key="index"
          class="bg-[var(--color-primary-500)]/10 text-[var(--color-primary-400)] px-2 py-1 rounded text-xs font-medium"
        >
          {{ tech }}
        </span>
      </div>
      
      <!-- 项目链接 -->
      <div class="flex gap-2 flex-shrink-0 justify-center">
        <a 
          v-if="project.githubUrl"
          :href="project.githubUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-outline flex-1 py-1.5 text-xs font-medium max-w-24"
        >
          GitHub
        </a>
        <a 
          v-if="project.demoUrl"
          :href="project.demoUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-primary flex-1 py-1.5 text-xs font-medium max-w-24"
        >
          演示
        </a>
      </div>
    </div>
  </div>
</template>