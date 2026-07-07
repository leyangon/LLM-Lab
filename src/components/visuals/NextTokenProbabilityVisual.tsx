import { SlidersHorizontal } from "lucide-react";
import { useLanguage } from "../../i18n/LanguageProvider";

const candidates = {
  zh: [
    { token: "回答", probability: 0.42 },
    { token: "解释", probability: 0.24 },
    { token: "生成", probability: 0.16 },
    { token: "示例", probability: 0.11 },
    { token: "代码", probability: 0.07 }
  ],
  en: [
    { token: "answer", probability: 0.42 },
    { token: "explain", probability: 0.24 },
    { token: "generate", probability: 0.16 },
    { token: "example", probability: 0.11 },
    { token: "code", probability: 0.07 }
  ]
};

export function NextTokenProbabilityVisual() {
  const { language } = useLanguage();
  const rows = candidates[language];

  return (
    <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-4">
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="rounded-2xl border border-cyan-200/15 bg-cyan-300/10 px-4 py-3 font-mono text-sm text-cyan-50">
          {language === "zh" ? "Prompt: 请解释 Transformer 的作用..." : "Prompt: Explain what Transformer does..."}
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-violet-300/10 px-4 py-2 text-xs font-black text-violet-100">
          <SlidersHorizontal size={15} aria-hidden="true" />
          <span>Temperature</span>
          <span className="font-mono">0.7</span>
        </div>
      </div>

      <div className="space-y-3">
        {rows.map((item, index) => (
          <div key={item.token} className="grid grid-cols-[76px_minmax(0,1fr)_48px] items-center gap-3">
            <span className="rounded-xl border border-white/10 bg-white/[0.05] px-3 py-2 text-center font-mono text-sm font-black text-white">
              {item.token}
            </span>
            <div className="h-4 overflow-hidden rounded-full border border-white/10 bg-slate-900">
              <div
                className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-emerald-300 to-violet-300"
                style={{ width: `${item.probability * 100}%`, opacity: 0.95 - index * 0.09 }}
              />
            </div>
            <span className="text-right font-mono text-xs font-black text-slate-300">{Math.round(item.probability * 100)}%</span>
          </div>
        ))}
      </div>

      <p className="mt-5 text-sm leading-7 text-slate-300">
        {language === "zh"
          ? "模型不是直接“想出整句话”，而是在每一步为候选 token 分配概率，再按解码策略选择下一个 token。"
          : "The model does not create a whole sentence at once. It assigns probabilities to candidate tokens at each step, then a decoding strategy picks the next token."}
      </p>
    </div>
  );
}
