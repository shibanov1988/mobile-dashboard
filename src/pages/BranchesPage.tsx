import SectionTitle from "../components/SectionTitle";
import { branches } from "../data/mockData";
import { formatMoney } from "../utils/format";

export default function BranchesPage() {
  return (
    <>
      <SectionTitle>Филиалы</SectionTitle>

      <div style={{ display: "grid", gap: 12 }}>
        {branches.map((branch) => (
          <div
            key={branch.name}
            style={{
              background: "#ffffff",
              borderRadius: 16,
              padding: 16,
              boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
            }}
          >
            <div
              style={{
                fontSize: 18,
                fontWeight: 700,
                marginBottom: 10,
                color: "#111827",
              }}
            >
              {branch.name}
            </div>

            <div
              style={{
                fontSize: 14,
                color: "#374151",
                marginBottom: 6,
              }}
            >
              Выручка: {formatMoney(branch.revenue)}
            </div>

            <div
              style={{
                fontSize: 14,
                color: "#374151",
                marginBottom: 6,
              }}
            >
              Отгрузка: {formatMoney(branch.shipment)}
            </div>

            <div
              style={{
                fontSize: 14,
                color: "#374151",
              }}
            >
              План: {branch.planPercent}%
            </div>
          </div>
        ))}
      </div>
    </>
  );
}