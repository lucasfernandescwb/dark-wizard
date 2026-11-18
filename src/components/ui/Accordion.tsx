"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";

export function Accordion({
  items,
  dark = false,
}: {
  items: Array<{ title: string; content: React.ReactNode }>;
  dark?: boolean;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const idPrefix = useId();

  return (
    <div className={`divide-y border-y ${dark ? "divide-white/10 border-white/10" : "divide-slate-200 border-slate-200"}`}>
      {items.map((item, index) => {
        const open = openIndex === index;
        const panelId = `${idPrefix}-panel-${index}`;
        const triggerId = `${idPrefix}-trigger-${index}`;
        return (
          <div key={item.title}>
            <button
              id={triggerId}
              type="button"
              className={`flex w-full items-center justify-between gap-4 py-5 text-left text-base font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-4 ${dark ? "text-white focus-visible:ring-offset-[#09060f]" : "text-slate-950"}`}
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpenIndex(open ? null : index)}
            >
              {item.title}
              <ChevronDown
                aria-hidden="true"
                className={`size-5 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
              />
            </button>
            <AnimatePresence initial={false}>
              {open ? (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className={`pb-5 text-sm leading-7 ${dark ? "text-slate-300" : "text-slate-600"}`}>
                    {item.content}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
