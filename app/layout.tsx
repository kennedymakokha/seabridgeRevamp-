
import "./globals.css";
import localFont from 'next/font/local';

const caustenRound = localFont({
  src: [
    {
      path: './fonts/Causten-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Causten-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-causten',
  display: 'swap',
});

export const metadata = {
  title: 'Seabridge Freight & Forwarders',
  description: 'Logistics and freight forwarding company in Kenya.',
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={caustenRound.variable}>
      <body className="font-causten">{children}</body>
    </html>
  );
}
