// React
import React from 'react';
// Visuele onderdelen
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// React components
import { useState } from 'react';
import { Link, useNavigate, useOutletContext } from 'react-router-dom';
import { IAlert, IAppContext } from '../../models';
import { Enterprise } from '../../services/api';
import { Alert, CircularProgress, TextField, Checkbox } from '@mui/material';
import { useTranslation } from 'react-i18next';

const HistoryOverview = () => {
  const { callConfig, api } = useOutletContext<IAppContext>();

  const [enterprises, setEnterprises] = React.useState<Enterprise[]>([]);
  const [filteredEnterprises, setFilteredEnterprises] = React.useState<Enterprise[]>([]);
  const [isLoading, setLoading] = React.useState<boolean>(true);
  const [hasError, setHasError] = React.useState<IAlert>({ hasError: false, message: '' });

  const [filterCompany, setFilterCompany] = useState<string>('');

  const [selectedVats, setSelectedVats] = useState<string[]>([]);

  const { t } = useTranslation();

  const navigate = useNavigate();

  React.useEffect(() => {
    const getEnterprises = async () => {
      try {
        setLoading(true);
        setEnterprises([]);
        const response = await api.enterprise.apiEnterpriseGet(callConfig);
        if (response.status === 200) {
          setEnterprises(response.data);
        }
      } catch (e) {
        setHasError({ hasError: true, message: t('errors.generic') });
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    if (callConfig) {
      getEnterprises().catch();
    }
  }, [callConfig, api.enterprise, t]);

  const updateCompanyFilter = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.value) {
        setFilterCompany(e.target.value);
      } else {
        setFilterCompany('');
      }
    },
    [setFilterCompany]
  );

  // Filter enterprises based on input
  React.useEffect(() => {
    setFilteredEnterprises(
      enterprises.filter((company) => {
        let matchedFilter = true;
        if (filterCompany && company.enterpriseName) {
          matchedFilter = company.enterpriseName?.toLowerCase().includes(filterCompany.toLowerCase());
          if (!matchedFilter && company.enterpriseNumber)
            matchedFilter = company.enterpriseNumber?.toLowerCase().includes(filterCompany.toLowerCase());
        }
        return matchedFilter;
      })
    );
  }, [filterCompany, enterprises]);

  const selectCheckbox = React.useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      if (e.currentTarget.checked) {
        const newArray = [...selectedVats, e.currentTarget.id];
        setSelectedVats(newArray);
      } else {
        const filteredArray = selectedVats.filter((el) => el !== e.currentTarget.id);

        setSelectedVats(filteredArray);
      }
    },
    [selectedVats]
  );

  React.useEffect(() => {
    if (selectedVats.length === 2) {
      navigate(`/compare/${selectedVats[0]}/${selectedVats[1]}`);
    }
  }, [selectedVats, navigate]);
  return (
    <>
      {hasError.hasError && <Alert severity='error'>{hasError.message}</Alert>}
      {filteredEnterprises.length === 0 && !isLoading && <Alert>{t('history.nohistoryfound')}</Alert>}
      <TextField
        id='filterCompans'
        label={t('history.filter')}
        onChange={updateCompanyFilter}
      />
      {isLoading && <CircularProgress />}

      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 650 }}
          aria-label='simple table'
        >
          <TableHead>
            <TableRow>
              <TableCell>Compare</TableCell>
              <TableCell>Name</TableCell>
              <TableCell align='right'>{t('common.vat')}</TableCell>
              <TableCell align='right'>{t('common.profit')}</TableCell>
              <TableCell align='right'>{t('common.revenue')}</TableCell>
              <TableCell align='right'>{t('common.year')} </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredEnterprises.map((enterprise) => (
              <TableRow
                key={enterprise.enterpriseNumber}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>
                  <Checkbox
                    id={enterprise.enterpriseNumber!}
                    onChange={selectCheckbox}
                  />
                </TableCell>
                <TableCell
                  component='th'
                  scope='row'
                >
                  {enterprise.enterpriseName}
                </TableCell>

                <TableCell align='right'>
                  <Link to={'/compare/' + enterprise.enterpriseNumber}>{enterprise.enterpriseNumber}</Link>
                </TableCell>
                <TableCell align='right'>{enterprise.financialData?.profit}</TableCell>
                <TableCell align='right'>{enterprise.financialData?.revenue}</TableCell>
                <TableCell align='right'>{enterprise.financialData?.year}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default HistoryOverview;
