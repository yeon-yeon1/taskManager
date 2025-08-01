import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./page/homePage";
import YearSelect from "./page/yearSelect";
import DaySelect from "./page/daySelect";
import StudyPlanner from "./page/studyPlanner";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/year" element={<YearSelect />} />
        <Route path="/day" element={<DaySelect />} />
        <Route path="/planner" element={<StudyPlanner />} />
      </Routes>
    </Router>
  );
}

export default App;
