import React from "react";
import { render, fireEvent, waitFor } from '@testing-library/react';

import Compare from "../../company/compare";

test("De state van textvakken wordt goed bijgehouden", () => {
    const { getByLabelText } = render(<Compare />);
    const company1Input = getByLabelText("Bedrijf 1");
    const company2Input = getByLabelText("Bedrijf 2");

    fireEvent.change(company1Input, { target: { value: "Company 1" } });
    fireEvent.change(company2Input, { target: { value: "Company 2" } });

    expect(company1Input).toHaveValue("Company 1");
    expect(company2Input).toHaveValue("Company 2");
  });

