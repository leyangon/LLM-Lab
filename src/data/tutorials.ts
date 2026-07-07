import type { Language } from "../i18n/translations";

export type TutorialCategory =
  | "LLM 基础"
  | "核心原理"
  | "Prompt Engineering"
  | "应用开发"
  | "安全伦理"
  | "LLM Fundamentals"
  | "Core Principles"
  | "Application Development"
  | "Safety and Ethics";

export type TutorialDifficulty = "入门" | "进阶" | "实践" | "Beginner" | "Intermediate" | "Hands-on";

export type VisualKind =
  | "llm-flow"
  | "ai-comparison"
  | "token-explorer"
  | "embedding-matrix"
  | "positional-encoding"
  | "attention-score-matrix"
  | "qkv-projection"
  | "next-token-probability"
  | "context-window-map"
  | "rag-chunk-ranking"
  | "transformer-block"
  | "transformer-stack"
  | "attention-heatmap"
  | "training-pipeline"
  | "prompt-quality-meter"
  | "rag-retrieval-demo";

export type DiagramKind =
  | "misconception"
  | "rag-pipeline"
  | "agent-loop"
  | "prompt-iteration"
  | "training-alignment";

export type TutorialBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "callout"; tone: "concept" | "example" | "warning" | "exercise"; title: string; text: string }
  | { type: "code"; language: string; code: string }
  | { type: "prompt"; title: string; prompt: string }
  | { type: "formula"; label: string; formula: string; explanation: string; symbols: { symbol: string; meaning: string }[] }
  | { type: "visual"; visual: VisualKind; title: string; caption: string }
  | { type: "diagram"; diagram: DiagramKind; title: string; caption: string }
  | { type: "steps"; items: string[] };

export type TutorialSection = {
  id: string;
  heading: string;
  blocks: TutorialBlock[];
};

export type TutorialLesson = {
  slug: string;
  category: TutorialCategory;
  order: number;
  title: string;
  description: string;
  difficulty: TutorialDifficulty;
  duration: string;
  tags: string[];
  prerequisites: string[];
  objectives: string[];
  sections: TutorialSection[];
  quiz: {
    question: string;
    answer: string;
  };
  relatedSlugs: string[];
};

export const tutorialCategories: TutorialCategory[] = [
  "LLM 基础",
  "核心原理",
  "Prompt Engineering",
  "应用开发",
  "安全伦理"
];

export const tutorialCategoriesEn: TutorialCategory[] = [
  "LLM Fundamentals",
  "Core Principles",
  "Prompt Engineering",
  "Application Development",
  "Safety and Ethics"
];

const visualMeta: Record<VisualKind, { title: string; caption: string }> = {
  "llm-flow": {
    title: "LLM Flow Lab",
    caption: "把 Prompt、Token、模型推理和回答生成放在同一条流程线上，帮助学生建立整体直觉。"
  },
  "ai-comparison": {
    title: "AI Capability Map",
    caption: "对照传统 AI 与生成式 AI 的任务边界，理解 LLM 更适合开放式表达和多轮交互。"
  },
  "token-explorer": {
    title: "Token Explorer",
    caption: "切换不同文本，观察它们被模型读取时可能拆成多少 Token。"
  },
  "embedding-matrix": {
    title: "输入 + PE",
    caption: "把 token 文本映射成 embedding 向量，并叠加位置编码，形成 Transformer 可以继续处理的数值矩阵。"
  },
  "positional-encoding": {
    title: "位置编码波形",
    caption: "用波形和位置条纹解释位置编码如何叠加到 token embedding 上。"
  },
  "attention-score-matrix": {
    title: "Attention Score Matrix",
    caption: "用 token-token 热力矩阵展示当前 token 对上下文的关注强弱。"
  },
  "qkv-projection": {
    title: "Q / K / V 投影",
    caption: "把同一组 embedding 分成 Query、Key、Value 三条并行通道。"
  },
  "next-token-probability": {
    title: "Next Token 概率分布",
    caption: "用概率柱状图说明模型是在候选 token 之间做概率选择。"
  },
  "context-window-map": {
    title: "上下文窗口示意图",
    caption: "展示长文本中哪些 token 在窗口内，哪些 token 会被截断或需要检索补充。"
  },
  "rag-chunk-ranking": {
    title: "RAG Chunk 检索排名",
    caption: "模拟 query embedding 与多个文档 chunk 的相似度排序。"
  },
  "transformer-block": {
    title: "Transformer Block 剖面图",
    caption: "拆解 LayerNorm、Multi-Head Attention、Residual 和 FFN 的内部流向。"
  },
  "transformer-stack": {
    title: "Transformer Stack",
    caption: "用层级卡片展示 Token 在 Transformer 中经过 Attention 与前馈网络反复加工的过程。"
  },
  "attention-heatmap": {
    title: "Attention Heatmap",
    caption: "点击不同词语，观察当前 Token 与上下文词语之间的关注强弱。"
  },
  "training-pipeline": {
    title: "Training Pipeline",
    caption: "把预训练、微调和反馈对齐串成一条教学管线，说明模型能力如何逐步成形。"
  },
  "prompt-quality-meter": {
    title: "Prompt Quality Meter",
    caption: "用四要素评分解释为什么某些 Prompt 更稳定、更适合教学和应用开发。"
  },
  "rag-retrieval-demo": {
    title: "RAG Retrieval Demo",
    caption: "模拟检索增强生成：先命中文档片段，再基于资料生成带来源的回答。"
  }
};

const diagramMeta: Record<DiagramKind, Record<Language, { title: string; caption: string }>> = {
  misconception: {
    zh: {
      title: "误区纠错图",
      caption: "用左右对照把“模型会理解一切”等常见误区拆开，帮助学生建立更稳的边界感。"
    },
    en: {
      title: "Misconception Check",
      caption: "Use side-by-side comparisons to separate common myths from practical LLM boundaries."
    }
  },
  "rag-pipeline": {
    zh: {
      title: "RAG 流程图",
      caption: "把问题、检索、上下文注入、回答生成和引用检查放在一条可点击流程线上。"
    },
    en: {
      title: "RAG Pipeline",
      caption: "Walk through question intake, retrieval, context injection, answer generation, and citation checks."
    }
  },
  "agent-loop": {
    zh: {
      title: "Agent 循环图",
      caption: "展示 Agent 如何在目标、计划、工具调用、观察结果和最终回答之间循环。"
    },
    en: {
      title: "Agent Loop",
      caption: "Show how an Agent cycles through goals, planning, tool calls, observations, and final answers."
    }
  },
  "prompt-iteration": {
    zh: {
      title: "Prompt 迭代图",
      caption: "把 Prompt 从草稿到评估再到改写的过程做成可复用的课堂工作流。"
    },
    en: {
      title: "Prompt Iteration",
      caption: "Turn prompt drafting, evaluation, and revision into a reusable classroom workflow."
    }
  },
  "training-alignment": {
    zh: {
      title: "训练与对齐图",
      caption: "比较预训练、微调和反馈对齐各自改变模型行为的位置。"
    },
    en: {
      title: "Training and Alignment",
      caption: "Compare where pretraining, fine-tuning, and feedback alignment shape model behavior."
    }
  }
};

