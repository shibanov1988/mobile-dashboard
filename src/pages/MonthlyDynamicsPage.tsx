import SectionTitle from "../components/SectionTitle";
import { dailyStats } from "../data/mockData";
import { formatMoney } from "../utils/format";
import { useAppFilters } from "../state/AppFiltersContext";

export default function MonthlyDynamicsPage() {
  const { period, manufacturer } = useAppFilters();

  const totalPayments = dailyStats.reduce((sum, row) => sum + row.payments, 0);
  const totalShipments = dailyStats.reduce((sum, row) => sum + row.shipments, 0);

  return (
    <>
      <SectionTitle>Ключевые показатели / Сводный отчет</SectionTitle>

      <div
        style={{
          fontSize: 14,
          color: "#6b7280",
          marginBottom: 12,
        }}
      >
        Период: {period.dateFrom || "не задан"} — {period.dateTo || "не задан"}
        <br />
        Производитель: {manufacturer || "не выбран"}
      </div>

      <div
        style={{
          background: "#ffffff",
          borderRadius: 16,
          overflow: "hidden",
          boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            padding: 12,
            fontSize: 13,
            fontWeight: 600,
            background: "#f9fafb",
            color: "#374151",
          }}
        >
          <div>Дата</div>
          <div style={{ textAlign: "right" }}>Оплаты</div>
          <div style={{ textAlign: "right" }}>Отгрузки</div>
        </div>

        {dailyStats.map((row, index) => (
          <div
            key={index}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              padding: 12,
              borderTop: "1px solid #f3f4f6",
              fontSize: 14,
              color: "#111827",
            }}
          >
            <div>{row.date}</div>
            <div style={{ textAlign: "right" }}>{formatMoney(row.payments)}</div>
            <div style={{ textAlign: "right" }}>{formatMoney(row.shipments)}</div>
          </div>
        ))}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            padding: 12,
            borderTop: "2px solid #d1d5db",
            fontSize: 14,
            fontWeight: 700,
            background: "#f9fafb",
            color: "#111827",
          }}
        >
          <div>Итого</div>
          <div style={{ textAlign: "right" }}>{formatMoney(totalPayments)}</div>
          <div style={{ textAlign: "right" }}>{formatMoney(totalShipments)}</div>
        </div>
      </div>
    </>
  );
}