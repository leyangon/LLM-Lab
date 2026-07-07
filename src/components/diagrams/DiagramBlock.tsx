import type { ReactElement } from "react";
import type { DiagramKind, TutorialBlock } from "../../data/tutorials";
import { useLanguage } from "../../i18n/LanguageProvider";
import { AgentLoopDiagram } from "./AgentLoopDiagram";
import { MisconceptionDiagram } from "./MisconceptionDiagram";
import { PromptIterationDiagram } from "./PromptIterationDiagram";
import { RagPipelineDiagram } from "./RagPipelineDiagram";
import { TrainingAlignmentDiagram } from "./TrainingAlignmentDiagram";

const diagramComponents: Record<DiagramKind, () => ReactElement> = {
  misconception: MisconceptionDiagram,
  "rag-pipeline": RagPipelineDiagram,
  "agent-loop": AgentLoopDiagram,
  "prompt-iteration": PromptIterationDiagram,
  "training-alignment": TrainingAlignmentDiagram
};

export function DiagramBlock({ block }: { block: Extract<TutorialBlock, { type: "diagram" }> }) {
  const Component = diagramComponents[block.diagram];
  const { language } = useLanguage();
  const kicker = language === "zh" ? "图解理解" : "Visual Explanation";

  return (
    <section className="diagram-panel" aria-labelledby={`${block.diagram}-title`}>
      <div className="diagram-panel-header">
        <span className="diagram-kicker">{kicker}</span>
        <h3 id={`${block.diagram}-title`} className="diagram-title">
          {block.title}
        </h3>
        <p className="diagram-caption">{block.caption}</p>
      </div>
      <Component />
    </section>
  );
}
