import type { Translations } from '@/lib/i18n';

export function Voice({ t }: { t: Translations }) {
  const v = t.voice;
  return (
    <section className="voice">
      <div className="voice-inner">
        <p className="voice-line l1 reveal">{v.l1}</p>
        <p className="voice-line l2 reveal delay-1">
          {v.l2Before}
          <span className="accent">{v.l2Accent}</span>
          {v.l2After}
        </p>
        <div className="voice-divider reveal delay-2"></div>
        <p
          className="voice-line l3 reveal delay-2"
          dangerouslySetInnerHTML={{ __html: v.l3Html }}
        />
      </div>
    </section>
  );
}
