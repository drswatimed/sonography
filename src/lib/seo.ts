import { useEffect } from 'react';
import { site } from '@/lib/site';
import type { Route } from '@/lib/router';

type Meta = {
  title: string;
  description: string;
  path?: string;
};

const metaByRoute: Record<Route['name'], Meta> = {
  home: {
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  training: {
    title: `Hands-On Ultrasound Training — ${site.name}`,
    description:
      'Live-scan, case-based ultrasound training for radiologists and sonologists. Small batches, structured curriculum, certification.',
  },
  'clinic-setup': {
    title: `Sonography Clinic Setup Assistance — ${site.name}`,
    description:
      'End-to-end clinic setup: PCPNDT registration, vendor selection, ultrasound machine & probe selection, reporting software and workflow.',
  },
  handholding: {
    title: `90-Day Handholding Program — ${site.name}`,
    description:
      'Guided 90-day post-launch support: reporting quality checks, image management, clinical guidance and tele-reporting.',
  },
  about: {
    title: `About the Founder — ${site.name}`,
    description:
      'Meet Dr. Swati Dilip Kshirsagar, Senior Consultant Radiologist and Fetal Medicine Specialist behind Precision FemSono.',
  },
  'success-stories': {
    title: `Success Stories — ${site.name}`,
    description:
      "Doctor outcomes from Precision FemSono's hands-on ultrasound mastery and clinic launch support.",
  },
  contact: {
    title: `Contact & Enquiry — ${site.name}`,
    description:
      'Enquire about ultrasound training or clinic setup. Reach us by WhatsApp, phone or email.',
  },
  blog: {
    title: `Blog — ${site.name}`,
    description:
      'Ultrasound tips, clinic setup guides and reporting best practices for radiologists.',
  },
};

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: site.name,
  description: site.description,
  email: site.email,
  telephone: site.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.addressLine1,
    addressLocality: 'Pune',
    addressRegion: 'Maharashtra',
    postalCode: '411005',
    addressCountry: 'IN',
  },
  foundingDate: String(site.foundedYear),
  areaServed: 'IN',
  sameAs: [],
};

function setTag(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setJsonLd(id: string, data: object) {
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement('script');
    el.id = id;
    el.type = 'application/ld+json';
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

export function useMeta(route: Route) {
  useEffect(() => {
    const m = metaByRoute[route.name];
    document.title = m.title;
    setTag('name', 'description', m.description);
    setTag('property', 'og:title', m.title);
    setTag('property', 'og:description', m.description);
    setTag('property', 'og:type', 'website');
    setTag('property', 'og:site_name', site.name);
    setTag('name', 'twitter:card', 'summary_large_image');
    setTag('name', 'twitter:title', m.title);
    setTag('name', 'twitter:description', m.description);
    setJsonLd('ld-org', orgSchema);
  }, [route]);
}
