import "./globals.css";
import { Rubik } from "next/font/google";
import i18nConfig from '@/i18nConfig';

const rubik = Rubik({ subsets: ["cyrillic",'arabic'] });

export const metadata = {
  title: "HaaDaaShi Astrology group",
  description: "HaaDaaShi | Astrology group | Vedic Astrology | Jyotish",
};

export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ locale }));
}

export default function RootLayout({ children , params : {locale}}) {
  return (
    <html lang={locale}>
      <body direction={locale} className={rubik.className}>
        <div className='Main'>
          {children}
        </div>
      </body>
    </html>
  );
}