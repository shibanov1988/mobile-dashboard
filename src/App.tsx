import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import ShipmentsPage from "./pages/ShipmentsPage";
import PaymentsPage from "./pages/PaymentsPage";
import MonthlyDynamicsPage from "./pages/MonthlyDynamicsPage";
import ReportsPage from "./pages/ReportsPage";
import PeriodSettingsPage from "./pages/PeriodSettingsPage";
import ManufacturerSettingsPage from "./pages/ManufacturerSettingsPage";
import { AppFiltersProvider } from "./state/AppFiltersContext";

const AUTH_STORAGE_KEY = "kpi_dashboard_auth";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAuthChecked, setIsAuthChecked] = useState(false);

  useEffect(() => {
    const savedAuth = sessionStorage.getItem(AUTH_STORAGE_KEY);

    if (savedAuth === "true") {
      setIsAuthenticated(true);
    }

    setIsAuthChecked(true);
  }, []);

  async function handleLogin(login: string, password: string) {
    if (login === "admin" && password === "123456") {
      setIsAuthenticated(true);
      sessionStorage.setItem(AUTH_STORAGE_KEY, "true");
      return;
    }

    throw new Error("Invalid credentials");
  }

  function handleLogout() {
    setIsAuthenticated(false);
    sessionStorage.removeItem(AUTH_STORAGE_KEY);
  }

  if (!isAuthChecked) {
    return <div style={{ padding: 20 }}>Загрузка...</div>;
  }

  return (
    <AppFiltersProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={
              isAuthenticated ? (
                <Navigate to="/" replace />
              ) : (
                <LoginPage onLogin={handleLogin} />
              )
            }
          />

          <Route
            path="/"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Layout onLogout={handleLogout}>
                  <MainPage />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/metrics/shipments"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Layout onLogout={handleLogout}>
                  <ShipmentsPage />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/metrics/payments"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Layout onLogout={handleLogout}>
                  <PaymentsPage />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route
  path="/metrics/summary"
  element={
    <ProtectedRoute isAuthenticated={isAuthenticated}>
      <Layout onLogout={handleLogout}>
        <MonthlyDynamicsPage />
      </Layout>
    </ProtectedRoute>
  }
/>

          <Route
            path="/reports"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Layout onLogout={handleLogout}>
                  <ReportsPage />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/settings/period"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Layout onLogout={handleLogout}>
                  <PeriodSettingsPage />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/settings/manufacturer"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Layout onLogout={handleLogout}>
                  <ManufacturerSettingsPage />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AppFiltersProvider>
  );
}