import React, { useState } from 'react';
import Demo from './demo';

interface Column {
  id: string;
  label: string;
  minWidth?: number;
  align?: 'right' | string;
  // format?: (value: number) => string;
}

class FilterObject {
  pageNO: number = 1;
  pageSize: number = 10;
}

const columns: readonly Column[] = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
  {
    id: 'population',
    label: 'Population',
    minWidth: 170,
    align: 'right',
    // format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Size\u00a0(km\u00b2)',
    minWidth: 170,
    align: 'right',
    // format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Density',
    minWidth: 170,
    align: 'right',
    // format: (value: number) => value.toFixed(2),
  },
];

interface Data {
  name: string;
  code: string;
  population: number;
  size: number;
}

const rows: Data[] = [
  { name: 'India', code: 'IN', population: 1324171354, size: 3287263 },
  { name: 'India', code: 'wN', population: 1324171354, size: 3287263 },
  { name: 'India', code: 'aN', population: 1324171354, size: 3287263 },
  { name: 'India', code: 'cN', population: 1324171354, size: 3287263 },
  { name: 'India', code: 'dN', population: 1324171354, size: 3287263 },
  { name: 'India', code: 'fN', population: 1324171354, size: 3287263 },
  { name: 'India', code: 'IrN', population: 1324171354, size: 3287263 },
  { name: 'India', code: 'IqN', population: 1324171354, size: 3287263 },
  { name: 'India', code: 'IaN', population: 1324171354, size: 3287263 },
  { name: 'India', code: 'ItN', population: 1324171354, size: 3287263 },
  { name: 'India', code: 'INu', population: 1324171354, size: 3287263 },
];

const Home = () => {
  const [pageNo, setPageNo] = useState(0);
  const [pageSize, setPageSize] = useState(10);

  const handleNumberOfRowChange = (rows: number = pageSize) => {
    setPageNo(0);
    setPageSize(rows);
    console.log(rows);
  };
  const handleNextPage = () => {
    setPageNo((prevstate) => prevstate++);
    console.log(pageNo);
  };

  return (
    <Demo
      columns={columns}
      rows={rows}
      handleNumberOfRowChange={handleNumberOfRowChange}
      handleNextPage={handleNextPage}
    />
  );
};

export default Home;
