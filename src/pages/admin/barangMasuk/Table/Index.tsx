import Columns from './Columns';
import TableSkinBordered from '../../../../components/tables/skin/TableSkinBordered';
import { FC, useEffect, useState } from 'react';

interface TableProps {
  barangMasuk: any[];
  handleDeleteByID: (id_barang_masuk: string) => void;
}

const Table: FC<TableProps> = ({ barangMasuk, handleDeleteByID }) => {
  const PAGE_SIZES = [10, 25, 50, 100];
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
  const [initialRecords, setInitialRecords] = useState(barangMasuk);
  const [recordsData, setRecordsData] = useState(initialRecords);

  useEffect(() => {
    setInitialRecords(barangMasuk);
    setRecordsData(barangMasuk.slice(0, pageSize));
  }, [barangMasuk, pageSize]);

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
        columns={Columns({ handleDeleteByID })}
        recordsPerPage={pageSize}
        totalRecords={barangMasuk.length}
        onPageChange={(page: number) => setPage(page)}
        recordsPerPageOptions={PAGE_SIZES}
        onRecordsPerPageChange={setPageSize}
      />
    </>
  );
};

export default Table;
