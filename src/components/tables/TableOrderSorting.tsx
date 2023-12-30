import React from 'react';
import { DataTable } from 'mantine-datatable';
import { IRootState } from '../../store';
import { useSelector } from 'react-redux';

interface TableOrderSortingProps {
  page: number;
  onPageChange: (page: number) => void;
  recordsPerPageOptions: number[];
  recordsPerPage: number;
  onRecordsPerPageChange: (pageSize: number) => void;
  data: any[];
  columns: any[];
  sortStatus: any;
  onSortStatusChange: (sortStatus: any) => void;
}

const TableOrderSorting: React.FC<TableOrderSortingProps> = ({ page, onPageChange, recordsPerPageOptions, recordsPerPage, onRecordsPerPageChange, data, columns, sortStatus, onSortStatusChange }) => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(setPageTitle('Order Sorting Table'));
  // });
  const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

  // const [page, setPage] = useState(1);
  // const PAGE_SIZES = [10, 20, 30, 50, 100];
  // const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
  // const [initialRecords, setInitialRecords] = useState(sortBy(rowData, 'id'));
  // const [recordsData, setRecordsData] = useState(initialRecords);

  // const [search, setSearch] = useState('');
  // const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({ columnAccessor: 'id', direction: 'asc' });

  // useEffect(() => {
  //   setPage(1);
  // }, [pageSize]);

  // useEffect(() => {
  //   const from = (page - 1) * pageSize;
  //   const to = from + pageSize;
  //   setRecordsData([...initialRecords.slice(from, to)]);
  // }, [page, pageSize, initialRecords]);

  // useEffect(() => {
  //   setInitialRecords(() => {
  //     return rowData.filter((item) => {
  //       return (
  //         item.id.toString().includes(search.toLowerCase()) ||
  //         item.firstName.toLowerCase().includes(search.toLowerCase()) ||
  //         item.lastName.toLowerCase().includes(search.toLowerCase()) ||
  //         item.email.toLowerCase().includes(search.toLowerCase()) ||
  //         item.phone.toLowerCase().includes(search.toLowerCase())
  //       );
  //     });
  //   });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [search]);

  // useEffect(() => {
  //   const data = sortBy(initialRecords, sortStatus.columnAccessor);
  //   setInitialRecords(sortStatus.direction === 'desc' ? data.reverse() : data);
  //   setPage(1);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [sortStatus]);

  return (
    <>
      <div className="panel mt-6">
        <div className="datatables">
          <DataTable
            highlightOnHover
            page={page}
            records={data}
            minHeight={200}
            columns={columns}
            sortStatus={sortStatus}
            totalRecords={data.length}
            onPageChange={onPageChange}
            recordsPerPage={recordsPerPage}
            onSortStatusChange={onSortStatusChange}
            recordsPerPageOptions={recordsPerPageOptions}
            onRecordsPerPageChange={onRecordsPerPageChange}
            className={`${isRtl ? 'whitespace-nowrap table-hover' : 'whitespace-nowrap table-hover'}`}
            paginationText={({ from, to, totalRecords }) => `Showing  ${from} to ${to} of ${totalRecords} entries`}
            noRecordsText="Tidak Ada Data"
          />
        </div>
      </div>
    </>
  );
};

export default TableOrderSorting;
