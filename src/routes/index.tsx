import Home from "@/pages/home";
import Station from "@/pages/station";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function IndexRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stations/:stationId" element={<Station />} />
      </Routes>
    </BrowserRouter>
  );
}

export default IndexRoutes;
