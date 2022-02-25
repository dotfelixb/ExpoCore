import { makeTheme } from "dripsy";
import { Platform } from "react-native";

const webFont = (font: string) =>
  Platform.select({
    web: `${font}, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`,
    default: font,
  });

const Colors = {
  White: "#ffffff",
  Button: "#5766f2",
  BackgroundLight: "#fff",
  BackgroundDark: "#36393f",
};

const LightTheme = makeTheme({
  customFonts: {
    "OpenSans": {
      default: webFont("OpenSans"),
      bold: webFont("OpenSans"),
      normal: webFont("OpenSans"),
      400: "OpenSans",
      500: "OpenSans",
      600: "OpenSans",
      700: "OpenSans",
      800: "OpenSans",
      900: "OpenSans",
    },
  },
  colors: {
    text: "#2e3338",
    heading: "#060607",
    button: Colors.Button,
    buttontext: "#ffffff",
    background: "#fff",
    backgroundalt: "#f2f3f5",
  },
  fonts: { root: "Whitney-Regular" },
});

const DarkTheme = makeTheme({
  customFonts: {
    "OpenSans": {
      default: webFont("OpenSans"),
      bold: webFont("OpenSans"),
      normal: webFont("OpenSans"),
      400: "OpenSans",
      500: "OpenSans",
      600: "OpenSans",
      700: "OpenSans",
      800: "OpenSans",
      900: "OpenSans",
    },
  },
  colors: {
    text: "#dcddde",
    heading: "#ffffff",
    button: Colors.Button,
    buttontext: "#ffffff",
    background: Colors.BackgroundDark,
    backgroundalt: "#2f3136",
  },
  fonts: { root: "Whitney-Regular" },
});

export { Colors, DarkTheme, LightTheme };