const lessonDiagrams: Partial<Record<string, DiagramKind>> = {
  "what-is-llm": "misconception",
  "pretraining-finetuning": "training-alignment",
  "prompt-evaluation": "prompt-iteration",
  "rag-intro": "rag-pipeline",
  "agent-tool-use": "agent-loop",
  "hallucination-privacy-safety": "misconception"
};

const lessonExtraVisuals: Partial<Record<string, VisualKind[]>> = {
  "what-is-llm": ["next-token-probability"],
  "tokens-context-window": ["context-window-map"],
  "transformer-intro": ["embedding-matrix", "positional-encoding", "qkv-projection", "transformer-block"],
  "attention-mechanism": ["attention-score-matrix"],
  "rag-intro": ["rag-chunk-ranking"]
};

const lessonFormulas: Partial<Record<string, Record<Language, Extract<TutorialBlock, { type: "formula" }> | undefined>>> = {
  "what-is-llm": {
    zh: {
      type: "formula",
      label: "公式解析",
      formula: "P(next token | previous tokens)",
      explanation: "LLM 生成回答时，会根据前面已经出现的 Token，估计下一个 Token 出现的概率。",
      symbols: [
        { symbol: "P", meaning: "表示概率，不是确定答案。" },
        { symbol: "next token", meaning: "模型下一步要生成的最小文本单位。" },
        { symbol: "previous tokens", meaning: "当前 Prompt 和已经生成内容形成的上下文。" }
      ]
    },
    en: {
      type: "formula",
      label: "Formula Breakdown",
      formula: "P(next token | previous tokens)",
      explanation: "An LLM estimates the probability of the next token from the tokens already present in the context.",
      symbols: [
        { symbol: "P", meaning: "Probability, not a guaranteed answer." },
        { symbol: "next token", meaning: "The next small text unit the model may generate." },
        { symbol: "previous tokens", meaning: "The prompt plus text generated so far." }
      ]
    }
  },
  "attention-mechanism": {
    zh: {
      type: "formula",
      label: "公式解析",
      formula: "Attention(Q, K, V) = softmax(QK^T / sqrt(d_k))V",
      explanation: "Attention 会先计算当前信息与上下文信息的相关性，再用这个权重汇总最有用的内容。",
      symbols: [
        { symbol: "Q", meaning: "Q 表示当前要查询的信息，也就是当前 Token 想从上下文里找什么。" },
        { symbol: "K", meaning: "K 表示上下文中每个 Token 可被匹配的特征。" },
        { symbol: "V", meaning: "V 表示真正被加权汇总的信息内容。" },
        { symbol: "softmax", meaning: "把相关性分数转换成总和为 1 的注意力权重。" }
      ]
    },
    en: {
      type: "formula",
      label: "Formula Breakdown",
      formula: "Attention(Q, K, V) = softmax(QK^T / sqrt(d_k))V",
      explanation: "Attention scores how relevant context tokens are, turns scores into weights, and combines the useful information.",
      symbols: [
        { symbol: "Q", meaning: "Query: what the current token is looking for." },
        { symbol: "K", meaning: "Key: features used to match each context token." },
        { symbol: "V", meaning: "Value: the information that gets weighted and combined." },
        { symbol: "softmax", meaning: "Converts scores into attention weights that sum to 1." }
      ]
    }
  },
  "pretraining-finetuning": {
    zh: {
      type: "formula",
      label: "公式解析",
      formula: "L = -sum log P(token_t | token_<t)",
      explanation: "训练语言模型时，目标是让模型更准确地预测真实文本中的下一个 Token；预测越准，损失 L 越低。",
      symbols: [
        { symbol: "L", meaning: "训练损失，用来衡量预测和真实文本之间的差距。" },
        { symbol: "token_t", meaning: "真实文本中第 t 个 Token。" },
        { symbol: "token_<t", meaning: "第 t 个 Token 之前的所有上下文。" }
      ]
    },
    en: {
      type: "formula",
      label: "Formula Breakdown",
      formula: "L = -sum log P(token_t | token_<t)",
      explanation: "Language-model training rewards better next-token predictions; the more accurate the prediction, the lower the loss L.",
      symbols: [
        { symbol: "L", meaning: "Training loss that measures prediction error." },
        { symbol: "token_t", meaning: "The real token at position t in the text." },
        { symbol: "token_<t", meaning: "All context tokens before position t." }
      ]
    }
  },
  "prompt-evaluation": {
    zh: {
      type: "formula",
      label: "公式解析",
      formula: "Score = w1*C_task + w2*C_context + w3*C_format + w4*C_limits",
      explanation: "Prompt 质量可以拆成多个可观察维度，而不是只凭一次输出的感觉判断。",
      symbols: [
        { symbol: "C_task", meaning: "任务是否明确。" },
        { symbol: "C_context", meaning: "上下文是否足够。" },
        { symbol: "C_format", meaning: "输出格式是否清楚。" },
        { symbol: "C_limits", meaning: "限制条件是否具体。" }
      ]
    },
    en: {
      type: "formula",
      label: "Formula Breakdown",
      formula: "Score = w1*C_task + w2*C_context + w3*C_format + w4*C_limits",
      explanation: "Prompt quality can be evaluated across observable dimensions instead of judged by one lucky output.",
      symbols: [
        { symbol: "C_task", meaning: "Whether the task is clear." },
        { symbol: "C_context", meaning: "Whether the context is sufficient." },
        { symbol: "C_format", meaning: "Whether the output format is explicit." },
        { symbol: "C_limits", meaning: "Whether constraints are concrete." }
      ]
    }
  },
  "rag-intro": {
    zh: {
      type: "formula",
      label: "公式解析",
      formula: "sim(q, d) = (q · d) / (||q|| ||d||)",
      explanation: "余弦相似度用来估计问题向量 q 和文档向量 d 的方向是否接近，越接近越可能相关。",
      symbols: [
        { symbol: "q", meaning: "用户问题或查询的向量表示。" },
        { symbol: "d", meaning: "候选文档片段的向量表示。" },
        { symbol: "q · d", meaning: "两个向量的点积，用来衡量方向相似。" },
        { symbol: "||q|| ||d||", meaning: "向量长度归一化，避免长文本天然占优。" }
      ]
    },
    en: {
      type: "formula",
      label: "Formula Breakdown",
      formula: "sim(q, d) = (q · d) / (||q|| ||d||)",
      explanation: "Cosine similarity estimates how close the query vector q is to a document vector d; closer directions usually mean higher relevance.",
      symbols: [
        { symbol: "q", meaning: "Vector representation of the user's query." },
        { symbol: "d", meaning: "Vector representation of a candidate document chunk." },
        { symbol: "q · d", meaning: "Dot product that measures directional similarity." },
        { symbol: "||q|| ||d||", meaning: "Length normalization so longer text is not automatically favored." }
      ]
    }
  }
};

