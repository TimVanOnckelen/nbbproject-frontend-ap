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

## API

Alle modellen zijn te importeren via `/src/api/index.ts`

### API aanspreken en gebruiken

De api aanspreken kan door `api` op te halen uit de outlet context

```
// Laad de useOutletContext functie
import { useOutletContext } from "react-router-dom";
// Haal het model van de appContext op
import { IAppContext } from "../../models";

const Component = () => {
  // Haal api object op uit de outlet context.
const { api } = useOutletContext<IAppContext>();

// bv. api.enterprise is nu beschikbaar.
// De intelisense geeft suggesties over de beschikbare calls

return (<></>)
}
```

De api's zijn beschikbaar als parameter binnen het api object:

- api.enterprise
  - api.enterprise.apiEnterpriseOndernemingsnummerGet(ondernemingsnummer) : Enterprise
  - api.enterprise.apiEnterpriseGet() : Enterprise[]
  - api.enterprise.apiEnterpriseOndernemingsnummerFinancialYearGet(ondernemingsnummer,jaar): FinancialData

## Swagger file van API inladen

Installeer open API generator lokaal en globaal

### `npm install @openapitools/openapi-generator-cli -g`

Update de swagger.json file naar de laatste versie van onze eigen backend.

### `openapi-generator-cli generate -g typescript-axios -o ./src/services/api -i swagger.json`

Bovenstaande script generereert automatisch de nodige calls naar de backend api. Deze zijn terug te vinden in src/services/api/api.ts
