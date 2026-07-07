import { ArrowRight, Bot, BrainCircuit, Database, FileCode2, MessageSquareText, ShieldCheck } from "lucide-react";
import { useLanguage } from "../../i18n/LanguageProvider";

const mapCopy = {
  zh: {
    title: "LLM 知识图谱",
    caption: "从输入文本到应用落地，按学习依赖关系理解 LLM 的核心知识。",
    nodes: [
      { title: "Token 与上下文", desc: "模型读取文本的基本单位和记忆窗口。", icon: MessageSquareText },
      { title: "Transformer", desc: "把上下文关系反复加工的核心架构。", icon: BrainCircuit },
      { title: "Prompt 设计", desc: "用任务、上下文、格式和限制组织指令。", icon: FileCode2 },
      { title: "RAG 知识增强", desc: "检索资料后再生成可追溯回答。", icon: Database },
      { title: "Agent 与工具", desc: "让模型规划步骤并调用外部能力。", icon: Bot },
      { title: "安全与评估", desc: "检查幻觉、隐私、偏见和使用边界。", icon: ShieldCheck }
    ]
  },
  en: {
    title: "LLM Knowledge Map",
    caption: "Understand core LLM topics by their learning dependencies, from text input to usable applications.",
    nodes: [
      { title: "Tokens and Context", desc: "The basic text units and memory window a model reads.", icon: MessageSquareText },
      { title: "Transformer", desc: "The architecture that repeatedly processes contextual relations.", icon: BrainCircuit },
      { title: "Prompt Design", desc: "Organize instructions with task, context, format, and constraints.", icon: FileCode2 },
      { title: "RAG Grounding", desc: "Retrieve evidence before generating traceable answers.", icon: Database },
      { title: "Agents and Tools", desc: "Let models plan steps and call external capabilities.", icon: Bot },
      { title: "Safety and Evaluation", desc: "Check hallucination, privacy, bias, and boundaries.", icon: ShieldCheck }
    ]
  }
};

export function KnowledgeMap() {
  const { language } = useLanguage();
  const copy = mapCopy[language];

  return (
    <section className="diagram-panel" aria-labelledby="knowledge-map-title">
      <div className="diagram-panel-header">
        <span className="diagram-kicker">{language === "zh" ? "学习导航" : "Learning Navigator"}</span>
        <h2 id="knowledge-map-title" className="diagram-title">
          {copy.title}
        </h2>
        <p className="diagram-caption">{copy.caption}</p>
      </div>
      <div className="grid gap-3 lg:grid-cols-6">
        {copy.nodes.map((node, index) => {
          const Icon = node.icon;
          return (
            <article key={node.title} className="diagram-node relative">
              <Icon className="text-cyan-200" size={22} aria-hidden="true" />
              <h3 className="mt-3 font-display text-base font-black text-white">{node.title}</h3>
              <p className="mt-2 text-xs leading-6 text-slate-300">{node.desc}</p>
              {index < copy.nodes.length - 1 && (
                <ArrowRight className="absolute -right-4 top-1/2 hidden text-cyan-200/40 lg:block" size={20} aria-hidden="true" />
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
