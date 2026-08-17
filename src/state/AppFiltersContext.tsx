import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type PeriodFilter = {
  dateFrom: string;
  dateTo: string;
};

type AppFiltersContextType = {
  period: PeriodFilter;
  setPeriod: (value: PeriodFilter) => void;
  manufacturer: string;
  setManufacturer: (value: string) => void;
};

const AppFiltersContext = createContext<AppFiltersContextType | undefined>(undefined);

export function AppFiltersProvider({ children }: { children: ReactNode }) {
  const [period, setPeriod] = useState<PeriodFilter>({
    dateFrom: "",
    dateTo: "",
  });

  const [manufacturer, setManufacturer] = useState("");

  const value = useMemo(
    () => ({
      period,
      setPeriod,
      manufacturer,
      setManufacturer,
    }),
    [period, manufacturer]
  );

  return (
    <AppFiltersContext.Provider value={value}>
      {children}
    </AppFiltersContext.Provider>
  );
}

export function useAppFilters() {
  const context = useContext(AppFiltersContext);

  if (!context) {
    throw new Error("useAppFilters must be used inside AppFiltersProvider");
  }

  return context;
}