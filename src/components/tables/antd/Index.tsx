import React from 'react';
import { Table, TablePaginationConfig } from 'antd';

interface TableColumn {
  title: string;
  dataIndex: string;
  key: string;
}

interface TableAntdProps {
  tableColumns: TableColumn[];
  dataSource: any[];
  pageSize: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  showNumbering?: boolean;
  numberTitle?: string;
  rowKey?: string;
  totalItem: number;
  size?: 'middle' | 'small' | undefined;
}

const TableAntd: React.FC<TableAntdProps> = ({
  tableColumns,
  dataSource,
  pageSize,
  currentPage,
  onPageChange,
  showNumbering = true,
  numberTitle = 'No',
  rowKey = 'id',
  totalItem,
  size = 'small',
  ...rest
}) => {
  const numberingColumns: TableColumn[] = [
    {
      title: numberTitle,
      dataIndex: 'numberId',
      key: 'numberId',
    },
  ];

  const columns: TableColumn[] = showNumbering ? [...numberingColumns, ...tableColumns] : tableColumns;

  const numberColumns = (index: number): number => {
    if (currentPage === 1) {
      return index + 1;
    }
    const result = pageSize * (currentPage - 1) + 1;
    return index + result;
  };

  const dataTable = dataSource.map((item, index) => (showNumbering ? { ...item, numberId: numberColumns(index) } : item));

  const paginationConfig: TablePaginationConfig = {
    hideOnSinglePage: true,
    current: currentPage,
    defaultPageSize: pageSize,
    total: totalItem,
    onChange: onPageChange,
    showSizeChanger: false,
  };

  return (
    <>
      <Table {...rest} size={size} columns={columns} dataSource={dataTable} rowKey={rowKey} pagination={paginationConfig} />
    </>
  );
};

export default TableAntd;
