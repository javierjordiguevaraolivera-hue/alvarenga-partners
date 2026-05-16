import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alvarenga | Moda en Hallandale Beach",
  description:
    "Boutique de moda femenina en Hallandale Beach, Florida. Novedades, vestidos, blusas, accesorios y citas en tienda.",
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
