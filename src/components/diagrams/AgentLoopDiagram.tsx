import { useState } from "react";
import { ClipboardList, Eye, Flag, Hammer, Route, Send } from "lucide-react";
import { useLanguage } from "../../i18n/LanguageProvider";

const agentSteps = {
  zh: [
    { label: "目标理解", title: "识别用户真正要完成什么", detail: "把自然语言需求整理成目标、约束和成功标准。", icon: Flag },
    { label: "任务规划", title: "拆成可执行步骤", detail: "决定先查信息、再计算、还是先向用户确认关键条件。", icon: Route },
    { label: "工具调用", title: "调用外部能力", detail: "按 schema 调用外部工具，例如搜索、数据库、计算器或课程系统接口。", icon: Hammer },
    { label: "观察结果", title: "读取工具返回", detail: "检查工具是否成功、结果是否足够，以及是否需要再次调用。", icon: Eye },
    { label: "继续推理", title: "把观察放回上下文", detail: "基于工具结果更新计划，必要时进入下一轮循环。", icon: ClipboardList },
    { label: "最终回答", title: "给出可执行结论", detail: "说明完成了什么、依据是什么，以及是否存在限制。", icon: Send }
  ],
  en: [
    { label: "Understand Goal", title: "Identify what the user wants done", detail: "Turn natural-language requests into a goal, constraints, and success criteria.", icon: Flag },
    { label: "Plan Steps", title: "Break work into executable steps", detail: "Decide whether to search, calculate, or ask for confirmation first.", icon: Route },
    { label: "Call Tool", title: "Use external capabilities", detail: "Call tools by schema, such as search, databases, calculators, or course-system APIs.", icon: Hammer },
    { label: "Observe Result", title: "Read the tool output", detail: "Check whether the tool succeeded, whether results are enough, and whether another call is needed.", icon: Eye },
    { label: "Reason Again", title: "Put observation back into context", detail: "Update the plan from the tool result and loop again when necessary.", icon: ClipboardList },
    { label: "Final Answer", title: "Return an actionable result", detail: "Explain what was done, what evidence was used, and what limitations remain.", icon: Send }
  ]
};

export function AgentLoopDiagram() {
  const { language } = useLanguage();
  const steps = agentSteps[language];
  const [activeIndex, setActiveIndex] = useState(0);
  const active = steps[activeIndex];
  const Icon = active.icon;

  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {steps.map((step, index) => (
          <button
            key={step.label}
            type="button"
            aria-label={step.label}
            className={`diagram-step-button min-h-24 flex-col ${activeIndex === index ? "diagram-step-active" : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            <span>{index + 1}</span>
            {step.label}
          </button>
        ))}
      </div>
      <article className="diagram-split-card">
        <Icon className="text-violet-200" size={30} aria-hidden="true" />
        <h4 className="mt-4 font-display text-2xl font-black text-white">{active.title}</h4>
        <p className="mt-3 text-sm leading-7 text-slate-300">{active.detail}</p>
      </article>
    </div>
  );
}
