// React
import React from 'react';
import { useNavigate } from 'react-router-dom';

// Visuele onderdelen
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
/**
 * https://mui.com/material-ui/api/bottom-navigation-action/
 * More info about button actions can be found above
 */

interface IHeaderProps {
  token?: string;
}

// Header component dat boven iedere pagina getoond wordt.
// Bevat ook het navigatiemenu
const Header = (props: IHeaderProps) => {
  const [currentPage, setCurrentPage] = React.useState<string>('');
  const { token } = props;
  /**
   * Navigate between routes
   */
  const navigate = useNavigate();

  /**
   * Change current page based on value
   */
  const onPageChange = React.useCallback(
    (event: React.SyntheticEvent, newValue: string) => {
      setCurrentPage(newValue);
      navigate(newValue);
    },
    [setCurrentPage, navigate]
  );
  return (
    <div>
      <Box>
        <h1 className='MuiTypography-h1'>National bank comparator</h1>
      </Box>
      <BottomNavigation
        showLabels
        value={currentPage}
        onChange={onPageChange}
      >
        {token && (
          <BottomNavigationAction
            label='Compare'
            value='/'
          />
        )}
        {token && (
          <BottomNavigationAction
            label='History'
            value='/history'
          />
        )}
        {token && (
          <BottomNavigationAction
            label='My Profile'
            value='/profile'
          />
        )}
        {token && (
          <BottomNavigationAction
            label='Log out'
            value='auth/logout'
          />
        )}
        {!token && (
          <BottomNavigationAction
            label='Login'
            value='/auth/login'
          />
        )}
      </BottomNavigation>
    </div>
  );
};
export default Header;
