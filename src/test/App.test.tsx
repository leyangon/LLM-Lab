import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import App from "../App";
import { LanguageProvider } from "../i18n/LanguageProvider";

function renderRoute(path = "/") {
  return render(
    <LanguageProvider>
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    </LanguageProvider>
  );
}

describe("LLM Learning Lab", () => {
  const originalScrollTo = window.scrollTo;

  beforeEach(() => {
    window.localStorage.clear();
    window.scrollTo = vi.fn();
  });

  afterEach(() => {
    window.scrollTo = originalScrollTo;
  });

  it("renders the hero and roadmap content", () => {
    renderRoute("/");

    expect(screen.getByRole("heading", { name: "LLM Learning Lab" })).toBeInTheDocument();
    expect(screen.getAllByText("大语言模型交互式学习实验室").length).toBeGreaterThan(0);
    expect(screen.getByText("认识 LLM")).toBeInTheDocument();
  });

  it("switches prompt playground presets", async () => {
    const user = userEvent.setup();
    renderRoute("/");

    await user.click(screen.getByRole("button", { name: "生成代码" }));

    expect(screen.getByText(/Python 伪代码/)).toBeInTheDocument();
    expect(screen.getByText(/错误处理的基本流程/)).toBeInTheDocument();
  });

  it("expands FAQ answers", async () => {
    const user = userEvent.setup();
    renderRoute("/");

    await user.click(
      screen.getByRole("button", { name: /RAG 和微调有什么区别/ })
    );

    expect(screen.getByText(/RAG 更像给模型接入资料库/)).toBeInTheDocument();
  });

  it("renders the tutorial portal with categories and lesson links", () => {
    renderRoute("/tutorials");

    expect(screen.getByRole("heading", { name: "LLM 教程中心" })).toBeInTheDocument();
    expect(screen.getAllByText("LLM 基础").length).toBeGreaterThan(0);
    expect(screen.getByRole("link", { name: /Transformer 入门/ })).toBeInTheDocument();
  });

  it("renders a seven-step LLM simulator with formulas and switchable examples", async () => {
    const user = userEvent.setup();
    renderRoute("/simulator");

    expect(screen.getByRole("heading", { name: "LLM 七步生成模拟器" })).toBeInTheDocument();
    expect(screen.getByText("1 输入")).toBeInTheDocument();
    expect(screen.getByText("4 Attention")).toBeInTheDocument();
    expect(screen.getByText("softmax(logits / T)")).toBeInTheDocument();
    expect(screen.getAllByText(/输出是什么/).length).toBeGreaterThan(0);

    await user.click(screen.getByRole("button", { name: "代词指代" }));

    expect(screen.getByText(/it → animal/)).toBeInTheDocument();
  });

  it("renders a lesson flow map at the top of tutorial articles", () => {
    renderRoute("/tutorials/attention-mechanism");

    expect(screen.getByRole("heading", { name: "本节流程图" })).toBeInTheDocument();
    expect(screen.getByText("输入是什么")).toBeInTheDocument();
    expect(screen.getByText("计算了什么")).toBeInTheDocument();
    expect(screen.getByText("输出是什么")).toBeInTheDocument();
    expect(screen.getByText("当前重点：Attention")).toBeInTheDocument();
  });

  it("navigates from tutorial portal to an article page", async () => {
    const user = userEvent.setup();
    renderRoute("/tutorials");

    await user.click(screen.getByRole("link", { name: /Transformer 入门/ }));

    expect(screen.getByRole("heading", { name: "Transformer 入门" })).toBeInTheDocument();
    expect(screen.getByText("学习目标")).toBeInTheDocument();
    expect(screen.getByText(/上一篇/)).toBeInTheDocument();
    expect(screen.getByText(/下一篇/)).toBeInTheDocument();
  });

  it("scrolls to the top when moving to the next tutorial article", async () => {
    const user = userEvent.setup();
    const scrollTo = vi.mocked(window.scrollTo);
    renderRoute("/tutorials/rag-intro");
    scrollTo.mockClear();

    await user.click(screen.getByRole("link", { name: /下一篇 Agent 与工具调用/ }));

    expect(screen.getByRole("heading", { name: "Agent 与工具调用" })).toBeInTheDocument();
    expect(scrollTo).toHaveBeenCalledWith({ top: 0, left: 0, behavior: "auto" });
  });

  it("shows a friendly state for unknown tutorial slugs", () => {
    renderRoute("/tutorials/not-real");

    expect(screen.getByRole("heading", { name: "没有找到这篇教程" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "返回教程中心" })).toBeInTheDocument();
  });

  it("renders Token Explorer and switches token examples", async () => {
    const user = userEvent.setup();
    renderRoute("/tutorials/tokens-context-window");

    expect(screen.getByRole("heading", { name: "Token Explorer" })).toBeInTheDocument();
    expect(screen.getByText("当前约 6 tokens")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "英文技术句子" }));

    expect(screen.getByText("当前约 9 tokens")).toBeInTheDocument();
    expect(screen.getByText("attention")).toBeInTheDocument();
  });

  it("renders Attention Heatmap and responds to token clicks", async () => {
    const user = userEvent.setup();
    renderRoute("/tutorials/attention-mechanism");

    expect(screen.getByRole("heading", { name: "Attention Heatmap" })).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "论文" }));

    expect(screen.getByText("当前关注：论文")).toBeInTheDocument();
  });

  it("renders Prompt Quality Meter and switches presets", async () => {
    const user = userEvent.setup();
    renderRoute("/tutorials/prompt-four-elements");

    expect(screen.getByRole("heading", { name: "Prompt Quality Meter" })).toBeInTheDocument();
    expect(screen.getByText("42 分")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "高质量 Prompt" }));

    expect(screen.getByText("96 分")).toBeInTheDocument();
    expect(screen.getByText("任务、上下文、格式和限制条件都比较明确。")).toBeInTheDocument();
  });

  it("renders RAG Retrieval Demo and switches queries", async () => {
    const user = userEvent.setup();
    renderRoute("/tutorials/rag-intro");

    expect(screen.getByRole("heading", { name: "RAG Retrieval Demo" })).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "校内规章" }));

    expect(screen.getByText("命中文档片段")).toBeInTheDocument();
    expect(screen.getByText(/学生请假需提交审批记录/)).toBeInTheDocument();
  });

  it("renders the Transformer Stack visual", () => {
    renderRoute("/tutorials/transformer-intro");

    expect(screen.getByRole("heading", { name: "Transformer Stack" })).toBeInTheDocument();
    expect(screen.getAllByText("Multi-Head Attention").length).toBeGreaterThan(0);
  });

  it("renders the token embedding matrix visual in the Transformer tutorial", () => {
    renderRoute("/tutorials/transformer-intro");

    expect(screen.getByRole("heading", { name: "输入 + PE" })).toBeInTheDocument();
    expect(screen.getByText("学生")).toBeInTheDocument();
    expect(screen.getByText("下一层")).toBeInTheDocument();
  });

  it("renders the token embedding matrix visual in English", () => {
    window.localStorage.setItem("llm-learning-lab-language", "en");
    renderRoute("/tutorials/transformer-intro");

    expect(screen.getByRole("heading", { name: "Token Embedding + PE" })).toBeInTheDocument();
    expect(screen.getByText("student")).toBeInTheDocument();
    expect(screen.getByText("Next Layer")).toBeInTheDocument();
  });

  it("renders the next-token probability chart in the LLM basics tutorial", () => {
    renderRoute("/tutorials/what-is-llm");

    expect(screen.getByRole("heading", { name: "Next Token 概率分布" })).toBeInTheDocument();
    expect(screen.getByText("回答")).toBeInTheDocument();
    expect(screen.getByText("Temperature")).toBeInTheDocument();
  });

  it("renders the context window chart in the token tutorial", () => {
    renderRoute("/tutorials/tokens-context-window");

    expect(screen.getByRole("heading", { name: "上下文窗口示意图" })).toBeInTheDocument();
    expect(screen.getByText("窗口内")).toBeInTheDocument();
    expect(screen.getByText("被截断")).toBeInTheDocument();
  });

  it("renders Transformer structural charts in the Transformer tutorial", () => {
    renderRoute("/tutorials/transformer-intro");

    expect(screen.getByRole("heading", { name: "位置编码波形" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Q / K / V 投影" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Transformer Block 剖面图" })).toBeInTheDocument();
    expect(screen.getByText("LayerNorm")).toBeInTheDocument();
  });

  it("renders the attention score matrix in the attention tutorial", () => {
    renderRoute("/tutorials/attention-mechanism");

    expect(screen.getByRole("heading", { name: "Attention Score Matrix" })).toBeInTheDocument();
    expect(screen.getByText("当前关注：模型")).toBeInTheDocument();
    expect(screen.getAllByText("学生").length).toBeGreaterThan(0);
  });

  it("renders the RAG chunk retrieval ranking chart", () => {
    renderRoute("/tutorials/rag-intro");

    expect(screen.getByRole("heading", { name: "RAG Chunk 检索排名" })).toBeInTheDocument();
    expect(screen.getByText("Query Embedding")).toBeInTheDocument();
    expect(screen.getByText("Top 1")).toBeInTheDocument();
  });

  it("switches the homepage from Chinese to English without changing routes", async () => {
    const user = userEvent.setup();
    renderRoute("/");

    expect(screen.getAllByText("大语言模型交互式学习实验室").length).toBeGreaterThan(0);

    await user.click(screen.getByRole("button", { name: "EN" }));

    expect(screen.getByRole("link", { name: "Tutorials" })).toBeInTheDocument();
    expect(screen.getAllByText("Interactive Learning Lab for Large Language Models").length).toBeGreaterThan(0);
    expect(window.location.pathname).toBe("/");
    expect(window.localStorage.getItem("llm-learning-lab-language")).toBe("en");
  });

  it("uses the persisted English language on the tutorial portal", () => {
    window.localStorage.setItem("llm-learning-lab-language", "en");

    renderRoute("/tutorials");

    expect(screen.getByRole("heading", { name: "LLM Tutorial Center" })).toBeInTheDocument();
    expect(screen.getAllByText("LLM Fundamentals").length).toBeGreaterThan(0);
    expect(screen.getByRole("link", { name: /Transformer Basics/ })).toBeInTheDocument();
  });

  it("renders translated tutorial article and interactive visual labels in English", async () => {
    const user = userEvent.setup();
    window.localStorage.setItem("llm-learning-lab-language", "en");

    renderRoute("/tutorials/rag-intro");

    expect(screen.getByRole("heading", { name: "RAG Basics" })).toBeInTheDocument();
    expect(screen.getAllByText("Core Concept").length).toBeGreaterThan(0);
    expect(screen.getByRole("heading", { name: "RAG Retrieval Demo" })).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Campus Policy" }));

    expect(screen.getByText("Retrieved Document Snippets")).toBeInTheDocument();
    expect(screen.getByText(/Students must submit an approval record/)).toBeInTheDocument();
  });

  it("renders the bilingual knowledge map on the tutorial center", async () => {
    const user = userEvent.setup();
    renderRoute("/tutorials");

    expect(screen.getByRole("heading", { name: "LLM 知识图谱" })).toBeInTheDocument();
    expect(screen.getByText("Token 与上下文")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "EN" }));

    expect(screen.getByRole("heading", { name: "LLM Knowledge Map" })).toBeInTheDocument();
    expect(screen.getByText("Tokens and Context")).toBeInTheDocument();
  });

  it("renders the English RAG pipeline diagram and switches steps", async () => {
    const user = userEvent.setup();
    window.localStorage.setItem("llm-learning-lab-language", "en");
    renderRoute("/tutorials/rag-intro");

    expect(screen.getByRole("heading", { name: "RAG Pipeline" })).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Retrieve Documents" }));

    expect(screen.getByText(/Find the most relevant course or policy snippets/)).toBeInTheDocument();
  });

  it("renders the Chinese Agent loop diagram and switches steps", async () => {
    const user = userEvent.setup();
    renderRoute("/tutorials/agent-tool-use");

    expect(screen.getByRole("heading", { name: "Agent 循环图" })).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "工具调用" }));

    expect(screen.getByText(/按 schema 调用外部工具/)).toBeInTheDocument();
  });

  it("renders Chinese formula explanations in principle tutorials", () => {
    renderRoute("/tutorials/attention-mechanism");

    expect(screen.getByText("公式解析")).toBeInTheDocument();
    expect(screen.getByText("Attention(Q, K, V) = softmax(QK^T / sqrt(d_k))V")).toBeInTheDocument();
    expect(screen.getByText(/Q 表示当前要查询的信息/)).toBeInTheDocument();
  });

  it("renders English formula explanations for RAG", () => {
    window.localStorage.setItem("llm-learning-lab-language", "en");
    renderRoute("/tutorials/rag-intro");

    expect(screen.getByText("Formula Breakdown")).toBeInTheDocument();
    expect(screen.getByText("sim(q, d) = (q · d) / (||q|| ||d||)")).toBeInTheDocument();
    expect(screen.getByText(/Cosine similarity estimates how close/)).toBeInTheDocument();
  });
});
