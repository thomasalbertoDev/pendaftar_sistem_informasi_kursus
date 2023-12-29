import React from 'react';
import { DataTable } from 'mantine-datatable';

interface TableBasicProps {
  page: number;
  onPageChange: (page: number) => void;
  recordsPerPageOptions: number[];
  recordsPerPage: number;
  onRecordsPerPageChange: (pageSize: number) => void;
  recordsData: any[];
  data: any[];
  columns: any[];
}

const TableBasic: React.FC<TableBasicProps> = ({ page, onPageChange, recordsPerPageOptions, recordsPerPage, onRecordsPerPageChange, recordsData, data, columns }) => {
  // const [page, setPage] = useState(1);
  // const PAGE_SIZES = [10, 20, 30, 50, 100];
  // const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
  // const initialRecords = data.slice(0, pageSize);
  // const [recordsData, setRecordsData] = useState(initialRecords);

  // useEffect(() => {
  //   setPage(1);
  // }, [pageSize]);

  // useEffect(() => {
  //   const from = (page - 1) * pageSize;
  //   const to = from + pageSize;
  //   setRecordsData(data.slice(from, to));
  // }, [page, pageSize]);

  return (
    <>
      <div className="panel mt-6">
        <div className="datatables">
          <DataTable
            page={page}
            minHeight={200}
            columns={columns}
            records={recordsData}
            totalRecords={data.length}
            onPageChange={onPageChange}
            recordsPerPage={recordsPerPage}
            recordsPerPageOptions={recordsPerPageOptions}
            onRecordsPerPageChange={onRecordsPerPageChange}
            highlightOnHover
            noRecordsText="No results match your search query"
            className="whitespace-nowrap table-hover"
            paginationText={({ from, to, totalRecords }) => `Showing  ${from} to ${to} of ${totalRecords} entries`}
          />
        </div>
      </div>
    </>
  );
};

export default TableBasic;
