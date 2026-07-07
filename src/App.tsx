import { Route, Routes } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import { SiteLayout } from "./layouts/SiteLayout";
import { TutorialLayout } from "./layouts/TutorialLayout";
import { AboutPage } from "./pages/AboutPage";
import { HomePage } from "./pages/HomePage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ResourcesPage } from "./pages/ResourcesPage";
import { SimulatorPage } from "./pages/SimulatorPage";
import { TutorialsPage } from "./pages/TutorialsPage";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="tutorials" element={<TutorialsPage />} />
          <Route path="tutorials/:slug" element={<TutorialLayout />} />
          <Route path="simulator" element={<SimulatorPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="resources" element={<ResourcesPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<TutorialsPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
