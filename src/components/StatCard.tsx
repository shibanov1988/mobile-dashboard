type StatCardProps = {
  title: string;
  value: string;
  hint?: string;
};

export default function StatCard({ title, value, hint }: StatCardProps) {
  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: 16,
        padding: 16,
        boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
      }}
    >
      <div
        style={{
          fontSize: 14,
          color: "#6b7280",
          marginBottom: 8,
        }}
      >
        {title}
      </div>

      <div
        style={{
          fontSize: 28,
          fontWeight: 700,
          color: "#111827",
          marginBottom: 6,
        }}
      >
        {value}
      </div>

      {hint && (
        <div
          style={{
            fontSize: 13,
            color: "#16a34a",
          }}
        >
          {hint}
        </div>
      )}
    </div>
  );
}