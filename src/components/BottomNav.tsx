type TabKey = "main" | "branches" | "problems";

type BottomNavProps = {
  activeTab: TabKey;
  onChange: (tab: TabKey) => void;
};

export default function BottomNav({
  activeTab,
  onChange,
}: BottomNavProps) {
  const items: { key: TabKey; label: string }[] = [
    { key: "main", label: "Главная" },
    { key: "branches", label: "Филиалы" },
    { key: "problems", label: "Проблемы" },
  ];

  return (
    <div
      style={{
        position: "sticky",
        bottom: 0,
        background: "#ffffff",
        borderTop: "1px solid #e5e7eb",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 8,
        padding: 12,
        marginTop: 20,
      }}
    >
      {items.map((item) => {
        const isActive = item.key === activeTab;

        return (
          <button
            key={item.key}
            onClick={() => onChange(item.key)}
            style={{
              border: "none",
              borderRadius: 12,
              padding: "12px 8px",
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
              background: isActive ? "#111827" : "#f3f4f6",
              color: isActive ? "#ffffff" : "#111827",
            }}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}