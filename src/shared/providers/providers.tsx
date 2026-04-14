"use client";

import { useState } from "react";
import { AuthProvider } from "./auth-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const Providers = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        // defaultOptions: {
        //   queries: {
        //     refetchOnWindowFocus: false,
        //     staleTime: 3 * 60 * 1000,
        //   },
        // },
      }),
  );

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </AuthProvider>
  );
};

export { Providers };
