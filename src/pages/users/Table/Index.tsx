import React, { useState, useEffect } from 'react';
import Columns from './Columns';
import TableSkinBordered from '../../../components/tables/skin/TableSkinBordered';

type Users = {
  nama: string;
  email: string;
  username: string;
  role: string;
  verifikasi_email: boolean;
  tanggal_verifikasi_email: string;
  foto_profile: string;
  tempat_lahir: string;
  tanggal_lahir: string;
  jenis_kelamin: string;
  no_telepon: string;
  alamat: string;
  instagram: string;
  whatsapp: string;
};

interface TableProps {
  users: Users[];
}

const Table: React.FC<TableProps> = ({ users }) => {
  const DEFAULT_PAGE_SIZE: number = 10;
  const PAGE_SIZES: number[] = [10, 25, 50, 100];
  const [state, setState] = useState({
    page: 1 as number,
    pageSize: DEFAULT_PAGE_SIZE as number,
    recordsData: [] as Users[],
  });

  const { page, pageSize, recordsData } = state;

  useEffect(() => {
    setState((prevState) => ({ ...prevState, recordsData: users.slice(0, pageSize) }));
  }, [users, pageSize]);

  useEffect(() => {
    const calculateRecords = () => {
      const from = (page - 1) * pageSize;
      const to = from + pageSize;
      setState((prevState) => ({ ...prevState, recordsData: users.slice(from, to) }));
    };
    calculateRecords();
  }, [page, pageSize, users]);

  const handlePageChange = (page: number) => setState((prevState) => ({ ...prevState, page }));
  const handleRecordsPerPageChange = (size: number) => setState((prevState) => ({ ...prevState, pageSize: size }));

  return (
    <>
      <TableSkinBordered
        page={page}
        records={recordsData}
        columns={Columns()}
        recordsPerPage={pageSize}
        totalRecords={users.length}
        onPageChange={handlePageChange}
        recordsPerPageOptions={PAGE_SIZES}
        onRecordsPerPageChange={handleRecordsPerPageChange}
      />
    </>
  );
};

export default Table;
