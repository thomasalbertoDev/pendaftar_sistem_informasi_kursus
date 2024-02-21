import React, { useState, useEffect } from 'react';
import Columns from './Columns';
import TableSkinBordered from '../../../components/tables/skin/TableSkinBordered';

interface Penghasilan {
  id_penghasilan: string;
  jumlah_penghasilan: string;
}

interface TableProps {
  penghasilan: Array<Penghasilan>;
  handleDelete: (id_penghasilan: string) => void;
}

const Table: React.FunctionComponent<TableProps> = ({ penghasilan, handleDelete }) => {
  const DEFAULT_PAGE_SIZE: number = 10;
  const PAGE_SIZES: number[] = [10, 25, 50, 100];
  const [state, setState] = useState({
    page: 1 as number,
    pageSize: DEFAULT_PAGE_SIZE as number,
    recordsData: [] as Penghasilan[],
  });

  const { page, pageSize, recordsData } = state;

  useEffect(() => {
    setState((prevState) => ({ ...prevState, recordsData: penghasilan.slice(0, pageSize) }));
  }, [penghasilan, pageSize]);

  useEffect(() => {
    const calculateRecords = () => {
      const from = (page - 1) * pageSize;
      const to = from + pageSize;
      setState((prevState) => ({ ...prevState, recordsData: penghasilan.slice(from, to) }));
    };
    calculateRecords();
  }, [page, pageSize, penghasilan]);

  const handlePageChange = (page: number) => setState((prevState) => ({ ...prevState, page }));
  const handleRecordsPerPageChange = (size: number) => setState((prevState) => ({ ...prevState, pageSize: size }));

  return (
    <>
      <TableSkinBordered
        page={page}
        records={recordsData}
        columns={Columns({ handleDelete })}
        totalRecords={penghasilan.length}
        onPageChange={handlePageChange}
        recordsPerPage={pageSize}
        recordsPerPageOptions={PAGE_SIZES}
        onRecordsPerPageChange={handleRecordsPerPageChange}
      />
    </>
  );
};

export default Table;
