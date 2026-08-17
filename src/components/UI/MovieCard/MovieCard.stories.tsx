import type { Meta, StoryObj } from "@storybook/react";
import MovieCard from "./MovieCard";

const meta: Meta<typeof MovieCard> = {
  title: "Components/MovieCard",
  component: MovieCard,
};

export default meta;

type Story = StoryObj<typeof MovieCard>;

export const Default: Story = {
  args: {
    title: "Гарри Поттер",
    image: "/poster.jpg",
    rating: 8.7,
    type: "movie",
    genres: "Фэнтези",
  },
};
