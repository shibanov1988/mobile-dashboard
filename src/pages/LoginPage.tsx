import { useState } from "react";

type LoginPageProps = {
  onLogin: (login: string, password: string) => Promise<void>;
};

export default function LoginPage({ onLogin }: LoginPageProps) {
  const [loginValue, setLoginValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await onLogin(loginValue, passwordValue);
    } catch {
      setError("Неверный логин или пароль");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f3f4f6",
        padding: 16,
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: "100%",
          maxWidth: 360,
          background: "#fff",
          borderRadius: 16,
          padding: 24,
          boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
        }}
      >
        <h1 style={{ marginTop: 0, marginBottom: 16 }}>Вход</h1>

        <div style={{ marginBottom: 12 }}>
          <input
            type="text"
            placeholder="Логин"
            value={loginValue}
            onChange={(e) => setLoginValue(e.target.value)}
            style={{
              width: "100%",
              padding: 12,
              borderRadius: 12,
              border: "1px solid #d1d5db",
            }}
          />
        </div>

        <div style={{ marginBottom: 12 }}>
          <input
            type="password"
            placeholder="Пароль"
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
            style={{
              width: "100%",
              padding: 12,
              borderRadius: 12,
              border: "1px solid #d1d5db",
            }}
          />
        </div>

        {error && (
          <div style={{ color: "#dc2626", marginBottom: 12 }}>{error}</div>
        )}

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: 12,
            border: "none",
            borderRadius: 12,
            background: "#111827",
            color: "#fff",
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          {loading ? "Входим..." : "Войти"}
        </button>
      </form>
    </div>
  );
}