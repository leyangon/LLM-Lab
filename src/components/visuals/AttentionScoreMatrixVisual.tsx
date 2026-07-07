import { Fragment, useState } from "react";
import { useLanguage } from "../../i18n/LanguageProvider";

const tokenSets = {
  zh: ["学生", "向", "模型", "提问"],
  en: ["student", "asks", "model", "question"]
};

const matrix = [
  [0.92, 0.34, 0.48, 0.42],
  [0.28, 0.9, 0.52, 0.64],
  [0.74, 0.56, 0.94, 0.82],
  [0.46, 0.62, 0.76, 0.91]
];

export function AttentionScoreMatrixVisual() {
  const { language } = useLanguage();
  const tokens = tokenSets[language];
  const [focusIndex, setFocusIndex] = useState(2);
  const focusToken = tokens[focusIndex];

  return (
    <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-4">
      <div className="mb-4 flex flex-wrap items-center gap-2">
        {tokens.map((token, index) => (
          <button
            key={token}
            type="button"
            className={`visual-choice ${focusIndex === index ? "visual-choice-active" : ""}`}
            onClick={() => setFocusIndex(index)}
          >
            {token}
          </button>
        ))}
      </div>
      <p className="mb-4 text-sm font-black text-cyan-100">{language === "zh" ? `当前关注：${focusToken}` : `Current focus: ${focusToken}`}</p>

      <div className="overflow-x-auto">
        <div className="grid min-w-[420px] grid-cols-[76px_repeat(4,1fr)] gap-2">
          <span />
          {tokens.map((token) => (
            <span key={`head-${token}`} className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-center text-xs font-black text-slate-300">
              {token}
            </span>
          ))}
          {tokens.map((rowToken, rowIndex) => (
            <Fragment key={`row-${rowToken}`}>
              <span className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-center text-xs font-black text-slate-300">
                {rowToken}
              </span>
              {tokens.map((columnToken, columnIndex) => {
                const value = matrix[rowIndex][columnIndex];
                const active = rowIndex === focusIndex;
                return (
                  <span
                    key={`${rowToken}-${columnToken}`}
                    className={`rounded-xl border px-3 py-3 text-center font-mono text-xs font-black ${
                      active ? "border-cyan-200/25 text-white" : "border-white/10 text-slate-400"
                    }`}
                    style={{ backgroundColor: `rgba(34, 211, 238, ${0.08 + value * (active ? 0.62 : 0.28)})` }}
                  >
                    {value.toFixed(2)}
                  </span>
                );
              })}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
