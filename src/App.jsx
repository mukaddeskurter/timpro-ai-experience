import { Routes, Route, Navigate } from "react-router-dom";
import ExperiencePage from "./pages/ExperiencePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/experience" replace />} />
      <Route path="/experience" element={<ExperiencePage />} />
    </Routes>
  );
}

export default App;