function lesson(
  item: Omit<TutorialLesson, "sections" | "quiz"> & {
    visual: VisualKind;
    concept: string;
    example: string;
    practice: string;
    quizQuestion: string;
    quizAnswer: string;
  }
): TutorialLesson {
  const diagram = lessonDiagrams[item.slug];
  const formula = lessonFormulas[item.slug]?.zh;
  const extraVisuals = lessonExtraVisuals[item.slug] ?? [];

  return {
    ...item,
    sections: [
      {
        id: "concept",
        heading: "核心概念",
        blocks: [
          { type: "paragraph", text: item.concept },
          {
            type: "visual",
            visual: item.visual,
            title: visualMeta[item.visual].title,
            caption: visualMeta[item.visual].caption
          },
          ...extraVisuals.map((visual) => ({
            type: "visual" as const,
            visual,
            title: visualMeta[visual].title,
            caption: visualMeta[visual].caption
          })),
          ...(diagram
            ? [{
                type: "diagram" as const,
                diagram,
                title: diagramMeta[diagram].zh.title,
                caption: diagramMeta[diagram].zh.caption
              }]
            : []),
          ...(formula ? [formula] : []),
          {
            type: "callout",
            tone: "concept",
            title: "学习提示",
            text: "先抓住直觉，再看术语。LLM 学习不需要一开始就追求公式完整推导。"
          }
        ]
      },
      {
        id: "example",
        heading: "课堂例子",
        blocks: [
          { type: "paragraph", text: item.example },
          {
            type: "prompt",
            title: "可复制 Prompt",
            prompt: `请用面向大学低年级学生的语言解释“${item.title}”，要求包含一个生活化例子和一个常见误区。`
          }
        ]
      },
      {
        id: "practice",
        heading: "练习与小结",
        blocks: [
          { type: "paragraph", text: item.practice },
          {
            type: "steps",
            items: ["用一句话复述本节概念。", "写出一个你能想到的 LLM 应用场景。", "指出这个场景里最可能出错的地方。"]
          }
        ]
      }
    ],
    quiz: {
      question: item.quizQuestion,
      answer: item.quizAnswer
    }
  };
}

