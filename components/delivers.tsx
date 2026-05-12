import type { Translations } from '@/lib/i18n';

function Icon({ type }: { type: 'briefing' | 'signal' | 'task' }) {
  if (type === 'briefing') {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="8" y1="13" x2="16" y2="13" />
        <line x1="8" y1="17" x2="14" y2="17" />
      </svg>
    );
  }
  if (type === 'signal') {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    );
  }
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 11 12 14 22 4" />
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </svg>
  );
}

export function Delivers({ t }: { t: Translations }) {
  const d = t.delivers;
  return (
    <section className="delivers" id={d.id}>
      <div className="delivers-head">
        <span className="eyebrow reveal">{d.eyebrow}</span>
        <h2 className="reveal">{d.h2}</h2>
        <p className="reveal">{d.sub}</p>
      </div>
      <div className="delivers-grid">
        {d.items.map((item, i) => (
          <article key={i} className={`delivers-card reveal${i ? ` delay-${i}` : ''}`}>
            <span className="badge">{`0${i + 1}`}</span>
            <div className="ico" aria-hidden="true">
              <Icon type={item.icon} />
            </div>
            <h3>{item.h3}</h3>
            <p>{item.p}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
