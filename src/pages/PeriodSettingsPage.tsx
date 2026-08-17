import SectionTitle from "../components/SectionTitle";
import { useAppFilters } from "../state/AppFiltersContext";

function formatDateForInput(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getToday() {
  return new Date();
}

function getFirstDayOfMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function getLastDayOfMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}

function getFirstDayOfYear(date: Date) {
  return new Date(date.getFullYear(), 0, 1);
}

export default function PeriodSettingsPage() {
  const { period, setPeriod } = useAppFilters();

  function applyPreset(type: string) {
    const today = getToday();

    if (type === "currentMonth") {
      setPeriod({
        dateFrom: formatDateForInput(getFirstDayOfMonth(today)),
        dateTo: formatDateForInput(today),
      });
      return;
    }

    if (type === "previousMonth") {
      const previousMonthDate = new Date(today.getFullYear(), today.getMonth() - 1, 1);
      setPeriod({
        dateFrom: formatDateForInput(getFirstDayOfMonth(previousMonthDate)),
        dateTo: formatDateForInput(getLastDayOfMonth(previousMonthDate)),
      });
      return;
    }

    if (type === "currentYear") {
      setPeriod({
        dateFrom: formatDateForInput(getFirstDayOfYear(today)),
        dateTo: formatDateForInput(today),
      });
      return;
    }

    if (type === "yesterday") {
      const yesterday = new Date(today);
      yesterday.setDate(today.getDate() - 1);

      setPeriod({
        dateFrom: formatDateForInput(yesterday),
        dateTo: formatDateForInput(yesterday),
      });
      return;
    }

    if (type === "today") {
      setPeriod({
        dateFrom: formatDateForInput(today),
        dateTo: formatDateForInput(today),
      });
    }
  }

  return (
    <>
      <SectionTitle>Параметры / Период</SectionTitle>

      <div
        style={{
          display: "grid",
          gap: 16,
          maxWidth: 520,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
          }}
        >
          <PresetButton onClick={() => applyPreset("today")} label="Сегодня" />
          <PresetButton onClick={() => applyPreset("yesterday")} label="Вчера" />
          <PresetButton onClick={() => applyPreset("currentMonth")} label="Этот месяц" />
          <PresetButton onClick={() => applyPreset("previousMonth")} label="Прошлый месяц" />
          <PresetButton onClick={() => applyPreset("currentYear")} label="Этот год" />
        </div>

        <label style={labelStyle}>
          <span>Дата начала</span>
          <input
            type="date"
            value={period.dateFrom}
            onChange={(e) =>
              setPeriod({
                ...period,
                dateFrom: e.target.value,
              })
            }
            style={inputStyle}
          />
        </label>

        <label style={labelStyle}>
          <span>Дата окончания</span>
          <input
            type="date"
            value={period.dateTo}
            onChange={(e) =>
              setPeriod({
                ...period,
                dateTo: e.target.value,
              })
            }
            style={inputStyle}
          />
        </label>
      </div>
    </>
  );
}

function PresetButton({
  onClick,
  label,
}: {
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        border: "none",
        borderRadius: 10,
        padding: "10px 12px",
        background: "#111827",
        color: "#ffffff",
        fontWeight: 600,
        cursor: "pointer",
      }}
    >
      {label}
    </button>
  );
}

const labelStyle: React.CSSProperties = {
  display: "grid",
  gap: 6,
  fontSize: 14,
  color: "#374151",
};

const inputStyle: React.CSSProperties = {
  padding: 12,
  borderRadius: 12,
  border: "1px solid #d1d5db",
  background: "#ffffff",
};