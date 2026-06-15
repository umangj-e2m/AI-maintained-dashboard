import type { HealthStatus } from '../data/clients';

export function StatusDot({ status }: { status: HealthStatus | string }) {
  if (status === 'red') {
    return (
      <div className="relative flex h-3.5 w-3.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-rose-500 shadow-sm shadow-rose-500/40" />
      </div>
    );
  }
  if (status === 'yellow') {
    return (
      <div className="relative flex h-3.5 w-3.5">
        <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-amber-400 border border-amber-500/20 shadow-sm shadow-amber-500/20" />
      </div>
    );
  }
  return (
    <div className="relative flex h-3.5 w-3.5">
      <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 shadow-sm shadow-emerald-500/30" />
    </div>
  );
}
