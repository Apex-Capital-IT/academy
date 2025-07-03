import type { Metadata } from "next";
import "../app/globals.css";

export const metadata: Metadata = {
  title: "Apex Академи",
  description: "Монголын тэргүүлэгч онлайн академи",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="mn">
      <body>
        <main className=" min-h-screen">{children}</main>
      </body>
    </html>
  );
}
