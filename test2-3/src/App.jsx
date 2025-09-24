import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Frame from "./Layouts/FrameLayout";
import Home from "./Pages/Home";
import Hafalan from "./Pages/Hafalan";
import Santri from "./Pages/Santri";
import Quran from "./Pages/Quran";
import SettingsPage from "./Components/Settings"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Frame />}>
          <Route path="/" element={<Home />} />
          <Route path="/hafalan" element={<Hafalan />} />
          <Route path="/santri" element={<Santri />} />
          <Route path="/quran" element={<Quran />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
