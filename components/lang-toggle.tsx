'use client';

import { useCallback } from 'react';
import type { Translations } from '@/lib/i18n';

type Props = { t: Translations; size?: 'header' | 'footer' };

export function LangToggle({ t, size = 'header' }: Props) {
  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href') || '';
    if (href === '#') {
      e.preventDefault();
      return;
    }
    const target = href.includes('/en') ? 'en' : 'pt';
    try {
      localStorage.setItem('sift-lang', target);
    } catch {}
  }, []);

  return (
    <div className="lang" style={size === 'footer' ? { fontSize: '11px' } : undefined}>
      <a
        href={t.langToggle.brHref}
        className={t.langToggle.brOn ? 'on' : ''}
        onClick={handleClick}
      >
        BR
      </a>
      <span className="sep">|</span>
      <a
        href={t.langToggle.enHref}
        className={t.langToggle.enOn ? 'on' : ''}
        onClick={handleClick}
      >
        EN
      </a>
    </div>
  );
}
