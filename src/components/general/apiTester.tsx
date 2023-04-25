// React
import React from "react";
import { useOutletContext } from "react-router-dom";

// Interne onderdelen
import { Enterprise } from "../../services/api";
import { IAppContext } from "../../models";

// Test de verbinding uit door een bedrijf in te laden vanuit de backend API.
const ApiTester = () => {
  const [currentEnterprise, setCurrentEnterprise] =
    React.useState<Enterprise>();

  const { api } = useOutletContext<IAppContext>();

  const getData = React.useCallback(() => {
    const loadData = async () => {
      try {
        const response =
          await api?.enterprise.apiEnterpriseOndernemingsnummerGet("0712657911");
        setCurrentEnterprise(response?.data);
      } catch (e) {
        console.log(e);
      }
    };

    loadData().then(() => {});
  }, [api]);
  return (
    <>
      <button onClick={getData}>Load company</button>
      {currentEnterprise && currentEnterprise.enterpriseName}
    </>
  );
};

export default ApiTester;
