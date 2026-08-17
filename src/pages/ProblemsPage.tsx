import SectionTitle from "../components/SectionTitle";
import { problems } from "../data/mockData";
import { formatMoney } from "../utils/format";

export default function ProblemsPage() {
  return (
    <>
      <SectionTitle>Проблемы</SectionTitle>

      <div style={{ display: "grid", gap: 12 }}>
        {problems.map((item, index) => (
          <div
            key={index}
            style={{
              background: "#ffffff",
              borderRadius: 16,
              padding: 16,
              boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
            }}
          >
            <div
              style={{
                fontSize: 16,
                fontWeight: 700,
                marginBottom: 6,
                color: "#111827",
              }}
            >
              {item.name}
            </div>

            <div
              style={{
                fontSize: 14,
                color: "#6b7280",
                marginBottom: 6,
              }}
            >
              Тип: {item.type}
            </div>

            <div
              style={{
                fontSize: 15,
                color: "#111827",
              }}
            >
              Сумма: {formatMoney(item.value)}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}