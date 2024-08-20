import {
  DynamicTableProps,
  Table,
  TableCell,
  TableContainer,
  TableHeader,
  TableRow,
} from "./styles";

const DynamicTable: React.FC<DynamicTableProps> = ({ data }) => {
  // Check if data is empty
  if (data.length === 0) {
    return <p>No data available</p>;
  }

  // Extract column headers from the data keys
  const columns = Object.keys(data[0]);

  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <TableHeader key={index}>{column}</TableHeader>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {columns.map((column, colIndex) => (
                <TableCell key={colIndex}>{row[column]}</TableCell>
              ))}
            </TableRow>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default DynamicTable;
