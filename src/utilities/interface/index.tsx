interface ThemeProps {
  theme: {
    sizes?: any;
    space?: any;
    spaceX?: any;
    spaceY?: any;
    shadows?: any;
    colors?: {
      background?: any;
      text?: any;
    };
  };
  // This is probably not correct at all, especially not using className and chidlren. Just using it now to get rid of typescript errors
  className?: any;
  children?: any;
}
export { ThemeProps };