export const tutorials: TutorialLesson[] = [
  lesson({
    slug: "what-is-llm",
    visual: "llm-flow",
    category: "LLM 基础",
    order: 1,
    title: "什么是大语言模型",
    description: "从语言模型的目标、输入输出方式和典型能力开始，建立对 LLM 的第一层认知。",
    difficulty: "入门",
    duration: "25 分钟",
    tags: ["LLM", "语言模型", "生成式 AI"],
    prerequisites: ["基本了解人工智能"],
    objectives: ["解释 LLM 的基本输入输出", "区分语言模型与普通聊天机器人", "认识 LLM 的能力边界"],
    concept: "大语言模型是通过大规模文本学习语言规律的模型。它接收一段上下文，预测接下来最合适的 Token，并逐步生成回答。",
    example: "如果你输入“请帮我总结这篇论文”，模型并不是打开一个固定答案库，而是根据提示、上下文和训练中学到的模式组织一段新回答。",
    practice: "本节重点是理解 LLM 是概率生成系统。它可以非常有用，但输出需要结合来源、任务约束和人工判断来验证。",
    quizQuestion: "LLM 生成回答时最核心的动作是什么？",
    quizAnswer: "在已有上下文条件下预测下一个 Token，并不断重复这个过程。",
    relatedSlugs: ["generative-ai-vs-traditional-ai", "tokens-context-window"]
  }),
  lesson({
    slug: "generative-ai-vs-traditional-ai",
    visual: "ai-comparison",
    category: "LLM 基础",
    order: 2,
    title: "生成式 AI 与传统 AI",
    description: "比较分类、预测、生成和交互式任务，理解 LLM 为什么改变了人机交互方式。",
    difficulty: "入门",
    duration: "25 分钟",
    tags: ["生成式 AI", "传统机器学习", "任务范式"],
    prerequisites: ["什么是大语言模型"],
    objectives: ["说明生成式 AI 的特点", "比较传统模型与 LLM 的应用方式", "理解同一模型多任务能力"],
    concept: "传统 AI 常被训练成完成某个明确任务，例如识别垃圾邮件。生成式 AI 更强调创造新内容，例如写摘要、生成代码或模拟对话。",
    example: "同一段学生提问，传统系统可能只能分类为“作业问题”；LLM 可以进一步解释概念、给出例子，并追问学生哪里不理解。",
    practice: "判断一个任务是否适合 LLM 时，要看它是否需要自然语言理解、生成、推理或跨任务表达。",
    quizQuestion: "为什么 LLM 更适合开放式问答？",
    quizAnswer: "因为它可以基于上下文生成自然语言回答，而不是只能输出固定类别。",
    relatedSlugs: ["what-is-llm", "prompt-four-elements"]
  }),
  lesson({
    slug: "tokens-context-window",
    visual: "token-explorer",
    category: "LLM 基础",
    order: 3,
    title: "Token 与上下文窗口",
    description: "理解模型如何读取文本，以及为什么长文本任务会受到上下文窗口限制。",
    difficulty: "入门",
    duration: "30 分钟",
    tags: ["Token", "上下文窗口", "长文本"],
    prerequisites: ["什么是大语言模型"],
    objectives: ["解释 Token 的作用", "理解上下文窗口限制", "设计更清晰的长文本输入"],
    concept: "Token 是模型处理文本的基本单位，可能是一个字、一个词或词的一部分。上下文窗口决定模型一次能看到多少 Token。",
    example: "把整本书一次性塞进 Prompt 往往不可行。更好的方法是先分段总结、检索相关片段，再让模型回答具体问题。",
    practice: "做长文本任务时，先明确问题，再提供最相关的上下文，而不是把所有材料无差别放进去。",
    quizQuestion: "上下文窗口限制会影响什么？",
    quizAnswer: "会影响模型一次能读取和利用的输入长度。",
    relatedSlugs: ["rag-intro", "prompt-four-elements"]
  }),
  lesson({
    slug: "transformer-intro",
    visual: "transformer-stack",
    category: "核心原理",
    order: 4,
    title: "Transformer 入门",
    description: "用初学者友好的方式理解 Transformer 为什么成为现代 LLM 的核心架构。",
    difficulty: "进阶",
    duration: "40 分钟",
    tags: ["Transformer", "架构", "序列建模"],
    prerequisites: ["Token 与上下文窗口"],
    objectives: ["说出 Transformer 的基本作用", "理解并行处理序列的优势", "知道 Attention 在其中的位置"],
    concept: "Transformer 是一种处理序列信息的神经网络架构。它通过 Attention 计算上下文关系，让模型在生成某个词时参考更广范围的信息。",
    example: "阅读“苹果发布了芯片，它提升了性能”时，人能判断“它”指芯片。Transformer 的 Attention 机制帮助模型做类似的上下文关联。",
    practice: "学习 Transformer 时，先把它看成一个多层文本理解与生成管线，再逐步拆解向量、Attention 和前馈网络。",
    quizQuestion: "Transformer 为什么适合语言任务？",
    quizAnswer: "因为它能高效建模序列中不同 Token 之间的上下文关系。",
    relatedSlugs: ["attention-mechanism", "pretraining-finetuning"]
  }),
  lesson({
    slug: "attention-mechanism",
    visual: "attention-heatmap",
    category: "核心原理",
    order: 5,
    title: "Attention 机制",
    description: "解释模型如何判断当前 Token 应该关注上下文中的哪些信息。",
    difficulty: "进阶",
    duration: "40 分钟",
    tags: ["Attention", "上下文", "权重"],
    prerequisites: ["Transformer 入门"],
    objectives: ["理解 Attention 的直觉", "解释关注权重", "识别适合可视化演示的例子"],
    concept: "Attention 机制会为上下文中的不同 Token 分配不同权重。权重越高，说明当前生成或理解步骤越需要参考它。",
    example: "句子“老师把书给学生，因为他要考试”中，“他”可能指学生。Attention 可帮助模型聚焦到更相关的词语。",
    practice: "可以用代词指代、长句依赖和关键词匹配来设计 Attention 课堂演示。",
    quizQuestion: "Attention 权重表达了什么？",
    quizAnswer: "表达当前 Token 与上下文中其他 Token 的相关程度。",
    relatedSlugs: ["transformer-intro", "rlhf-rlaif"]
  }),
  lesson({
    slug: "pretraining-finetuning",
    visual: "training-pipeline",
    category: "核心原理",
    order: 6,
    title: "预训练与微调",
    description: "理解模型先学习通用语言规律，再通过任务数据适配特定用途。",
    difficulty: "进阶",
    duration: "35 分钟",
    tags: ["Pretraining", "Fine-tuning", "训练流程"],
    prerequisites: ["Transformer 入门"],
    objectives: ["区分预训练和微调", "理解数据对模型行为的影响", "知道何时考虑微调"],
    concept: "预训练让模型从大规模文本中学习通用语言模式。微调用更小、更有针对性的数据调整模型，使它更适合特定任务或风格。",
    example: "通用模型能写很多类型文本；经过医学问答数据微调后，它可能更擅长按医学问答格式组织回答。",
    practice: "初学项目通常先用 Prompt 和 RAG，不急着微调。只有当任务风格稳定且数据质量足够时，再考虑微调。",
    quizQuestion: "预训练和微调的主要区别是什么？",
    quizAnswer: "预训练学习通用能力，微调让模型适配特定任务或领域。",
    relatedSlugs: ["rlhf-rlaif", "rag-intro"]
  }),
  lesson({
    slug: "rlhf-rlaif",
    visual: "training-pipeline",
    category: "核心原理",
    order: 7,
    title: "RLHF / RLAIF 基本概念",
    description: "认识模型对齐如何让回答更符合人类偏好、教学要求和安全规范。",
    difficulty: "进阶",
    duration: "35 分钟",
    tags: ["RLHF", "RLAIF", "对齐"],
    prerequisites: ["预训练与微调"],
    objectives: ["解释对齐的意义", "区分 RLHF 与 RLAIF", "理解偏好数据的作用"],
    concept: "RLHF 使用人类反馈帮助模型学习什么回答更有帮助、更安全。RLAIF 则用 AI 反馈参与偏好判断，降低人工标注成本。",
    example: "两个回答都语法正确，但一个更礼貌、可靠、有边界。对齐训练会鼓励模型更倾向后者。",
    practice: "在教学场景中，对齐不是万能防线，仍需要任务约束、引用来源和人工审核。",
    quizQuestion: "RLHF 主要优化的是什么？",
    quizAnswer: "优化模型输出与人类偏好、安全规范和任务期望之间的一致性。",
    relatedSlugs: ["hallucination-privacy-safety", "prompt-evaluation"]
  }),
  lesson({
    slug: "prompt-four-elements",
    visual: "prompt-quality-meter",
    category: "Prompt Engineering",
    order: 8,
    title: "Prompt 四要素",
    description: "用任务、上下文、格式和限制条件组织可执行提示词。",
    difficulty: "入门",
    duration: "30 分钟",
    tags: ["Prompt", "任务", "格式"],
    prerequisites: ["生成式 AI 与传统 AI"],
    objectives: ["写出结构清晰的 Prompt", "判断提示词缺失的信息", "用格式约束提升可用性"],
    concept: "高质量 Prompt 通常包含明确任务、必要上下文、输出格式和限制条件。四要素越清晰，模型越容易给出可交付结果。",
    example: "“介绍 Transformer”很模糊；“用 150 字、面向大一学生、包含生活例子介绍 Transformer”就更容易得到稳定输出。",
    practice: "每次写 Prompt 后，检查它是否回答了：要做什么、基于什么、输出成什么样、不能超过哪些边界。",
    quizQuestion: "Prompt 四要素是什么？",
    quizAnswer: "明确任务、必要上下文、输出格式和限制条件。",
    relatedSlugs: ["few-shot-learning", "structured-output"]
  }),
  lesson({
    slug: "few-shot-learning",
    visual: "prompt-quality-meter",
    category: "Prompt Engineering",
    order: 9,
    title: "Few-shot Learning",
    description: "通过少量示例让模型模仿任务格式、风格和推理路径。",
    difficulty: "入门",
    duration: "30 分钟",
    tags: ["Few-shot", "示例", "风格迁移"],
    prerequisites: ["Prompt 四要素"],
    objectives: ["解释 Few-shot 的作用", "设计有效示例", "避免示例误导模型"],
    concept: "Few-shot 是在 Prompt 中提供几个输入输出样例，让模型从样例中学习当前任务的格式和判断标准。",
    example: "做情感分类时，给出两三条“文本 -> 标签 -> 原因”的样例，模型就更容易按同样格式输出。",
    practice: "示例要覆盖典型情况和边界情况。质量差的示例会把模型带偏。",
    quizQuestion: "Few-shot 示例最重要的质量是什么？",
    quizAnswer: "示例应清晰、代表性强，并与期望输出格式一致。",
    relatedSlugs: ["prompt-four-elements", "prompt-evaluation"]
  }),
  lesson({
    slug: "structured-output",
    visual: "prompt-quality-meter",
    category: "Prompt Engineering",
    order: 10,
    title: "结构化输出",
    description: "让模型输出 JSON、表格或固定字段，方便程序读取和教学评估。",
    difficulty: "实践",
    duration: "35 分钟",
    tags: ["JSON", "表格", "解析"],
    prerequisites: ["Prompt 四要素"],
    objectives: ["设计字段 schema", "要求模型输出 JSON", "理解结构化输出的验证需求"],
    concept: "结构化输出把自然语言结果变成可解析数据，例如 JSON 数组、Markdown 表格或固定字段对象。",
    example: "让模型输出 `{title, description, difficulty}`，比让它自由写一段推荐内容更容易接入前端页面。",
    practice: "结构化输出仍需校验。真实应用中应检查 JSON 是否可解析、字段是否完整、值是否符合约束。",
    quizQuestion: "为什么结构化输出适合 LLM 应用开发？",
    quizAnswer: "因为它更容易被程序读取、校验和继续处理。",
    relatedSlugs: ["prompt-evaluation", "llm-app-design"]
  }),
  lesson({
    slug: "prompt-evaluation",
    visual: "prompt-quality-meter",
    category: "Prompt Engineering",
    order: 11,
    title: "Prompt 评估与迭代",
    description: "建立评价标准，持续改进提示词质量，而不是凭感觉改 Prompt。",
    difficulty: "实践",
    duration: "35 分钟",
    tags: ["评估", "迭代", "质量"],
    prerequisites: ["Prompt 四要素", "Few-shot Learning"],
    objectives: ["定义输出质量标准", "比较 Prompt 版本", "记录迭代原因"],
    concept: "Prompt 评估是用明确指标判断输出是否满足任务要求，例如准确性、完整性、格式稳定性和安全性。",
    example: "同一个总结任务可以测试 10 篇不同文章，记录每个 Prompt 是否控制字数、是否保留关键结论、是否出现事实错误。",
    practice: "建议用表格记录 Prompt 版本、修改原因、测试样例和失败案例。",
    quizQuestion: "为什么 Prompt 需要评估集？",
    quizAnswer: "因为单次输出不能代表 Prompt 在不同输入下的稳定性。",
    relatedSlugs: ["structured-output", "hallucination-privacy-safety"]
  }),
  lesson({
    slug: "rag-intro",
    visual: "rag-retrieval-demo",
    category: "应用开发",
    order: 12,
    title: "RAG 入门",
    description: "理解检索增强生成如何让模型结合外部资料回答问题。",
    difficulty: "实践",
    duration: "45 分钟",
    tags: ["RAG", "Embedding", "检索"],
    prerequisites: ["Token 与上下文窗口", "Prompt 四要素"],
    objectives: ["解释 RAG 流程", "区分 RAG 与微调", "理解来源引用的重要性"],
    concept: "RAG 会先从知识库检索相关片段，再把片段放进 Prompt，让模型基于资料回答。",
    example: "校内规章问答系统不应只靠模型记忆，而应检索最新规章条款，再要求模型引用来源回答。",
    practice: "一个基础 RAG 项目通常包含文档切分、向量化、检索、拼接 Prompt、生成回答和评估。",
    quizQuestion: "RAG 的核心价值是什么？",
    quizAnswer: "让模型基于外部资料回答，降低知识过时和凭空编造的风险。",
    relatedSlugs: ["llm-app-design", "hallucination-privacy-safety"]
  }),
  lesson({
    slug: "agent-tool-use",
    visual: "llm-flow",
    category: "应用开发",
    order: 13,
    title: "Agent 与工具调用",
    description: "认识 LLM 如何规划步骤、选择工具，并把工具结果纳入后续回答。",
    difficulty: "实践",
    duration: "45 分钟",
    tags: ["Agent", "Tool Use", "Function Calling"],
    prerequisites: ["Prompt 四要素"],
    objectives: ["解释 Agent 的基本循环", "理解工具调用 schema", "识别工具使用风险"],
    concept: "Agent 通常包含目标理解、步骤规划、工具选择、执行观察和继续推理。工具调用让模型可以使用搜索、计算、数据库等外部能力。",
    example: "订会议室助手需要先查可用时间，再调用预订工具，最后把结果反馈给用户，而不是只生成一段建议。",
    practice: "Agent 项目要特别注意边界：哪些工具能调用、调用前是否确认、失败时如何回退。",
    quizQuestion: "工具调用为什么需要 schema？",
    quizAnswer: "schema 能约束工具名称、参数和类型，让模型输出可执行的调用请求。",
    relatedSlugs: ["llm-app-design", "hallucination-privacy-safety"]
  }),
  lesson({
    slug: "llm-app-design",
    visual: "rag-retrieval-demo",
    category: "应用开发",
    order: 14,
    title: "从零设计一个 LLM 应用",
    description: "把需求、数据、Prompt、RAG、评估和前端体验串成一个可展示原型。",
    difficulty: "实践",
    duration: "60 分钟",
    tags: ["应用设计", "原型", "评估"],
    prerequisites: ["RAG 入门", "Prompt 评估与迭代"],
    objectives: ["拆解 LLM 应用模块", "设计最小可行 Demo", "规划评估和安全边界"],
    concept: "LLM 应用不是只接一个聊天接口。一个可用原型通常包括场景定义、输入约束、知识来源、模型调用、结果展示和质量评估。",
    example: "课程问答助手需要明确课程范围、资料来源、回答格式、不会回答时的策略，以及教师审核方式。",
    practice: "先做窄场景，再扩展能力。能稳定回答 20 个高频问题，比做一个什么都能聊但不可控的 Demo 更有价值。",
    quizQuestion: "LLM 应用原型最先应该确定什么？",
    quizAnswer: "明确用户场景、任务边界和成功标准。",
    relatedSlugs: ["rag-intro", "agent-tool-use"]
  }),
  lesson({
    slug: "hallucination-privacy-safety",
    visual: "ai-comparison",
    category: "安全伦理",
    order: 15,
    title: "幻觉、隐私与内容安全",
    description: "认识 LLM 典型风险，并为教学和项目实践建立基本安全规范。",
    difficulty: "进阶",
    duration: "45 分钟",
    tags: ["幻觉", "隐私", "安全伦理"],
    prerequisites: ["什么是大语言模型", "Prompt 评估与迭代"],
    objectives: ["解释幻觉来源", "识别隐私风险", "设计基础安全策略"],
    concept: "LLM 幻觉是指模型生成看似合理但不准确的内容。隐私和内容安全则涉及输入数据、输出传播和不当使用风险。",
    example: "让模型编写论文引用时，它可能生成不存在的文献。让学生上传含个人信息的资料，也可能带来隐私问题。",
    practice: "安全策略包括：减少敏感输入、要求来源引用、设置拒答边界、进行人工审核，并记录模型失败案例。",
    quizQuestion: "降低幻觉风险的一个有效方法是什么？",
    quizAnswer: "结合 RAG、来源引用和人工验证，让回答基于可检查资料。",
    relatedSlugs: ["rag-intro", "rlhf-rlaif"]
  })
];

