import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

import Home from "./components/pages/Home.jsx";
import CreateActivity from "./components/pages/CreateActivity.jsx";
import LandingPage from "./components/pages/LandingPage.jsx";
import NotFound from "./components/pages/NotFound.jsx";
import { ROUTES } from "./constants/routes.constant.js";
import store from "./store/store.js";
import Detail from "./components/pages/Detail.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.noMatch}element={<NotFound />} />
        <Route path={ROUTES.landing} element={<LandingPage />} />
        <Route path={ROUTES.home} element={<App />}>
          <Route index element={<Home />} />
          <Route path={ROUTES.create} element={<CreateActivity />} />
          <Route path={ROUTES.detail} element={<Detail/>} />

        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
