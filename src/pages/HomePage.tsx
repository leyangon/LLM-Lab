import { CourseCards } from "../components/CourseCards";
import { FAQ } from "../components/FAQ";
import { Hero } from "../components/Hero";
import { HowLLMWorks } from "../components/HowLLMWorks";
import { Projects } from "../components/Projects";
import { PromptPlayground } from "../components/PromptPlayground";
import { Resources } from "../components/Resources";
import { Roadmap } from "../components/Roadmap";

export function HomePage() {
  return (
    <main>
      <Hero />
      <Roadmap />
      <CourseCards />
      <PromptPlayground />
      <HowLLMWorks />
      <Projects />
      <Resources />
      <FAQ />
    </main>
  );
}
