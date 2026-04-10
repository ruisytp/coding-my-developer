// 项目数据
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: '个人作品集网站',
    description: '使用 Vue3 + TypeScript + Tailwind CSS 构建的现代化个人作品集网站，支持深色主题和响应式设计。',
    image: '/project1.jpg',
    technologies: ['Vue3', 'TypeScript', 'Tailwind CSS', 'Vite'],
    githubUrl: 'https://github.com/ruisytp/my-developer-vue',
    demoUrl: 'https://coding-my-developer-8y9ak9i88-ruisytps-projects.vercel.app/'
  },
  {
    id: 2,
    title: '任务管理应用',
    description: '全功能的任务管理应用，支持任务分类、优先级设置、截止日期提醒等功能。',
    image: '/project2.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    githubUrl: 'https://github.com/yourusername/task-manager',
    demoUrl: 'https://taskmanager.com'
  },
  {
    id: 3,
    title: '电商后台系统',
    description: '完整的电商后台管理系统，包含商品管理、订单处理、用户管理等模块。',
    image: '/project3.jpg',
    technologies: ['Vue3', 'Pinia', 'Element Plus', 'MySQL'],
    githubUrl: 'https://github.com/yourusername/ecommerce-admin',
    demoUrl: 'https://ecommerce-admin.com'
  }
];