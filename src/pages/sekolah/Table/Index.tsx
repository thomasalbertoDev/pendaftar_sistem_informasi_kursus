import React, { useState, useEffect } from 'react';
import Columns from './Columns';
import TableSkinBordered from '../../../components/tables/skin/TableSkinBordered';

interface Sekolah {
  id_sekolah: string;
  npsn: number;
  nama_sekolah: string;
  alamat: string;
  kode_pos: number;
  provinsi: string;
  kabupaten: string;
  kecamatan: string;
  kelurahan: string;
  status_sekolah: string;
  jenjang_pendidikan: string;
  akreditasi: string;
  email_sekolah: string;
  no_telepon_sekolah: string;
}

interface TableProps {
  sekolah: Array<Sekolah>;
  handleDelete: (id_sekolah: string) => void;
}

const Table: React.FunctionComponent<TableProps> = ({ sekolah, handleDelete }) => {
  const DEFAULT_PAGE_SIZE: number = 10;
  const PAGE_SIZES: number[] = [10, 25, 50, 100];
  const [state, setState] = useState({
    page: 1 as number,
    pageSize: DEFAULT_PAGE_SIZE as number,
    recordsData: [] as Sekolah[],
  });

  const { page, pageSize, recordsData } = state;

  useEffect(() => {
    setState((prevState) => ({ ...prevState, recordsData: sekolah.slice(0, pageSize) }));
  }, [sekolah, pageSize]);

  useEffect(() => {
    const calculateRecords = () => {
      const from = (page - 1) * pageSize;
      const to = from + pageSize;
      setState((prevState) => ({ ...prevState, recordsData: sekolah.slice(from, to) }));
    };
    calculateRecords();
  }, [page, pageSize, sekolah]);

  const handlePageChange = (page: number) => setState((prevState) => ({ ...prevState, page }));
  const handleRecordsPerPageChange = (size: number) => setState((prevState) => ({ ...prevState, pageSize: size }));

  return (
    <>
      <TableSkinBordered
        page={page}
        records={recordsData}
        columns={Columns({ handleDelete })}
        totalRecords={sekolah.length}
        onPageChange={handlePageChange}
        recordsPerPage={pageSize}
        recordsPerPageOptions={PAGE_SIZES}
        onRecordsPerPageChange={handleRecordsPerPageChange}
      />
    </>
  );
};

export default Table;
