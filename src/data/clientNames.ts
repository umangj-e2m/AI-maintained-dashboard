/** Canonical Explore Media client list — single source of truth for React + dashboard.html */
export const EXPLORE_MEDIA_CLIENT_NAMES = [
  'Pure Air Solutions',
  'Frosty Systems',
  'Precision HVAC Experts',
  'Elite Air Systems',
  'Keystone Home Comfort',
  'Summit Plumbing & Drain',
  'AllSeason Home Services',
  'ProFlow Plumbing Co.',
  'BlueLine Plumbing Services',
  'Airflow Masters',
  'Comfort Zone Heating & Air',
  'Apex Climate Control',
  'Prime Comfort HVAC',
  'TotalCare Home Solutions',
  'Rapid Response Air',
] as const;

/** @deprecated Use EXPLORE_MEDIA_CLIENT_NAMES */
export const EXPLORE_HVAC_CLIENT_NAMES = EXPLORE_MEDIA_CLIENT_NAMES;

export const DEFAULT_CLIENT = 'Pure Air Solutions';

/** Silent localStorage redirect for legacy dashboard keys (migration complete — no spa names retained). */
export const LEGACY_CLIENT_NAME_MAP: Record<string, string> = {};
