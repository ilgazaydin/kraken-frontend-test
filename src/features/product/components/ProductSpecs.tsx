import { TableBody, TableRow, TableCell } from '@mui/material';
import { SpecsContainer, SpecsTitle, SpecsTable } from './ProductSpecs.styles';

interface ProductSpecsProps {
  title?: string;
  data: Record<string, string | number>;
}

export const ProductSpecs = ({ title = 'Specifications', data }: ProductSpecsProps) => {
  return (
    <SpecsContainer>
      <SpecsTitle variant="h5">{title}</SpecsTitle>
      <SpecsTable>
        <TableBody>
          {Object.entries(data).map(([label, value]) => (
            <TableRow key={label}>
              <TableCell sx={{ color: 'text.secondary' }}>{label}</TableCell>
              <TableCell>{value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </SpecsTable>
    </SpecsContainer>
  );
};
