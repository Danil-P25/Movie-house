import clsx from "clsx";
import styles from "./AppButton.module.css";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

function AppButton({ children, className, ...props }: AppButtonProps) {
  return (
    <button className={clsx(styles.button, className)} {...props}>
      {children}
    </button>
  );
}

export default AppButton;
