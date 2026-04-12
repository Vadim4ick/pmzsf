"use client";

import { AuthProvider } from "./auth-provider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export { Providers };
