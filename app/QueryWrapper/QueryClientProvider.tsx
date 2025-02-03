'use client'
import {
  QueryClient,
  QueryClientProvider as TanstackQueryClientProvider,
} from "@tanstack/react-query";
import React, { useState, ReactNode } from "react";

interface QueryProviderProps {
  children: ReactNode;
}

const QueryClientProvider: React.FC<QueryProviderProps> = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <TanstackQueryClientProvider client={queryClient}>
      {children}
    </TanstackQueryClientProvider>
  );
};

export default QueryClientProvider;
