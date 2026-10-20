import { useEffect, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { whatsappLink } from '@/lib/site';

export function WhatsAppFloat() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  useEffect(() => { const timer = window.setTimeout(() => setVisible(true), 500); return () => window.clearTimeout(timer); }, []);

  return (
    <div className={`fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3 transition-all duration-300 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
      {open && <div className="w-[292px] animate-scale-in rounded-2xl bg-white p-4 shadow-card ring-1 ring-ink-200">
        <div className="flex items-start justify-between gap-3"><div><p className="text-sm font-bold text-ink-950">Talk to Dr. Swati's Team</p><p className="mt-1 text-xs leading-relaxed text-ink-500">Quick replies about cohort dates, fees, and machine savings.</p></div><button onClick={() => setOpen(false)} className="grid h-7 w-7 place-items-center rounded-md text-ink-400 hover:bg-ink-50" aria-label="Close WhatsApp panel"><X className="h-4 w-4" /></button></div>
        <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp mt-3 w-full"><MessageCircle className="h-4 w-4" /> Chat on WhatsApp</a>
      </div>}
      <button onClick={() => setOpen((value) => !value)} className="group relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-glow transition hover:bg-[#1fb855] active:scale-95" aria-label="Talk to Dr. Swati's team on WhatsApp"><span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30 group-hover:opacity-0" /><MessageCircle className="relative h-7 w-7" /></button>
    </div>
  );
}
