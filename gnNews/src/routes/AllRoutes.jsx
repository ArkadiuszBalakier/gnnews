import { Routes, Route } from "react-router-dom";
import { Country } from "../pages/Country";
import { Home } from "../pages/Home";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:name" element={<Country />} />
      </Routes>
    </>
  );
};
