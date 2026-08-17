import SectionTitle from "../components/SectionTitle";
import { useAppFilters } from "../state/AppFiltersContext";

export default function ManufacturerSettingsPage() {
  const { manufacturer, setManufacturer } = useAppFilters();

  return (
    <>
      <SectionTitle>Параметры / Производитель</SectionTitle>

      <div
        style={{
          maxWidth: 420,
        }}
      >
        <label
          style={{
            display: "grid",
            gap: 6,
            fontSize: 14,
            color: "#374151",
          }}
        >
          <span>Производитель</span>
          <select
            value={manufacturer}
            onChange={(e) => setManufacturer(e.target.value)}
            style={{
              padding: 12,
              borderRadius: 12,
              border: "1px solid #d1d5db",
              background: "#ffffff",
            }}
          >
            <option value="">Не выбран</option>
            <option value="RONA">RONA</option>
            <option value="Monin">Monin</option>
            <option value="Libbey">Libbey</option>
          </select>
        </label>
      </div>
    </>
  );
}