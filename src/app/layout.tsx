import "./globals.css";
import Link from "next/link";
import NavLinks from "./nav-links";

export const metadata = {
  title: "Task Harbor",
  description: "Task management for focused teams",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="shell">
          <nav className="nav">
            <Link className="brand" href="/">
              Task Harbor
            </Link>
            <NavLinks />
          </nav>
          {children}
        </div>
      </body>
    </html>
  );
}
