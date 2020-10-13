/** @jsx jsx */
import { jsx } from "theme-ui";

type Props = {
  className: string;
};

type Options = {
  onClick: Function;
};

export const ToggleThemeMode: React.FC<Options> = (props) => {
  const { className, children } = props;
  return (
    <button
      {...props}
      className={`${className}`}
      sx={{
        backgroundColor: "transparent",
        color: "currentcolor",
        border: "none",
        outline: "none",
        width: "60px",
        height: "inherit",
        padding: "0",
      }}
    >
      {children}
    </button>
  );
};
