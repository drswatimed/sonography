import { Activity } from 'lucide-react';

export function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-teal-600 to-primary-700 text-white shadow-soft">
        <Activity className="h-5 w-5" strokeWidth={2.8} />
        <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-accent-400 ring-2 ring-white" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[16px] font-extrabold tracking-tight text-ink-950">Precision</span>
        <span className="text-[10px] font-bold uppercase tracking-[0.19em] text-teal-700">FemSono</span>
      </span>
    </span>
  );
}
