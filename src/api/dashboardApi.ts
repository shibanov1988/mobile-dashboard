import { apiGet } from "./http";
import {
  dashboardMain,
  branches,
  problems,
  dailyStats,
} from "../data/mockData";
import type {
  DashboardMain,
  BranchRow,
  ProblemRow,
  DailyStatRow,
} from "../types/dashboard";

const USE_MOCK = import.meta.env.VITE_USE_MOCK === "true";

export async function getDashboardMain(): Promise<DashboardMain> {
  if (USE_MOCK) {
    return Promise.resolve(dashboardMain);
  }
  return apiGet<DashboardMain>("/dashboard/main");
}

export async function getBranches(): Promise<BranchRow[]> {
  if (USE_MOCK) {
    return Promise.resolve(branches);
  }
  return apiGet<BranchRow[]>("/dashboard/branches");
}

export async function getProblems(): Promise<ProblemRow[]> {
  if (USE_MOCK) {
    return Promise.resolve(problems);
  }
  return apiGet<ProblemRow[]>("/dashboard/problems");
}

export async function getDailyStats(): Promise<DailyStatRow[]> {
  if (USE_MOCK) {
    return Promise.resolve(dailyStats);
  }
  return apiGet<DailyStatRow[]>("/dashboard/daily");
}