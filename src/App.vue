<script setup lang="ts">
// 导入Vue函数
import { ref, onUnmounted, onMounted } from 'vue';
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
  description: '我是一名全栈开发工程师，专注于构建现代化、高性能的 Web 应用程序。拥有丰富的前端和后端开发经验，擅长使用 Vue.js、React、Node.js 等技术栈。我热爱学习新技术，注重代码质量和用户体验。'
};

// 头像状态管理
const avatarUrl = ref<string | null>(null);
const fileInputRef = ref<HTMLInputElement | null>(null);
const storedAvatarKey = 'user-avatar-data';

// 从localStorage加载头像
const loadStoredAvatar = () => {
  try {
    const storedData = localStorage.getItem(storedAvatarKey);
    if (storedData) {
      avatarUrl.value = storedData;
    }
  } catch (error) {
    console.warn('Failed to load avatar from localStorage:', error);
  }
};

// 保存头像到localStorage
const saveAvatarToStorage = (file: File) => {
  // 检查localStorage空间限制（通常5-10MB）
  if (file.size > 2 * 1024 * 1024) {
    // 如果文件太大，压缩后再存储
    compressImage(file)
      .then(compressedFile => {
        const reader = new FileReader();
        reader.onload = (e) => {
          try {
            localStorage.setItem(storedAvatarKey, e.target?.result as string);
            avatarUrl.value = e.target?.result as string;
          } catch (error) {
            console.error('Failed to save avatar to localStorage:', error);
            alert('存储失败：存储空间不足或浏览器不支持');
          }
        };
        reader.readAsDataURL(compressedFile);
      })
      .catch(error => {
        console.error('Image compression failed:', error);
        // 如果压缩失败，尝试直接存储（可能失败）
        const reader = new FileReader();
        reader.onload = (e) => {
          try {
            localStorage.setItem(storedAvatarKey, e.target?.result as string);
            avatarUrl.value = e.target?.result as string;
          } catch (error) {
            console.error('Failed to save avatar to localStorage:', error);
            alert('存储失败：图片过大或存储空间不足');
          }
        };
        reader.readAsDataURL(file);
      });
  } else {
    // 文件较小，直接存储
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        localStorage.setItem(storedAvatarKey, e.target?.result as string);
        avatarUrl.value = e.target?.result as string;
      } catch (error) {
        console.error('Failed to save avatar to localStorage:', error);
        alert('存储失败：存储空间不足或浏览器不支持');
      }
    };
    reader.readAsDataURL(file);
  }
};

// 图片压缩函数
const compressImage = (file: File): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = URL.createObjectURL(file);
    
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      // 设置最大尺寸
      const maxSize = 800;
      let { width, height } = img;
      
      if (width > height && width > maxSize) {
        height = (height * maxSize) / width;
        width = maxSize;
      } else if (height > maxSize) {
        width = (width * maxSize) / height;
        height = maxSize;
      }
      
      canvas.width = width;
      canvas.height = height;
      
      if (ctx) {
        ctx.drawImage(img, 0, 0, width, height);
        canvas.toBlob(
          blob => {
            if (blob) {
              resolve(blob);
            } else {
              reject(new Error('Canvas toBlob failed'));
            }
          },
          'image/jpeg',
          0.8 // 压缩质量
        );
      } else {
        reject(new Error('Canvas context not available'));
      }
      
      URL.revokeObjectURL(img.src);
    };
    
    img.onerror = () => {
      URL.revokeObjectURL(img.src);
      reject(new Error('Image loading failed'));
    };
  });
};

// 处理文件选择
const handleFileSelect = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];
  
  if (file) {
    // 验证文件类型
    if (!file.type.startsWith('image/')) {
      alert('请选择图片文件');
      return;
    }
    
    // 验证文件大小（限制10MB，因为localStorage有空间限制）
    if (file.size > 10 * 1024 * 1024) {
      alert('图片大小不能超过10MB');
      return;
    }
    
    // 保存到localStorage并更新显示
    saveAvatarToStorage(file);
  }
};

// 触发文件选择
const triggerFileSelect = () => {
  if (fileInputRef.value) {
    fileInputRef.value.click();
  }
};

// 清除头像
const clearAvatar = () => {
  try {
    localStorage.removeItem(storedAvatarKey);
    avatarUrl.value = null;
  } catch (error) {
    console.error('Failed to clear avatar:', error);
  }
};

// 组件挂载时加载存储的头像
onMounted(() => {
  loadStoredAvatar();
});

// 组件卸载时清理URL（如果使用的是objectURL）
onUnmounted(() => {
  if (avatarUrl.value && avatarUrl.value.startsWith('blob:')) {
    URL.revokeObjectURL(avatarUrl.value);
  }
});
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
          <div class="mb-6 cursor-pointer hover:opacity-80 transition-opacity duration-200 relative group" @click="triggerFileSelect">
            <div class="w-32 h-32 rounded-full bg-[var(--color-primary-500)]/20 flex items-center justify-center overflow-hidden border-4 border-[var(--color-primary-500)]/30 mx-auto relative">
              <img 
                v-if="avatarUrl" 
                :src="avatarUrl" 
                alt="头像" 
                class="w-full h-full object-cover"
                @error="avatarUrl = null"
              />
              <div v-else class="w-full h-full bg-[var(--color-surface)] flex items-center justify-center text-[var(--color-text-secondary)]">
                👤
              </div>
              <!-- 上传提示 -->
              <div class="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-full">
                <span class="text-white text-sm font-medium">点击上传</span>
              </div>
            </div>
            <!-- 清除按钮（仅在有头像时显示） -->
            <button 
              v-if="avatarUrl"
              @click.stop="clearAvatar"
              class="absolute -bottom-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-red-600"
              title="清除头像"
            >
              ×
            </button>
            <!-- 隐藏的文件输入 -->
            <input 
              ref="fileInputRef"
              type="file" 
              accept="image/*" 
              class="hidden" 
              @change="handleFileSelect"
            />
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