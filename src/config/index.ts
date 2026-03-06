import type { DentistConfig } from 'kadesh/config/types';
import { defaultDentist } from 'kadesh/config/dentists/default';
import { dentalSmile } from 'kadesh/config/dentists/dental-smile';
import { patrizioGarcia } from 'kadesh/config/dentists/patrizio-garcia';
import { biodens } from 'kadesh/config/dentists/biodens';

/**
 * Registry of dentist configs by slug.
 * Add new clinics here and set NEXT_PUBLIC_DENTIST_SLUG per deployment.
 */
const dentists: Record<string, DentistConfig> = {
  default: defaultDentist,
  'dental-smile': dentalSmile,
  'patrizio-garcia': patrizioGarcia,
  biodens,
};

/**
 * Resolves the active dentist config from env.
 * Use NEXT_PUBLIC_DENTIST_SLUG (e.g. "dental-smile") to serve the matching site.
 */
export function getDentistConfig(): DentistConfig {
  const slug =
    process.env.NEXT_PUBLIC_DENTIST_SLUG ?? process.env.NEXT_PUBLIC_GYM_SLUG;
  if (slug && dentists[slug]) return dentists[slug];
  return defaultDentist;
}

/** Resolved config for the current tenant. Use this everywhere instead of creating new clients. */
export const dentistConfig = getDentistConfig();
