import { tailwind, baseColors } from "@theme-ui/preset-tailwind";

export const paletteLight = {
  ...tailwind.colors,
  textColor: baseColors.gray[9],
  backgroundColor: "hsl(0, 0%, 100%)",
  primaryColor: "#efb6b2",
  secondaryColor: "#4e4e4e",
  thirdColor: "hsla(220, 0%, 80%, 1)",
  accentColor: baseColors.orange[7],
  highlightColor: baseColors.orange[7],
  mutedColor: baseColors.orange[7],
  activeLinkColor: "slateblue",
  placeholderColor: "rgb(106, 106, 106)",
  navbarColor: "hsla(210, 20%, 98%, 1)",
  errorColor: "#ff4a4a",
};

export const paletteDark = {
  ...tailwind.colors,
  textColor: "#fff",
  backgroundColor: "hsl(212, 22%, 15%)",
  primaryColor: "#fff",
  secondaryColor: "hsl(212, 32%, 8%)",
  thirdColor: "hsla(220, 0%, 22%, 1)",
  accentColor: "hsl(220, 26%, 14%)",
  highlightColor: "#e1dd72",
  mutedColor: "rgba(0, 250, 250, 0.75)",
  activeLinkColor: "slateblue",
  placeholderColor: "rgb(160, 174, 192)",
  navbarColor: "hsla(210, 20%, 98%, 1)",
  errorColor: "#ff4a4a",
};

export const paletteColorful = {
  ...tailwind.colors,
  textColor: "hsl(350, 100%, 88%)",
  backgroundColor: "hsla(200, 47%, 66%, 1)",
  primaryColor: "hsla(200, 47%, 66%, 1)",
  secondaryColor: "hsla(246, 60%, 66%, 1)",
  thirdColor: "hsla(200, 47%, 36%, 1)",
  accentColor: "hsla(237, 33%, 45%, 1)",
  mutedColor: "rgba(0, 250, 250, 0.44)",
  activeLinkColor: "slateblue",
  placeholderColor: "hsl(350, 100%, 88%)",
  navbarColor: "hsla(210, 20%, 98%, 1)",
  errorColor: "#ff4a4a",
};

export const commonFocus = {
  outline: "none",
  transition: ".2s linear box-shadow",
  boxShadow: (theme) =>
    `0 0 0 20px ${theme.colors.placeholderColor || theme.colors.placeholder}`,
};

