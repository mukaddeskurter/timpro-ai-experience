import { Routes, Route } from "react-router-dom";
import ExperiencePage from "./pages/ExperiencePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<div>Ana Sayfa</div>} />
      <Route path="/experience" element={<ExperiencePage />} />
    </Routes>
  );
}

export default App;
