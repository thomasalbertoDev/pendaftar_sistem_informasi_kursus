import { DataTable } from 'mantine-datatable';
import React from 'react';

interface TableSkinBorderedProps {
  page: number;
  onPageChange: (page: number) => void;
  recordsPerPageOptions: number[];
  recordsPerPage: number;
  onRecordsPerPageChange: (pageSize: number) => void;
  data: any[];
  columns: any[];
}

const TableSkinBordered: React.FC<TableSkinBorderedProps> = ({ page, onPageChange, recordsPerPageOptions, recordsPerPage, onRecordsPerPageChange, data, columns }) => {
  // const [page2, setPage2] = useState(1);
  // const [pageSize2, setPageSize2] = useState(PAGE_SIZES[0]);
  // const [initialRecords2, setInitialRecords2] = useState(rowData);
  // const [recordsData2, setRecordsData2] = useState(initialRecords2);

  // const [search2, setSearch2] = useState('');

  // useEffect(() => {
  //   setPage2(1);
  // }, [pageSize2]);

  // useEffect(() => {
  //   const from = (page2 - 1) * pageSize2;
  //   const to = from + pageSize2;
  //   setRecordsData2([...initialRecords2.slice(from, to)]);
  // }, [page2, pageSize2, initialRecords2]);

  // useEffect(() => {
  //   setInitialRecords2(() => {
  //     return rowData.filter((item) => {
  //       return (
  //         item.id.toString().includes(search2.toLowerCase()) ||
  //         item.firstName.toLowerCase().includes(search2.toLowerCase()) ||
  //         item.lastName.toLowerCase().includes(search2.toLowerCase()) ||
  //         item.email.toLowerCase().includes(search2.toLowerCase()) ||
  //         item.phone.toLowerCase().includes(search2.toLowerCase())
  //       );
  //     });
  //   });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [search2]);

  return (
    <>
      <div className="panel">
        <div className="datatables">
          <DataTable
            className="whitespace-nowrap table-bordered"
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
            paginationText={({ from, to, totalRecords }) => `Showing  ${from} to ${to} of ${totalRecords} entries`}
          />
        </div>
      </div>
    </>
  );
};

export default TableSkinBordered;
