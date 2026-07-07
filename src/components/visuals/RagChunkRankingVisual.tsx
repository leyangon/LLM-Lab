import { Database, Search } from "lucide-react";
import { useLanguage } from "../../i18n/LanguageProvider";

const chunks = {
  zh: [
    { title: "校内请假流程", score: 0.91, note: "包含审批路径和材料要求" },
    { title: "课程考核说明", score: 0.72, note: "提到课程政策但相关性较弱" },
    { title: "图书馆开放时间", score: 0.38, note: "主题不同，通常不应进入上下文" }
  ],
  en: [
    { title: "Campus leave policy", score: 0.91, note: "Contains approval steps and required materials" },
    { title: "Course assessment notes", score: 0.72, note: "Mentions policy but is less relevant" },
    { title: "Library hours", score: 0.38, note: "Different topic and should usually be excluded" }
  ]
};

export function RagChunkRankingVisual() {
  const { language } = useLanguage();
  const rows = chunks[language];

  return (
    <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-4">
      <div className="mb-5 grid gap-3 md:grid-cols-[220px_minmax(0,1fr)] md:items-center">
        <div className="rounded-2xl border border-cyan-200/15 bg-cyan-300/10 p-4">
          <Search className="mb-3 text-cyan-200" size={24} aria-hidden="true" />
          <p className="font-mono text-sm font-black text-cyan-50">Query Embedding</p>
          <p className="mt-2 text-xs leading-6 text-slate-300">{language === "zh" ? "学生问题被转换为向量" : "The student query becomes a vector"}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {["0.22", "0.78", "0.64", "0.91", "0.35", "0.58", "0.83", "0.47"].map((value) => (
            <span key={value} className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 font-mono text-xs font-black text-slate-300">
              {value}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        {rows.map((chunk, index) => (
          <div key={chunk.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <div className="mb-3 flex items-start justify-between gap-3">
              <div className="flex gap-3">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-emerald-300 text-sm font-black text-slate-950">Top {index + 1}</div>
                <div>
                  <p className="text-sm font-black text-white">{chunk.title}</p>
                  <p className="mt-1 text-xs leading-6 text-slate-400">{chunk.note}</p>
                </div>
              </div>
              <Database className="shrink-0 text-emerald-200" size={19} aria-hidden="true" />
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-slate-900">
              <div className="h-full rounded-full bg-gradient-to-r from-emerald-300 to-cyan-300" style={{ width: `${chunk.score * 100}%` }} />
            </div>
            <p className="mt-2 text-right font-mono text-xs font-black text-slate-300">sim {chunk.score.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
