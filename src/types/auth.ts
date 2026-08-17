export type UserRole = "admin" | "manager";

export type CurrentUser = {
  login: string;
  role: UserRole;
};