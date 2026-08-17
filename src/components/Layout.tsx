import { Link, useLocation } from "react-router-dom";
import type { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
  onLogout: () => void;
};

type TopMenuItem = {
  label: string;
  to: string;
  children?: { label: string; to: string }[];
};

const topMenuItems: TopMenuItem[] = [
  {
    label: "Главное",
    to: "/",
  },
  {
    label: "Ключевые показатели",
    to: "/metrics/summary",
    children: [
      { label: "Сводный отчет", to: "/metrics/summary" },
      { label: "Отгрузки", to: "/metrics/shipments" },
      { label: "Оплаты", to: "/metrics/payments" },
    ],
  },
  {
    label: "Отчёты",
    to: "/reports",
    children: [
      { label: "Выгрузка отчетов", to: "/reports" },
    ],
  },
  {
    label: "Параметры",
    to: "/settings/period",
    children: [
      { label: "Период", to: "/settings/period" },
      { label: "Производитель", to: "/settings/manufacturer" },
    ],
  },
];

function getTopSection(pathname: string): string {
  if (pathname === "/") {
    return "/";
  }

  if (pathname.startsWith("/metrics")) {
    return "/metrics";
  }

  if (pathname.startsWith("/reports")) {
    return "/reports";
  }

  if (pathname.startsWith("/settings")) {
    return "/settings";
  }

  return "/";
}

export default function Layout({ children, onLogout }: LayoutProps) {
  const location = useLocation();
  const currentSection = getTopSection(location.pathname);

  const activeTopMenu =
    topMenuItems.find((item) => {
      if (item.to === "/") {
        return currentSection === "/";
      }

      return currentSection === item.to.split("/", 2).join("/") || currentSection === item.to;
    }) ||
    topMenuItems.find((item) => item.to === "/")!;

  const subMenuItems = activeTopMenu.children || [];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f3f4f6",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: 820,
          margin: "0 auto",
          padding: 16,
        }}
      >
        <header
          style={{
            marginBottom: 20,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              fontSize: 28,
              fontWeight: 800,
              color: "#111827",
            }}
          >
            KPI дашборд
          </div>

          <button
            onClick={onLogout}
            style={{
              border: "none",
              borderRadius: 12,
              padding: "10px 14px",
              background: "#111827",
              color: "#fff",
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            Выйти
          </button>
        </header>

        <nav
          style={{
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
            marginBottom: 12,
          }}
        >
          {topMenuItems.map((item) => {
            const itemSection = item.to === "/" ? "/" : "/" + item.to.split("/")[1];
            const isActive = currentSection === itemSection;

            return (
              <Link
                key={item.label}
                to={item.to}
                style={{
                  textDecoration: "none",
                  borderRadius: 12,
                  padding: "10px 14px",
                  fontSize: 14,
                  fontWeight: 600,
                  background: isActive ? "#111827" : "#ffffff",
                  color: isActive ? "#ffffff" : "#111827",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {subMenuItems.length > 0 && (
          <nav
            style={{
              display: "flex",
              gap: 8,
              flexWrap: "wrap",
              marginBottom: 20,
            }}
          >
            {subMenuItems.map((item) => {
              const isActive = location.pathname === item.to;

              return (
                <Link
                  key={item.to}
                  to={item.to}
                  style={{
                    textDecoration: "none",
                    borderRadius: 10,
                    padding: "8px 12px",
                    fontSize: 13,
                    fontWeight: 600,
                    background: isActive ? "#374151" : "#e5e7eb",
                    color: isActive ? "#ffffff" : "#111827",
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        )}

        <main>{children}</main>
      </div>
    </div>
  );
}