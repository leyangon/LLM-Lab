import type { Language } from "../i18n/translations";

export type Course = {
  title: string;
  description: string;
  difficulty: "入门" | "进阶" | "实践" | "Beginner" | "Intermediate" | "Hands-on";
  duration: string;
  tags: string[];
  slug: string;
};

export const courses: Course[] = [
  {
    title: "LLM 是什么？",
    slug: "what-is-llm",
    description: "从语言模型、生成式 AI、上下文窗口和涌现能力开始，建立对 LLM 的第一张地图。",
    difficulty: "入门",
    duration: "45 分钟",
    tags: ["LLM", "生成式 AI", "能力边界"]
  },
  {
    title: "Transformer 入门",
    slug: "transformer-intro",
    description: "解释 Transformer 为什么适合处理文本序列，以及编码、解码和上下文建模的基本思路。",
    difficulty: "进阶",
    duration: "70 分钟",
    tags: ["Transformer", "序列建模", "架构"]
  },
  {
    title: "Attention 机制可视化解释",
    slug: "attention-mechanism",
    description: "用课堂可展示的例子说明模型如何判断词与词之间的相关性，而不是机械地逐字翻译。",
    difficulty: "进阶",
    duration: "60 分钟",
    tags: ["Attention", "权重", "上下文"]
  },
  {
    title: "Prompt Engineering 基础",
    slug: "prompt-four-elements",
    description: "学习任务、背景、格式、约束四要素，让模型输出从“差不多”变成“可交付”。",
    difficulty: "入门",
    duration: "50 分钟",
    tags: ["Prompt", "指令", "约束"]
  },
  {
    title: "高质量 Prompt 模板",
    slug: "structured-output",
    description: "整理总结、改写、代码生成、角色扮演和结构化输出的常用模板与评估方法。",
    difficulty: "实践",
    duration: "65 分钟",
    tags: ["模板", "Few-shot", "JSON"]
  },
  {
    title: "RAG 检索增强生成",
    slug: "rag-intro",
    description: "理解为什么要让模型先查资料再回答，并认识切分、向量检索、重排和引用的流程。",
    difficulty: "实践",
    duration: "90 分钟",
    tags: ["RAG", "Embedding", "检索"]
  },
  {
    title: "Agent 与工具调用",
    slug: "agent-tool-use",
    description: "解释 LLM 如何规划任务、选择工具、调用函数，并在多步骤任务中保持可控。",
    difficulty: "实践",
    duration: "80 分钟",
    tags: ["Agent", "Tool Use", "Function Calling"]
  },
  {
    title: "LLM 安全、幻觉与伦理",
    slug: "hallucination-privacy-safety",
    description: "认识幻觉、偏见、隐私泄露和内容安全风险，并学习面向教学项目的防护策略。",
    difficulty: "进阶",
    duration: "75 分钟",
    tags: ["幻觉", "安全", "伦理"]
  },
  {
    title: "LLM 在科研和教育中的应用",
    slug: "llm-app-design",
    description: "面向论文阅读、课程助教、实验报告、知识问答等场景设计负责任的学习工作流。",
    difficulty: "实践",
    duration: "60 分钟",
    tags: ["科研", "教育", "工作流"]
  },
  {
    title: "从零设计一个 LLM 应用",
    slug: "llm-app-design",
    description: "把需求分析、Prompt、RAG、评估和前端 Demo 串起来，形成可展示的课程项目。",
    difficulty: "实践",
    duration: "120 分钟",
    tags: ["原型", "评估", "项目"]
  }
];

export const coursesEn: Course[] = [
  {
    title: "What Is an LLM?",
    slug: "what-is-llm",
    description: "Build your first map of LLMs through language models, generative AI, context windows, and capability boundaries.",
    difficulty: "Beginner",
    duration: "45 min",
    tags: ["LLM", "Generative AI", "Boundaries"]
  },
  {
    title: "Transformer Basics",
    slug: "transformer-intro",
    description: "Explain why Transformer works well for text sequences and how encoding, decoding, and context modeling fit together.",
    difficulty: "Intermediate",
    duration: "70 min",
    tags: ["Transformer", "Sequence Modeling", "Architecture"]
  },
  {
    title: "Visualizing Attention",
    slug: "attention-mechanism",
    description: "Use classroom-friendly examples to show how models judge relationships between words.",
    difficulty: "Intermediate",
    duration: "60 min",
    tags: ["Attention", "Weights", "Context"]
  },
  {
    title: "Prompt Engineering Basics",
    slug: "prompt-four-elements",
    description: "Learn the four elements of task, context, format, and constraints so model output becomes deliverable.",
    difficulty: "Beginner",
    duration: "50 min",
    tags: ["Prompt", "Instruction", "Constraints"]
  },
  {
    title: "High-quality Prompt Templates",
    slug: "structured-output",
    description: "Organize templates for summarization, rewriting, code generation, role play, and structured output.",
    difficulty: "Hands-on",
    duration: "65 min",
    tags: ["Templates", "Few-shot", "JSON"]
  },
  {
    title: "RAG Retrieval-augmented Generation",
    slug: "rag-intro",
    description: "Understand why models should retrieve before answering, including chunking, vector search, reranking, and citation.",
    difficulty: "Hands-on",
    duration: "90 min",
    tags: ["RAG", "Embedding", "Retrieval"]
  },
  {
    title: "Agents and Tool Use",
    slug: "agent-tool-use",
    description: "Explain how LLMs plan tasks, select tools, call functions, and stay controllable across multi-step workflows.",
    difficulty: "Hands-on",
    duration: "80 min",
    tags: ["Agent", "Tool Use", "Function Calling"]
  },
  {
    title: "LLM Safety, Hallucination, and Ethics",
    slug: "hallucination-privacy-safety",
    description: "Recognize hallucination, bias, privacy leakage, and content-safety risks in teaching projects.",
    difficulty: "Intermediate",
    duration: "75 min",
    tags: ["Hallucination", "Safety", "Ethics"]
  },
  {
    title: "LLMs in Research and Education",
    slug: "llm-app-design",
    description: "Design responsible workflows for paper reading, teaching assistants, reports, and knowledge Q&A.",
    difficulty: "Hands-on",
    duration: "60 min",
    tags: ["Research", "Education", "Workflow"]
  },
  {
    title: "Design an LLM App from Scratch",
    slug: "llm-app-design",
    description: "Connect requirements, prompts, RAG, evaluation, and frontend demos into a presentable course project.",
    difficulty: "Hands-on",
    duration: "120 min",
    tags: ["Prototype", "Evaluation", "Project"]
  }
];

export function getCourses(language: Language = "zh") {
  return language === "en" ? coursesEn : courses;
}
