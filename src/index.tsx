import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { VideosContextProvider, NewsContextProvider } from "context";
import App from "./app/App";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./index.css";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <VideosContextProvider>
        <NewsContextProvider>
          <App />
        </NewsContextProvider>
      </VideosContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
