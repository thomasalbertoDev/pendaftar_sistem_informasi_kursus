import { DataTable } from 'mantine-datatable';
import React from 'react';

interface TableSkinStripedProps {
  page: number;
  onPageChange: (page: number) => void;
  recordsPerPageOptions: number[];
  recordsPerPage: number;
  onRecordsPerPageChange: (pageSize: number) => void;
  data: any[];
  columns: any[];
}

const TableSkinStriped: React.FC<TableSkinStripedProps> = ({ page, onPageChange, recordsPerPageOptions, recordsPerPage, onRecordsPerPageChange, data, columns }) => {
  // const [page, setPage] = useState(1);
  // const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
  // const [initialRecords, setInitialRecords] = useState(rowData);
  // const [recordsData, setRecordsData] = useState(initialRecords);

  // const [search, setSearch] = useState('');

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

  return (
    <>
      <div className="panel">
        <div className="datatables">
          <DataTable
            striped
            page={page}
            records={data}
            minHeight={200}
            columns={columns}
            totalRecords={data.length}
            onPageChange={onPageChange}
            recordsPerPage={recordsPerPage}
            recordsPerPageOptions={recordsPerPageOptions}
            onRecordsPerPageChange={onRecordsPerPageChange}
            noRecordsText="Tidak Ada Data"
            className="whitespace-nowrap table-striped"
            paginationText={({ from, to, totalRecords }) => `Showing  ${from} to ${to} of ${totalRecords} entries`}
          />
        </div>
      </div>
    </>
  );
};

export default TableSkinStriped;
