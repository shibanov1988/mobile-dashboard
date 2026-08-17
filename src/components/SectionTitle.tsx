import type { ReactNode } from "react";

type SectionTitleProps = {
  children: ReactNode;
};

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2
      style={{
        fontSize: 20,
        fontWeight: 700,
        margin: "0 0 12px 0",
        color: "#111827",
      }}
    >
      {children}
    </h2>
  );
}