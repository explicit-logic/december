import { getDaysToDate } from './getDaysToDate';
import { christmas } from 'src/constants/holidays';

export function getDaysToChristmas(): number {
  return getDaysToDate(christmas);
}