type EnglishLessonCopy = {
  category: TutorialCategory;
  title: string;
  description: string;
  difficulty: TutorialDifficulty;
  duration: string;
  tags: string[];
  prerequisites: string[];
  objectives: string[];
  concept: string;
  example: string;
  practice: string;
  quizQuestion: string;
  quizAnswer: string;
};

const englishVisualCaptions: Record<VisualKind, string> = {
  "llm-flow": "Place Prompt, Tokenization, model reasoning, probability, and response generation on one flow line.",
  "ai-comparison": "Compare traditional AI with generative AI to understand where LLMs are strongest.",
  "token-explorer": "Switch between text examples and observe how a model may split them into tokens.",
  "embedding-matrix": "Map token text into embedding vectors, add positional encoding, and form the numeric matrix passed into Transformer layers.",
  "positional-encoding": "Show how sinusoidal position signals are added to token embeddings.",
  "attention-score-matrix": "Use a token-by-token heatmap to show attention strengths.",
  "qkv-projection": "Split the same embeddings into Query, Key, and Value projection channels.",
  "next-token-probability": "Visualize next-token candidates as a probability distribution.",
  "context-window-map": "Show which tokens fit inside the context window and which are truncated.",
  "rag-chunk-ranking": "Rank document chunks by similarity to the query embedding.",
  "transformer-block": "Break down LayerNorm, Multi-Head Attention, residual paths, and FFN.",
  "transformer-stack": "Show how tokens are repeatedly processed through Attention and feed-forward layers.",
  "attention-heatmap": "Click a token and inspect which context tokens receive stronger attention.",
  "training-pipeline": "Connect pretraining, fine-tuning, and feedback alignment into one teaching pipeline.",
  "prompt-quality-meter": "Score prompt quality through task, context, format, and constraints.",
  "rag-retrieval-demo": "Simulate retrieval-augmented generation: retrieve snippets first, then answer with evidence."
};

