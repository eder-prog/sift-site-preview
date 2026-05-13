'use client';

import { useEffect, useRef } from 'react';
import { SiftMark } from './sift-mark';
import { LangToggle } from './lang-toggle';
import type { Translations } from '@/lib/i18n';

export function Header({ t }: { t: Translations }) {
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    let ticking = false;
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      el.classList.toggle('scrolled', y > 120);
      ticking = false;
    };
    const handler = () => {
      if (!ticking) {
        requestAnimationFrame(onScroll);
        ticking = true;
      }
    };
    window.addEventListener('scroll', handler, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header className="site" ref={headerRef} id="siteHeader">
      <a className="brand" href="#top" aria-label="Sift">
        <SiftMark />
        <span className="wm">Sift</span>
      </a>

      <nav className="header-nav" aria-label="Primary">
        <a href={`#${t.manifestoExt.id}`}>{t.header.nav.manifesto}</a>
        <a href={t.header.productHref}>{t.header.nav.product}</a>
        <a href={t.header.deliversHref}>{t.header.nav.delivers}</a>
      </nav>

      <div className="header-right">
        <LangToggle t={t} />
        <a href="#demo" className="btn-header">
          {t.header.cta}
        </a>
      </div>
    </header>
  );
}
