import React from "react";
import { BackendApi, Enterprise } from "../../services/api";

const ApiTester = () => {
  const [currentEnterprise, setCurrentEnterprise] =
    React.useState<Enterprise>();

  const getData = React.useCallback(() => {
    const loadData = async () => {
      try {
        const response =
          await BackendApi.enterprise.apiEnterpriseOndernemingsnummerGet(
            "0712657911"
          );
        setCurrentEnterprise(response.data);
      } catch (e) {
        console.log(e);
      }
    };

    loadData().then(() => {});
  }, []);
  return (
    <>
      <button onClick={getData}>Load company</button>
      {currentEnterprise && currentEnterprise.enterpriseName}
    </>
  );
};

export default ApiTester;
