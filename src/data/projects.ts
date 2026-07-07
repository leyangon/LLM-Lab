import type { Language } from "../i18n/translations";

export type Project = {
  name: string;
  description: string;
  knowledge: string[];
  stack: string[];
  difficulty: "入门" | "进阶" | "挑战" | "Beginner" | "Intermediate" | "Challenge";
  outcome: string;
};

export const projects: Project[] = [
  {
    name: "智能课程问答助手",
    description: "围绕课程讲义和作业说明构建问答助手，帮助学生快速定位知识点。",
    knowledge: ["Prompt 设计", "RAG", "引用回答"],
    stack: ["React", "LLM API", "Vector DB"],
    difficulty: "进阶",
    outcome: "一个可演示的课程资料问答原型"
  },
  {
    name: "论文摘要与文献综述助手",
    description: "辅助阅读论文，生成结构化摘要、贡献点和相关工作对比表。",
    knowledge: ["结构化输出", "长文本总结", "学术写作"],
    stack: ["Python", "LLM API", "Markdown"],
    difficulty: "入门",
    outcome: "一套论文阅读与综述模板"
  },
  {
    name: "基于 RAG 的校内规章制度问答系统",
    description: "把学校制度文档转成可检索知识库，回答学生常见事务问题。",
    knowledge: ["文档切分", "Embedding", "检索增强"],
    stack: ["React", "FastAPI", "向量数据库"],
    difficulty: "挑战",
    outcome: "带来源引用的规章问答系统 Demo"
  },
  {
    name: "Prompt 模板管理工具",
    description: "收集、分类、测试和迭代常用 Prompt，形成团队可复用的提示词资产。",
    knowledge: ["Prompt 评估", "模板变量", "版本管理"],
    stack: ["React", "TypeScript", "LocalStorage"],
    difficulty: "入门",
    outcome: "一个轻量 Prompt 模板库"
  },
  {
    name: "AI 面试模拟器",
    description: "模拟技术面试官，根据岗位方向提问并给出改进建议。",
    knowledge: ["角色设定", "多轮对话", "反馈生成"],
    stack: ["React", "LLM API", "语音可选"],
    difficulty: "进阶",
    outcome: "可用于课堂演示的面试练习工具"
  },
  {
    name: "LLM 教学 Demo 网站",
    description: "把 Token、Attention、Prompt 和 RAG 做成可视化教学页面。",
    knowledge: ["教学设计", "前端交互", "模型原理"],
    stack: ["Vite", "React", "Tailwind CSS"],
    difficulty: "入门",
    outcome: "适合课程展示的交互式学习网站"
  }
];

export const projectsEn: Project[] = [
  {
    name: "Smart Course Q&A Assistant",
    description: "Build a Q&A assistant around course slides and assignment instructions so students can quickly locate concepts.",
    knowledge: ["Prompt Design", "RAG", "Cited Answers"],
    stack: ["React", "LLM API", "Vector DB"],
    difficulty: "Intermediate",
    outcome: "A demonstrable course-material Q&A prototype"
  },
  {
    name: "Paper Summary and Literature Review Assistant",
    description: "Support paper reading by generating structured summaries, contribution points, and related-work comparison tables.",
    knowledge: ["Structured Output", "Long-text Summary", "Academic Writing"],
    stack: ["Python", "LLM API", "Markdown"],
    difficulty: "Beginner",
    outcome: "A reusable paper-reading and review template set"
  },
  {
    name: "RAG-based Campus Policy Q&A System",
    description: "Turn campus policy documents into a searchable knowledge base for common student affairs questions.",
    knowledge: ["Document Chunking", "Embedding", "Retrieval Augmentation"],
    stack: ["React", "FastAPI", "Vector Database"],
    difficulty: "Challenge",
    outcome: "A policy Q&A demo with source citations"
  },
  {
    name: "Prompt Template Manager",
    description: "Collect, classify, test, and iterate reusable prompts as a team prompt asset library.",
    knowledge: ["Prompt Evaluation", "Template Variables", "Versioning"],
    stack: ["React", "TypeScript", "LocalStorage"],
    difficulty: "Beginner",
    outcome: "A lightweight prompt-template library"
  },
  {
    name: "AI Interview Simulator",
    description: "Simulate a technical interviewer that asks questions by role and provides improvement suggestions.",
    knowledge: ["Role Setting", "Multi-turn Dialogue", "Feedback Generation"],
    stack: ["React", "LLM API", "Optional Voice"],
    difficulty: "Intermediate",
    outcome: "An interview-practice tool for classroom demos"
  },
  {
    name: "LLM Teaching Demo Website",
    description: "Turn Token, Attention, Prompt, and RAG into visual teaching pages.",
    knowledge: ["Instructional Design", "Frontend Interaction", "Model Principles"],
    stack: ["Vite", "React", "Tailwind CSS"],
    difficulty: "Beginner",
    outcome: "An interactive learning site suitable for course presentation"
  }
];

export function getProjects(language: Language = "zh") {
  return language === "en" ? projectsEn : projects;
}
