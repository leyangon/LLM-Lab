import { useMemo, useState } from "react";
import { useLanguage } from "../../i18n/LanguageProvider";

const tokenSets = {
  zh: ["学生", "阅读", "论文", "因为", "他", "要", "汇报"],
  en: ["student", "reads", "paper", "because", "he", "will", "present"]
};

const weights: Record<string, number[]> = {
  学生: [0.95, 0.32, 0.24, 0.2, 0.7, 0.34, 0.42],
  阅读: [0.32, 0.95, 0.82, 0.18, 0.28, 0.24, 0.3],
  论文: [0.2, 0.88, 0.95, 0.22, 0.28, 0.36, 0.76],
  因为: [0.28, 0.22, 0.28, 0.95, 0.74, 0.62, 0.4],
  他: [0.82, 0.26, 0.3, 0.62, 0.95, 0.72, 0.58],
  要: [0.38, 0.32, 0.42, 0.48, 0.68, 0.95, 0.76],
  汇报: [0.42, 0.4, 0.82, 0.32, 0.52, 0.82, 0.95]
};

export function AttentionHeatmap() {
  const { language } = useLanguage();
  const tokens = tokenSets[language];
  const [selected, setSelected] = useState("学生");
  const selectedIndex = Math.max(0, tokens.indexOf(selected));
  const activeWeights = useMemo(() => Object.values(weights)[selectedIndex] ?? weights["学生"], [selectedIndex]);
  const activeSelected = tokens.includes(selected) ? selected : tokens[0];

  return (
    <div className="space-y-4">
      <div className="visual-button-row" aria-label={language === "zh" ? "选择当前关注词" : "Select current focus token"}>
        {tokens.map((token) => (
          <button
            key={token}
            type="button"
            className={`visual-choice ${selected === token ? "visual-choice-active" : ""}`}
            onClick={() => setSelected(token)}
          >
            {token}
          </button>
        ))}
      </div>
      <p className="text-sm font-black text-cyan-100">{language === "zh" ? `当前关注：${activeSelected}` : `Current focus: ${activeSelected}`}</p>
      <div className="grid grid-cols-7 gap-2">
        {tokens.map((token, index) => {
          const weight = activeWeights[index];
          return (
            <div
              key={token}
              className="rounded-2xl border border-white/10 p-3 text-center text-xs font-bold text-white"
              style={{ backgroundColor: `rgba(34, 211, 238, ${0.12 + weight * 0.55})` }}
              aria-label={language === "zh" ? `${activeSelected} 关注 ${token} 权重 ${Math.round(weight * 100)}%` : `${activeSelected} attends to ${token}, weight ${Math.round(weight * 100)}%`}
            >
              <span className="block">{token}</span>
              <span className="mt-1 block text-[10px] text-cyan-950">{Math.round(weight * 100)}%</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
