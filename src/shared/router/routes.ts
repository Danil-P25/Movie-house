export const ROUTES = {
  HOME: "/",
  MEDIA_PAGE: "/media/:type/:id",
  mediaPage: (type: "movie" | "tv", id: number | string) => `/media/${type}/${id}`,
} as const;
