import { useLanguage } from "../../i18n/LanguageProvider";

const layers = [
  { name: "Token Embedding", detail: { zh: "把文本单位映射成向量", en: "Map text units into vectors" } },
  { name: "Positional Encoding", detail: { zh: "补充顺序位置信息", en: "Add sequence-position information" } },
  { name: "Multi-Head Attention", detail: { zh: "从多个角度计算上下文关联", en: "Compute contextual links from multiple heads" } },
  { name: "Feed Forward Network", detail: { zh: "加工每个位置的语义表示", en: "Refine semantic representation at each position" } },
  { name: "Output Projection", detail: { zh: "转换为下一个 Token 概率", en: "Project representations into next-token probabilities" } }
];

export function TransformerStackVisual() {
  const { language } = useLanguage();

  return (
    <div className="grid gap-3">
      {layers.map((layer, index) => (
        <div
          key={layer.name}
          className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-slate-950/70 p-4"
          style={{ transform: `translateX(${index % 2 === 0 ? 0 : 14}px)` }}
        >
          <div>
            <p className="font-display text-sm font-black text-white">{layer.name}</p>
            <p className="mt-1 text-xs leading-5 text-slate-400">{layer.detail[language]}</p>
          </div>
          <span className="rounded-full border border-cyan-200/20 px-3 py-1 text-xs font-bold text-cyan-100">
            L{index + 1}
          </span>
        </div>
      ))}
    </div>
  );
}
