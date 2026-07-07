import { Waves } from "lucide-react";
import { useLanguage } from "../../i18n/LanguageProvider";

const bars = [18, 30, 44, 56, 62, 54, 39, 24, 16, 26, 42, 58, 64, 50, 34, 20];

export function PositionalEncodingVisual() {
  const { language } = useLanguage();

  return (
    <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-4">
      <div className="mb-5 flex items-center gap-3">
        <div className="grid h-11 w-11 place-items-center rounded-2xl border border-cyan-200/20 bg-cyan-300/10 text-cyan-100">
          <Waves size={22} aria-hidden="true" />
        </div>
        <div>
          <p className="text-sm font-black text-white">{language === "zh" ? "Embedding + Position Signal" : "Embedding + Position Signal"}</p>
          <p className="text-xs leading-6 text-slate-400">
            {language === "zh" ? "相同 token 在不同位置会获得不同的位置特征。" : "The same token receives different position features at different positions."}
          </p>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1fr_1fr]">
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-slate-500">Token Embedding</p>
          <div className="flex h-24 items-end gap-2">
            {bars.map((height, index) => (
              <span key={index} className="flex-1 rounded-t-lg bg-gradient-to-t from-slate-700 to-cyan-300/80" style={{ height }} />
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-violet-200/15 bg-violet-300/10 p-4">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-violet-200">+ PE</p>
          <div className="flex h-24 items-end gap-2">
            {bars.map((height, index) => (
              <span
                key={index}
                className="flex-1 rounded-t-lg bg-gradient-to-t from-cyan-500/40 via-emerald-300/80 to-violet-300"
                style={{ height: height + Math.sin(index * 0.9) * 12 + 8 }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-4 gap-2 text-center font-mono text-xs font-black text-slate-300">
        {["pos 1", "pos 2", "pos 3", "pos 4"].map((label) => (
          <span key={label} className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2">
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
