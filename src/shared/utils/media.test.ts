import { TMDB_BACKDROP_ORIGINAL_URL, TMDB_BACKIMAGE_URL, TMDB_IMAGE_URL } from "../constants/tmdb";
import { MovieDetails } from "../types/media";
import { getDurationInfo, getDurationLabel, getMediaTitle, getPosterUrl, isMovie, getYear, getGenres, getBackUrl, getBackdropUrl } from "./media";
import { describe, it, expect } from "vitest";

describe("getGenres", () => {
  it('Возвращает первые два жанра', () => {
    expect(getGenres({genres: [
      {name: 'драма'},
      {name: 'ужасы'},
      {name: 'комедия'}
    ]} as MovieDetails)).toBe('драма, ужасы');
  });
  it('Возвращает undefined, когда список жанров пуст', () => {
    expect(getGenres({genres: []} as MovieDetails)).toBeUndefined();
  });
})

describe("getYear", () => {
  it('Возвращает год выхода фильма', () => {
    expect(getYear({original_title: 'Интерстеллар', release_date: '2014-11-07'})).toBe("2014");
  });
  it('Возвращает год сериала', () => {
    expect(getYear({original_name: 'Отбросы', first_air_date: '2016-11-07'})).toBe("2016");
  });
  it('Возвращает (—), если дата отсутствует', () => {
    expect(getYear({original_name: 'Отбросы'})).toBe("—");
  });
})

describe("getDurationLabel", () => {
  it('Возвращает (Время) для фильма', () => {
    expect(getDurationLabel({original_title: 'Гарри Поттер',})).toBe("Время");
  });

  it('Возвращает (Количество сезонов) для сериала', () => {
    expect(getDurationLabel({original_name: 'Во все тяжкие',})).toBe("Количество сезонов");
  });
});

describe('getDurationInfo', () => {
  it('Возвращает время фильма в минутах', () => {
    expect(getDurationInfo({original_title: 'Гарри Потер', runtime: 171})).toBe("171 мин")
  });
  it('Возвращает количество сезонов', () => {
    expect(getDurationInfo({original_name: 'Ходячие мертвецы', number_of_seasons: 11})).toBe("11 сез.")
  });
  it('Возвращает (—) если свойство отсутвует у фильма', () => {
    expect(getDurationInfo({original_title: 'Гарри Потер'})).toBe("— мин")
  });
})

describe('isMovie', () => {
  it('Возвращает true если (origin_title)', () => {
    expect(isMovie({original_title: "фильм"})).toBe(true);
  });
  it('Возвращает false если нет (origin_title)', () => {
    expect(isMovie({name: "сериала"})).toBe(false);
  });
  it('Возвращает false если обьект пуст', () => {
    expect(isMovie({})).toBe(false);
  });
})

describe('getMediaTitle', () => {
  it('Возвращает название фильма', () => {
    expect(getMediaTitle({title: "название фильма"})).toBe("название фильма");
  });
  it('Возвращает название сериала', () => {
    expect(getMediaTitle({name: "название сериала"})).toBe("название сериала");
  });
  it(`Возвращает "без названия"`, () => {
    expect(getMediaTitle({})).toBe("Без названия");
  })
})

describe('Возвращает getPosterUrl, getBackUrl, getBackdropUrl - url', () => {
  it.each([
    [getPosterUrl, TMDB_IMAGE_URL],
    [getBackUrl, TMDB_BACKIMAGE_URL],
    [getBackdropUrl, TMDB_BACKDROP_ORIGINAL_URL],
  ])('возвращает полный url', (fn, baseUrl) => {
    expect(fn("/image.jpg")).toBe(`${baseUrl}/image.jpg`);
  });

  it.each([
    getPosterUrl,
    getBackUrl,
    getBackdropUrl,
  ])('возвращает заглушку', (fn) => {
    expect(fn()).toBe("/images/zagluchka.jpg");
  });
});


