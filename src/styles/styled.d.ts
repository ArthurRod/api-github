import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius?: string;

    colors: {
      white: string;
      black: string;
      turquese: string;
      turqueseDark: string;
      green: string;
      greenDark: string;
      blue: string;
      blueDark: string;
      violet: string;
      violetDark: string;
      yellow: string;
      yellowDark: string;
      orange: string;
      orangeDark: string;
      red: string;
      redDark: string;
      champagne: string;
      champagneDark: string;
      metal: string;
      metalDark: string;
      asphalt: string;
      asphaltDark: string;
      carbon: string;
      carbonDark: string;
      primary: string;
      secondary: string;
      danger: string;
      light: string;
      dark: string;
      background: string;
      container: string;
      text: string;
      link: string;
      devSamurai: string;
    };
    fonts: string;
    fontSizes: {
      small: string;
      normal: string;
      large: string;
      title: string;
      subtitle: string;
    };
    breakpoints: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
  }
}
