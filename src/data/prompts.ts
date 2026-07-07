import type { Language } from "../i18n/translations";

export type PromptPreset = {
  id: string;
  label: string;
  prompt: string;
  output: string;
  score: number;
  checks: {
    task: boolean;
    context: boolean;
    format: boolean;
    constraints: boolean;
  };
};

export const promptPresets: PromptPreset[] = [
  {
    id: "summary",
    label: "总结文本",
    prompt: "请用不超过 150 字解释什么是 Transformer，并举一个生活化例子。",
    output:
      "Transformer 是一种擅长处理序列信息的神经网络架构。它通过 Attention 机制判断词语之间的关系，就像读文章时会把当前句子和前文关键内容联系起来理解。生活化地说，它像一位会同时查看整张地图的导航员，而不是只盯着脚下一步。",
    score: 92,
    checks: { task: true, context: true, format: true, constraints: true }
  },
  {
    id: "rewrite",
    label: "改写润色",
    prompt: "请将下面这段文字改写得更正式、更适合课程报告：大模型挺厉害的，能写东西也能写代码，但是有时候会胡说。",
    output:
      "大语言模型在文本生成、代码辅助和知识问答等任务中表现出较强能力，但其输出并不总是可靠。在缺乏充分上下文或事实依据时，模型可能生成不准确甚至虚构的信息，因此在教学和应用场景中需要配合验证机制使用。",
    score: 88,
    checks: { task: true, context: true, format: false, constraints: true }
  },
  {
    id: "code",
    label: "生成代码",
    prompt: "请用 Python 写一个调用 LLM API 的伪代码示例，并解释每一步。",
    output:
      "Python 伪代码：\n\n1. 读取 API Key 与模型名称。\n2. 构造 messages，包含 system 与 user 指令。\n3. 调用 client.chat.completions.create(...)。\n4. 读取 response 中的文本结果。\n5. 捕获网络错误、限流错误和空响应。\n\n这段伪代码的重点不是绑定某个厂商 SDK，而是理解请求、上下文、响应和错误处理的基本流程。",
    score: 86,
    checks: { task: true, context: true, format: true, constraints: false }
  },
  {
    id: "roleplay",
    label: "角色扮演",
    prompt: "你是一名大学人工智能课程助教，请用苏格拉底式提问帮助学生理解 Attention 机制。",
    output:
      "我们先不急着给定义。请想一想：当你读“苹果发布了新芯片，它提升了性能”时，“它”指的是什么？你为什么能判断出来？如果模型也要做类似判断，它是否需要比较当前词和上下文中其他词的关系？这正是理解 Attention 的入口。",
    score: 90,
    checks: { task: true, context: true, format: false, constraints: true }
  },
  {
    id: "json",
    label: "结构化输出",
    prompt: "请以 JSON 格式输出 5 个适合初学者学习 LLM 的知识点，每个知识点包含 title、description、difficulty。",
    output:
      "[\n  {\"title\":\"Token\",\"description\":\"模型处理文本的基本单位。\",\"difficulty\":\"入门\"},\n  {\"title\":\"Transformer\",\"description\":\"现代 LLM 的核心架构。\",\"difficulty\":\"进阶\"},\n  {\"title\":\"Attention\",\"description\":\"用于计算上下文关系的机制。\",\"difficulty\":\"进阶\"},\n  {\"title\":\"Prompt\",\"description\":\"向模型表达任务的指令。\",\"difficulty\":\"入门\"},\n  {\"title\":\"RAG\",\"description\":\"让模型结合外部资料回答。\",\"difficulty\":\"实践\"}\n]",
    score: 96,
    checks: { task: true, context: true, format: true, constraints: true }
  }
];

export const promptPresetsEn: PromptPreset[] = [
  {
    id: "summary",
    label: "Summarize Text",
    prompt: "Explain what Transformer is in no more than 150 words, and include one everyday analogy.",
    output: "Transformer is a neural network architecture that handles sequence information well. It uses Attention to judge relationships between words, similar to how a reader connects the current sentence with earlier key ideas. In everyday terms, it is like a navigator who can view the whole map instead of only staring at the next step.",
    score: 92,
    checks: { task: true, context: true, format: true, constraints: true }
  },
  {
    id: "rewrite",
    label: "Polish Writing",
    prompt: "Rewrite this sentence in a more formal style for a course report: Large models are pretty powerful. They can write text and code, but sometimes they make things up.",
    output: "Large language models show strong capability in text generation, code assistance, and knowledge-based Q&A. However, their outputs are not always reliable. When context or factual evidence is insufficient, the model may generate inaccurate or fabricated information, so verification is necessary in teaching and application scenarios.",
    score: 88,
    checks: { task: true, context: true, format: false, constraints: true }
  },
  {
    id: "code",
    label: "Generate Code",
    prompt: "Write Python-style pseudocode for calling an LLM API and explain each step.",
    output: "Python pseudocode:\n\n1. Read the API key and model name.\n2. Build messages with system and user instructions.\n3. Call client.chat.completions.create(...).\n4. Read the text result from the response.\n5. Catch network errors, rate limits, and empty responses.\n\nThe goal is not to bind to one vendor SDK, but to understand request, context, response, and error handling.",
    score: 86,
    checks: { task: true, context: true, format: true, constraints: false }
  },
  {
    id: "roleplay",
    label: "Role Play",
    prompt: "You are a university AI teaching assistant. Use Socratic questions to help a student understand Attention.",
    output: "Let us not start with a definition. When you read “Apple released a new chip, and it improved performance,” what does “it” refer to? Why can you tell? If a model needs to make a similar judgment, does it need to compare the current word with other words in the context? That is a useful entry point for Attention.",
    score: 90,
    checks: { task: true, context: true, format: false, constraints: true }
  },
  {
    id: "json",
    label: "Structured Output",
    prompt: "Output 5 beginner-friendly LLM knowledge points in JSON. Each item should include title, description, and difficulty.",
    output: "[\n  {\"title\":\"Token\",\"description\":\"The basic unit a model uses to process text.\",\"difficulty\":\"Beginner\"},\n  {\"title\":\"Transformer\",\"description\":\"The core architecture behind modern LLMs.\",\"difficulty\":\"Intermediate\"},\n  {\"title\":\"Attention\",\"description\":\"A mechanism for computing contextual relationships.\",\"difficulty\":\"Intermediate\"},\n  {\"title\":\"Prompt\",\"description\":\"Instructions used to express a task to the model.\",\"difficulty\":\"Beginner\"},\n  {\"title\":\"RAG\",\"description\":\"A method that lets models answer with external materials.\",\"difficulty\":\"Hands-on\"}\n]",
    score: 96,
    checks: { task: true, context: true, format: true, constraints: true }
  }
];

export function getPromptPresets(language: Language = "zh") {
  return language === "en" ? promptPresetsEn : promptPresets;
}
