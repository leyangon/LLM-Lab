import type { Language } from "../i18n/translations";

export type FAQItem = {
  question: string;
  answer: string;
};

export const faqs: FAQItem[] = [
  {
    question: "学习 LLM 需要很强的数学基础吗？",
    answer:
      "入门阶段不需要先掌握很深的数学。你可以先理解 Token、概率、向量和 Attention 的直觉，再逐步补线性代数、概率论和优化方法。"
  },
  {
    question: "LLM 和传统机器学习模型有什么区别？",
    answer:
      "传统模型通常面向明确任务训练，比如分类或回归；LLM 通过大规模文本学习语言和知识模式，可以在同一个交互界面里完成写作、问答、代码、总结等多类任务。"
  },
  {
    question: "Prompt Engineering 是不是只是“会提问”？",
    answer:
      "不只是会提问。它更像任务设计：明确目标、提供上下文、约束输出格式、给出示例，并通过评估持续迭代。"
  },
  {
    question: "RAG 和微调有什么区别？",
    answer:
      "RAG 更像给模型接入资料库，让模型先检索外部知识再回答；微调则是改变模型参数，让模型更适应某类任务、风格或领域。"
  },
  {
    question: "LLM 为什么会产生幻觉？",
    answer:
      "LLM 本质上是在上下文条件下预测下一个 Token，而不是直接查询事实数据库。当上下文不足、训练数据混杂或任务要求超出能力边界时，就可能生成看似合理但不真实的内容。"
  },
  {
    question: "初学者应该先学原理还是先做项目？",
    answer:
      "建议交替进行。先用一两个小项目建立直觉，再回头学习 Transformer、Attention、RAG 和评估方法，理解会更牢。"
  },
  {
    question: "这个网站适合作为课程展示网站吗？",
    answer:
      "适合。它按课程路线、知识模块、交互示例、项目实践和资源清单组织内容，可以作为课堂展示、课程设计入口或实验课导航页。"
  }
];

export const faqsEn: FAQItem[] = [
  {
    question: "Do I need a strong math background to learn LLMs?",
    answer: "Not at the entry stage. Start with the intuition behind tokens, probability, vectors, and Attention, then gradually add linear algebra, probability, and optimization."
  },
  {
    question: "How are LLMs different from traditional machine learning models?",
    answer: "Traditional models are usually trained for specific tasks such as classification or regression. LLMs learn language and knowledge patterns from large-scale text and can handle writing, Q&A, coding, and summarization in one interface."
  },
  {
    question: "Is Prompt Engineering just asking good questions?",
    answer: "No. It is closer to task design: define the goal, provide context, constrain output format, add examples, and iterate through evaluation."
  },
  {
    question: "What is the difference between RAG and fine-tuning?",
    answer: "RAG connects the model to an external knowledge base and retrieves before answering. Fine-tuning changes model parameters so the model adapts to a task, style, or domain."
  },
  {
    question: "Why do LLMs hallucinate?",
    answer: "An LLM predicts the next token under the given context instead of directly querying a factual database. When context is insufficient, training data is mixed, or the task exceeds its ability, it may produce plausible but false content."
  },
  {
    question: "Should beginners learn principles first or build projects first?",
    answer: "Alternate between the two. Build one or two small projects to develop intuition, then return to Transformer, Attention, RAG, and evaluation methods."
  },
  {
    question: "Can this website be used as a course presentation site?",
    answer: "Yes. It organizes learning paths, modules, interactive examples, projects, and resources, making it suitable for classroom presentation, course design, or lab navigation."
  }
];

export function getFaqs(language: Language = "zh") {
  return language === "en" ? faqsEn : faqs;
}
