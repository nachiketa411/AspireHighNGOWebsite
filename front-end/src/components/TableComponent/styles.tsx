import { styled } from "styled-components";

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

interface DataProcessor {
  process(data: any[]): any[];
}

// Default implementation of DataProcessor
export class DefaultDataProcessor implements DataProcessor {
  process(data: any[]): any[] {
    return data; // No processing, just return the data as is
  }
}

export class SortByColumn implements DataProcessor {
  constructor(private column: string) {}
  process(data: any[]): any[] {
    return [...data].sort((a, b) =>
      a[this.column].localeCompare(b[this.column])
    );
  }
}

export interface DynamicTableProps {
  data: Array<{ [key: string]: any }>; // Array of objects with dynamic keys
  processor?: DataProcessor; // Optional DataProcessor
}
