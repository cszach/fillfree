import { MouseEventHandler, ReactElement } from "react";

export type ButtonPurpose = "cta" | "link" | "ui" | "badge";

export type Button = {
  text: string;
  url?: string;
  icon?: ReactElement;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  purpose?: ButtonPurpose;
};

export type Image = {
  src: string;
  alt: string;
};
