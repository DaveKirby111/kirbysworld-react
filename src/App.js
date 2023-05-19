import React from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home";
import Resume from "./pages/Resume";
import About from "./pages/About";
import Work from "./pages/Work";

function App() {
  return (
    <div className="App">
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
