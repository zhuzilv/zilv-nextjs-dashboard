import '@/app/ui/global.css';
import { inter, mont } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${mont.className} antialiased`}>{children}</body>
    </html>
  );
}
