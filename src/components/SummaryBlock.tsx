type SummaryBlockProps = {
  title: string;
  today: number;
  month: number;
  monthYoYPercent: number;
  year: number;
  yearYoYPercent: number;
  formatMoney: (value: number) => string;
  firstRowLabel?: string;
};

export default function SummaryBlock({
  title,
  today,
  month,
  monthYoYPercent,
  year,
  yearYoYPercent,
  formatMoney,
  firstRowLabel = "Сегодня",
}: SummaryBlockProps) {
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
          fontSize: 22,
          fontWeight: 800,
          color: "#111827",
          marginBottom: 16,
        }}
      >
        {title}
      </div>

      <div
        style={{
          display: "grid",
          rowGap: 12,
        }}
      >
        <MetricRow
          label={firstRowLabel}
          value={formatMoney(today)}
        />

        <MetricRow
          label="Месяц"
          value={formatMoney(month)}
          deltaPercent={monthYoYPercent}
        />

        <MetricRow
          label="Год"
          value={formatMoney(year)}
          deltaPercent={yearYoYPercent}
        />
      </div>
    </div>
  );
}

type MetricRowProps = {
  label: string;
  value: string;
  deltaPercent?: number;
};

function MetricRow({ label, value, deltaPercent }: MetricRowProps) {
  const hasDelta = deltaPercent !== undefined;

  const deltaText = hasDelta
    ? deltaPercent! > 0
      ? `(+${deltaPercent}%)`
      : `(${deltaPercent}%)`
    : "";

  const deltaColor =
    !hasDelta
      ? "#374151"
      : deltaPercent! > 0
        ? "#16a34a"
        : deltaPercent! < 0
          ? "#dc2626"
          : "#6b7280";

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "72px 1fr",
        gap: 12,
        alignItems: "baseline",
      }}
    >
      <div
        style={{
          fontSize: 14,
          color: "#6b7280",
          fontWeight: 600,
        }}
      >
        {label}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "baseline",
          gap: 8,
          flexWrap: "wrap",
        }}
      >
        <span
          style={{
            fontSize: 18,
            fontWeight: 700,
            color: "#111827",
          }}
        >
          {value}
        </span>

        {hasDelta && (
          <span
            style={{
              fontSize: 14,
              fontWeight: 700,
              color: deltaColor,
            }}
          >
            {deltaText}
          </span>
        )}
      </div>
    </div>
  );
}