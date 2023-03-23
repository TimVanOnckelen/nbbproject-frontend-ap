## Beschikbare script

Lokaal project uitvoeren:

### `npm start`

De app is standaard beschikbaar onder http://localhost:3000

Projecten "bouwen"

### `npm run build`

Project "Testen"

### `npm test`

## DEV documentatie

[Material UI framework](https://mui.com/material-ui/getting-started/overview/)
[React Router](https://reactrouter.com/en/main/routers/create-browser-router)
[React Router Outlet & context](https://reactrouter.com/en/main/hooks/use-outlet-context)

## API

Alle modellen zijn te importeren via `/src/api/index.ts`

### API aanspreken en gebruiken

De api aanspreken kan door `api` op te halen uit de outlet context

Bijvoorbeeld:

```typescript
// Laad de useOutletContext functie
import { useOutletContext } from "react-router-dom";
// Haal het model van de appContext op
import { IAppContext } from "../../models";

const Component = () => {
  // Haal api object op uit de outlet context.
const { api } = useOutletContext<IAppContext>();

// bv. api.enterprise is nu beschikbaar.
// De intelisense geeft suggesties over de beschikbare calls
const doApiCall = React.useCallback(() => {
  // Gebruik React.useCallback om er voor te zorgen dat de app niet onnodig opnieuw gerenderd wordt

  const callApi = async () => {
    try {
      const result = api.enterprise.apiEnterpriseGet();
      console.log(result.data);
      // de data is beschikbaar in de parameter data
      // Modellen zijn automatisch toegekend, dus de intelisense stelt de beschikbare parameters voor.
    }catch(e){
      console.log(e);
    }

},[]);

return (<></>)
}
```

De api's zijn beschikbaar als parameter binnen het api object:

- api.enterprise
  - api.enterprise.apiEnterpriseOndernemingsnummerGet(ondernemingsnummer) : Enterprise
  - api.enterprise.apiEnterpriseGet() : Enterprise[]
  - api.enterprise.apiEnterpriseOndernemingsnummerFinancialYearGet(ondernemingsnummer,jaar): FinancialData

## Swagger file van API inladen

Met Open API generator kan de swagger file van de backend automatisch worden omgezet in aanspreekbare calls.
Hoe deze calls aan te roepen zijn staat hierboven beschreven.

Installeer open API generator lokaal en globaal

### `npm install @openapitools/openapi-generator-cli -g`

Update de swagger.json file naar de laatste versie van onze eigen backend.

### `openapi-generator-cli generate -g typescript-axios -o ./src/services/api -i swagger.json`

Bovenstaande script generereert automatisch de nodige calls naar de backend api. Deze zijn terug te vinden in src/services/api/api.ts
