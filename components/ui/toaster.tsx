"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type ToastType = {
  id: string;
  title?: string;
  description?: string;
  variant?: "default" | "success" | "error";
};

const ToastContext = React.createContext<{
  toasts: ToastType[];
  toast: (t: Omit<ToastType, "id">) => void;
  dismiss: (id: string) => void;
}>({
  toasts: [],
  toast: () => {},
  dismiss: () => {},
});

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<ToastType[]>([]);

  const toast = React.useCallback((t: Omit<ToastType, "id">) => {
    const id = Math.random().toString(36).slice(2);
    setToasts((prev) => [...prev, { ...t, id }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((x) => x.id !== id));
    }, 5000);
  }, []);

  const dismiss = React.useCallback((id: string) => {
    setToasts((prev) => prev.filter((x) => x.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ toasts, toast, dismiss }}>
      {children}
    </ToastContext.Provider>
  );
}

export function useToast() {
  return React.useContext(ToastContext);
}

export function Toaster() {
  const { toasts, dismiss } = React.useContext(ToastContext);
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 w-80">
      {toasts.map((t) => (
        <div
          key={t.id}
          className={cn(
            "flex items-start gap-3 rounded-none border p-4 shadow-2xl animate-slide-up bg-card",
            t.variant === "error" && "border-red-500/50",
            t.variant === "success" && "border-green-500/50",
            t.variant === "default" && "border-border"
          )}
        >
          <div className="flex-1">
            {t.title && (
              <p className="text-sm font-medium font-display">{t.title}</p>
            )}
            {t.description && (
              <p className="text-xs text-muted-foreground mt-1">{t.description}</p>
            )}
          </div>
          <button
            onClick={() => dismiss(t.id)}
            className="text-muted-foreground hover:text-foreground text-xs"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
}
