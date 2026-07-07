import { GitBranch } from "lucide-react";
import { useLanguage } from "../../i18n/LanguageProvider";

const channels = [
  { key: "Q", zh: "我要查什么", en: "What am I looking for?", color: "cyan" },
  { key: "K", zh: "我能被怎样匹配", en: "How can I be matched?", color: "violet" },
  { key: "V", zh: "我携带什么信息", en: "What information do I carry?", color: "emerald" }
];

export function QKVProjectionVisual() {
  const { language } = useLanguage();

  return (
    <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-4">
      <div className="mb-5 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
        <GitBranch className="text-cyan-200" size={24} aria-hidden="true" />
        <div className="min-w-0">
          <p className="font-mono text-sm font-black text-cyan-50">Embedding x Wq / Wk / Wv</p>
          <p className="text-xs leading-6 text-slate-400">
            {language === "zh" ? "同一份输入会被投影成三种用途不同的向量。" : "The same input is projected into three vectors with different roles."}
          </p>
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        {channels.map((channel) => (
          <div key={channel.key} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <div className="mb-4 flex items-center justify-between">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-cyan-300 text-lg font-black text-slate-950">{channel.key}</span>
              <span className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">Projection</span>
            </div>
            <p className="mb-4 min-h-10 text-sm font-bold leading-6 text-slate-200">{language === "zh" ? channel.zh : channel.en}</p>
            <div className="grid grid-cols-6 gap-1.5">
              {Array.from({ length: 18 }).map((_, index) => (
                <span
                  key={index}
                  className="h-5 rounded-md border border-white/10 bg-gradient-to-br from-cyan-300/80 via-violet-300/60 to-emerald-300/70"
                  style={{ opacity: 0.34 + ((index * 17 + channel.key.charCodeAt(0)) % 60) / 100 }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
