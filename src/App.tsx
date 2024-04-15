import "./App.css";
import { Box } from "@mui/material";
import DetailPage from "./components/detail_page/DetailPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MonthlyPlannerPage from "./components/MonthlyPlannerPage";

function App() {
  return (
    <Box>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MonthlyPlannerPage />} />
          <Route path="/detail" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
