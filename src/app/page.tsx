import Link from "next/link";

export default function HomePage() {
  return (
    <main className="panel hero">
      <h1>Keep every task in calm waters.</h1>
      <p>
        Task Harbor helps you capture, plan, and ship work without losing track.
        Secure, fast, and built for teams who value focus.
      </p>
      <div className="toolbar">
        <Link className="button" href="/register">
          Get started
        </Link>
        <Link className="button secondary" href="/login">
          I already have an account
        </Link>
      </div>
    </main>
  );
}
