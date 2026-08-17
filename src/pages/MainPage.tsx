import SectionTitle from "../components/SectionTitle";
import SummaryBlock from "../components/SummaryBlock";
import { dashboardMain } from "../data/mockData";
import { formatMoney } from "../utils/format";

export default function MainPage() {
  return (
    <>
      <div
        style={{
          fontSize: 14,
          color: "#6b7280",
          marginBottom: 16,
        }}
      >
        Обновлено: {dashboardMain.updatedAt}
      </div>

      <SectionTitle>Главное</SectionTitle>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: 12,
          marginBottom: 24,
        }}
      >
        <SummaryBlock
          title="Оплаты"
          today={dashboardMain.payments.today}
          month={dashboardMain.payments.month}
          monthYoYPercent={dashboardMain.payments.monthYoYPercent}
          year={dashboardMain.payments.year}
          yearYoYPercent={dashboardMain.payments.yearYoYPercent}
          formatMoney={formatMoney}
        />

        <SummaryBlock
          title="Отгрузки"
          today={dashboardMain.shipments.today}
          month={dashboardMain.shipments.month}
          monthYoYPercent={dashboardMain.shipments.monthYoYPercent}
          year={dashboardMain.shipments.year}
          yearYoYPercent={dashboardMain.shipments.yearYoYPercent}
          formatMoney={formatMoney}
          firstRowLabel="На завтра"
        />
      </div>
    </>
  );
}