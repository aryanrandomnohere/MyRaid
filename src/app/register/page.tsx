"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Check if already logged in
    const checkAuth = async () => {
      try {
        const response = await fetch("/api/auth/me", {
          credentials: "include",
        });
        if (response.ok) {
          router.push("/tasks");
        }
      } catch {
        // Not logged in, proceed normally
      }
    };
    checkAuth();
  }, [router]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const payload = await response.json();
        throw new Error(payload?.error?.message || "Registration failed");
      }

      router.push("/tasks");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="panel">
      <h1>Create your account</h1>
      <p className="notice">Use a strong password (8+ characters).</p>
      <form className="form" onSubmit={handleSubmit}>
        <label className="label">Email</label>
        <input
          className="input"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <label className="label">Password</label>
        <input
          className="input"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
          minLength={8}
        />
        {error && <p className="notice">{error}</p>}
        <button className="button" type="submit" disabled={loading}>
          {loading ? "Creating..." : "Create account"}
        </button>
      </form>
    </main>
  );
}
