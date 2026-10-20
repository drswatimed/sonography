import { useEffect, useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Logo } from './Logo';
import { routes, hrefFor, type Route } from '@/lib/router';
import { whatsappLink } from '@/lib/site';

export function Navbar({ route }: { route: Route }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 8); onScroll(); window.addEventListener('scroll', onScroll, { passive: true }); return () => window.removeEventListener('scroll', onScroll); }, []);
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; return () => { document.body.style.overflow = ''; }; }, [open]);
  const navItems = routes.filter((item) => !['home', 'blog'].includes(item.name));
  return <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 shadow-soft ring-1 ring-ink-200/60 backdrop-blur-md' : 'bg-white/80 backdrop-blur-sm'}`}>
    <div className="container-page flex h-[72px] items-center justify-between"><a href={hrefFor('home')}><Logo /></a>
      <nav className="hidden items-center gap-1 lg:flex">{navItems.map((item) => <a key={item.name} href={hrefFor(item.name)} className={`rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${route.name === item.name ? 'bg-teal-50 text-teal-700' : 'text-ink-600 hover:bg-ink-50 hover:text-ink-950'}`}>{item.label}</a>)}</nav>
      <div className="hidden items-center gap-2 lg:flex"><a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-ghost px-3"><MessageCircle className="h-4 w-4 text-[#25D366]" /> WhatsApp</a><a href={hrefFor('contact')} className="btn-primary">Reserve your seat</a></div>
      <button type="button" onClick={() => setOpen((value) => !value)} className="grid h-10 w-10 place-items-center rounded-lg text-ink-700 hover:bg-ink-50 lg:hidden" aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}</button>
    </div>
    {open && <div className="lg:hidden"><div className="fixed inset-0 top-[72px] z-40 bg-ink-950/30 backdrop-blur-sm" onClick={() => setOpen(false)} /><div className="relative z-50 mx-3 mb-3 rounded-2xl bg-white p-3 shadow-card ring-1 ring-ink-200"><nav className="grid">{routes.filter((item) => item.name !== 'blog').map((item) => <a key={item.name} href={hrefFor(item.name)} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2.5 text-sm font-semibold text-ink-700 hover:bg-ink-50">{item.label}</a>)}</nav><a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp mt-2 w-full" onClick={() => setOpen(false)}><MessageCircle className="h-4 w-4" /> Talk to Dr. Swati's Team</a></div></div>}
  </header>;
}
