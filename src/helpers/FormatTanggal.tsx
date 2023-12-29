const FormatTanggal = (tgl: string | null): string => {
  if (tgl == null) {
    return '';
  }
  const date: Date = new Date(tgl);
  const tahun: number = date.getFullYear();
  let bulan: string | undefined = undefined;
  const tanggal: number = date.getDate();

  switch (date.getMonth()) {
    case 0:
      bulan = 'Januari';
      break;
    case 1:
      bulan = 'Februari';
      break;
    case 2:
      bulan = 'Maret';
      break;
    case 3:
      bulan = 'April';
      break;
    case 4:
      bulan = 'Mei';
      break;
    case 5:
      bulan = 'Juni';
      break;
    case 6:
      bulan = 'Juli';
      break;
    case 7:
      bulan = 'Agustus';
      break;
    case 8:
      bulan = 'September';
      break;
    case 9:
      bulan = 'Oktober';
      break;
    case 10:
      bulan = 'November';
      break;
    case 11:
      bulan = 'Desember';
      break;
    default:
      break;
  }

  if (bulan === undefined) {
    return '';
  }

  const tampilTanggal: string = `${tanggal} ${bulan} ${tahun}`;
  return tampilTanggal;
};

export default FormatTanggal;
