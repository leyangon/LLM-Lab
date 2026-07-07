import { Scissors, ScanText } from "lucide-react";
import { useLanguage } from "../../i18n/LanguageProvider";

const tokens = {
  zh: ["课程", "导言", "Transformer", "Attention", "实验", "报告", "参考", "附录", "旧聊天", "无关片段"],
  en: ["course", "intro", "Transformer", "Attention", "lab", "report", "refs", "appendix", "old chat", "noise"]
};

export function ContextWindowMapVisual() {
  const { language } = useLanguage();
  const items = tokens[language];

  return (
    <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-4">
      <div className="mb-5 grid gap-3 sm:grid-cols-2">
        <div className="flex items-center gap-3 rounded-2xl border border-cyan-200/15 bg-cyan-300/10 p-4">
          <ScanText className="text-cyan-200" size={22} aria-hidden="true" />
          <div>
            <p className="text-sm font-black text-cyan-50">{language === "zh" ? "窗口内" : "Inside Window"}</p>
            <p className="text-xs leading-6 text-slate-300">{language === "zh" ? "会被模型直接读取" : "Directly visible to the model"}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-2xl border border-rose-200/15 bg-rose-300/10 p-4">
          <Scissors className="text-rose-200" size={22} aria-hidden="true" />
          <div>
            <p className="text-sm font-black text-rose-50">{language === "zh" ? "被截断" : "Truncated"}</p>
            <p className="text-xs leading-6 text-slate-300">{language === "zh" ? "需要压缩、摘要或检索补充" : "Needs summarization or retrieval"}</p>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 p-4">
        <div className="absolute bottom-0 top-0 w-[68%] rounded-2xl border border-cyan-300/25 bg-cyan-300/[0.04]" aria-hidden="true" />
        <div className="relative flex flex-wrap gap-2">
          {items.map((token, index) => {
            const inside = index < 7;
            return (
              <span
                key={token}
                className={`rounded-xl border px-3 py-2 font-mono text-xs font-black ${
                  inside
                    ? "border-cyan-200/25 bg-cyan-300/10 text-cyan-50"
                    : "border-rose-200/20 bg-rose-300/10 text-rose-100"
                }`}
              >
                {token}
              </span>
            );
          })}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between text-xs font-black uppercase tracking-[0.18em] text-slate-500">
        <span>{language === "zh" ? "较早内容" : "Earlier"}</span>
        <span>{language === "zh" ? "最近输入" : "Recent"}</span>
      </div>
    </div>
  );
}
