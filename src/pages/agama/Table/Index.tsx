import React, { useState, useEffect } from 'react';
import Columns from './Columns';
import TableSkinBordered from '../../../components/tables/skin/TableSkinBordered';

type Agama = {
  id_agama: string;
  nama_agama: string;
};

interface TableProps {
  agama: any[];
  handleDelete: (id_agama: string) => void;
}

const Table: React.FunctionComponent<TableProps> = ({ agama, handleDelete }) => {
  const DEFAULT_PAGE_SIZE = 10;
  const PAGE_SIZES: number[] = [10, 25, 50, 100];
  const [state, setState] = useState({
    page: 1 as number,
    pageSize: DEFAULT_PAGE_SIZE as number,
    recordsData: [] as Agama[],
  });

  const { page, pageSize, recordsData } = state;

  useEffect(() => {
    setState((prevState) => ({ ...prevState, recordsData: agama.slice(0, pageSize) }));
  }, [agama, pageSize]);

  useEffect(() => {
    const calculateRecords = () => {
      const from = (page - 1) * pageSize;
      const to = from + pageSize;
      setState((prevState) => ({ ...prevState, recordsData: agama.slice(from, to) }));
    };
    calculateRecords();
  }, [page, pageSize, agama]);

  const handlePageChange = (page: number) => setState((prevState) => ({ ...prevState, page }));
  const handleRecordsPerPageChange = (size: number) => setState((prevState) => ({ ...prevState, pageSize: size }));

  return (
    <>
      <TableSkinBordered
        page={page}
        records={recordsData}
        columns={Columns({ handleDelete })}
        recordsPerPage={pageSize}
        totalRecords={agama.length}
        onPageChange={handlePageChange}
        recordsPerPageOptions={PAGE_SIZES}
        onRecordsPerPageChange={handleRecordsPerPageChange}
      />
    </>
  );
};

export default Table;
