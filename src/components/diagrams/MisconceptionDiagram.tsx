import { AlertTriangle, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../../i18n/LanguageProvider";

const copy = {
  zh: {
    myth: "常见误解",
    better: "更准确的理解",
    rows: [
      ["LLM 像数据库一样保存所有答案。", "LLM 更像概率生成系统，需要上下文和验证。"],
      ["回答很流畅就一定正确。", "流畅不等于可靠，事实性内容应检查来源。"],
      ["Prompt 写一次就可以永久稳定。", "Prompt 需要样例测试、失败记录和迭代优化。"]
    ]
  },
  en: {
    myth: "Common Myth",
    better: "Better Understanding",
    rows: [
      ["An LLM stores every answer like a database.", "An LLM is a probabilistic generator that needs context and verification."],
      ["A fluent answer must be correct.", "Fluency is not reliability; factual claims need sources."],
      ["One prompt can stay stable forever.", "Prompts need test cases, failure logs, and iteration."]
    ]
  }
};

export function MisconceptionDiagram() {
  const { language } = useLanguage();
  const text = copy[language];

  return (
    <div className="grid gap-3">
      <div className="grid gap-3 md:grid-cols-2">
        <div className="rounded-2xl border border-amber-300/20 bg-amber-300/10 p-4">
          <div className="flex items-center gap-2 text-sm font-black text-amber-100">
            <AlertTriangle size={18} aria-hidden="true" />
            {text.myth}
          </div>
        </div>
        <div className="rounded-2xl border border-emerald-300/20 bg-emerald-300/10 p-4">
          <div className="flex items-center gap-2 text-sm font-black text-emerald-100">
            <CheckCircle2 size={18} aria-hidden="true" />
            {text.better}
          </div>
        </div>
      </div>
      {text.rows.map(([myth, better]) => (
        <div key={myth} className="grid gap-3 md:grid-cols-2">
          <p className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm leading-7 text-slate-300">{myth}</p>
          <p className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-4 text-sm leading-7 text-cyan-50">{better}</p>
        </div>
      ))}
    </div>
  );
}
