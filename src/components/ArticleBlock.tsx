import { AlertTriangle, CheckCircle2, FlaskConical, FunctionSquare, Lightbulb } from "lucide-react";
import type { TutorialBlock } from "../data/tutorials";
import { DiagramBlock } from "./diagrams/DiagramBlock";
import { VisualBlock } from "./visuals/VisualBlock";

const toneStyles = {
  concept: {
    icon: Lightbulb,
    className: "border-cyan-300/25 bg-cyan-300/10 text-cyan-50",
    iconClass: "text-cyan-200"
  },
  example: {
    icon: FlaskConical,
    className: "border-emerald-300/25 bg-emerald-300/10 text-emerald-50",
    iconClass: "text-emerald-200"
  },
  warning: {
    icon: AlertTriangle,
    className: "border-amber-300/25 bg-amber-300/10 text-amber-50",
    iconClass: "text-amber-200"
  },
  exercise: {
    icon: CheckCircle2,
    className: "border-violet-300/25 bg-violet-300/10 text-violet-50",
    iconClass: "text-violet-200"
  }
};

export function ArticleBlock({ block }: { block: TutorialBlock }) {
  if (block.type === "paragraph") {
    return <p className="article-paragraph">{block.text}</p>;
  }

  if (block.type === "list") {
    return (
      <ul className="article-list">
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }

  if (block.type === "callout") {
    const tone = toneStyles[block.tone];
    const Icon = tone.icon;
    return (
      <aside className={`rounded-3xl border p-5 ${tone.className}`}>
        <div className="flex items-center gap-2 font-display text-base font-black">
          <Icon className={tone.iconClass} size={19} aria-hidden="true" />
          {block.title}
        </div>
        <p className="mt-3 text-sm leading-7 text-slate-200">{block.text}</p>
      </aside>
    );
  }

  if (block.type === "code") {
    return (
      <div className="article-code">
        <div className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
          {block.language}
        </div>
        <pre>{block.code}</pre>
      </div>
    );
  }

  if (block.type === "prompt") {
    return (
      <div className="article-prompt">
        <p className="mb-3 text-sm font-black text-emerald-200">{block.title}</p>
        <pre>{block.prompt}</pre>
      </div>
    );
  }

  if (block.type === "formula") {
    return (
      <div className="formula-card">
        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.22em] text-cyan-300">
          <FunctionSquare size={17} aria-hidden="true" />
          {block.label}
        </div>
        <p className="formula-expression">{block.formula}</p>
        <p className="mt-4 text-sm leading-7 text-slate-300">{block.explanation}</p>
        <dl className="mt-5 grid gap-3 sm:grid-cols-2">
          {block.symbols.map((item) => (
            <div key={item.symbol} className="formula-symbol">
              <dt>{item.symbol}</dt>
              <dd>{item.meaning}</dd>
            </div>
          ))}
        </dl>
      </div>
    );
  }

  if (block.type === "visual") {
    return <VisualBlock block={block} />;
  }

  if (block.type === "diagram") {
    return <DiagramBlock block={block} />;
  }

  return (
    <ol className="article-steps">
      {block.items.map((item, index) => (
        <li key={item}>
          <span>{index + 1}</span>
          {item}
        </li>
      ))}
    </ol>
  );
}
