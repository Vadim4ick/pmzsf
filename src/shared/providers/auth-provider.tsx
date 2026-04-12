"use client";

import { useSyncExternalStore } from "react";
import { Loader } from "../ui/loader";

const subscribe = () => () => {};

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const mounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );

  if (!mounted) {
    return (
      <div className="bg-background-primary fixed top-1/2 left-1/2 z-100 flex h-screen w-full translate-x-[-50%] translate-y-[-50%] items-center justify-center">
        <Loader className="size-10" />
      </div>
    );
  }

  return children;
};

export { AuthProvider };
