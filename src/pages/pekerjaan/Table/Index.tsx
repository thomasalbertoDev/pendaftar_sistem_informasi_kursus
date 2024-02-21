import React, { useState, useEffect } from 'react';
import Columns from './Columns';
import TableSkinBordered from '../../../components/tables/skin/TableSkinBordered';

interface Pekerjaan {
  id_pekerjaan: string;
  nama_pekerjaan: string;
}

interface TableProps {
  pekerjaan: Array<Pekerjaan>;
  handleDelete: (id_pekerjaan: string) => void;
}

const Table: React.FunctionComponent<TableProps> = ({ pekerjaan, handleDelete }) => {
  const DEFAULT_PAGE_SIZE = 10;
  const PAGE_SIZES: number[] = [10, 25, 50, 100];
  const [state, setState] = useState({
    page: 1 as number,
    pageSize: DEFAULT_PAGE_SIZE as number,
    recordsData: [] as Pekerjaan[],
  });

  const { page, pageSize, recordsData } = state;

  useEffect(() => {
    setState((prevState) => ({ ...prevState, recordsData: pekerjaan.slice(0, pageSize) }));
  }, [pekerjaan, pageSize]);

  useEffect(() => {
    const calculateRecords = () => {
      const from = (page - 1) * pageSize;
      const to = from + pageSize;
      setState((prevState) => ({ ...prevState, recordsData: pekerjaan.slice(from, to) }));
    };
    calculateRecords();
  }, [page, pageSize, pekerjaan]);

  const handlePageChange = (page: number) => setState((prevState) => ({ ...prevState, page }));
  const handleRecordsPerPageChange = (size: number) => setState((prevState) => ({ ...prevState, pageSize: size }));

  return (
    <>
      <TableSkinBordered
        page={page}
        records={recordsData}
        columns={Columns({ handleDelete })}
        totalRecords={pekerjaan.length}
        onPageChange={handlePageChange}
        recordsPerPage={pageSize}
        recordsPerPageOptions={PAGE_SIZES}
        onRecordsPerPageChange={handleRecordsPerPageChange}
      />
    </>
  );
};

export default Table;
