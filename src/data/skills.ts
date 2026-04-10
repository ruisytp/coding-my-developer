// 技能数据
export interface Skill {
  name: string;
  level: number; // 1-5 级别
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'other';
}

export const skills: Skill[] = [
  // 前端技能
  { name: 'Vue.js', level: 5, category: 'frontend' },
  { name: 'React', level: 4, category: 'frontend' },
  { name: 'TypeScript', level: 5, category: 'frontend' },
  { name: 'JavaScript', level: 5, category: 'frontend' },
  { name: 'HTML5/CSS3', level: 5, category: 'frontend' },
  { name: 'Tailwind CSS', level: 4, category: 'frontend' },
  
  // 后端技能
  { name: 'Node.js', level: 4, category: 'backend' },
  { name: 'Express', level: 4, category: 'backend' },
  { name: 'Python', level: 3, category: 'backend' },
  { name: 'Java', level: 3, category: 'backend' },
  
  // 数据库技能
  { name: 'MongoDB', level: 4, category: 'database' },
  { name: 'MySQL', level: 4, category: 'database' },
  { name: 'PostgreSQL', level: 3, category: 'database' },
  
  // DevOps 技能
  { name: 'Docker', level: 3, category: 'devops' },
  { name: 'Git', level: 5, category: 'devops' },
  { name: 'CI/CD', level: 3, category: 'devops' }
];