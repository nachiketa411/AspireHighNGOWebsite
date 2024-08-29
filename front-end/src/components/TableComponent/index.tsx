import {
  DefaultDataProcessor,
  DynamicTableProps,
  Table,
  TableCell,
  TableContainer,
  TableHeader,
  TableRow,
} from "./styles";

const DynamicTable: React.FC<DynamicTableProps> = ({
  data,
  processor = new DefaultDataProcessor(),
}) => {
  // Check if data is empty
  const processedData = processor.process(data);

  if (processedData.length === 0) {
    return <p>No data available</p>;
  }

  const columns = Object.keys(processedData[0]);

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
          {processedData.map((row, rowIndex) => (
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
