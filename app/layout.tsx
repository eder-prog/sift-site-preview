import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sift-site-preview.vercel.app'),
  title: 'Sift — Customer success para B2B no WhatsApp',
  description:
    'Sift transforma grupos de WhatsApp em inteligência de clientes. Uma camada de leitura sobre conversas existentes — não um CRM, não um chatbot.',
  themeColor: '#0A0A0A',
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' rx='14' fill='%230A0A0A'/><text x='50%25' y='50%25' dominant-baseline='central' text-anchor='middle' fill='%2300D9A0' font-family='Inter,sans-serif' font-weight='700' font-size='40'>S</text></svg>",
  },
};

const langDetectScript = `
(function(){
  var onEN = location.pathname.startsWith('/en');
  var current = onEN ? 'en' : 'pt';
  var saved;
  try { saved = localStorage.getItem('sift-lang'); } catch(e) {}
  if (saved) {
    if (saved !== current) location.replace(saved === 'en' ? '/en/' : '/');
    return;
  }
  var browserLang = (navigator.language || 'pt').toLowerCase();
  var target = browserLang.indexOf('pt') === 0 ? 'pt' : 'en';
  if (target !== current) location.replace(target === 'en' ? '/en/' : '/');
})();
`.trim();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${jetbrains.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: langDetectScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
