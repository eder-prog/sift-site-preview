import type { Metadata } from 'next';
import { Landing } from '@/components/landing';
import { en } from '@/lib/i18n';

export const metadata: Metadata = {
  title: en.meta.title,
  description: en.meta.description,
};

export default function Page() {
  return <Landing t={en} />;
}
