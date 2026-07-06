import type { Meta, StoryObj } from "@storybook/react";
import SearchResultCard from "./SearchResultCard";

const meta: Meta<typeof SearchResultCard> = {
  title: "Components/SearchResultCard",
  component: SearchResultCard,
  args: {
    onClose: () => {},
  },
};

export default meta;

type Story = StoryObj<typeof SearchResultCard>;

export const Movie: Story = {
  args: {
    item: {
      id: 1,
      title: "Interstellar",
      name: undefined,
      media_type: "movie",
      poster_path: "/test.jpg",
      release_date: "2014-11-07",
    },
  },
};

export const TVShow: Story = {
  args: {
    item: {
      id: 2,
      title: undefined,
      name: "Breaking Bad",
      media_type: "tv",
      poster_path: "/test2.jpg",
      release_date: "2008-01-20",
    },
  },
};

export const WithoutImage: Story = {
  args: {
    item: {
      id: 3,
      title: "No Poster Film",
      name: undefined,
      media_type: "movie",
      release_date: "2020-05-10",
    },
  },
};
