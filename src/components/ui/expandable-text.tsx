import { useState, ReactNode } from "react";

interface ExpandableTextProps {
  children: ReactNode;
}

export function ExpandableText({ children }: ExpandableTextProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <p
      className={`transition-all duration-300 cursor-pointer ${
        expanded ? '' : 'line-clamp-2'
      }`}
      onClick={() => setExpanded(!expanded)}
    >
      {children}
    </p>
  );
}
