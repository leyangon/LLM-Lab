import type { Language } from "../i18n/translations";

export type PipelineStepKey = "input" | "tokenize" | "embed" | "attention" | "ffn" | "output" | "sample";

export type PipelineStep = {
  key: PipelineStepKey;
  index: number;
  label: Record<Language, string>;
  formula: string;
  intuition: Record<Language, string>;
  input: Record<Language, string>;
  compute: Record<Language, string>;
  output: Record<Language, string>;
};

export const pipelineSteps: PipelineStep[] = [
  {
    key: "input",
    index: 1,
    label: { zh: "输入", en: "Input" },
    formula: "text -> tokenizer",
    intuition: {
      zh: "学习从一句自然语言开始，模型不会直接读懂文字，而是准备把文字转成可计算对象。",
      en: "Learning starts from natural language. The model prepares to turn text into computable objects."
    },
    input: { zh: "用户 Prompt 或上文", en: "User prompt or context" },
    compute: { zh: "确定任务、上下文和待预测位置", en: "Identify task, context, and prediction point" },
    output: { zh: "一段待处理文本", en: "Text ready for processing" }
  },
  {
    key: "tokenize",
    index: 2,
    label: { zh: "Tokenize", en: "Tokenize" },
    formula: "text -> [t1, t2, ..., tn]",
    intuition: {
      zh: "文本会被拆成 token，token 是模型逐步读取和生成的基本单位。",
      en: "Text is split into tokens, the basic units the model reads and generates step by step."
    },
    input: { zh: "原始文本", en: "Raw text" },
    compute: { zh: "按 tokenizer 规则切分并编号", en: "Split and index with tokenizer rules" },
    output: { zh: "Token 序列", en: "Token sequence" }
  },
  {
    key: "embed",
    index: 3,
    label: { zh: "Embed + PE", en: "Embed + PE" },
    formula: "x_i = E(t_i) + PE_i",
    intuition: {
      zh: "每个 token 会变成向量，再叠加位置编码，让模型知道顺序。",
      en: "Each token becomes a vector, then positional encoding adds sequence order."
    },
    input: { zh: "Token ID", en: "Token IDs" },
    compute: { zh: "查 embedding 表并加入位置特征", en: "Look up embeddings and add position features" },
    output: { zh: "输入矩阵 X", en: "Input matrix X" }
  },
  {
    key: "attention",
    index: 4,
    label: { zh: "Attention", en: "Attention" },
    formula: "Attention(Q,K,V)=softmax(QK^T/sqrt(d_k))V",
    intuition: {
      zh: "Attention 决定当前 token 应该从哪些上下文 token 中取信息。",
      en: "Attention decides which context tokens the current token should use."
    },
    input: { zh: "Embedding 矩阵", en: "Embedding matrix" },
    compute: { zh: "计算 Q/K 匹配分数并加权 V", en: "Score Q/K matches and weight V" },
    output: { zh: "融合上下文后的表示", en: "Context-mixed representations" }
  },
  {
    key: "ffn",
    index: 5,
    label: { zh: "FFN", en: "FFN" },
    formula: "FFN(x)=W2 GELU(W1x+b1)+b2",
    intuition: {
      zh: "前馈网络对每个位置的表示做非线性变换，提炼更适合预测的特征。",
      en: "The feed-forward network transforms each position into features useful for prediction."
    },
    input: { zh: "上下文表示", en: "Context representation" },
    compute: { zh: "升维、激活、降维", en: "Expand, activate, project" },
    output: { zh: "更强的语义表示", en: "Refined semantic representation" }
  },
  {
    key: "output",
    index: 6,
    label: { zh: "Output", en: "Output" },
    formula: "logits = hW_vocab",
    intuition: {
      zh: "模型把最后一层表示投影到词表空间，得到每个候选 token 的分数。",
      en: "The model projects the final representation into vocabulary scores."
    },
    input: { zh: "最后一层隐藏状态 h", en: "Final hidden state h" },
    compute: { zh: "映射到整个词表的 logits", en: "Map to vocabulary logits" },
    output: { zh: "候选 token 分数", en: "Candidate token scores" }
  },
  {
    key: "sample",
    index: 7,
    label: { zh: "Softmax/Sample", en: "Softmax/Sample" },
    formula: "softmax(logits / T)",
    intuition: {
      zh: "Softmax 把分数变成概率，Temperature 会影响选择更稳定还是更多样。",
      en: "Softmax turns scores into probabilities, and Temperature controls stability versus diversity."
    },
    input: { zh: "logits 与 Temperature", en: "Logits and Temperature" },
    compute: { zh: "归一化概率并按解码策略选择", en: "Normalize probabilities and decode" },
    output: { zh: "下一个 token", en: "Next token" }
  }
];

const lessonFocusMap: Record<string, PipelineStepKey> = {
  "what-is-llm": "sample",
  "generative-ai-vs-traditional-ai": "input",
  "tokens-context-window": "tokenize",
  "transformer-intro": "embed",
  "attention-mechanism": "attention",
  "pretraining-finetuning": "output",
  "rlhf-rlaif": "sample",
  "prompt-four-elements": "input",
  "few-shot-learning": "input",
  "structured-output": "output",
  "prompt-evaluation": "sample",
  "rag-intro": "embed",
  "agent-tool-use": "input",
  "llm-app-design": "input",
  "hallucination-privacy-safety": "sample"
};

export function getPipelineStep(key: PipelineStepKey) {
  return pipelineSteps.find((step) => step.key === key) ?? pipelineSteps[0];
}

export function getLessonPipelineFocus(slug: string): PipelineStep {
  return getPipelineStep(lessonFocusMap[slug] ?? "input");
}
