import React from "react";
import { render, screen } from "@testing-library/react";

import { Loader } from "../index";

describe("Loader", () => {
  const MyTestComp = () => <p>Test Component</p>;

  describe("when it is loading", () => {
    const isLoading = true;

    it("renders loader", () => {
      render(
        <Loader isLoading={isLoading}>
          <MyTestComp />
        </Loader>
      );

      expect(screen.getByText("Loading...")).toBeInTheDocument();
      expect(screen.queryByText("Test Component")).not.toBeInTheDocument();
    });
  });

  describe("when it is NOT loading", () => {
    const isLoading = false;

    it("renders children", () => {
      render(
        <Loader isLoading={isLoading}>
          <MyTestComp />
        </Loader>
      );

      expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
      expect(screen.getByText("Test Component")).toBeInTheDocument();
    });
  });
});
