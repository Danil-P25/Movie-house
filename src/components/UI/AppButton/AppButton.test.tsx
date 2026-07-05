import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AppButton from "./AppButton";

describe("AppButton", () => {
  it("Рендерит кнопку с переданным текстом", () => {
    render(<AppButton>Нажми</AppButton>);
    expect(screen.getByRole("button", { name: "Нажми" })).toBeInTheDocument();
  });
  it("Вызывает onClick при клике", async () => {
    const handleClick = vi.fn();
    render(<AppButton onClick={handleClick}>Нажми</AppButton>);
    await userEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  it("Передается className", () => {
    render(<AppButton className="myClass">Нажми</AppButton>);
    const button = screen.getByRole("button", { name: "Нажми" });
    expect(button).toHaveClass("myClass");
  });
  it("передает disabled", () => {
    render(<AppButton disabled>Нажми</AppButton>);
    const button = screen.getByRole("button", { name: "Нажми" });
    expect(button).toBeDisabled();
  });
});
