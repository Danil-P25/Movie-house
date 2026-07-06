import type { Meta, StoryObj } from "@storybook/react";
import AppButton from "./AppButton";

const meta: Meta<typeof AppButton> = {
  title: "UI/AppButton",
  component: AppButton,
};

export default meta;

type Story = StoryObj<typeof AppButton>;

export const Default: Story = {
  args: {
    children: "Нажми меня",
  },
};

export const Disabled: Story = {
  args: {
    children: "Недоступно",
    disabled: true,
  },
};

export const LongText: Story = {
  args: {
    children: "Очень длинный текст кнопки для проверки UI",
  },
};
