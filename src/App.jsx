import "./App.css";
import Header from "./pages/Header";
import Introduction from "./pages/Introduction";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import DetailedExperience from "./pages/DetailedExperience";

function App() {
  return (
    <div className="max-w-7xl mx-auto my-5 px-5 md:px-0 lg:px-0">
      <div className="lg:my-7 md:my-5 my-3">
        <Header />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-[1fr_2fr] gap-5 h-[85vh] overflow-y-auto lg:h-[calc(100vh-6rem)]  lg:overflow-hidden">
        <div className="flex justify-center items-start md:m-3 lg:m-3">
          <Introduction />
        </div>

        <div
          id="layout-container"
          className="md:m-3 lg:m-3 mb-5 lg:h-full lg:overflow-y-auto"
        >
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/experience" element={<DetailedExperience />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
