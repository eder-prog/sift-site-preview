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
        <p className="lead reveal" dangerouslySetInnerHTML={{ __html: m.leadHtml }} />
        <p className="reveal" dangerouslySetInnerHTML={{ __html: m.p2Html }} />
        <p className="reveal" dangerouslySetInnerHTML={{ __html: m.p3Html }} />
        <p className="reveal" dangerouslySetInnerHTML={{ __html: m.p4Html }} />
        <p className="signoff reveal">{m.signoff}</p>
      </div>
    </section>
  );
}
