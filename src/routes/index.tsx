import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { MainPage } from "../pages/MainPage";
import { RepositoriesPage } from "../pages/RepositoriesPage";
import { NotFoundPage } from "../pages/NotFoundPage";

export function RoutesApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:login/repositories" element={<RepositoriesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}
