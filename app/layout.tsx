
import "./globals.css";
import localFont from 'next/font/local';


const montserrat = localFont({
  src: [
    {
      path: './../public/fonts/Montserrat-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    
  ],
  variable: '--font-montserrat',
 
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
    <html lang="en" className={montserrat.variable}>
      <body className="font-montserrat">{children}</body>
    </html>
  );
}
