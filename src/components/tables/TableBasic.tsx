import React from 'react';
import { DataTable } from 'mantine-datatable';

interface TableBasicProps {
  page: number;
  onPageChange: (page: number) => void;
  recordsPerPageOptions: number[];
  recordsPerPage: number;
  onRecordsPerPageChange: (pageSize: number) => void;
  totalRecords: number;
  columns: any[];
  records: any[];
}

const TableBasic: React.FC<TableBasicProps> = ({ page, onPageChange, recordsPerPageOptions, recordsPerPage, onRecordsPerPageChange, records, columns, totalRecords }) => {
  return (
    <>
      <div className="panel mt-6">
        <div className="datatables">
          <DataTable
            className="whitespace-nowrap table-hover"
            highlightOnHover
            page={page}
            minHeight={200}
            records={records}
            columns={columns}
            totalRecords={totalRecords}
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

export default TableBasic;
