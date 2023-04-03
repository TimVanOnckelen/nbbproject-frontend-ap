import React from 'react';
import ReactDOM  from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Header from '../../general/header';

const empty = () => {
    return (
        <>Empty</>
    );
}

const emptyRouter = createBrowserRouter([
    {
        path:"/",
        element: <empty />
    }
])

test('render Header component',() => {
    const root = ReactDOM.createRoot(
        document.getElementById("root") as HTMLElement
      );
      // Start van de applicatie
      // Router laadt de nodige components vanuit router.tsx
      root.render(
        <React.StrictMode>
          <RouterProvider router={emptyRouter} />
        </React.StrictMode>
      );


    render(<Header />);
    const divHeader = screen.getByRole("header");
    expect(divHeader).toHaveTextContent("Vergelijk");
    expect(divHeader).toHaveTextContent("Historie");
    expect(divHeader).toHaveTextContent("Mijn Profiel");
});