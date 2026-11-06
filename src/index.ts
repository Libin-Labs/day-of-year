export function dayOfYear(text: string): number {
  if (typeof text !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(text))
    throw new RangeError('Expected YYYY-MM-DD');
  const date = new Date(text + 'T00:00:00Z');
  if (!Number.isFinite(date.getTime()) || date.toISOString().slice(0, 10) !== text)
    throw new RangeError('Invalid date');
  return Math.floor((date.getTime() - Date.UTC(date.getUTCFullYear(), 0, 1)) / 86400000) + 1;
}
