
import React from "react";

/**
 * A reusable rounded "eyebrow"/badge heading for section labels,
 * visually prominent and matching reference styles (bold, more padding).
 */
const SectionEyebrow = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block rounded-full bg-purple-100 text-purple-700 px-6 py-2 text-base font-semibold mb-6 shadow-sm tracking-wide">
    {children}
  </span>
);

export default SectionEyebrow;