const englishVisualTitles: Record<VisualKind, string> = {
  "llm-flow": "LLM Flow Lab",
  "ai-comparison": "AI Capability Map",
  "token-explorer": "Token Explorer",
  "embedding-matrix": "Token Embedding + PE",
  "positional-encoding": "Positional Encoding Waves",
  "attention-score-matrix": "Attention Score Matrix",
  "qkv-projection": "Q / K / V Projection",
  "next-token-probability": "Next Token Probability",
  "context-window-map": "Context Window Map",
  "rag-chunk-ranking": "RAG Chunk Retrieval Ranking",
  "transformer-block": "Transformer Block Anatomy",
  "transformer-stack": "Transformer Stack",
  "attention-heatmap": "Attention Heatmap",
  "training-pipeline": "Training Pipeline",
  "prompt-quality-meter": "Prompt Quality Meter",
  "rag-retrieval-demo": "RAG Retrieval Demo"
};

const englishLessons: Record<string, EnglishLessonCopy> = {
  "what-is-llm": {
    category: "LLM Fundamentals",
    title: "What Is a Large Language Model?",
    description: "Start with the goal, input-output pattern, and typical abilities of LLMs.",
    difficulty: "Beginner",
    duration: "25 min",
    tags: ["LLM", "Language Model", "Generative AI"],
    prerequisites: ["Basic awareness of AI"],
    objectives: ["Explain the basic input-output pattern of LLMs", "Distinguish LLMs from ordinary chatbots", "Recognize the boundaries of LLM capabilities"],
    concept: "A large language model learns language patterns from massive text corpora. It receives context, predicts the most likely next token, and repeats that process to generate an answer.",
    example: "If you ask it to summarize a paper, the model is not opening a fixed answer database. It organizes a new response from your prompt, context, and patterns learned during training.",
    practice: "The key idea is that an LLM is a probabilistic generation system. Its output can be useful, but it still needs sources, task constraints, and human judgment.",
    quizQuestion: "What is the core action behind LLM generation?",
    quizAnswer: "Predicting the next token conditioned on the previous context, then repeating the process."
  },
  "generative-ai-vs-traditional-ai": {
    category: "LLM Fundamentals",
    title: "Generative AI vs. Traditional AI",
    description: "Compare classification, prediction, generation, and interactive tasks.",
    difficulty: "Beginner",
    duration: "25 min",
    tags: ["Generative AI", "Traditional ML", "Task Paradigms"],
    prerequisites: ["What Is a Large Language Model?"],
    objectives: ["Describe the traits of generative AI", "Compare traditional models with LLM workflows", "Understand multi-task behavior in one model"],
    concept: "Traditional AI is often trained for a specific task, such as spam detection. Generative AI focuses on creating new content, such as summaries, code, or dialogue.",
    example: "For the same student question, a traditional system may classify it as a homework issue. An LLM can explain the concept, provide examples, and ask what the student still finds confusing.",
    practice: "To judge whether a task fits LLMs, ask whether it needs language understanding, generation, reasoning, or flexible expression.",
    quizQuestion: "Why are LLMs well suited to open-ended Q&A?",
    quizAnswer: "Because they can generate natural-language answers from context instead of only outputting fixed categories."
  },
  "tokens-context-window": {
    category: "LLM Fundamentals",
    title: "Tokens and Context Window",
    description: "Understand how models read text and why long-text tasks are limited by context size.",
    difficulty: "Beginner",
    duration: "30 min",
    tags: ["Token", "Context Window", "Long Context"],
    prerequisites: ["What Is a Large Language Model?"],
    objectives: ["Explain what tokens do", "Understand context-window limits", "Design clearer long-text inputs"],
    concept: "Tokens are the basic units that models process. They may be characters, words, or word fragments. The context window controls how many tokens the model can see at once.",
    example: "Putting an entire book into one prompt is often impractical. A better approach is to summarize by sections or retrieve only relevant passages before answering.",
    practice: "For long-text tasks, first clarify the question and provide the most relevant context instead of dumping all materials into the prompt.",
    quizQuestion: "What does the context window limit affect?",
    quizAnswer: "It affects how much input the model can read and use at one time."
  },
  "transformer-intro": {
    category: "Core Principles",
    title: "Transformer Basics",
    description: "A beginner-friendly explanation of why Transformer became the core architecture behind modern LLMs.",
    difficulty: "Intermediate",
    duration: "40 min",
    tags: ["Transformer", "Architecture", "Sequence Modeling"],
    prerequisites: ["Tokens and Context Window"],
    objectives: ["State what Transformer does", "Understand the benefit of parallel sequence processing", "Know where Attention fits"],
    concept: "Transformer is a neural architecture for processing sequence information. Through Attention, it computes contextual relationships so the model can reference broader context during generation.",
    example: "In “Apple released a chip, and it improved performance,” people infer that “it” refers to the chip. Attention helps models make similar contextual links.",
    practice: "First view Transformer as a multi-layer text understanding and generation pipeline, then break it down into embeddings, Attention, and feed-forward networks.",
    quizQuestion: "Why is Transformer suitable for language tasks?",
    quizAnswer: "Because it efficiently models relationships among tokens in a sequence."
  },
  "attention-mechanism": {
    category: "Core Principles",
    title: "Attention Mechanism",
    description: "Explain how a model decides which context information to focus on for the current token.",
    difficulty: "Intermediate",
    duration: "40 min",
    tags: ["Attention", "Context", "Weights"],
    prerequisites: ["Transformer Basics"],
    objectives: ["Understand the intuition of Attention", "Explain attention weights", "Identify examples suitable for visualization"],
    concept: "Attention assigns different weights to tokens in the context. Higher weights mean the current step depends more strongly on that token.",
    example: "In a sentence with pronouns, Attention can help the model focus on the noun that best explains the pronoun.",
    practice: "Pronoun resolution, long dependencies, and keyword matching are useful classroom examples for Attention.",
    quizQuestion: "What do attention weights represent?",
    quizAnswer: "They represent how relevant other context tokens are to the current token."
  },
  "pretraining-finetuning": {
    category: "Core Principles",
    title: "Pretraining and Fine-tuning",
    description: "Understand how a model learns general language patterns and then adapts to specific tasks.",
    difficulty: "Intermediate",
    duration: "35 min",
    tags: ["Pretraining", "Fine-tuning", "Training Pipeline"],
    prerequisites: ["Transformer Basics"],
    objectives: ["Distinguish pretraining from fine-tuning", "Understand how data shapes behavior", "Know when to consider fine-tuning"],
    concept: "Pretraining teaches general language patterns from large-scale text. Fine-tuning uses smaller task-focused datasets to adapt the model to a domain, format, or style.",
    example: "A general model can write many text types; after medical Q&A fine-tuning, it may better follow medical answer formats.",
    practice: "Beginner projects should usually start with Prompt and RAG. Consider fine-tuning only when the task style is stable and the data is strong.",
    quizQuestion: "What is the main difference between pretraining and fine-tuning?",
    quizAnswer: "Pretraining builds general ability; fine-tuning adapts the model to a specific task or domain."
  },
  "rlhf-rlaif": {
    category: "Core Principles",
    title: "RLHF / RLAIF Basics",
    description: "Learn how alignment makes model answers more helpful, safe, and consistent with human preferences.",
    difficulty: "Intermediate",
    duration: "35 min",
    tags: ["RLHF", "RLAIF", "Alignment"],
    prerequisites: ["Pretraining and Fine-tuning"],
    objectives: ["Explain why alignment matters", "Distinguish RLHF from RLAIF", "Understand preference data"],
    concept: "RLHF uses human feedback to teach models what answers are more helpful and safe. RLAIF uses AI feedback to reduce annotation cost.",
    example: "Two answers may both be grammatical, but one can be more polite, reliable, and bounded. Alignment training encourages that kind of answer.",
    practice: "In teaching scenarios, alignment is not a complete safeguard. You still need task constraints, citations, and human review.",
    quizQuestion: "What does RLHF mainly optimize?",
    quizAnswer: "It optimizes consistency between model outputs and human preferences, safety norms, and task expectations."
  },
  "prompt-four-elements": {
    category: "Prompt Engineering",
    title: "Four Elements of a Prompt",
    description: "Use task, context, format, and constraints to write executable prompts.",
    difficulty: "Beginner",
    duration: "30 min",
    tags: ["Prompt", "Task", "Format"],
    prerequisites: ["Generative AI vs. Traditional AI"],
    objectives: ["Write clear prompts", "Identify missing prompt information", "Use output format constraints"],
    concept: "A strong prompt usually contains a clear task, necessary context, an output format, and constraints. The clearer these elements are, the easier it is for the model to produce a usable result.",
    example: "“Explain Transformer” is vague. “Explain Transformer in 150 words for first-year students with a daily-life analogy” is more stable.",
    practice: "After writing a prompt, check whether it answers: what to do, what context to use, what format to output, and what boundaries to respect.",
    quizQuestion: "What are the four prompt elements?",
    quizAnswer: "Clear task, necessary context, output format, and constraints."
  },
  "few-shot-learning": {
    category: "Prompt Engineering",
    title: "Few-shot Learning",
    description: "Use a few examples to guide task format, style, and reasoning pattern.",
    difficulty: "Beginner",
    duration: "30 min",
    tags: ["Few-shot", "Examples", "Style Transfer"],
    prerequisites: ["Four Elements of a Prompt"],
    objectives: ["Explain the role of few-shot examples", "Design effective examples", "Avoid misleading examples"],
    concept: "Few-shot prompting provides several input-output examples so the model can infer the expected format and criteria.",
    example: "For sentiment classification, examples like “text -> label -> reason” help the model follow the same output pattern.",
    practice: "Examples should cover typical and boundary cases. Poor examples can push the model in the wrong direction.",
    quizQuestion: "What matters most in few-shot examples?",
    quizAnswer: "They should be clear, representative, and aligned with the expected output format."
  },
  "structured-output": {
    category: "Prompt Engineering",
    title: "Structured Output",
    description: "Ask models to return JSON, tables, or fixed fields for easier parsing and evaluation.",
    difficulty: "Hands-on",
    duration: "35 min",
    tags: ["JSON", "Tables", "Parsing"],
    prerequisites: ["Four Elements of a Prompt"],
    objectives: ["Design field schemas", "Request JSON output", "Understand output validation"],
    concept: "Structured output turns natural-language results into parseable data, such as JSON arrays, Markdown tables, or fixed-field objects.",
    example: "Requesting `{title, description, difficulty}` is easier to connect to a frontend than asking for a free-form recommendation paragraph.",
    practice: "Structured output still needs validation. Real apps should check whether JSON parses, fields are complete, and values meet constraints.",
    quizQuestion: "Why is structured output useful for LLM apps?",
    quizAnswer: "Because programs can read, validate, and continue processing it more reliably."
  },
  "prompt-evaluation": {
    category: "Prompt Engineering",
    title: "Prompt Evaluation and Iteration",
    description: "Improve prompts with explicit criteria instead of editing by feeling.",
    difficulty: "Hands-on",
    duration: "35 min",
    tags: ["Evaluation", "Iteration", "Quality"],
    prerequisites: ["Four Elements of a Prompt", "Few-shot Learning"],
    objectives: ["Define output quality criteria", "Compare prompt versions", "Record iteration reasons"],
    concept: "Prompt evaluation uses explicit metrics to judge whether outputs meet requirements, such as accuracy, completeness, format stability, and safety.",
    example: "A summary prompt can be tested on ten articles to record whether it controls length, preserves conclusions, and avoids factual errors.",
    practice: "Use a table to track prompt version, change reason, test cases, and failure cases.",
    quizQuestion: "Why does a prompt need an evaluation set?",
    quizAnswer: "Because a single output cannot represent prompt stability across different inputs."
  },
  "rag-intro": {
    category: "Application Development",
    title: "RAG Basics",
    description: "Understand how retrieval-augmented generation lets a model answer with external materials.",
    difficulty: "Hands-on",
    duration: "45 min",
    tags: ["RAG", "Embedding", "Retrieval"],
    prerequisites: ["Tokens and Context Window", "Four Elements of a Prompt"],
    objectives: ["Explain the RAG workflow", "Distinguish RAG from fine-tuning", "Understand why citations matter"],
    concept: "RAG first retrieves relevant passages from a knowledge base, then inserts those passages into the prompt so the model answers based on provided evidence.",
    example: "A campus policy Q&A system should not rely on model memory. It should retrieve the latest policy clauses and ask the model to cite them.",
    practice: "A basic RAG project includes document chunking, vectorization, retrieval, prompt assembly, answer generation, and evaluation.",
    quizQuestion: "What is the core value of RAG?",
    quizAnswer: "It lets the model answer from external materials, reducing outdated knowledge and unsupported fabrication."
  },
  "agent-tool-use": {
    category: "Application Development",
    title: "Agents and Tool Use",
    description: "See how LLMs plan steps, choose tools, and use tool results in later answers.",
    difficulty: "Hands-on",
    duration: "45 min",
    tags: ["Agent", "Tool Use", "Function Calling"],
    prerequisites: ["Four Elements of a Prompt"],
    objectives: ["Explain the basic Agent loop", "Understand tool schemas", "Identify tool-use risks"],
    concept: "An Agent loop often includes goal understanding, planning, tool selection, execution observation, and continued reasoning.",
    example: "A meeting-room assistant must check availability, call a booking tool, and report the result instead of only generating advice.",
    practice: "Agent projects need clear boundaries: which tools can be called, when confirmation is needed, and how failures should fall back.",
    quizQuestion: "Why do tool calls need a schema?",
    quizAnswer: "A schema constrains tool names, parameters, and types so the model can output executable calls."
  },
  "llm-app-design": {
    category: "Application Development",
    title: "Design an LLM App from Scratch",
    description: "Connect requirements, data, prompts, RAG, evaluation, and frontend experience into a demo prototype.",
    difficulty: "Hands-on",
    duration: "60 min",
    tags: ["App Design", "Prototype", "Evaluation"],
    prerequisites: ["RAG Basics", "Prompt Evaluation and Iteration"],
    objectives: ["Break down LLM app modules", "Design a minimum viable demo", "Plan evaluation and safety boundaries"],
    concept: "An LLM app is not just a chat endpoint. A usable prototype usually includes scenario definition, input constraints, knowledge sources, model calls, result display, and quality evaluation.",
    example: "A course Q&A assistant needs a course scope, data sources, answer format, unknown-answer strategy, and teacher review process.",
    practice: "Start with a narrow scenario. A demo that reliably answers 20 frequent questions is more valuable than an uncontrolled general chatbot.",
    quizQuestion: "What should an LLM app prototype determine first?",
    quizAnswer: "The user scenario, task boundary, and success criteria."
  },
  "hallucination-privacy-safety": {
    category: "Safety and Ethics",
    title: "Hallucination, Privacy, and Safety",
    description: "Recognize common LLM risks and establish basic rules for teaching and project practice.",
    difficulty: "Intermediate",
    duration: "45 min",
    tags: ["Hallucination", "Privacy", "Safety Ethics"],
    prerequisites: ["What Is a Large Language Model?", "Prompt Evaluation and Iteration"],
    objectives: ["Explain where hallucinations come from", "Identify privacy risks", "Design basic safety strategies"],
    concept: "LLM hallucination means the model produces content that sounds plausible but is inaccurate. Privacy and safety risks involve input data, output sharing, and misuse.",
    example: "When asked to write paper citations, a model may invent non-existent sources. Uploading materials with personal data can also create privacy risks.",
    practice: "Safety strategies include minimizing sensitive input, requiring citations, setting refusal boundaries, human review, and logging failure cases.",
    quizQuestion: "What is one effective way to reduce hallucination risk?",
    quizAnswer: "Use RAG, citations, and human verification so answers are grounded in checkable materials."
  }
};

