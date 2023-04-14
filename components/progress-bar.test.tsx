import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ProgressBar from "./progress-bar";

describe("ProgressBar", () => {
  it("renders progress bars with correct initial values", () => {
    const { getByText } = render(<ProgressBar />);

    expect(getByText("50%")).toBeInTheDocument();
    expect(getByText("10%")).toBeInTheDocument();
    expect(getByText("75%")).toBeInTheDocument();
  });

  it("updates progress bars correctly on increment and decrement button clicks", () => {
    const { getByText, getByLabelText } = render(<ProgressBar />);
    const select = getByLabelText("Select progress bar");

    // Select Progress 1
    fireEvent.change(select, { target: { value: "progress1" } });

    // Click -25 button
    fireEvent.click(getByText("-25"));
    expect(getByText("25%")).toBeInTheDocument();

    // Click -10 button
    fireEvent.click(getByText("-10"));
    expect(getByText("15%")).toBeInTheDocument();

    // Click 10 button
    fireEvent.click(getByText("10"));
    expect(getByText("25%")).toBeInTheDocument();

    // Click 25 button
    fireEvent.click(getByText("25"));
    expect(getByText("50%")).toBeInTheDocument();
  });
});
