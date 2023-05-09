// React
import React from 'react';
import { useNavigate } from 'react-router-dom';

// Visuele onderdelen
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
/**
 * https://mui.com/material-ui/api/bottom-navigation-action/
 * More info about button actions can be found above
 */

interface IHeaderProps {
  token?: string | null;
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

  const { t } = useTranslation();

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
        <h1 className='MuiTypography-h1 nbb-color'>
          <span className='nbb-second-color'>{t('common.national')}</span> <span className='nbb-light-text nbb-text-upper'> {t('common.bank')}</span>
          <span className='nbb-second-color nbb-light-text'>{t('common.comparator')}</span>
        </h1>
      </Box>
      <BottomNavigation
        showLabels
        value={currentPage}
        onChange={onPageChange}
      >
        {token && (
          <BottomNavigationAction
            label={t('common.compare')}
            value='/'
          />
        )}
        {token && (
          <BottomNavigationAction
            label={t('common.history')}
            value='/history'
          />
        )}
        {token && (
          <BottomNavigationAction
            label={t('auth.myprofile')}
            value='/profile'
          />
        )}
        {token && (
          <BottomNavigationAction
            label={t('auth.logout')}
            value='auth/logout'
          />
        )}
        {!token && (
          <BottomNavigationAction
            label={t('auth.login')}
            value='/auth/login'
          />
        )}
      </BottomNavigation>
    </div>
  );
};
export default Header;
