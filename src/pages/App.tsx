import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "@pages/About";
import Academic from "@/pages/Academic";
import Experience from "@/pages/Experience";
import Skills from "@/pages/Skills";
import Layout from "@/components/Layout";

export default function App() {
  return (
    <div className="w-screen h-screen bg-white text-gray-700">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<About />} />
            <Route path="academic" element={<Academic />} />
            <Route path="experience" element={<Experience />} />
            <Route path="skills" element={<Skills />} />
            <Route path="*" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
