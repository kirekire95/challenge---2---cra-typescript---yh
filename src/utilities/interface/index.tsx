interface ThemeProps {
  sizes?: any;
  space?: any[];
  spaceX?: any[];
  spaceY?: any[];
  shadows?: any[];
  radii?: any[];
  colors?: {
    background?: any;
    text?: any;
    primary?: any;
    secondary?: any;
    accent?: any;
    highlight?: any;
    muted?: any;
    // Custom
    third?: any;
    placeholder?: any;
    activeLink?: any;
    boxShadow?: any;
    navbar?: any;
    error?: any;
  };

  // This is probably not correct at all, especially not using className and children. Just using it now to get rid of typescript errors
  // className?: any;
  // children?: ReactNode;
}

interface StyledProps {
  large?: string;
}

export type { ThemeProps, StyledProps };
