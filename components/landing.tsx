import { Header } from './header';
import { Hero } from './hero';
import { ManifestoExtended } from './manifesto-extended';
import { ProductGlimpses } from './product-glimpses';
import { Delivers } from './delivers';
import { Voice } from './voice';
import { Demo } from './demo';
import { Footer } from './footer';
import { RevealOnScroll } from './reveal';
import { HtmlLangSync } from './html-lang-sync';
import type { Translations } from '@/lib/i18n';

export function Landing({ t }: { t: Translations }) {
  return (
    <>
      <Header t={t} />
      <main id="top">
        <Hero t={t} />
        <ManifestoExtended t={t} />
        <ProductGlimpses t={t} />
        <Delivers t={t} />
        <Voice t={t} />
        <Demo t={t} />
      </main>
      <Footer t={t} />
      <RevealOnScroll />
      <HtmlLangSync lang={t.lang} />
    </>
  );
}
