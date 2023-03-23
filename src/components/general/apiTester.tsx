import React from "react";
import { Enterprise } from "../../services/api";
import { useOutletContext } from "react-router-dom";
import { IAppContext } from "../../models";

const ApiTester = () => {
  const [currentEnterprise, setCurrentEnterprise] =
    React.useState<Enterprise>();

  const { api } = useOutletContext<IAppContext>();

  const getData = React.useCallback(() => {
    const loadData = async () => {
      try {
        const response =
          await api.enterprise.apiEnterpriseOndernemingsnummerGet("0712657911");
        setCurrentEnterprise(response.data);
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
