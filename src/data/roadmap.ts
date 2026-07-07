import type { Language } from "../i18n/translations";

export type RoadmapStage = {
  stage: string;
  title: string;
  description: string;
  difficulty: "入门" | "进阶" | "实践" | "Beginner" | "Intermediate" | "Hands-on";
  duration: string;
  topics: string[];
  tags: string[];
};

export const roadmap: RoadmapStage[] = [
  {
    stage: "阶段一",
    title: "认识 LLM",
    description:
      "建立对大语言模型的整体认知，知道它能做什么、不能做什么，以及为什么它和传统 AI 不一样。",
    difficulty: "入门",
    duration: "2-3 小时",
    topics: ["什么是大语言模型", "生成式 AI 与传统 AI 的区别", "LLM 的典型应用场景"],
    tags: ["Generative AI", "能力边界", "应用场景"]
  },
  {
    stage: "阶段二",
    title: "核心原理",
    description:
      "用初学者能理解的方式拆解 Token、向量、Transformer、Attention、预训练、微调与对齐。",
    difficulty: "进阶",
    duration: "6-8 小时",
    topics: ["Token 与词向量", "Transformer 架构", "Attention 机制", "预训练与微调", "RLHF / RLAIF 基本概念"],
    tags: ["Token", "Transformer", "Attention"]
  },
  {
    stage: "阶段三",
    title: "Prompt Engineering",
    description:
      "学习如何把模糊需求变成可执行指令，并通过示例、约束、格式和评估迭代提升输出质量。",
    difficulty: "入门",
    duration: "4-6 小时",
    topics: ["指令型 Prompt", "角色设定", "Few-shot Learning", "Chain-of-Thought 思维链", "结构化输出", "Prompt 评估与迭代"],
    tags: ["Prompt", "Few-shot", "结构化输出"]
  },
  {
    stage: "阶段四",
    title: "应用开发",
    description:
      "从 API 调用到 RAG、Agent 和 Tool Use，理解 LLM 应用从 Demo 到可用原型的关键模块。",
    difficulty: "实践",
    duration: "8-10 小时",
    topics: ["API 调用基础", "RAG 检索增强生成", "Agent 基本概念", "Function Calling / Tool Use", "LLM App 原型设计"],
    tags: ["API", "RAG", "Agent"]
  },
  {
    stage: "阶段五",
    title: "安全与伦理",
    description:
      "理解幻觉、偏见、隐私、内容安全与使用规范，让 LLM 应用设计更可靠、更负责任。",
    difficulty: "进阶",
    duration: "3-5 小时",
    topics: ["幻觉问题", "偏见与公平性", "隐私与数据安全", "内容安全", "AI 使用规范"],
    tags: ["Safety", "Privacy", "Ethics"]
  }
];

export const roadmapEn: RoadmapStage[] = [
  {
    stage: "Stage 1",
    title: "Meet LLMs",
    description: "Build a big-picture understanding of what LLMs can and cannot do, and why they differ from traditional AI.",
    difficulty: "Beginner",
    duration: "2-3 hours",
    topics: ["What is a large language model?", "Generative AI vs. traditional AI", "Typical LLM application scenarios"],
    tags: ["Generative AI", "Boundaries", "Applications"]
  },
  {
    stage: "Stage 2",
    title: "Core Principles",
    description: "Break down tokens, vectors, Transformer, Attention, pretraining, fine-tuning, and alignment in beginner-friendly language.",
    difficulty: "Intermediate",
    duration: "6-8 hours",
    topics: ["Tokens and embeddings", "Transformer architecture", "Attention mechanism", "Pretraining and fine-tuning", "RLHF / RLAIF basics"],
    tags: ["Token", "Transformer", "Attention"]
  },
  {
    stage: "Stage 3",
    title: "Prompt Engineering",
    description: "Turn vague needs into executable instructions and improve output quality through examples, constraints, formats, and evaluation.",
    difficulty: "Beginner",
    duration: "4-6 hours",
    topics: ["Instruction prompts", "Role setting", "Few-shot Learning", "Chain-of-Thought", "Structured output", "Prompt evaluation and iteration"],
    tags: ["Prompt", "Few-shot", "Structured Output"]
  },
  {
    stage: "Stage 4",
    title: "Application Development",
    description: "Move from API calls to RAG, Agents, and Tool Use, and understand the modules that turn demos into usable prototypes.",
    difficulty: "Hands-on",
    duration: "8-10 hours",
    topics: ["API basics", "RAG", "Agent basics", "Function Calling / Tool Use", "LLM app prototyping"],
    tags: ["API", "RAG", "Agent"]
  },
  {
    stage: "Stage 5",
    title: "Safety and Ethics",
    description: "Understand hallucination, bias, privacy, content safety, and responsible-use norms for more reliable LLM applications.",
    difficulty: "Intermediate",
    duration: "3-5 hours",
    topics: ["Hallucination", "Bias and fairness", "Privacy and data security", "Content safety", "AI usage norms"],
    tags: ["Safety", "Privacy", "Ethics"]
  }
];

export function getRoadmap(language: Language = "zh") {
  return language === "en" ? roadmapEn : roadmap;
}
