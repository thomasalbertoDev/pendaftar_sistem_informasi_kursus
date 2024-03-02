import { useEffect, useState } from 'react';
import Columns from './Columns';
import TableSkinBordered from '../../../components/tables/skin/TableSkinBordered';

interface Pembayaran {
  bukti_pembayaran: string;
}

interface TableProps {
  pembayaran: Array<Pembayaran>;
}

const Table: React.FunctionComponent<TableProps> = ({ pembayaran }) => {
  const DEFAULT_PAGE_SIZE: number = 10;
  const PAGE_SIZES: number[] = [10, 25, 50, 100];
  const [state, setState] = useState({
    page: 1 as number,
    pageSize: DEFAULT_PAGE_SIZE as number,
    recordsData: [] as Pembayaran[],
  });

  const { page, pageSize, recordsData } = state;

  useEffect(() => {
    setState((prevState) => ({ ...prevState, recordsData: pembayaran.slice(0, pageSize) }));
  }, [pembayaran, pageSize]);

  useEffect(() => {
    const calculateRecords = () => {
      const from = (page - 1) * pageSize;
      const to = from + pageSize;
      setState((prevState: { page: number; pageSize: number; recordsData: Pembayaran[] }) => ({ ...prevState, recordsData: pembayaran.slice(from, to) }));
    };
    calculateRecords();
  }, [page, pageSize, pembayaran]);

  const handlePageChange = (page: number) => setState((prevState) => ({ ...prevState, page }));
  const handleRecordsPerPageChange = (size: number) => setState((prevState) => ({ ...prevState, pageSize: size }));

  return (
    <>
      <TableSkinBordered
        page={page}
        records={recordsData}
        columns={Columns()}
        totalRecords={pembayaran.length}
        onPageChange={handlePageChange}
        recordsPerPage={pageSize}
        recordsPerPageOptions={PAGE_SIZES}
        onRecordsPerPageChange={handleRecordsPerPageChange}
      />
    </>
  );
};


export default Table;