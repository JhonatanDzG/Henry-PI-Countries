import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

import Home from "./components/pages/Home.jsx";
import CreateActivity from "./components/pages/CreateActivity.jsx";
import LandingPage from "./components/pages/LandingPage.jsx";
import NotFound from "./components/pages/NotFound.jsx";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/countries" element={<App />}>
          <Route index element={<Home />} />
          <Route path="create-activity" element={<CreateActivity />} />
        </Route>
        <Route />

      </Routes>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
