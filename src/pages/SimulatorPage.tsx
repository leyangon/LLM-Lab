import { Fragment, useState } from "react";
import { ArrowRight, Beaker, Thermometer } from "lucide-react";
import { pipelineSteps } from "../data/pipeline";
import { useLanguage } from "../i18n/LanguageProvider";

const examples = {
  zh: [
    {
      label: "基础句子",
      sentence: "The cat sat on the",
      tokens: ["The", "cat", "sat", "on", "the"],
      relation: "the → mat",
      candidates: [
        { token: "mat", value: 48 },
        { token: "floor", value: 16 },
        { token: "table", value: 12 },
        { token: "bed", value: 8 }
      ]
    },
    {
      label: "代词指代",
      sentence: "The animal was tired because it",
      tokens: ["The", "animal", "was", "tired", "because", "it"],
      relation: "it → animal",
      candidates: [
        { token: "slept", value: 36 },
        { token: "stopped", value: 22 },
        { token: "rested", value: 18 },
        { token: "moved", value: 9 }
      ]
    },
    {
      label: "课程问答",
      sentence: "请解释 Attention 的作用",
      tokens: ["请", "解释", "Attention", "的", "作用"],
      relation: "Attention → 上下文权重",
      candidates: [
        { token: "机制", value: 34 },
        { token: "关系", value: 25 },
        { token: "权重", value: 20 },
        { token: "矩阵", value: 12 }
      ]
    }
  ],
  en: [
    {
      label: "Basic Sentence",
      sentence: "The cat sat on the",
      tokens: ["The", "cat", "sat", "on", "the"],
      relation: "the -> mat",
      candidates: [
        { token: "mat", value: 48 },
        { token: "floor", value: 16 },
        { token: "table", value: 12 },
        { token: "bed", value: 8 }
      ]
    },
    {
      label: "Pronoun Resolution",
      sentence: "The animal was tired because it",
      tokens: ["The", "animal", "was", "tired", "because", "it"],
      relation: "it -> animal",
      candidates: [
        { token: "slept", value: 36 },
        { token: "stopped", value: 22 },
        { token: "rested", value: 18 },
        { token: "moved", value: 9 }
      ]
    },
    {
      label: "Course Q&A",
      sentence: "Explain what Attention does",
      tokens: ["Explain", "what", "Attention", "does"],
      relation: "Attention -> context weights",
      candidates: [
        { token: "mechanism", value: 34 },
        { token: "relation", value: 25 },
        { token: "weight", value: 20 },
        { token: "matrix", value: 12 }
      ]
    }
  ]
};

export function SimulatorPage() {
  const { language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const active = examples[language][activeIndex];

  const copy = {
    kicker: language === "zh" ? "Interactive Pipeline" : "Interactive Pipeline",
    title: language === "zh" ? "LLM 七步生成模拟器" : "Seven-Step LLM Simulator",
    description:
      language === "zh"
        ? "用一条完整流水线把输入、Token、Embedding、Attention、FFN、输出分数和采样连接起来。每一步都显示输入是什么、计算了什么、输出是什么。"
        : "Connect input, tokens, embeddings, attention, FFN, output scores, and sampling in one pipeline. Each step shows what goes in, what is computed, and what comes out.",
    example: language === "zh" ? "示例句子" : "Example",
    input: language === "zh" ? "输入是什么" : "What goes in",
    compute: language === "zh" ? "计算了什么" : "What is computed",
    output: language === "zh" ? "输出是什么" : "What comes out",
    relation: language === "zh" ? "关键关系" : "Key relation",
    probabilities: language === "zh" ? "候选 token 概率" : "Candidate token probabilities"
  };

  return (
    <main className="page-shell">
      <section className="section-wrap">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-cyan-300">{copy.kicker}</p>
            <h1 className="mt-4 font-display text-5xl font-black leading-tight text-white">{copy.title}</h1>
            <p className="mt-5 text-lg leading-9 text-slate-300">{copy.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {examples[language].map((item, index) => (
                <button
                  key={item.label}
                  type="button"
                  className={`visual-choice ${activeIndex === index ? "visual-choice-active" : ""}`}
                  onClick={() => setActiveIndex(index)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="glass-card p-5">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-300">{copy.example}</p>
            <p className="mt-3 rounded-2xl border border-white/10 bg-slate-950/70 p-4 font-mono text-lg font-black text-white">
              "{active.sentence}"
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {active.tokens.map((token, index) => (
                <span key={`${token}-${index}`} className="token-chip">
                  {token}<span className="ml-1 text-cyan-300">#{index + 1}</span>
                </span>
              ))}
            </div>
            <div className="mt-4 rounded-2xl border border-emerald-300/20 bg-emerald-300/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-200">{copy.relation}</p>
              <p className="mt-2 font-mono text-lg font-black text-white">{active.relation}</p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4">
          {pipelineSteps.map((step) => (
            <article key={step.key} className="simulator-step-card">
              <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-2xl bg-cyan-300 text-sm font-black text-slate-950">{step.index}</span>
                    <h2 className="font-display text-2xl font-black text-white">
                      {step.index} {step.label[language]}
                    </h2>
                  </div>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">{step.intuition[language]}</p>
                </div>
                <div className="rounded-2xl border border-cyan-200/15 bg-cyan-300/10 px-4 py-3 font-mono text-sm font-black text-cyan-50">
                  {step.formula}
                </div>
              </div>

              <div className="mt-5 grid gap-3 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-stretch">
                {[
                  { label: copy.input, value: step.input[language] },
                  { label: copy.compute, value: step.compute[language] },
                  { label: copy.output, value: step.output[language] }
                ].map((item, index) => (
                  <Fragment key={`${step.key}-${item.label}`}>
                    <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                      <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">{item.label}</p>
                      <p className="mt-3 text-sm font-bold leading-7 text-white">{item.value}</p>
                    </div>
                    {index < 2 ? (
                      <div key={`${step.key}-${item.label}-arrow`} className="hidden items-center justify-center text-slate-500 lg:flex">
                        <ArrowRight size={18} aria-hidden="true" />
                      </div>
                    ) : null}
                  </Fragment>
                ))}
              </div>
            </article>
          ))}
        </div>

        <section className="mt-10 grid gap-5 lg:grid-cols-[1fr_1fr]">
          <div className="glass-card p-5">
            <div className="mb-4 flex items-center gap-2 text-sm font-black text-cyan-100">
              <Beaker size={18} aria-hidden="true" />
              {copy.probabilities}
            </div>
            <div className="space-y-3">
              {active.candidates.map((candidate) => (
                <div key={candidate.token} className="grid grid-cols-[88px_minmax(0,1fr)_44px] items-center gap-3">
                  <span className="font-mono text-sm font-black text-white">{candidate.token}</span>
                  <div className="h-3 overflow-hidden rounded-full bg-slate-900">
                    <div className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-emerald-300" style={{ width: `${candidate.value}%` }} />
                  </div>
                  <span className="text-right font-mono text-xs font-black text-slate-300">{candidate.value}%</span>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-card p-5">
            <div className="mb-4 flex items-center gap-2 text-sm font-black text-violet-100">
              <Thermometer size={18} aria-hidden="true" />
              Temperature
            </div>
            <p className="formula-expression">Formula: softmax(logits / T)</p>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              {language === "zh"
                ? "T 越低，概率分布越尖锐，模型更倾向选择最高概率 token；T 越高，分布更平，输出更有变化。"
                : "Lower T sharpens the distribution and favors the top token; higher T flattens it and makes output more varied."}
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}
