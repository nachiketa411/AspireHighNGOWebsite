import { styled } from "styled-components";

export interface DynamicTableProps {
  data: Array<{ [key: string]: any }>; // Array of objects with dynamic keys
}

export const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto; // Enables horizontal scrolling
  margin-top: 20px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.th`
  padding: 10px;
  background-color: #007bff;
  color: white;
  text-align: left;
  border: 1px solid #ddd;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
`;
