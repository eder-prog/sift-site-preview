import type { Translations } from '@/lib/i18n';

export function ProductGlimpses({ t }: { t: Translations }) {
  const g = t.glimpses;
  return (
    <section className="glimpses" id={g.id}>
      <div className="glimpses-head">
        <span className="eyebrow reveal">{g.eyebrow}</span>
        <h2 className="reveal">{g.h2}</h2>
        <p className="reveal">{g.sub}</p>
      </div>

      {/* Glimpse 1 — Customer list */}
      <article className="glimpse">
        <div className="glimpse-text reveal">
          <p className="caption">{g.items[0].caption}</p>
          <h3>{g.items[0].h3}</h3>
          <p>{g.items[0].p}</p>
        </div>
        <div className="glimpse-mock reveal delay-1">
          <div className="mock">
            <div className="mock-bar">
              <span></span>
              <span></span>
              <span></span>
              <span className="lbl">{g.mock1.barLabel}</span>
            </div>
            {g.mock1.rows.map((row, i) => (
              <div className="mock-row" key={i}>
                <span className={`pill pill-${row.pill}`}>{row.pillLabel}</span>
                <span className="name">{row.name}</span>
                <span className="mrr">{row.mrr}</span>
                <span className="age">{row.age}</span>
              </div>
            ))}
          </div>
        </div>
      </article>

      {/* Glimpse 2 — Briefing card */}
      <article className="glimpse reverse">
        <div className="glimpse-text reveal">
          <p className="caption">{g.items[1].caption}</p>
          <h3>{g.items[1].h3}</h3>
          <p>{g.items[1].p}</p>
        </div>
        <div className="glimpse-mock reveal delay-1">
          <div className="mock">
            <div className="brief-head">
              <span className="ttl">{g.mock2.title}</span>
              <span className="sub">{g.mock2.sub}</span>
            </div>
            <div className="brief-block">
              <div className="brief-label">{g.mock2.toneLabel}</div>
              <div
                className="brief-text"
                dangerouslySetInnerHTML={{ __html: g.mock2.toneHtml }}
              />
            </div>
            <div className="brief-block">
              <div className="brief-label">{g.mock2.tasksLabel}</div>
              {g.mock2.tasks.map((task, i) => (
                <div className="task" key={i}>
                  <span className="dot"></span>
                  {task.text} <span className="meta">{task.meta}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* Glimpse 3 — Signals */}
      <article className="glimpse">
        <div className="glimpse-text reveal">
          <p className="caption">{g.items[2].caption}</p>
          <h3>{g.items[2].h3}</h3>
          <p>{g.items[2].p}</p>
        </div>
        <div className="glimpse-mock reveal delay-1">
          <div className="mock">
            <div className="mock-bar">
              <span></span>
              <span></span>
              <span></span>
              <span className="lbl">{g.mock3.barLabel}</span>
            </div>
            <div className="signal-grid">
              {g.mock3.signals.map((sig, i) => (
                <div className="signal" key={i}>
                  <div className="lbl">{sig.label}</div>
                  <div className={`val ${sig.trend}`}>{sig.value}</div>
                </div>
              ))}
            </div>
            <div className="spark"></div>
          </div>
        </div>
      </article>
    </section>
  );
}
