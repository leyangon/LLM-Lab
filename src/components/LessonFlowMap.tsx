import { Fragment } from "react";
import { ArrowRight, Calculator, GitBranch } from "lucide-react";
import { getLessonPipelineFocus, pipelineSteps } from "../data/pipeline";
import type { TutorialLesson } from "../data/tutorials";
import { useLanguage } from "../i18n/LanguageProvider";

export function LessonFlowMap({ lesson }: { lesson: TutorialLesson }) {
  const { language } = useLanguage();
  const focus = getLessonPipelineFocus(lesson.slug);

  const labels = {
    title: language === "zh" ? "本节流程图" : "Lesson Flow Map",
    caption:
      language === "zh"
        ? "先定位本节知识在 LLM 生成流水线中的位置，再看输入、计算和输出，公式会更容易理解。"
        : "Locate this lesson in the LLM generation pipeline first, then read its input, computation, output, and formula.",
    current: language === "zh" ? "当前重点" : "Current focus",
    input: language === "zh" ? "输入是什么" : "What goes in",
    compute: language === "zh" ? "计算了什么" : "What is computed",
    output: language === "zh" ? "输出是什么" : "What comes out"
  };

  return (
    <section className="lesson-flow-panel" aria-labelledby="lesson-flow-title">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-300">Pipeline Map</p>
          <h2 id="lesson-flow-title" className="mt-2 font-display text-2xl font-black text-white">
            {labels.title}
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-300">{labels.caption}</p>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-sm font-black text-emerald-100">
          <GitBranch size={16} aria-hidden="true" />
          <span>{labels.current}：{focus.label[language]}</span>
        </div>
      </div>

      <div className="mt-6 overflow-x-auto">
        <div className="grid min-w-[760px] grid-cols-7 gap-2">
          {pipelineSteps.map((step) => {
            const active = step.key === focus.key;
            return (
              <div key={step.key} className={`lesson-flow-step ${active ? "lesson-flow-step-active" : ""}`}>
                <span>{step.index}</span>
                <strong>{step.label[language]}</strong>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-6 grid gap-3 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-stretch">
        {[
          { label: labels.input, value: focus.input[language] },
          { label: labels.compute, value: focus.compute[language] },
          { label: labels.output, value: focus.output[language] }
        ].map((item, index) => (
          <Fragment key={item.label}>
            <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">{item.label}</p>
              <p className="mt-3 text-sm font-bold leading-7 text-white">{item.value}</p>
            </div>
            {index < 2 ? (
              <div key={`${item.label}-arrow`} className="hidden items-center justify-center text-slate-500 lg:flex">
                <ArrowRight size={20} aria-hidden="true" />
              </div>
            ) : null}
          </Fragment>
        ))}
      </div>

      <div className="mt-4 rounded-2xl border border-cyan-200/15 bg-cyan-300/10 p-4">
        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-cyan-200">
          <Calculator size={16} aria-hidden="true" />
          <span>Formula</span>
        </div>
        <p className="mt-3 overflow-x-auto font-mono text-sm leading-7 text-cyan-50">{focus.formula}</p>
        <p className="mt-3 text-sm leading-7 text-slate-300">{focus.intuition[language]}</p>
      </div>
    </section>
  );
}
