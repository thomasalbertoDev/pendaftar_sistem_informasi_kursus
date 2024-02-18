export default function FormatJam(jam: string | undefined): string {
  if (!jam) return '';

  const waktu: Date = new Date(jam);

  const jamFormatted: string = waktu.getHours().toString().padStart(2, '0');
  const menitFormatted: string = waktu.getMinutes().toString().padStart(2, '0');

  return `${jamFormatted}:${menitFormatted}`;
}
