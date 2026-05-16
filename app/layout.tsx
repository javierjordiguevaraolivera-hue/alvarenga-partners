import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Truly Alvarenga | Moda en Hallandale Beach",
  description:
    "Atelier de moda en Hallandale Beach, Florida. Piezas de ocasion, bridal, evening y custom.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
