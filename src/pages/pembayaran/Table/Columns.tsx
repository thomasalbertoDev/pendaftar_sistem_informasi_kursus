import ButtonIcon from '../../../components/buttons/icon/ButtonIcon';
import TippyDefault from '../../../components/tippys/default/TippyDefault';
import FormatTanggal from '../../../helpers/FormatTanggal';
import BadgeBasicDanger from '../../../components/badges/basic/BadgeBasicDanger';
import BadgeBasicSuccess from '../../../components/badges/basic/BadgeBasicSuccess';
import BadgeBasicWarning from '../../../components/badges/basic/BadgeBasicWarning';

const Columns = () => {
  return [
    {
      title: 'Nama Lengkap Pendaftar',
      accessor: 'nama_lengkap',
      render: (item: { pendaftaran: { nama_lengkap: string } }) => (
        <>
          <span className="dark:text-white">{item?.pendaftaran?.nama_lengkap}</span>
        </>
      ),
    },
    {
      title: 'Email Pendaftar',
      accessor: 'email',
      render: (item: { pendaftaran: { email: string } }) => (
        <>
          <span className="dark:text-white">{item?.pendaftaran?.email}</span>
        </>
      ),
    },
    {
      title: 'Kursus Yang Dipilih',
      accessor: 'kursus',
      render: (item: { pendaftaran: { kursus: { nama_kursus: string } } }) => (
        <>
          <span className="dark:text-white">{item?.pendaftaran?.kursus?.nama_kursus}</span>
        </>
      ),
    },
    {
      title: 'Bukti Pembayaran',
      accessor: 'bukti_pembayaran',
      render: (item: { bukti_pembayaran: string }) => (
        <>
          <a href={`${import.meta.env.VITE_API_URL}/${item?.bukti_pembayaran}`} target="_blank" rel="noreferrer" className="text-primary">
            Lihat Bukti Pembayaran
          </a>
        </>
      ),
    },
    {
      title: 'Tanggal Pembayaran',
      accessor: 'createdAt',
      render: (item: { createdAt: string }) => (
        <>
          <span className="dark:text-white">{FormatTanggal(item?.createdAt)}</span>
        </>
      ),
    },
    {
      title: 'Status Pembayaran',
      accessor: 'status_pendaftaran',
      render: (item: { status_pembayaran: string }) => (
        <>
          {item?.status_pembayaran === 'Diproses' ? (
            <BadgeBasicWarning label="Diproses" />
          ) : item?.status_pembayaran === 'Diterima' ? (
            <BadgeBasicSuccess label="Diverifikasi" />
          ) : (
            <BadgeBasicDanger label="Ditolak" />
          )}
        </>
      ),
    },
  ];
};

export default Columns;