export default {
  initialColorModeName: "light",
  useLocalStorage: true,
  useColorSchemeMediaQuery: true,
  ...tailwind,
  colors: {
    // Same colors as paletteLight - this seems to be needed to not have a blank background-color, etc, as light is loaded before any other theme such as ecLight or ecDark
    // These colors are loaded intially on load before any other mode gets applied. Therefore we could have our light theme here, and other themes after most likely.
    ...tailwind.colors,
    text: paletteLight.textColor,
    background: paletteLight.backgroundColor,
    primary: paletteLight.primaryColor,
    secondary: paletteLight.secondaryColor,
    accent: paletteLight.backgroundColor,
    highlight: paletteLight.highlightColor,
    muted: paletteLight.mutedColor,
    // Custom
    third: paletteLight.thirdColor,
    placeholderLight: paletteLight.placeholderColor,
    activeLinkLight: paletteLight.activeLinkColor,
    boxShadowLight: paletteLight.placeholderColor,
    navbarLight: paletteLight.navbarColor,
    errorColor: paletteLight.errorColor,
    modes: {
      dark: {
        ...paletteDark,
        text: paletteDark.textColor,
        background: paletteDark.backgroundColor,
        primary: paletteDark.primaryColor,
        secondary: paletteDark.secondaryColor,
        accent: paletteDark.accentColor,
        highlight: paletteDark.highlightColor,
        muted: paletteDark.mutedColor,
        // Custom
        thirdColor: paletteDark.thirdColor,
        activeLinkColor: paletteDark.activeLinkColor,
        boxShadowColor: paletteDark.placeholderColor,
        navbarColor: paletteDark.navbarColor,
        errorColor: paletteDark.errorColor,
      },
      colorful: {
        ...paletteColorful,
        text: paletteColorful.textColor,
        background: paletteColorful.backgroundColor,
        primary: paletteColorful.textColor,
        secondary: paletteColorful.secondaryColor,
        accent: paletteColorful.accentColor,
        highlight: paletteColorful.placeholderColor,
        muted: paletteColorful.placeholderColor,
        // Custom
        thirdColor: paletteColorful.thirdColor,
        activeLinkColor: paletteColorful.activeLinkColor,
        boxShadowColor: paletteColorful.placeholderColor,
        navbarColor: paletteColorful.navbarColor,
        errorColor: paletteColorful.errorColor,
      },
      nature: {
        ...paletteNature,
        text: paletteNature.textColor,
        background: paletteNature.backgroundColor,
        primary: paletteNature.primaryColor,
        secondary: paletteNature.secondaryColor,
        accent: paletteNature.accentColor,
        highlight: paletteNature.highlightColor,
        muted: paletteNature.mutedColor,
        // Custom
        thirdColor: paletteNature.thirdColor,
        activeLinkColor: paletteNature.activeLinkColor,
        boxShadowColor: paletteNature.placeholderColor,
        navbarColor: paletteNature.navbarColor,
        errorColor: paletteNature.errorColor,
      },
    },
  },
  space: [0, "auto", "1rem", "1.25rem", "1.5rem", "1.75rem", "2rem"],
  spaceX: [
    0,
    "auto",
    "0.5rem 0",
    "0.75rem 0",
    "1rem 0",
    "1.25rem 0",
    "1.5rem 0",
    "1.75rem 0",
    "2rem 0",
  ],
  spaceY: [
    0,
    "auto",
    "0 0.5rem ",
    "0 0.75rem",
    "0 1rem",
    "0 1.25rem",
    "0 1.5rem",
    "0 1.75rem",
    "0 2rem",
  ],
  radii: [0, "3px", "5px", "10px", "20px", "50px"],
  fonts: {
    /* You can put whatever you want here - for example hello instead of body, but it is a convention so that it is easier to use other themes with the same naming */
    body: "Noto Serif",
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
  fontSizes: {
    mobile: [12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36],
    tablet: [14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38],
    desktop: [16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40],
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.45,
    heading: 1.2,
  },
  shadows: [
    "0 0 4px 0 rgba(0, 0, 0, 0.1)",
    "0 0 8px 0 rgba(0, 0, 0, 0.2)",
    "0 0 2px 0 rgba(0, 0, 0, 0.4)",
    "0 0 4px 2px rgba(0, 0, 0, 0.12)",
  ],
  sizes: {
    ...tailwind.sizes,
    percent: ["70%", "80%", "90%", "100%"],
    container: ["450px", "768px", "960px", "1280px"],
  },
  styles: {
    ...tailwind.styles,
    root: {
      fontFamily: "body",
      fontWeight: "body",
      color: "secondary",
    },
    Card: {
      backgroundColor: "red",
      color: "green",
    },
    Box: {
      backgroundColor: "red",
      color: "green",
      padding: 10,
    },
    Container: {
      paddingBottom: 3,
      paddingTop: 3,
    },
    Main: {},
    h1: {
      primary: {
        color: (theme) =>
          `${theme.colors.primaryColor || theme.colors.primary}`,
        fontSize: "1.2rem",
        letterSpacing: "2px",
        fontWeight: "normal",
      },
      secondary: {
        fontFamily: "heading",
        fontWeight: "heading",
        fontSize: ["mobile.9", "tablet.9", "desktop.9"],
        color: (theme) => `${theme.colors.textColor || theme.colors.text}`,
        padding: (theme) => `${theme.spaceX[8]}`,
        textAlign: "center",
      },
    },
    h2: {
      primary: {
        textAlign: "center",
        marginTop: "60px",
        fontSize: "2.6rem",
      },
      secondary: {
        fontFamily: "heading",
        fontWeight: "heading",
        fontSize: ["mobile.7", "tablet.7", "desktop.7"],
        lineHeight: "heading",
        color: (theme) =>
          `${theme.colors.primaryColor || theme.colors.primary}`,
        padding: (theme) => `${theme.spaceX[6]}`,
      },
    },
    h3: {
      fontFamily: "heading",
      fontWeight: "heading",
      fontSize: ["mobile.5", "tablet.5", "desktop.5"],
      lineHeight: "heading",
      color: (theme) => `${theme.colors.primaryColor || theme.colors.primary}`,
      padding: (theme) => `${theme.spaceX[4]}`,
    },
    h4: {
      fontFamily: "heading",
      fontWeight: "heading",
      fontSize: ["mobile.4", "tablet.4", "desktop.4"],
      lineHeight: "heading",
      color: (theme) => `${theme.colors.primaryColor || theme.colors.primary}`,
      padding: (theme) => `${theme.spaceX[2]}`,
    },
    h5: {
      fontFamily: "heading",
      fontWeight: "heading",
      fontSize: ["mobile.3", "tablet.3", "desktop.3"],
      lineHeight: "heading",
      color: (theme) => `${theme.colors.primaryColor || theme.colors.primary}`,
      padding: (theme) => `${theme.spaceX[2]}`,
    },
    h6: {
      fontFamily: "heading",
      fontWeight: "heading",
      fontSize: ["mobile.2", "tablet.2", "desktop.2"],
      lineHeight: "heading",
      color: (theme) => `${theme.colors.primaryColor || theme.colors.primary}`,
      padding: (theme) => `${theme.spaceX[2]}`,
    },
    p: {
      primary: {
        textAlign: "center",
      },
      secondary: {
        fontSize: ["mobile.2", "tablet.2", "desktop.2"],
      },
    },
    blockquote: {
      backgroundColor: "muted",
      borderLeft: "5px solid",
      borderColor: "primary",
    },
    inlineCode: {
      fontSize: ["mobile.1", "tablet.1", "desktop.1"],
      backgroundColor: "muted",
      color: "text",
    },
    pre: {
      fontSize: ["mobile.1", "tablet.1", "desktop.1"],
      overflowX: "auto",
      backgroundColor: "codeBg",
      width: ["100vw", null, "100%", null, null],
      position: ["relative", null, "static", null, null],
      left: ["calc(-50vw + 50%)", null, "auto", null, null],
    },
    hr: {
      border: 0,
    },
    a: {
      color: "primary",
      textDecoration: "none",
      ":hover,:focus": {
        color: "secondary",
        textDecoration: "underline",
      },
    },
  },
  breakpoints: ["40em", "56em", "64em"],
};
