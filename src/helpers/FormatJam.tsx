export default function FormatJam(jam?: string): string | undefined {
  return jam?.substr(0, 5);
}
