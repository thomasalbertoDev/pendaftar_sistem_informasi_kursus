import React, { useState, useEffect } from 'react';
import Columns from './Columns';
import TableSkinBordered from '../../../components/tables/skin/TableSkinBordered';

interface TableProps {
  pendidikan: any[];
  handleDelete: (id_pendidikan: string) => void;
}

const Table: React.FC<TableProps> = ({ pendidikan, handleDelete }) => {
  const DEFAULT_PAGE_SIZE = 10;
  const PAGE_SIZES = [10, 25, 50, 100];
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(DEFAULT_PAGE_SIZE);
  const [recordsData, setRecordsData] = useState<any[]>([]);

  useEffect(() => {
    setRecordsData(pendidikan.slice(0, pageSize));
  }, [pendidikan, pageSize]);

  useEffect(() => {
    const calculateRecords = () => {
      const from = (page - 1) * pageSize;
      const to = from + pageSize;
      setRecordsData(pendidikan.slice(from, to));
    };
    calculateRecords();
  }, [page, pageSize, pendidikan]);

  const handlePageChange = (page: number) => setPage(page);
  const handleRecordsPerPageChange = (size: number) => setPageSize(size);

  return (
    <>
      <TableSkinBordered
        page={page}
        records={recordsData}
        columns={Columns({ handleDelete })}
        recordsPerPage={pageSize}
        totalRecords={pendidikan.length}
        onPageChange={handlePageChange}
        recordsPerPageOptions={PAGE_SIZES}
        onRecordsPerPageChange={handleRecordsPerPageChange}
      />
    </>
  );
};

export default Table;
