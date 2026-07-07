import { motion } from "framer-motion";
import { ArrowRight, Bot, BrainCircuit, Code2, MessageSquareText, Network, Sigma } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageProvider";

const workflow = [
  { label: "User Prompt", icon: MessageSquareText, detail: { zh: "输入任务与上下文", en: "Provide task and context" } },
  { label: "Tokenization", icon: Code2, detail: { zh: "文本切成 Token", en: "Split text into tokens" } },
  { label: "Transformer", icon: BrainCircuit, detail: { zh: "Attention 建模关系", en: "Model relations with Attention" } },
  { label: "Probability", icon: Sigma, detail: { zh: "预测下一个 Token", en: "Predict the next token" } },
  { label: "Response", icon: Bot, detail: { zh: "逐步生成回答", en: "Generate the answer step by step" } }
];

export function Hero() {
  const { language, t } = useLanguage();

  return (
    <section id="home" className="relative overflow-hidden pt-32 sm:pt-36">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[520px] w-[920px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-emerald-400/20 blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,.08)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(circle_at_top,black,transparent_72%)]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-[1.02fr_.98fr] lg:px-8 lg:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100">
            <Network size={16} aria-hidden="true" />
            {t("hero.badge")}
          </div>
          <h1 className="font-display text-5xl font-black leading-[1.02] text-white sm:text-6xl lg:text-7xl">
            LLM Learning Lab
          </h1>
          <p className="mt-5 text-2xl font-bold text-cyan-100 sm:text-3xl">
            {t("hero.subtitle")}
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-9 text-slate-300">
            {t("hero.description")}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link to="/tutorials" className="btn-primary">
              {t("hero.start")}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <a href="#roadmap" className="btn-secondary">
              {t("hero.roadmap")}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 28 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8, ease: "easeOut" }}
          className="glass-card relative p-5 shadow-emerald"
        >
          <div className="mb-4 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Inference Flow</p>
              <h2 className="mt-2 font-display text-2xl font-black text-white">{t("hero.flow.title")}</h2>
            </div>
            <div className="rounded-full border border-emerald-300/30 bg-emerald-300/10 px-3 py-1 text-xs font-bold text-emerald-200">
              {t("hero.flow.badge")}
            </div>
          </div>
          <div className="grid gap-3">
            {workflow.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 3.4, repeat: Infinity, delay: index * 0.16 }}
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-cyan-300/40 hover:bg-cyan-300/10"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-slate-950 text-cyan-200 ring-1 ring-cyan-300/25">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-display text-base font-black text-white">{item.label}</span>
                    <span className="block text-sm text-slate-400">{item.detail[language]}</span>
                  </span>
                  {index < workflow.length - 1 ? (
                    <ArrowRight className="ml-auto hidden text-slate-500 sm:block" size={18} aria-hidden="true" />
                  ) : null}
                </motion.div>
              );
            })}
          </div>
          <div className="mt-5 rounded-2xl border border-cyan-300/20 bg-slate-950/70 p-4 font-mono text-sm text-cyan-100">
            P(next token | previous tokens)
          </div>
        </motion.div>
      </div>
    </section>
  );
}
