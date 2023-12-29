export default function FormatUang(val?: number): string {
  const uang: string = `Rp. ${val?.toLocaleString('id-ID') || '0'}`;
  return uang;
}
