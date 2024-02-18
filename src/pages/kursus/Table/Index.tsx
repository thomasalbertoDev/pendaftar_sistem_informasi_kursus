import React, { useState, useEffect } from 'react';
import Columns from './Columns';
import TableSkinBordered from '../../../components/tables/skin/TableSkinBordered';

type Kursus = {
  id_kursus: string;
  nama_kursus: string;
  topik_kursus: string;
  jenjang_kursus: string;
  pengajar_ID: string;
  jam_mulai: string;
  jam_selesai: string;
  tanggal_mulai: string;
  tanggal_selesai: string;
  hari_kursus: string;
  harga_kursus: number;
  foto_kursus: string;
  syarat_kursus: string;
  deskripsi_kursus: string;
  modul_kursus: string;
};

interface TableProps {
  kursus: Kursus[];
  handleDelete: (id_kursus: string) => void;
}

const Table: React.FC<TableProps> = ({ kursus, handleDelete }) => {
  const DEFAULT_PAGE_SIZE: number = 10;
  const PAGE_SIZES: number[] = [10, 25, 50, 100];
  const [state, setState] = useState({
    page: 1 as number,
    pageSize: DEFAULT_PAGE_SIZE as number,
    recordsData: [] as Kursus[],
  });

  const { page, pageSize, recordsData } = state;

  useEffect(() => {
    setState((prevState) => ({ ...prevState, recordsData: kursus.slice(0, pageSize) }));
  }, [kursus, pageSize]);

  useEffect(() => {
    const calculateRecords = () => {
      const from = (page - 1) * pageSize;
      const to = from + pageSize;
      setState((prevState) => ({ ...prevState, recordsData: kursus.slice(from, to) }));
    };
    calculateRecords();
  }, [page, pageSize, kursus]);

  const handlePageChange = (page: number) => setState((prevState) => ({ ...prevState, page }));
  const handleRecordsPerPageChange = (size: number) => setState((prevState) => ({ ...prevState, pageSize: size }));

  return (
    <>
      <TableSkinBordered
        page={page}
        records={recordsData}
        columns={Columns({ handleDelete })}
        recordsPerPage={pageSize}
        totalRecords={kursus.length}
        onPageChange={handlePageChange}
        recordsPerPageOptions={PAGE_SIZES}
        onRecordsPerPageChange={handleRecordsPerPageChange}
      />
    </>
  );
};

export default Table;
