import { describe, it, expect, vi } from "vitest";
import { useNavigate } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchResultCard from "./SearchResultCard";
import { MemoryRouter } from "react-router-dom";

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: vi.fn(),
  };
});

const onClose = vi.fn();

const movieItem = {
  id: 1,
  title: "Гарри",
  media_type: "movie" as const,
  poster_path: "/test.jpg",
  release_date: "2023-01-01",
};

const renderComponent = () =>
  render(
    <MemoryRouter>
      <SearchResultCard item={movieItem} onClose={onClose} />
    </MemoryRouter>,
  );

describe("SearchResultCard", () => {
  beforeEach(() => {
    onClose.mockClear();
  });
  it("отображает название фильма", () => {
    renderComponent();
    expect(screen.getByRole("heading", { name: "Гарри" })).toBeInTheDocument();
  });
  it("отображает тип (фильм) и год", () => {
    renderComponent();
    expect(screen.getByText("Фильм • 2023")).toBeInTheDocument();
  });
  it("вызывает navigate и onClose при клике", async () => {
    const navigate = vi.fn();
    (useNavigate as any).mockReturnValue(navigate);
    renderComponent();
    const user = userEvent.setup();
    await user.click(screen.getByRole("button"));
    expect(navigate).toHaveBeenCalledWith(
      `/media/${movieItem.media_type}/${movieItem.id}`,
    );
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
