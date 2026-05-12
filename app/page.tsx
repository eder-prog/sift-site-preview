import type { Metadata } from 'next';
import { Landing } from '@/components/landing';
import { pt } from '@/lib/i18n';

export const metadata: Metadata = {
  title: pt.meta.title,
  description: pt.meta.description,
};

export default function Page() {
  return <Landing t={pt} />;
}
