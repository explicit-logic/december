import { day } from 'src/constants/milliseconds';

export function getDaysToDate(date: Date): number {
  const days = Math.round(Math.abs((new Date().getTime() - date.getTime()) / day));

  return days;
}
