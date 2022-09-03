import { Route, Routes } from "react-router-dom";

import { About } from "./pages/About";
import { Articles } from "./pages/Articles";
import { Home } from "./pages/Home";
import { Portfolio } from "./pages/Portfolio";
import { Projects } from "./pages/Projects";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/artigos" element={<Articles />} />
      <Route path="/sobre" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/projetos" element={<Projects />} />
    </Routes>
  );
}
