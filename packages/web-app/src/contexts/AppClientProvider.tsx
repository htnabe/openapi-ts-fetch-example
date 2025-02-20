import { createContext, ReactNode } from "react";
import createClient from "openapi-fetch";
import { paths } from "../lib/api/v1";

// デフォルトの API クライアント
const apiClient = createClient<paths>({
  baseUrl: "http://localhost:8080/api/v3/",
});

// Context を作成
export const ApiClientContext = createContext(apiClient);

// Provider コンポーネント
export const ApiClientProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ApiClientContext.Provider value={apiClient}>
      {children}
    </ApiClientContext.Provider>
  );
};
