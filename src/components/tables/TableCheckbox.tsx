import { DataTable } from 'mantine-datatable';
import React from 'react';

interface TableCheckboxProps {
  page: number;
  onPageChange: (page: number) => void;
  recordsPerPageOptions: number[];
  recordsPerPage: number;
  onRecordsPerPageChange: (pageSize: number) => void;
  data: any[];
  columns: any[];
  sortStatus: any;
  onSortStatusChange: (sortStatus: any) => void;
  selectedRecords: any[];
  onSelectedRecordsChange: (selectedRecords: any[]) => void;
}

const TableCheckbox: React.FC<TableCheckboxProps> = ({
  page,
  onPageChange,
  recordsPerPageOptions,
  recordsPerPage,
  onRecordsPerPageChange,
  data,
  columns,
  sortStatus,
  onSortStatusChange,
  selectedRecords,
  onSelectedRecordsChange,
}) => {
  return (
    <>
      <div className="panel flex items-center overflow-x-auto whitespace-nowrap p-3 text-primary">
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
            selectedRecords={selectedRecords}
            onSortStatusChange={onSortStatusChange}
            recordsPerPageOptions={recordsPerPageOptions}
            onRecordsPerPageChange={onRecordsPerPageChange}
            onSelectedRecordsChange={onSelectedRecordsChange}
            className="whitespace-nowrap table-hover"
            paginationText={({ from, to, totalRecords }) => `Showing  ${from} to ${to} of ${totalRecords} entries`}
            noRecordsText="Tidak Ada Data"
          />
        </div>
      </div>
    </>
  );
};

export default TableCheckbox;
