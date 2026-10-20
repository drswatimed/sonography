export const site = {
  name: 'Precision FemSono',
  shortName: 'Precision FemSono',
  tagline: 'High-confidence ultrasound mastery and turnkey practice launch',
  description: 'India’s premier hands-on ultrasound mastery and turnkey practice launch platform led by Dr. Swati Dilip Kshirsagar.',
  phone: '+91 98765 43210',
  phoneHref: '+919876543210',
  email: 'admissions@precisionfemsono.in',
  whatsappNumber: '919876543210',
  whatsappMessage: "Hello Dr. Swati's team, I would like to know about the next Precision FemSono cohort.",
  addressLine1: 'Mumbai / Pune training centre',
  addressLine2: 'Pan-India clinic launch support · Western India',
  mapsQuery: 'Mumbai Maharashtra India',
  mapsEmbedQuery: 'Mumbai+Maharashtra+India',
  foundedYear: 2024,
};

export function whatsappLink(message?: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message ?? site.whatsappMessage)}`;
}

export function telLink() { return `tel:${site.phoneHref}`; }
export function mailLink(subject?: string) {
  return `mailto:${site.email}${subject ? `?subject=${encodeURIComponent(subject)}` : ''}`;
}
