import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Tip-converter",
  description: "using to get the tip amount according to percentage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
