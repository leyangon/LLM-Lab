import type { Language } from "../i18n/translations";

export type Resource = {
  category: string;
  items: {
    title: string;
    type: "文章" | "论文" | "文档" | "视频" | "项目" | "Article" | "Paper" | "Docs" | "Video" | "Project";
    description: string;
    recommendation: "必读" | "推荐" | "拓展" | "Must Read" | "Recommended" | "Extended";
    link: string;
  }[];
};

export const resources: Resource[] = [
  {
    category: "入门概念",
    items: [
      { title: "大语言模型基础导读", type: "文章", description: "适合第一节课前阅读，建立术语和应用场景认知。", recommendation: "必读", link: "#" },
      { title: "生成式 AI 与判别式 AI", type: "视频", description: "用分类、生成和交互任务对比不同 AI 范式。", recommendation: "推荐", link: "#" }
    ]
  },
  {
    category: "经典论文",
    items: [
      { title: "Attention Is All You Need", type: "论文", description: "Transformer 架构的源头论文，建议结合可视化资料阅读。", recommendation: "必读", link: "#" },
      { title: "InstructGPT / RLHF 相关论文", type: "论文", description: "理解指令微调和人类反馈如何改变模型交互体验。", recommendation: "推荐", link: "#" }
    ]
  },
  {
    category: "开发文档",
    items: [
      { title: "LLM API 快速开始", type: "文档", description: "了解消息格式、参数、流式输出和错误处理。", recommendation: "必读", link: "#" },
      { title: "结构化输出指南", type: "文档", description: "学习如何让模型稳定输出 JSON、表格和可解析结果。", recommendation: "推荐", link: "#" }
    ]
  },
  {
    category: "Prompt Engineering",
    items: [
      { title: "Prompt 模板库", type: "项目", description: "按总结、改写、代码、教学、分析等任务组织提示词。", recommendation: "推荐", link: "#" },
      { title: "Few-shot 示例设计", type: "文章", description: "解释示例数量、顺序和质量如何影响模型输出。", recommendation: "拓展", link: "#" }
    ]
  },
  {
    category: "RAG 与 Agent",
    items: [
      { title: "RAG 系统构建清单", type: "文章", description: "覆盖文档处理、检索、重排、生成和评估。", recommendation: "必读", link: "#" },
      { title: "Agent 与工具调用入门", type: "文档", description: "理解工具 schema、函数调用和执行结果回填。", recommendation: "推荐", link: "#" }
    ]
  },
  {
    category: "安全伦理",
    items: [
      { title: "LLM 幻觉与评估", type: "文章", description: "认识幻觉来源，以及如何通过检索、引用和验证降低风险。", recommendation: "必读", link: "#" },
      { title: "AI 使用规范课堂讨论材料", type: "视频", description: "围绕隐私、公平性、署名和学术诚信组织讨论。", recommendation: "推荐", link: "#" }
    ]
  },
  {
    category: "开源项目",
    items: [
      { title: "教学型 RAG Demo", type: "项目", description: "适合改造成课程设计或实验作业的检索增强生成项目。", recommendation: "拓展", link: "#" },
      { title: "Prompt Playground Starter", type: "项目", description: "用于练习提示词切换、评分和模板管理的前端项目。", recommendation: "拓展", link: "#" }
    ]
  }
];

export const resourcesEn: Resource[] = [
  {
    category: "Beginner Concepts",
    items: [
      { title: "LLM Fundamentals Guide", type: "Article", description: "A pre-class reading for terminology and application scenarios.", recommendation: "Must Read", link: "#" },
      { title: "Generative AI vs. Discriminative AI", type: "Video", description: "Compare AI paradigms through classification, generation, and interaction tasks.", recommendation: "Recommended", link: "#" }
    ]
  },
  {
    category: "Classic Papers",
    items: [
      { title: "Attention Is All You Need", type: "Paper", description: "The original Transformer paper, best read with visual aids.", recommendation: "Must Read", link: "#" },
      { title: "InstructGPT / RLHF Papers", type: "Paper", description: "Understand how instruction tuning and human feedback change model interaction.", recommendation: "Recommended", link: "#" }
    ]
  },
  {
    category: "Developer Docs",
    items: [
      { title: "LLM API Quick Start", type: "Docs", description: "Learn message formats, parameters, streaming output, and error handling.", recommendation: "Must Read", link: "#" },
      { title: "Structured Output Guide", type: "Docs", description: "Learn how to make models produce stable JSON, tables, and parseable results.", recommendation: "Recommended", link: "#" }
    ]
  },
  {
    category: "Prompt Engineering",
    items: [
      { title: "Prompt Template Library", type: "Project", description: "Organize prompts by summarization, rewriting, code, teaching, and analysis tasks.", recommendation: "Recommended", link: "#" },
      { title: "Few-shot Example Design", type: "Article", description: "Explain how example count, order, and quality affect model outputs.", recommendation: "Extended", link: "#" }
    ]
  },
  {
    category: "RAG and Agents",
    items: [
      { title: "RAG System Checklist", type: "Article", description: "Cover document processing, retrieval, reranking, generation, and evaluation.", recommendation: "Must Read", link: "#" },
      { title: "Agents and Tool Use Primer", type: "Docs", description: "Understand tool schemas, function calls, and returning execution results to the model.", recommendation: "Recommended", link: "#" }
    ]
  },
  {
    category: "Safety and Ethics",
    items: [
      { title: "LLM Hallucination and Evaluation", type: "Article", description: "Learn where hallucinations come from and how retrieval, citation, and verification reduce risk.", recommendation: "Must Read", link: "#" },
      { title: "Classroom Discussion on AI Usage Norms", type: "Video", description: "Discuss privacy, fairness, attribution, and academic integrity.", recommendation: "Recommended", link: "#" }
    ]
  },
  {
    category: "Open-source Projects",
    items: [
      { title: "Teaching-oriented RAG Demo", type: "Project", description: "A retrieval-augmented generation project suitable for course design or lab assignments.", recommendation: "Extended", link: "#" },
      { title: "Prompt Playground Starter", type: "Project", description: "A frontend project for practicing prompt switching, scoring, and template management.", recommendation: "Extended", link: "#" }
    ]
  }
];

export function getResources(language: Language = "zh") {
  return language === "en" ? resourcesEn : resources;
}
