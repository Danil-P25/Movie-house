import { describe, it, expect, vi } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";

import { getAllGenres } from "@/api/catalog";
import { useGenre } from "./useGenres";
import { createQueryWrapper } from "@/tests/test.utils";

vi.mock("@/api/catalog", () => ({
  getAllGenres: vi.fn(),
}));

describe("useGenre", () => {
  it("возвращает названия жанров по id", async () => {
    vi.mocked(getAllGenres).mockResolvedValue([
      { id: 28, name: "Action" },
      { id: 12, name: "Adventure" },
    ]);

    const { result } = renderHook(() => useGenre(), {
      wrapper: createQueryWrapper(),
    });

    await waitFor(() => {
      expect(result.current.getGenreNames([28, 12])).toBe("Action, Adventure");
    });
    expect(getAllGenres).toHaveBeenCalledTimes(1);
  });
  it("возвращает пустую строку, если жанры не найдены", async () => {
    vi.mocked(getAllGenres).mockResolvedValue([]);

    const { result } = renderHook(() => useGenre(), {
      wrapper: createQueryWrapper(),
    });

    await waitFor(() => {
      expect(result.current.getGenreNames([999])).toBe("");
    });
  });
});
