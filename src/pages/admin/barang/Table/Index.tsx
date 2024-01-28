import Columns from './Columns';
import TableSkinBordered from '../../../../components/tables/skin/TableSkinBordered';
import { FC, useEffect, useState } from 'react';

interface TableProps {
  barang: any[];
  handleDelete: (id_barang: string) => void;
}

const Table: FC<TableProps> = ({ barang, handleDelete }) => {
  const PAGE_SIZES = [10, 25, 50, 100];
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
  const [initialRecords, setInitialRecords] = useState(barang);
  const [recordsData, setRecordsData] = useState(initialRecords);

  useEffect(() => {
    setInitialRecords(barang);
    setRecordsData(barang.slice(0, pageSize));
  }, [barang, pageSize]);

  useEffect(() => {
    const from = (page - 1) * pageSize;
    const to = from + pageSize;
    setRecordsData([...initialRecords.slice(from, to)]);
  }, [page, pageSize, initialRecords]);

  return (
    <>
      <TableSkinBordered
        page={page}
        records={recordsData}
        columns={Columns({ handleDelete })}
        recordsPerPage={pageSize}
        totalRecords={barang.length}
        onPageChange={(page: number) => setPage(page)}
        recordsPerPageOptions={PAGE_SIZES}
        onRecordsPerPageChange={setPageSize}
      />
    </>
  );
};

export default Table;
