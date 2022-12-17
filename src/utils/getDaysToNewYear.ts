import { getDaysToDate } from './getDaysToDate';
import { newYear } from 'src/constants/holidays';

export function getDaysToNewYear(): number {
  return getDaysToDate(newYear);
}
