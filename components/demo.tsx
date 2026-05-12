'use client';

import { useRef } from 'react';
import type { Translations } from '@/lib/i18n';

export function Demo({ t }: { t: Translations }) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const d = t.demo;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    sectionRef.current?.classList.add('submitted');
    // TODO: POST to backend / email service
  };

  return (
    <section className="demo" id="demo" ref={sectionRef}>
      <div className="demo-inner">
        <span className="eyebrow reveal">{d.eyebrow}</span>
        <h2 className="reveal">{d.h2}</h2>
        <p className="lede reveal">{d.lede}</p>

        <form className="reveal" onSubmit={handleSubmit} noValidate>
          <div>
            <label htmlFor="name">{d.fields.name.label}</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder={d.fields.name.placeholder}
              required
              autoComplete="name"
            />
          </div>
          <div>
            <label htmlFor="email">{d.fields.email.label}</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder={d.fields.email.placeholder}
              required
              autoComplete="email"
            />
          </div>
          <div>
            <label htmlFor="phone">
              {d.fields.phone.label} <span className="label-aux">{d.fields.phone.aux}</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder={d.fields.phone.placeholder}
              required
              autoComplete="tel"
            />
          </div>
          <div>
            <label htmlFor="company">{d.fields.company.label}</label>
            <input
              type="text"
              id="company"
              name="company"
              placeholder={d.fields.company.placeholder}
              required
              autoComplete="organization"
            />
          </div>
          <label className="consent">
            <input type="checkbox" name="consent" required />
            <span>{d.consent}</span>
          </label>
          <button type="submit">{d.button}</button>
        </form>

        <div className="success" role="status" aria-live="polite">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <span>{d.success}</span>
        </div>
      </div>
    </section>
  );
}
