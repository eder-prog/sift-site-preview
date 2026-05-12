'use client';

import { useEffect, useRef } from 'react';
import type { Translations } from '@/lib/i18n';

export function Hero({ t }: { t: Translations }) {
  const heroRef = useRef<HTMLElement | null>(null);
  const grainsRef = useRef<HTMLDivElement | null>(null);
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const grainsLayer = grainsRef.current;
    const cursorFx = cursorRef.current;
    if (!hero || !grainsLayer) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const root = document.documentElement;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let sx = mx,
      sy = my;
    let nx = 0,
      ny = 0;
    let rafId: number | null = null;
    let touched = false;

    function updateCursorFxVisibility() {
      if (touched || !cursorFx || !hero) return;
      const r = hero.getBoundingClientRect();
      const inside = sy >= r.top && sy <= r.bottom && sx >= r.left && sx <= r.right;
      cursorFx.classList.toggle('is-active', inside);
    }

    function frame() {
      sx += (mx - sx) * 0.18;
      sy += (my - sy) * 0.18;
      const w = window.innerWidth,
        h = window.innerHeight;
      nx = ((sx / w) - 0.5) * 2;
      ny = ((sy / h) - 0.5) * 2;
      const rect = hero!.getBoundingClientRect();
      const hx = sx - rect.left;
      const hy = sy - rect.top;
      const mxPct = ((hx / rect.width) * 100).toFixed(2) + '%';
      const myPct = ((hy / rect.height) * 100).toFixed(2) + '%';
      root.style.setProperty('--mx', mxPct);
      root.style.setProperty('--my', myPct);
      root.style.setProperty('--mxpx', sx + 'px');
      root.style.setProperty('--mypx', sy + 'px');
      root.style.setProperty('--nx', nx.toFixed(3));
      root.style.setProperty('--ny', ny.toFixed(3));
      grainsLayer!.style.transform = `translate3d(${(nx * 18).toFixed(2)}px, ${(ny * 14).toFixed(2)}px, 0)`;
      const distance = Math.abs(mx - sx) + Math.abs(my - sy);
      if (distance > 0.4) rafId = requestAnimationFrame(frame);
      else rafId = null;
    }
    function schedule() {
      if (rafId === null) rafId = requestAnimationFrame(frame);
    }

    function onPointerMove(e: PointerEvent) {
      if (touched) return;
      mx = e.clientX;
      my = e.clientY;
      schedule();
      updateCursorFxVisibility();
    }
    function onScroll() {
      updateCursorFxVisibility();
    }
    function onTouchStart() {
      if (touched) return;
      touched = true;
      if (cursorFx) cursorFx.remove();
      hero!.style.cursor = 'auto';
    }

    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('touchstart', onTouchStart, { passive: true });

    // Grain generation
    const COUNT = 70;
    const created: HTMLDivElement[] = [];
    for (let i = 0; i < COUNT; i++) {
      const g = document.createElement('div');
      const isGreen = Math.random() < 0.22;
      g.className = 'hero-grain ' + (isGreen ? 'green' : 'white');
      const size = 1.5 + Math.random() * 2.5;
      g.style.width = g.style.height = size + 'px';
      g.style.left = Math.random() * 100 + '%';
      g.style.top = -10 - Math.random() * 30 + '%';
      const dur = 14 + Math.random() * 22;
      const delay = -Math.random() * dur;
      const dx = (Math.random() - 0.5) * 40;
      const peak = 0.35 + Math.random() * 0.55;
      g.style.setProperty('--dx', dx + 'px');
      g.style.setProperty('--peak', peak.toFixed(2));
      g.style.animation = `grainDrift ${dur.toFixed(1)}s linear ${delay.toFixed(1)}s infinite`;
      grainsLayer.appendChild(g);
      created.push(g);
    }

    // Card spotlight
    const cards = Array.from(document.querySelectorAll<HTMLElement>('.delivers-card'));
    const cardHandlers: Array<{ el: HTMLElement; move: (e: PointerEvent) => void; leave: () => void }> = [];
    cards.forEach((card) => {
      const move = (e: PointerEvent) => {
        if (touched) return;
        const r = card.getBoundingClientRect();
        card.style.setProperty('--cx', e.clientX - r.left + 'px');
        card.style.setProperty('--cy', e.clientY - r.top + 'px');
        card.style.setProperty('--card-active', '1');
      };
      const leave = () => {
        card.style.setProperty('--card-active', '0');
      };
      card.addEventListener('pointermove', move);
      card.addEventListener('pointerleave', leave);
      cardHandlers.push({ el: card, move, leave });
    });

    // Mockup tilt
    const mockHandlers: Array<{ el: HTMLElement; move: (e: PointerEvent) => void; leave: () => void }> = [];
    if (!reduced) {
      const mocks = Array.from(document.querySelectorAll<HTMLElement>('.mock'));
      mocks.forEach((mock) => {
        const move = (e: PointerEvent) => {
          if (touched) return;
          const r = mock.getBoundingClientRect();
          const cx = (e.clientX - r.left) / r.width - 0.5;
          const cy = (e.clientY - r.top) / r.height - 0.5;
          mock.style.setProperty('--tilt-y', (cx * 8).toFixed(2) + 'deg');
          mock.style.setProperty('--tilt-x', (-cy * 6).toFixed(2) + 'deg');
        };
        const leave = () => {
          mock.style.setProperty('--tilt-x', '0deg');
          mock.style.setProperty('--tilt-y', '0deg');
        };
        mock.addEventListener('pointermove', move);
        mock.addEventListener('pointerleave', leave);
        mockHandlers.push({ el: mock, move, leave });
      });
    }

    schedule();

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('touchstart', onTouchStart);
      cardHandlers.forEach(({ el, move, leave }) => {
        el.removeEventListener('pointermove', move);
        el.removeEventListener('pointerleave', leave);
      });
      mockHandlers.forEach(({ el, move, leave }) => {
        el.removeEventListener('pointermove', move);
        el.removeEventListener('pointerleave', leave);
      });
      created.forEach((g) => g.remove());
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div className="cursor-fx" id="cursorFx" ref={cursorRef} aria-hidden="true">
        <div className="ring"></div>
        <div className="dot"></div>
      </div>

      <section className="hero" ref={heroRef}>
        <div className="hero-mesh"></div>
        <div className="hero-mesh-accent"></div>
        <div className="hero-glow"></div>
        <div className="hero-grains" ref={grainsRef}></div>
        <div className="hero-vignette"></div>

        <div className="hero-center">
          <div className="wordmark-monument">
            <svg viewBox="0 0 760 220" xmlns="http://www.w3.org/2000/svg" aria-label="sift">
              <g fill="#00D9A0">
                <rect className="sieve-bar" x="12" y="28" width="124" height="16" rx="6" />
                <rect className="sieve-bar" x="12" y="60" width="92" height="16" rx="6" />
                <rect className="sieve-bar" x="28" y="92" width="112" height="16" rx="6" />
                <rect className="sieve-bar" x="44" y="124" width="92" height="16" rx="6" />
                <rect className="sieve-bar" x="28" y="156" width="124" height="16" rx="6" />
              </g>
              <text
                x="172"
                y="172"
                fill="#FFFFFF"
                fontFamily="Inter, sans-serif"
                fontWeight="700"
                fontSize="192"
                letterSpacing="-8"
              >
                ift
              </text>
            </svg>
          </div>
          <h1 className="hero-tagline">
            {t.hero.taglineBefore}
            <span className="accent">{t.hero.taglineAccent}</span>
            {t.hero.taglineAfter}
          </h1>
          <p
            className="hero-manifesto"
            dangerouslySetInnerHTML={{ __html: t.hero.manifestoHtml }}
          />
          <a href="#demo" className="hero-cta">
            {t.hero.cta}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
