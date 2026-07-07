import type { ReactElement } from "react";
import type { TutorialBlock, VisualKind } from "../../data/tutorials";
import { useLanguage } from "../../i18n/LanguageProvider";
import { AIComparisonVisual } from "./AIComparisonVisual";
import { AttentionScoreMatrixVisual } from "./AttentionScoreMatrixVisual";
import { AttentionHeatmap } from "./AttentionHeatmap";
import { ContextWindowMapVisual } from "./ContextWindowMapVisual";
import { EmbeddingMatrixVisual } from "./EmbeddingMatrixVisual";
import { LLMFlowDiagram } from "./LLMFlowDiagram";
import { NextTokenProbabilityVisual } from "./NextTokenProbabilityVisual";
import { PositionalEncodingVisual } from "./PositionalEncodingVisual";
import { PromptQualityMeter } from "./PromptQualityMeter";
import { QKVProjectionVisual } from "./QKVProjectionVisual";
import { RagChunkRankingVisual } from "./RagChunkRankingVisual";
import { RagRetrievalDemo } from "./RagRetrievalDemo";
import { TokenExplorer } from "./TokenExplorer";
import { TrainingPipelineVisual } from "./TrainingPipelineVisual";
import { TransformerBlockAnatomy } from "./TransformerBlockAnatomy";
import { TransformerStackVisual } from "./TransformerStackVisual";

const visualComponents: Record<VisualKind, () => ReactElement> = {
  "llm-flow": LLMFlowDiagram,
  "ai-comparison": AIComparisonVisual,
  "token-explorer": TokenExplorer,
  "embedding-matrix": EmbeddingMatrixVisual,
  "positional-encoding": PositionalEncodingVisual,
  "attention-score-matrix": AttentionScoreMatrixVisual,
  "qkv-projection": QKVProjectionVisual,
  "next-token-probability": NextTokenProbabilityVisual,
  "context-window-map": ContextWindowMapVisual,
  "rag-chunk-ranking": RagChunkRankingVisual,
  "transformer-block": TransformerBlockAnatomy,
  "transformer-stack": TransformerStackVisual,
  "attention-heatmap": AttentionHeatmap,
  "training-pipeline": TrainingPipelineVisual,
  "prompt-quality-meter": PromptQualityMeter,
  "rag-retrieval-demo": RagRetrievalDemo
};

export function VisualBlock({ block }: { block: Extract<TutorialBlock, { type: "visual" }> }) {
  const Component = visualComponents[block.visual];
  const { t } = useLanguage();

  return (
    <section className="visual-panel" aria-labelledby={`${block.visual}-title`}>
      <div className="visual-panel-header">
        <span className="visual-kicker">{t("visual.interactive")}</span>
        <h3 id={`${block.visual}-title`} className="visual-title">
          {block.title}
        </h3>
        <p className="visual-caption">{block.caption}</p>
      </div>
      <Component />
    </section>
  );
}
