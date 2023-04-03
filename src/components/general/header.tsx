// Visuele onderdelen
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
/**
 * https://mui.com/material-ui/api/bottom-navigation-action/
 * More info about button actions can be found above
 */

// React
import React from "react";
import { useNavigate } from "react-router-dom";

// Header component dat boven iedere pagina getoond wordt.
// Bevat ook het navigatiemenu
const Header = () => {
  const [currentPage, setCurrentPage] = React.useState<string>("");

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
    <>
      <BottomNavigation showLabels value={currentPage} onChange={onPageChange}>
        <BottomNavigationAction label="Vergelijk" value="/" />
        <BottomNavigationAction label="Historie" value="/history" />
        <BottomNavigationAction label="Mijn profiel" value="/profile" />
      </BottomNavigation>
    </>
  );
};
export default Header;
