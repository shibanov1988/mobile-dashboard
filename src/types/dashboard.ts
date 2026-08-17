export type MainMetricBlock = {
  today: number;
  month: number;
  monthYoYPercent: number;
  year: number;
  yearYoYPercent: number;
};

export type DashboardMain = {
  updatedAt: string;
  payments: MainMetricBlock;
  shipments: MainMetricBlock;
};

export type BranchRow = {
  name: string;
  revenue: number;
  shipment: number;
  planPercent: number;
};

export type ProblemRow = {
  name: string;
  type: string;
  value: number;
};

export type DailyStatRow = {
  date: string;
  payments: number;
  shipments: number;
};