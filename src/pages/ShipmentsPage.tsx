import SectionTitle from "../components/SectionTitle";
import { useAppFilters } from "../state/AppFiltersContext";

export default function ShipmentsPage() {
  const { period, manufacturer } = useAppFilters();

  return (
    <>
      <SectionTitle>Ключевые показатели / Отгрузки</SectionTitle>

      <div style={{ padding: 8, color: "#374151" }}>
        Период: {period.dateFrom || "не задан"} — {period.dateTo || "не задан"}
        <br />
        Производитель: {manufacturer || "не выбран"}
      </div>
    </>
  );
}