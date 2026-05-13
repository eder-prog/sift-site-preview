import type { Translations } from '@/lib/i18n';

export function ManifestoExtended({ t }: { t: Translations }) {
  const m = t.manifestoExt;
  return (
    <section className="manifesto-ext" id={m.id}>
      <div className="manifesto-ext-inner">
        <span className="eyebrow reveal">{m.eyebrow}</span>
        <h2 className="reveal">
          {m.h2Before}
          <span className="accent">{m.h2Accent}</span>
          {m.h2After}
        </h2>
        <ol className="flow">
          {m.steps.map((step, i) => (
            <li key={i} className={`flow-step reveal${i ? ` delay-${i}` : ''}`}>
              <span className="flow-num">{step.num}</span>
              <div className="flow-content">
                <h3>{step.h3}</h3>
                <p>{step.p}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="signoff reveal">{m.signoff}</p>
      </div>
    </section>
  );
}
