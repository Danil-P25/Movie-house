import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonTheme } from "react-loading-skeleton";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SkeletonTheme
      baseColor="rgba(20, 16, 37, 1)"
      highlightColor="rgba(40, 36, 57, 1)"
    >
      <App />
    </SkeletonTheme>
  </StrictMode>,
);