function toEnglishLesson(lesson: TutorialLesson): TutorialLesson {
  const copy = englishLessons[lesson.slug];
  const visualBlocks = lesson.sections[0]?.blocks.filter((block): block is Extract<TutorialBlock, { type: "visual" }> => block.type === "visual") ?? [];
  const diagramBlock = lesson.sections[0]?.blocks.find((block): block is Extract<TutorialBlock, { type: "diagram" }> => block.type === "diagram");
  const formulaBlock = lessonFormulas[lesson.slug]?.en;

  return {
    ...lesson,
    category: copy.category,
    title: copy.title,
    description: copy.description,
    difficulty: copy.difficulty,
    duration: copy.duration,
    tags: copy.tags,
    prerequisites: copy.prerequisites,
    objectives: copy.objectives,
    sections: [
      {
        id: "concept",
        heading: "Core Concept",
        blocks: [
          { type: "paragraph", text: copy.concept },
          ...visualBlocks.map((visualBlock) => ({
                type: "visual" as const,
                visual: visualBlock.visual,
                title: englishVisualTitles[visualBlock.visual],
                caption: englishVisualCaptions[visualBlock.visual]
              })),
          ...(diagramBlock
            ? [{
                type: "diagram" as const,
                diagram: diagramBlock.diagram,
                title: diagramMeta[diagramBlock.diagram].en.title,
                caption: diagramMeta[diagramBlock.diagram].en.caption
              }]
            : []),
          ...(formulaBlock ? [formulaBlock] : []),
          {
            type: "callout",
            tone: "concept",
            title: "Learning Tip",
            text: "Start with intuition before terminology. You do not need a full mathematical derivation at the beginning."
          }
        ]
      },
      {
        id: "example",
        heading: "Classroom Example",
        blocks: [
          { type: "paragraph", text: copy.example },
          {
            type: "prompt",
            title: "Copyable Prompt",
            prompt: `Explain “${copy.title}” for lower-division university students. Include one everyday example and one common misconception.`
          }
        ]
      },
      {
        id: "practice",
        heading: "Practice and Summary",
        blocks: [
          { type: "paragraph", text: copy.practice },
          {
            type: "steps",
            items: ["Restate the concept in one sentence.", "Write one LLM application scenario you can imagine.", "Point out the most likely failure in that scenario."]
          }
        ]
      }
    ],
    quiz: {
      question: copy.quizQuestion,
      answer: copy.quizAnswer
    }
  };
}

