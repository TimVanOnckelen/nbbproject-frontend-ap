import * as React from 'react';
import { Enterprise } from '../../services/api';
import { Box, Chip, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { IHighestData } from '../../models';
interface ICompanyProps {
  company: Enterprise;
  highestData?: IHighestData;
}

enum highLowType {
  profit,
  revenue,
}
const Company = (props: ICompanyProps) => {
  const { company, highestData = { profit: 0, revenue: 0 } } = props;

  const checkHighLow = React.useCallback(
    (amount: number = 0, type: highLowType) => {
      if (type === highLowType.profit && highestData.profit) {
        if (highestData.profit <= amount) {
          return (
            <Chip
              color='success'
              label={company.financialData?.profit}
            />
          );
        }
        return (
          <Chip
            color='error'
            label={company.financialData?.profit}
          />
        );
      }
      if (type === highLowType.revenue && highestData.revenue) {
        if (highestData.revenue <= amount) {
          return (
            <Chip
              color='success'
              label={company.financialData?.revenue}
            />
          );
        }
        return (
          <Chip
            color='error'
            label={company.financialData?.revenue}
          />
        );
      }
    },
    [highestData, company]
  );
  return (
    <>
      <Box>
        <h3>{company.enterpriseName}</h3>
        <h5>
          {company.address?.street} {company.address?.number} {company.address?.postalCode} {company.address?.city}
        </h5>
        <h5>BE{company.enterpriseNumber}</h5>
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Year</TableCell>
              <TableCell>Profit</TableCell>
              <TableCell>Revenue</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>{company.financialData?.year}</TableCell>
              <TableCell>{checkHighLow(company.financialData?.profit, highLowType.profit)}</TableCell>
              <TableCell> {checkHighLow(company.financialData?.revenue, highLowType.revenue)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Company;
