import { DataTable } from 'mantine-datatable';
import React from 'react';

interface TableSkinHoverProps {
  page: number;
  onPageChange: (page: number) => void;
  recordsPerPageOptions: number[];
  recordsPerPage: number;
  onRecordsPerPageChange: (pageSize: number) => void;
  data: any[];
  columns: any[];
}

const TableSkinHover: React.FC<TableSkinHoverProps> = ({ page, onPageChange, recordsPerPageOptions, recordsPerPage, onRecordsPerPageChange, data, columns }) => {
  //Skin: Hover
  // const [page1, setPage1] = useState(1);
  // const [pageSize1, setPageSize1] = useState(PAGE_SIZES[0]);
  // const [initialRecords1, setInitialRecords1] = useState(rowData);
  // const [recordsData1, setRecordsData1] = useState(initialRecords1);

  // const [search1, setSearch1] = useState('');

  // useEffect(() => {
  //   setPage1(1);
  // }, [pageSize1]);

  // useEffect(() => {
  //   const from = (page1 - 1) * pageSize1;
  //   const to = from + pageSize1;
  //   setRecordsData1([...initialRecords1.slice(from, to)]);
  // }, [page1, pageSize1, initialRecords1]);

  // useEffect(() => {
  //   setInitialRecords1(() => {
  //     return rowData.filter((item) => {
  //       return (
  //         item.id.toString().includes(search1.toLowerCase()) ||
  //         item.firstName.toLowerCase().includes(search1.toLowerCase()) ||
  //         item.lastName.toLowerCase().includes(search1.toLowerCase()) ||
  //         item.email.toLowerCase().includes(search1.toLowerCase()) ||
  //         item.phone.toLowerCase().includes(search1.toLowerCase())
  //       );
  //     });
  //   });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [search1]);

  return (
    <>
      <div className="panel">
        <div className="datatables">
          <DataTable
            highlightOnHover
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

export default TableSkinHover;
