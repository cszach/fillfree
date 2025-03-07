import { Button, ButtonProps } from "@radix-ui/themes";
import { ButtonPurpose } from "@/types";

export default function ResponsiveButton(
  props: Readonly<{
    purpose?: ButtonPurpose;
  }> &
    ButtonProps
) {
  let size = props.size;

  if (props.purpose === "cta") {
    size = {
      initial: "3",
      md: "4",
    };
  } else if (props.purpose === "link") {
    size = {
      initial: "2",
      md: "3",
    };
  } else if (props.purpose === "ui") {
    size = {
      initial: "1",
      md: "2",
    };
  } else if (props.purpose === "badge") {
    size = "1";
  }

  return <Button {...props} size={size}></Button>;
}
