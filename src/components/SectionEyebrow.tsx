
import React from "react";

/**
 * A reusable rounded "eyebrow"/badge heading for section labels.
 * Example use: <SectionEyebrow>About Us</SectionEyebrow>
 */
const SectionEyebrow = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block rounded-full bg-purple-100 text-purple-600 px-4 py-2 text-sm font-medium mb-4">
    {children}
  </span>
);

export default SectionEyebrow;
