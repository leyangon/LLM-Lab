import { Binary, Brain, FileInput, Layers3, MessageCircle, Waypoints } from "lucide-react";
import { useLanguage } from "../i18n/LanguageProvider";
import { SectionHeader } from "./SectionHeader";

const steps = [
  { title: { zh: "用户输入 Prompt", en: "User Enters a Prompt" }, icon: FileInput, text: { zh: "用户把任务、背景、语气和输出要求写进提示词。", en: "The user writes the task, background, tone, and output requirements into the prompt." } },
  { title: { zh: "切分为 Token", en: "Split into Tokens" }, icon: Binary, text: { zh: "文本会被拆成模型能处理的 Token，可能是词、字或词片段。", en: "Text is split into model-readable tokens, which may be words, characters, or word pieces." } },
  { title: { zh: "转换为向量", en: "Convert to Vectors" }, icon: Layers3, text: { zh: "Token 被映射到高维向量，用数字表示语义和位置线索。", en: "Tokens are mapped to high-dimensional vectors that represent meaning and positional clues." } },
  { title: { zh: "Attention 建模关系", en: "Model Relations with Attention" }, icon: Waypoints, text: { zh: "Transformer 比较上下文中不同 Token 的关系，找出当前生成最需要关注的信息。", en: "Transformer compares token relationships in context and finds the information most relevant to the current step." } },
  { title: { zh: "预测概率分布", en: "Predict Probability Distribution" }, icon: Brain, text: { zh: "模型计算下一个 Token 的可能性，而不是直接从数据库复制答案。", en: "The model computes probabilities for the next token instead of copying an answer from a database." } },
  { title: { zh: "逐步生成回答", en: "Generate Step by Step" }, icon: MessageCircle, text: { zh: "模型不断选择下一个 Token，直到形成完整、连贯的回答。", en: "The model keeps selecting the next token until it forms a complete and coherent answer." } }
];

export function HowLLMWorks() {
  const { language, t } = useLanguage();

  return (
    <section className="section-wrap">
      <SectionHeader
        eyebrow="Mechanism"
        title={t("mechanism.title")}
        description={t("mechanism.description")}
      />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <article key={step.title.en} className="glass-card relative p-6">
              <span className="absolute right-5 top-5 font-display text-5xl font-black text-white/5">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-300/10 text-emerald-200 ring-1 ring-emerald-300/25">
                <Icon size={22} aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-xl font-black text-white">{step.title[language]}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{step.text[language]}</p>
            </article>
          );
        })}
      </div>
      <div className="mx-auto mt-8 max-w-xl rounded-3xl border border-cyan-300/20 bg-slate-950/70 p-5 text-center font-mono text-cyan-100 shadow-glow">
        P(next token | previous tokens)
      </div>
    </section>
  );
}
