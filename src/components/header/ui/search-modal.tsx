"use client";

import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LogoHeader } from "@/shared/icons/logo-header";
import { SearchInput } from "@/components/search-inp";
import { Container } from "@/shared/ui/container";
import { Close } from "@/shared/icons/close";

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
}

export function SearchModal({ open, onClose }: SearchModalProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      // фокус на инпут с небольшой задержкой для анимации
      const t = setTimeout(() => inputRef.current?.focus(), 300);
      return () => clearTimeout(t);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Container className="flex h-full w-full flex-col">
            {/* Backdrop */}
            <div
              className="bg-background-main/95 absolute inset-0 backdrop-blur-sm"
              onClick={onClose}
            />

            {/* Content */}
            <div className="relative z-10 flex flex-1 flex-col items-center px-4 py-10">
              {/* Close button */}
              <div className="flex w-full justify-end">
                <button
                  onClick={onClose}
                  className="text-text-secondary hover:text-text-primary cursor-pointer p-2 transition-colors"
                  aria-label="Закрыть"
                >
                  <Close />
                </button>
              </div>

              {/* Search input — сдвинут наверх */}
              <motion.div
                className="mt-16 w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.25, delay: 0.1 }}
              >
                <SearchInput
                  onChange={setQuery}
                  value={query}
                  placeholder="Поиск"
                />
              </motion.div>

              {/* Logo at bottom */}
              <motion.div
                className="mt-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <LogoHeader />
              </motion.div>
            </div>
          </Container>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
