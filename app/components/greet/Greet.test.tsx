import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import Greet from "./Greet";
import "@testing-library/jest-dom/vitest";

describe("<Greet />", () => {
    it("should render Hello with the name when the name is provided", () => {
        render(<Greet name="Andres" />);
        screen.debug();

        const greet = screen.getByTestId("greeting");

        expect(greet).toBeVisible();
        expect(greet).toHaveTextContent(/andres/i);
    });

    it("should render login button when name is not provided", () => {
        render(<Greet />);
        screen.debug();

        const button = screen.getByTestId("login-button");

        expect(button).toBeVisible();
        expect(button).toHaveTextContent(/login/i);
    });
});
