import { DataTable } from 'mantine-datatable';
import React from 'react';

interface TableSkinHoverProps {
  page: number;
  onPageChange: (page: number) => void;
  recordsPerPageOptions: number[];
  recordsPerPage: number;
  onRecordsPerPageChange: (pageSize: number) => void;
  totalRecords: number;
  columns: any[];
  records: any[];
}

const TableSkinHover: React.FC<TableSkinHoverProps> = ({ page, onPageChange, recordsPerPageOptions, recordsPerPage, onRecordsPerPageChange, columns, records, totalRecords }) => {
  return (
    <>
      <div className="panel">
        <div className="datatables">
          <DataTable
            className="whitespace-nowrap table-striped"
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

export default TableSkinHover;
