import { dentistConfig } from 'kadesh/config';
import { ScheduleTable } from './ScheduleTable';
import { ScheduleCards } from './ScheduleCards';
import { ScheduleVariant } from 'kadesh/config/types';

const variants: Record<ScheduleVariant, React.ComponentType> = {
  table: ScheduleTable,
  cards: ScheduleCards,
};

export function ScheduleSection() {
  const { schedule } = dentistConfig.sections;
  if (!schedule.enabled) return null;

  const Variant = variants[schedule.variant] ?? ScheduleTable;
  return <Variant />;
}
