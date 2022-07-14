import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

import { App } from "./App";
import { Foo } from "./components/Foo";

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="foo" element={<Foo />} />
        </Route>
        <Route path="*" element={<p>Not found</p>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
