import SectionTitle from "../components/SectionTitle";
import { useAppFilters } from "../state/AppFiltersContext";

export default function ReportsPage() {
  const { period, manufacturer } = useAppFilters();

  function handleDownload(reportCode: string) {
    alert(
      `Скачать отчет: ${reportCode}\nПериод: ${period.dateFrom || "-"} — ${period.dateTo || "-"}\nПроизводитель: ${manufacturer || "-"}`
    );
  }

  return (
    <>
      <SectionTitle>Отчёты</SectionTitle>

      <div
        style={{
          fontSize: 14,
          color: "#6b7280",
          marginBottom: 16,
        }}
      >
        Период: {period.dateFrom || "не задан"} — {period.dateTo || "не задан"}
        <br />
        Производитель: {manufacturer || "не выбран"}
      </div>

      <div style={{ display: "grid", gap: 12 }}>
        <button
          onClick={() => handleDownload("summary-by-date")}
          style={buttonStyle}
        >
          Скачать XLS: Сводный отчет по датам
        </button>

        <button
          onClick={() => handleDownload("sales-report")}
          style={buttonStyle}
        >
          Скачать XLS: Отчет по продажам
        </button>
      </div>
    </>
  );
}

const buttonStyle: React.CSSProperties = {
  border: "none",
  borderRadius: 12,
  padding: "14px 16px",
  background: "#111827",
  color: "#ffffff",
  fontWeight: 700,
  cursor: "pointer",
  textAlign: "left",
};