export const tutorialsEn: TutorialLesson[] = tutorials.map(toEnglishLesson);

export const orderedTutorials = [...tutorials].sort((a, b) => a.order - b.order);
export const orderedTutorialsEn = [...tutorialsEn].sort((a, b) => a.order - b.order);

export function getOrderedTutorials(language: Language = "zh") {
  return language === "en" ? orderedTutorialsEn : orderedTutorials;
}

export function getTutorialCategories(language: Language = "zh") {
  return language === "en" ? tutorialCategoriesEn : tutorialCategories;
}

export function getTutorialBySlug(slug: string | undefined, language: Language = "zh") {
  return getOrderedTutorials(language).find((lesson) => lesson.slug === slug);
}

export function getTutorialGroups(language: Language = "zh") {
  const lessons = getOrderedTutorials(language);

  return getTutorialCategories(language).map((category) => ({
    category,
    lessons: lessons.filter((lesson) => lesson.category === category)
  }));
}

export function getAdjacentTutorials(slug: string, language: Language = "zh") {
  const lessons = getOrderedTutorials(language);
  const index = lessons.findIndex((lesson) => lesson.slug === slug);

  return {
    previous: index > 0 ? lessons[index - 1] : undefined,
    next: index >= 0 && index < lessons.length - 1 ? lessons[index + 1] : undefined
  };
}

export function getRelatedTutorials(slugs: string[], language: Language = "zh") {
  return slugs
    .map((slug) => getTutorialBySlug(slug, language))
    .filter((lesson): lesson is TutorialLesson => Boolean(lesson));
}
