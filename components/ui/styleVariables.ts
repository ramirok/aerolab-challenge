import "styled-components";
declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}

type Theme = typeof theme;

export const theme = {
  colors: {
    neutrals: {
      "900": "#252F3D",
      "600": "#7C899C",
      "500": "#8FA3BF",
      "200": "#E6EDF7",
      "100": "#F5F9FF",
      "0": "#FFFFFF",
    },
    brand: {
      gradientDefault: ["#176FEB", "#FF80FF"],
      gradientHover: ["#1667D9", "#F279F2"],
      light: "#E5F0FF",
      light2: "#CCE1FF",
    },
    green: {
      default: "#29CC74",
      light: "#CCFFE3",
    },
    red: { default: "#E07F4F", light: "#FFDFD9" },
    specials: {
      gradientIllustrationBG: ["#7296EB", "#EAC0E9"],
      gradientSectionBG: ["#176FEB", "#FF80FF"],
      gradientAerolab: ["#FF8800", "#FF6600"],
    },
  },
};
