import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ApiClientProvider } from "./contexts/AppClientProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApiClientProvider>
      <App />
    </ApiClientProvider>
  </StrictMode>
);
