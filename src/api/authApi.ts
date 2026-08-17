import { apiGet, apiPost } from "./http";
import type { CurrentUser } from "../types/auth";

export async function login(login: string, password: string) {
  return apiPost<{ success: boolean; user: CurrentUser }>(
    "/auth/login",
    { login, password }
  );
}

export async function logout() {
  return apiPost<{ success: boolean }>("/auth/logout");
}

export async function getMe() {
  return apiGet<{ authenticated: boolean; user?: CurrentUser }>("/auth/me");
}