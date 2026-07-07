import { ArrowRight } from "lucide-react";
import { useLanguage } from "../../i18n/LanguageProvider";

const values = [
  [0.18, 0.72, 0.44, 0.88, 0.31, 0.63, 0.15, 0.55, 0.79, 0.24, 0.68, 0.37, 0.91, 0.46, 0.58, 0.29, 0.74, 0.41],
  [0.61, 0.25, 0.83, 0.39, 0.69, 0.12, 0.52, 0.94, 0.33, 0.76, 0.47, 0.21, 0.86, 0.57, 0.18, 0.64, 0.35, 0.8],
  [0.28, 0.66, 0.19, 0.73, 0.49, 0.9, 0.38, 0.58, 0.14, 0.82, 0.43, 0.71, 0.27, 0.62, 0.96, 0.34, 0.53, 0.22],
  [0.77, 0.42, 0.59, 0.16, 0.87, 0.36, 0.7, 0.23, 0.64, 0.48, 0.92, 0.3, 0.56, 0.81, 0.2, 0.67, 0.45, 0.89],
  [0.35, 0.81, 0.26, 0.52, 0.93, 0.41, 0.6, 0.17, 0.75, 0.29, 0.84, 0.5, 0.13, 0.69, 0.39, 0.95, 0.57, 0.32]
];

const tokenSets = {
  zh: ["学生", "提问", "模型", "生成", "回答"],
  en: ["student", "asks", "model", "generates", "answer"]
};

function colorFor(value: number) {
  if (value > 0.78) {
    return "linear-gradient(180deg, rgba(167, 139, 250, 0.95), rgba(34, 211, 238, 0.82))";
  }

  if (value > 0.55) {
    return "linear-gradient(180deg, rgba(34, 211, 238, 0.9), rgba(16, 185, 129, 0.68))";
  }

  if (value > 0.32) {
    return "linear-gradient(180deg, rgba(59, 130, 246, 0.82), rgba(34, 211, 238, 0.45))";
  }

  return "linear-gradient(180deg, rgba(30, 41, 59, 0.95), rgba(14, 165, 233, 0.32))";
}

export function EmbeddingMatrixVisual() {
  const { language } = useLanguage();
  const tokens = tokenSets[language];

  return (
    <div className="embedding-card" aria-label={language === "zh" ? "Token embedding 矩阵可视化" : "Token embedding matrix visualization"}>
      <div className="embedding-matrix-scroll">
        <div className="min-w-[540px]">
          <div className="mb-3 grid grid-cols-[92px_minmax(0,1fr)] gap-3 px-3 text-xs font-black uppercase tracking-[0.18em] text-slate-500">
            <span>Token</span>
            <span>{language === "zh" ? "Embedding 维度" : "Embedding Dimensions"}</span>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-950/70">
            {tokens.map((token, rowIndex) => (
              <div key={token} className="embedding-row">
                <div className="embedding-token">{token}</div>
                <div className="embedding-bars">
                  {values[rowIndex].map((value, columnIndex) => (
                    <span
                      key={`${token}-${columnIndex}`}
                      className="embedding-cell"
                      title={`d${columnIndex + 1}: ${value.toFixed(2)}`}
                      style={{
                        height: `${10 + value * 26}px`,
                        background: colorFor(value),
                        opacity: 0.62 + value * 0.36
                      }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="embedding-next">
        <ArrowRight size={28} aria-hidden="true" />
        <span>{language === "zh" ? "下一层" : "Next Layer"}</span>
      </div>
    </div>
  );
}
