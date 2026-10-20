import { useEffect, useState, useCallback } from 'react';

export type Route =
  | { name: 'home' }
  | { name: 'training' }
  | { name: 'clinic-setup' }
  | { name: 'handholding' }
  | { name: 'about' }
  | { name: 'success-stories' }
  | { name: 'contact' }
  | { name: 'blog' };

export const routes: { name: Route['name']; label: string; path: string }[] = [
  { name: 'home', label: 'Home', path: '/' },
  { name: 'training', label: 'Training', path: '/training' },
  { name: 'clinic-setup', label: 'Clinic Setup', path: '/clinic-setup' },
  { name: 'handholding', label: '90-Day Handholding', path: '/handholding' },
  { name: 'about', label: 'Founder', path: '/about' },
  { name: 'success-stories', label: 'Success Stories', path: '/success-stories' },
  { name: 'blog', label: 'Blog', path: '/blog' },
  { name: 'contact', label: 'Contact', path: '/contact' },
];

function parseHash(): Route {
  const hash = window.location.hash.replace(/^#/, '');
  const path = hash || '/';
  const found = routes.find((r) => r.path === path);
  if (!found) return { name: 'home' };
  return { name: found.name } as Route;
}

export function useRouter() {
  const [route, setRoute] = useState<Route>(() =>
    typeof window !== 'undefined' ? parseHash() : { name: 'home' }
  );

  useEffect(() => {
    const onChange = () => {
      setRoute(parseHash());
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    };
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  const navigate = useCallback((path: string) => {
    window.location.hash = path;
  }, []);

  return { route, navigate };
}

export function routePath(name: Route['name']): string {
  return routes.find((r) => r.name === name)?.path ?? '/';
}

export function hrefFor(name: Route['name']): string {
  return `#${routePath(name)}`;
}
