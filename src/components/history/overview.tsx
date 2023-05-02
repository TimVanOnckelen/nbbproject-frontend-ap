// React
import React from 'react';
import { ICompany } from '../../models/company/company.model';
// Visuele onderdelen
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from 'react';

const HistoryOverview = () => {
  const dummyData: ICompany[] = [
    {
      name: 'Company 1',
      vatNumber: 232332322332,
    },
    {
      name: 'ompany 2',
      vatNumber: 11221122112,
    },
    {
      name: 'ompany 2',
      vatNumber: 11221122112,
    },
    {
      name: 'Lompany 2',
      vatNumber: 11221122112,
    },
  ];

  const [filterCompany, SetFilterCompany] = useState<string>('');

  //   // Laad de useOutletContext functie

  // const Component = () => {
  //   // Haal api object op uit de outlet context.
  // const { api } = useOutletContext<IAppContext>();}

  // // bv. api.enterprise is nu beschikbaar.
  // // De intelisense geeft suggesties over de beschikbare calls
  // const doApiCall = React.useCallback(() => {});
  //   // Gebruik React.useCallback om er voor te zorgen dat de app niet onnodig opnieuw gerenderd wordt

  //   const callApi = async () => {
  //     try {
  //       const result = await api.enterprise.apiEnterpriseGet();
  //       console.log(result.data);
  //       // de data is beschikbaar in de parameter data
  //       // Modellen zijn automatisch toegekend, dus de intelisense stelt de beschikbare parameters voor.
  //     }catch(e){
  //       console.log(e);
  //     }

  // },[]);

  // return (<>        </>)
  // }

  // const loadHistory =async () => {
  //   const [history, Sethistory] = useState([]);

  //  let response = await fetch("/src/api/index.ts")
  //  let historian: ICompany = await response.json();

  // }
  // useEffect(()=>{
  //   loadHistory();

  // }, [])

  //const [filterCompany, SetFilterCompany] =useState("");

  //   // Laad de useOutletContext functie

  // const Component = () => {
  //   // Haal api object op uit de outlet context.
  // const { api } = useOutletContext<IAppContext>();}

  // // bv. api.enterprise is nu beschikbaar.
  // // De intelisense geeft suggesties over de beschikbare calls
  // const doApiCall = React.useCallback(() => {});
  //   // Gebruik React.useCallback om er voor te zorgen dat de app niet onnodig opnieuw gerenderd wordt

  //   const callApi = async () => {
  //     try {
  //       const result = await api.enterprise.apiEnterpriseGet();
  //       console.log(result.data);
  //       // de data is beschikbaar in de parameter data
  //       // Modellen zijn automatisch toegekend, dus de intelisense stelt de beschikbare parameters voor.
  //     }catch(e){
  //       console.log(e);
  //     }

  // },[]);

  // return (<>        </>)
  // }

  // const loadHistory =async () => {
  //   const [history, Sethistory] = useState([]);

  //  let response = await fetch("/src/api/index.ts")
  //  let historian: ICompany = await response.json();

  // }
  // useEffect(()=>{
  //   loadHistory();

  // }, [])

  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 650 }}
        aria-label='simple table'
      >
        <TableHead>
          <TableRow>
            <TableCell>Opgevraagde entiteiten</TableCell>
            <TableCell align='right'>Ondernemingsnummer</TableCell>
            <TableCell align='right'>Winst</TableCell>
            <TableCell align='right'>Verlies</TableCell>
            <TableCell align='right'>assets </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dummyData
            .filter((c) => c.name.toUpperCase().startsWith(filterCompany.toUpperCase()))
            .filter((c) => c.name.toUpperCase().startsWith(filterCompany.toUpperCase()))
            .map((name) => (
              <TableRow
                key={name.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell
                  component='th'
                  scope='row'
                >
                  {name.name}
                </TableCell>

                <TableCell align='right'>{name.vatNumber}</TableCell>
                <TableCell align='right'>{}</TableCell>
                <TableCell align='right'>{}</TableCell>
                <TableCell align='right'>{}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default HistoryOverview;
