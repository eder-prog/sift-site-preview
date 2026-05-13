import { SiftMark } from './sift-mark';
import { LangToggle } from './lang-toggle';
import type { Translations } from '@/lib/i18n';

export function Footer({ t }: { t: Translations }) {
  return (
    <footer className="site">
      <div className="footer-inner">
        <div className="footer-left">
          <a className="brand" href="#top" aria-label="Sift">
            <SiftMark size={24} />
            <span className="wm">Sift</span>
          </a>
          <div className="copy" dangerouslySetInnerHTML={{ __html: t.footer.copyHtml }} />
        </div>
        <div className="footer-right">
          <div className="footer-links">
            <a href={`#${t.manifestoExt.id}`}>{t.footer.links.manifesto}</a>
            <a href="mailto:team@growthsolutionsus.com">{t.footer.links.contact}</a>
            <a
              href="https://www.linkedin.com/company/growthsolutionsus/"
              target="_blank"
              rel="noopener"
            >
              {t.footer.links.linkedin}
            </a>
          </div>
          <LangToggle t={t} size="footer" />
        </div>
      </div>
    </footer>
  );
}
