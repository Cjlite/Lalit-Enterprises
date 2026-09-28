import type { Metadata } from "next";
import "./globals.css";
import { businessConfig } from "@/config/business";

export const metadata: Metadata = {
  title: `${businessConfig.companyName} | Solar Liaison & Project Services | MSEDCL Coordination`,
  description:
    "Solar liaison and project services for residential, commercial and industrial projects. Rooftop solar, PM Surya Ghar assistance, MSEDCL coordination, electricity connections, load changes, meter services and solar agriculture pump support.",
  keywords: "Solar Liaison, MSEDCL Coordination, Rooftop Solar, PM Surya Ghar, Electricity Connections, Solar Agriculture Pump, Maharashtra",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Manrope:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased text-gray-900 bg-background">
        {children}
      </body>
    </html>
  );
}
