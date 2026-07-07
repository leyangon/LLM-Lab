import { ArrowDown, Blocks } from "lucide-react";
import { useLanguage } from "../../i18n/LanguageProvider";

const steps = [
  { label: "LayerNorm", zh: "稳定输入分布", en: "Stabilize activations" },
  { label: "Multi-Head Attention", zh: "并行查看不同关系", en: "Attend to multiple relations" },
  { label: "Residual Add", zh: "保留原始信息通路", en: "Keep the original signal path" },
  { label: "Feed Forward Network", zh: "逐 token 做非线性变换", en: "Transform each token nonlinearly" },
  { label: "Residual Add", zh: "输出到下一层", en: "Pass output to the next layer" }
];

export function TransformerBlockAnatomy() {
  const { language } = useLanguage();

  return (
    <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-4">
      <div className="mb-5 flex items-center gap-3">
        <div className="grid h-11 w-11 place-items-center rounded-2xl border border-cyan-200/20 bg-cyan-300/10 text-cyan-100">
          <Blocks size={22} aria-hidden="true" />
        </div>
        <p className="text-sm font-black text-white">{language === "zh" ? "一个 Transformer Block 的内部路线" : "Inside a Transformer block"}</p>
      </div>

      <div className="grid gap-3">
        {steps.map((step, index) => (
          <div key={`${step.label}-${index}`}>
            <div className="grid gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:grid-cols-[190px_minmax(0,1fr)] sm:items-center">
              <span className="rounded-xl border border-cyan-200/15 bg-cyan-300/10 px-3 py-2 font-mono text-sm font-black text-cyan-50">
                {step.label}
              </span>
              <span className="text-sm leading-6 text-slate-300">{language === "zh" ? step.zh : step.en}</span>
            </div>
            {index < steps.length - 1 ? (
              <div className="grid h-7 place-items-center text-slate-500">
                <ArrowDown size={17} aria-hidden="true" />
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
