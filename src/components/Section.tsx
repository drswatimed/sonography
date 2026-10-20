import type { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import { hrefFor } from '@/lib/router';
import { whatsappLink } from '@/lib/site';

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
  tone = 'blue',
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  center?: boolean;
  tone?: 'blue' | 'teal';
}) {
  return (
    <div className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow &&
        (tone === 'teal' ? (
          <span className="eyebrow-teal">{eyebrow}</span>
        ) : (
          <span className="eyebrow">{eyebrow}</span>
        ))}
      <h2 className="mt-3 text-3xl font-extrabold leading-tight text-ink-950 sm:text-4xl text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-ink-600 text-pretty sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function CtaBand({
  title = 'Ready to master ultrasound and launch your own clinic?',
  subtitle = 'Talk to us today. Limited seats per batch — personal guidance from a senior radiologist.',
  primaryHref = hrefFor('contact'),
  primaryLabel = 'Join the Training',
  secondaryHref = hrefFor('clinic-setup'),
  secondaryLabel = 'Explore Clinic Setup',
}: {
  title?: string;
  subtitle?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="section">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-900 via-primary-800 to-teal-800 px-6 py-14 text-center shadow-glow sm:px-12 sm:py-16">
          <div className="absolute inset-0 bg-hero-grid bg-[size:40px_40px] opacity-20" />
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-teal-400/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-16 h-72 w-72 rounded-full bg-primary-400/20 blur-3xl" />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-tight text-white sm:text-4xl text-balance">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-primary-100 sm:text-lg">
              {subtitle}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href={primaryHref} className="btn bg-white text-primary-700 hover:bg-primary-50">
                {primaryLabel} <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={secondaryHref}
                className="btn bg-white/10 text-white ring-1 ring-inset ring-white/30 hover:bg-white/20"
              >
                {secondaryLabel}
              </a>
            </div>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm font-medium text-primary-100 underline-offset-4 hover:text-white hover:underline"
            >
              or message us on WhatsApp →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
