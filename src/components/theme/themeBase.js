import { createTheme } from "@mui/material/styles";

const Palette = {
  primary: {
    dark2: "#0E1E2E",
    dark: "#112B45",
    main: "#023365",
    light: "#1E65AE",
    light2: "#4498EE",
    light3: "#EEF6FF",
    components: {
      light: {
        default: "#4499EE",
        hover: "#3879CD",
        focus: "#3F8BE0",
        disable: "#BFDFFA"
      }
    }
  },
  secondary: {
    dark2: "#3B9D86",
    dark: "#0DC298",
    main: "#00E6B2",
    light: "#00FCC1",
    light2: "#B7FFEE",
    light3: "#E0FFF8"
  },
  error: {
    dark2: "#AD0C2A",
    dark: "#D62C4B",
    main: "#E24763",
    light: "#E26C81",
    light2: "#F6AEBB",
    light3: "#FFEAEE"
  },
  alternate: {
    dark2: "#8F4F8B",
    dark: "#BD62B4",
    main: "#DD85C3",
    light: "#E6A6D3",
    light2: "#FDD9F2",
    light3: "#FEECF8"
  },
  warning: {
    dark2: "#CF711A",
    dark: "#DFA720",
    main: "#FBC748",
    light: "#FFD879",
    light2: "#FEE19B",
    light3: "#FFF1D0"
  },
  background: {
    paper: "#FAFCFD",
    default: "#FFFFFF"
  },
  neutral: {
    800: "#293036",
    700: "#46525C",
    600: "#677684",
    500: "#CBD5E0",
    400: "#E2E8F0",
    300: "#F0F4F8",
    200: "#F7FAFC",
    100: "#FBFCFE",
    50: "#FFFFFF",
    components: {
      shadow: "#0E1E2E",
      disabled: "#B4B9BE"
    }
  },
  text: {
    primary: "#023365",
    secondary: "#0DC298",
    dark: "#293036",
    disabled: "#B4B9BE",
    red: "#E24763",
    white: "#FFFFFF",
    lightGrey: "#B4B9BE",
    grey: "#6D7781"
  },
  gradients: {
    gradientA: "linear-gradient(180deg, #00E6B2 0%, #023365 100%)",
    gradientB: "linear-gradient(180deg, #0093A2 0%, #00E6B2 100%)",
    gradientC: "linear-gradient(135deg, #023365 0%, #1E65AE 100%)",
    gradientD: "linear-gradient(180deg, #023365 100% , #00E6B2 0%)",
    gradientE: "linear-gradient(180deg, #FFFFFF 0%, #F7FAFC 100%)"
  }
};

const ThemeFonts = {
  screenxl: {
    h1: 36,
    h2: 32,
    h3: 26,
    h4: 24,
    h5: 20,
    h6: 16,
    subtitle1: 20,
    subtitle2: 16,
    body1: 18,
    body2: 16,
    caption: 15,
    overline: 13,
    numericText: 16,
    button: 16,
    buttonsm: 14,
    buttonlg: 20,
    inputLabel: 14,
    inputText: 16,
    helperText: 12,
    tooltip: 14,
    avatarLetter: 20,
    chip: 16,
    tag: 12
  },
  screenlg: {
    h1: 38,
    h2: 30,
    h3: 26,
    h4: 22,
    h5: 18,
    h6: 16,
    subtitle1: 20,
    subtitle2: 16,
    body1: 18,
    body2: 16,
    caption: 15,
    overline: 13,
    numericText: 16,
    button: 16,
    buttonsm: 14,
    buttonlg: 18,
    inputLabel: 14,
    inputText: 16,
    helperText: 12,
    tooltip: 14,
    avatarLetter: 18,
    chip: 16,
    tag: 12
  },
  screenmd: {
    h1: 28,
    h2: 24,
    h3: 22,
    h4: 20,
    h5: 18,
    h6: 16,
    subtitle1: 18,
    subtitle2: 15,
    body1: 17,
    body2: 16,
    caption: 14,
    overline: 13,
    numericText: 15,
    button: 15,
    buttonsm: 13,
    buttonlg: 18,
    inputLabel: 14,
    inputText: 15,
    helperText: 11,
    tooltip: 13,
    avatarLetter: 16,
    chip: 14,
    tag: 12
  },
  screensm: {
    h1: 23,
    h2: 21,
    h3: 20,
    h4: 19,
    h5: 18,
    h6: 16,
    subtitle1: 17,
    subtitle2: 14,
    body1: 16,
    body2: 14,
    caption: 12,
    overline: 12,
    numericText: 14,
    button: 14,
    buttonsm: 13,
    buttonlg: 16,
    inputLabel: 14,
    inputText: 14,
    helperText: 11,
    tooltip: 12,
    avatarLetter: 16,
    chip: 14,
    tag: 12
  }
};

const breakpoints = {
  values: {
    xs: 0,
    sm: 360,
    md: 960,
    lg: 1280,
    xl: 1600
  }
};

const theme = createTheme({
  spacing: 8,
  breakpoints,
  palette: {
    primary: {
      //@ts-ignore
      dark2: Palette.primary.dark2,
      dark: Palette.primary.dark,
      main: Palette.primary.main,
      light: Palette.primary.light,
      light2: Palette.primary.light2,
      light3: Palette.primary.light3,
      components: {
        light: {
          default: Palette.primary.components.light.default,
          hover: Palette.primary.components.light.hover,
          //@ts-ignore
          focus: Palette.primary.components.light.focus,
          disable: Palette.primary.components.light.disable
        }
      }
    },
    secondary: {
      //@ts-ignore
      dark2: Palette.secondary.dark2,
      dark: Palette.secondary.dark,
      main: Palette.secondary.main,
      light: Palette.secondary.light,
      light2: Palette.secondary.light2,
      light3: Palette.secondary.light3
    },
    error: {
      //@ts-ignore
      dark2: Palette.error.dark2,
      dark: Palette.error.dark,
      main: Palette.error.main,
      light: Palette.error.light,
      light2: Palette.error.light2,
      light3: Palette.error.light3
    },
    alternate: {
      //@ts-ignore
      dark2: Palette.alternate.dark2,
      dark: Palette.alternate.dark,
      main: Palette.alternate.main,
      light: Palette.alternate.light,
      light2: Palette.alternate.light2,
      light3: Palette.alternate.light3
    },
    warning: {
      //@ts-ignore
      dark2: Palette.warning.dark2,
      main: Palette.warning.main,
      dark: Palette.warning.dark,
      light: Palette.warning.light,
      light2: Palette.warning.light2,
      light3: Palette.warning.light3
    },
    background: {
      paper: Palette.background.paper,
      default: Palette.background.default
    },
    neutral: {
      //@ts-ignore
      grey8: Palette.neutral[800],
      grey7: Palette.neutral[700],
      grey6: Palette.neutral[600],
      grey5: Palette.neutral[500],
      grey4: Palette.neutral[400],
      grey3: Palette.neutral[300],
      grey2: Palette.neutral[200],
      grey1: Palette.neutral[100],
      white: Palette.neutral[50],
      components: {
        shadow: Palette.neutral.components.shadow,
        disabled: Palette.neutral.components.disabled
      }
    },
    text: {
      primary: Palette.text.primary,
      secondary: Palette.text.secondary,
      //@ts-ignore
      dark: Palette.text.dark,
      disabled: Palette.text.disabled,
      red: Palette.text.red,
      white: Palette.text.white,
      lightGrey: Palette.text.lightGrey,
      grey: Palette.text.grey
    },
    gradients: {
      gradientA: Palette.gradients.gradientA,
      gradientB: Palette.gradients.gradientB,
      gradientC: Palette.gradients.gradientC,
      gradientD: Palette.gradients.gradientD,
      gradientE: Palette.gradients.gradientE
    }
  },
  typography: {
    fontFamily: "IBM Plex Sans",
    h1: {
      fontSize: ThemeFonts.screenxl.h1 + `px`,
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: "120%",
      letterSpacing: "-0.015em",
      [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
        fontSize: ThemeFonts.screenlg.h1 + `px`
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenmd.h1 + `px`
      },
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: ThemeFonts.screensm.h1 + `px`
      }
    },
    h2: {
      fontSize: ThemeFonts.screenxl.h2 + `px`,
      fontWeight: 500,
      lineHeight: "120%",
      fontStyle: "normal",
      letterSpacing: "-0.015em",
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenlg.h2 + `px`,
        fontWeight: "500"
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenmd.h2 + `px`,
        fontWeight: "500"
      },
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: ThemeFonts.screensm.h2 + `px`,
        fontWeight: "500"
      }
    },
    h3: {
      fontSize: ThemeFonts.screenxl.h3 + `px`,
      fontWeight: "600",
      lineHeight: "120%",
      fontStyle: "normal",
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenlg.h3 + `px`,
        fontWeight: "500"
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenmd.h3 + `px`,
        fontWeight: "500"
      },
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: ThemeFonts.screensm.h3 + `px`,
        fontWeight: "500"
      }
    },
    h4: {
      fontSize: ThemeFonts.screenxl.h4 + `px`,
      fontWeight: "500",
      lineHeight: "120%",
      fontStyle: "normal",
      letterSpacing: "0.0025em",
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenlg.h4 + `px`,
        fontWeight: "500"
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenmd.h4 + `px`,
        fontWeight: "500"
      },
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: ThemeFonts.screensm.h4 + `px`,
        fontWeight: "500"
      }
    },
    h5: {
      fontSize: ThemeFonts.screenxl.h5 + `px`,
      fontWeight: "500",
      lineHeight: "140%",
      fontStyle: "normal",
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenlg.h5 + `px`,
        fontWeight: "500"
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenmd.h5 + `px`,
        fontWeight: "500"
      },
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: ThemeFonts.screensm.h5 + `px`,
        fontWeight: "500"
      }
    },
    h6: {
      fontSize: ThemeFonts.screenxl.h6 + `px`,
      fontWeight: 500,
      lineHeight: "120%",
      fontStyle: "normal",
      letterSpacing: "0.0015em",
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenlg.h6 + `px`,
        fontWeight: "500"
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenmd.h6 + `px`,
        fontWeight: "500"
      },
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: ThemeFonts.screensm.h6 + `px`,
        fontWeight: "500"
      }
    },
    subtitle1: {
      fontSize: ThemeFonts.screenxl.subtitle1 + `px`,
      fontWeight: "300",
      lineHeight: "120%",
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenlg.subtitle1 + `px`
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenmd.subtitle1 + `px`
      },
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: ThemeFonts.screensm.subtitle1 + `px`
      }
    },
    subtitle2: {
      fontSize: ThemeFonts.screenxl.subtitle2 + `px`,
      fontWeight: "500",
      lineHeight: "150%",
      letterSpacing: "0.0025em",
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenlg.subtitle2 + `px`
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenmd.subtitle2 + `px`
      },
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: ThemeFonts.screensm.subtitle2 + `px`
      }
    },
    body1: {
      fontSize: ThemeFonts.screenxl.body1 + `px`,
      fontWeight: "normal",
      lineHeight: "150%",
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenlg.body1 + `px`
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenmd.body1 + `px`
      },
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: ThemeFonts.screensm.body1 + `px`
      }
    },
    body2: {
      fontSize: ThemeFonts.screenxl.body2 + `px`,
      fontWeight: "normal",
      lineHeight: "150%",
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenlg.body2 + `px`
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenmd.body2 + `px`
      },
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: ThemeFonts.screensm.body2 + `px`
      }
    },
    caption: {
      lineHeight: "144%",
      fontSize: ThemeFonts.screenmd.caption + `px`,
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenlg.caption + `px`
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenmd.caption + `px`
      },
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: ThemeFonts.screensm.caption + `px`
      }
    },
    overline: {
      lineHeight: "120%",
      fontWeight: "normal",
      textTransform: "inherit",
      letterSpacing: "0.01em",
      fontSize: ThemeFonts.screenxl.overline + `px`,
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenlg.overline + `px`
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenmd.overline + `px`
      },
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: ThemeFonts.screensm.overline + `px`
      }
    },
    button: {
      //Numeric Text Style
      fontFamily: "IBM Plex Mono",
      lineHeight: "120%",
      fontWeight: "norxsmal",
      textTransform: "none",
      fontSize: ThemeFonts.screenxl.overline + `px`,
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenlg.overline + `px`
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenmd.overline + `px`
      },
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: ThemeFonts.screensm.overline + `px`
      }
    }
  },
  components: {
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: Palette.background.default,
          borderRadius: "8px",
          padding: "24px",
          borderTop: "none!important",
          marginBottom: "24px",
          position: "unset",
          transition: "all .3s ease-out",
          boxShadow:
            "0px 10px 80px rgba(106, 167, 197, 0.1), 0px 5.0625px 34.875px rgba(106, 167, 197, 0.05), 0px 2px 13px rgba(106, 167, 197, 0.03), 0px 0.4375px 4.625px rgba(106, 167, 197, 0.02)",
          "&:hover": {
            boxShadow:
              "0px 36px 65px rgba(106, 167, 197, 0.16), 0px 18.225px 28.3359px rgba(106, 167, 197, 0.12), 0px 7.2px 10.5625px rgba(106, 167, 197, 0.08), 0px 1.575px 3.75781px rgba(106, 167, 197, 0.03)"
          },
          [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
            padding: "24px"
          },
          [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
            padding: "8px",
            ".MuiAccordionSummary-content": {
              display: "block"
            }
          },
          [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
            padding: "8px",
            ".MuiAccordionSummary-content": {
              display: "block"
            }
          }
        }
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          border: "1px dashed #E2E8F0"
        }
      }
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fontSize: "24px!important"
        },
        fontSizeLarge: {
          fontSize: "36px !important"
        },
        fontSizeSmall: {
          fontSize: "16px !important"
        },
        colorSecondary: {
          fill: Palette.text.lightGrey + "!important"
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          wordWrap: "break-word"
        }
      }
    },

    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true
      },
      styleOverrides: {
        root: {
          padding: "12px 30px",
          height: "44px",
          borderRadius: "16px",
          fontWeight: "400",
          letterSpacing: "0.0025em",
          lineHeight: "140%",
          fontFamily: "IBM Plex Sans",
          fontSize: ThemeFonts.screenxl.button + `px`,
          [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
            fontSize: ThemeFonts.screenlg.button + `px`
          },
          [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
            fontSize: ThemeFonts.screenmd.button + `px`
          },
          [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
            fontSize: ThemeFonts.screensm.button + `px`
          }
        },
        sizeLarge: {
          height: 52,
          padding: "12px 30px",
          fontSize: ThemeFonts.screenxl.buttonlg + `px`,
          [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
            fontSize: ThemeFonts.screenlg.buttonlg + `px`
          },
          [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
            fontSize: ThemeFonts.screenmd.buttonlg + `px`
          },
          [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
            fontSize: ThemeFonts.screensm.buttonlg + `px`
          }
        },
        sizeSmall: {
          height: "36px",
          padding: "8px 30px",
          borderRadius: "12px",
          fontSize: ThemeFonts.screenxl.buttonsm + `px`,
          [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
            fontSize: ThemeFonts.screenlg.buttonsm + `px`
          },
          [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
            fontSize: ThemeFonts.screenmd.buttonsm + `px`
          },
          [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
            fontSize: ThemeFonts.screensm.buttonsm + `px`
          }
        },
        containedPrimary: {
          border: `1px solid ` + Palette.primary.components.light.default,
          backgroundColor: Palette.primary.components.light.default,
          boxShadow:
            "0px 51px 80px rgba(106, 167, 197, 0.07), 0px 33.0556px 46.8519px rgba(106, 167, 197, 0.0531481), 0px 19.6444px 25.4815px rgba(106, 167, 197, 0.0425185), 0px 10.2px 13px rgba(106, 167, 197, 0.035), 0px 4.15556px 6.51852px rgba(106, 167, 197, 0.0274815), 0px 0.944444px 3.14815px rgba(106, 167, 197, 0.0168519)",
          "&:hover": {
            color: Palette.neutral[50],
            backgroundColor: Palette.primary.components.light.hover,
            border: `1px solid ` + Palette.primary.components.light.hover,
            boxShadow:
              "0px 36px 65px rgba(106, 167, 197, 0.16), 0px 18.225px 28.3359px rgba(106, 167, 197, 0.12), 0px 7.2px 10.5625px rgba(106, 167, 197, 0.08), 0px 1.575px 3.75781px rgba(106, 167, 197, 0.03)"
          },
          "&:focus, &:active": {
            backgroundColor: Palette.primary.components.light.focus,
            border: `1px solid ` + Palette.primary.components.light.focus,
            color: Palette.neutral[50],
            boxShadow:
              "0px 8px 17px rgba(106, 167, 197, 0.15), 0px 1.6px 2.7625px rgba(106, 167, 197, 0.075)"
          },
          "&:disabled": {
            backgroundColor: Palette.primary.components.light.disable,
            border: `1px solid ` + Palette.primary.components.light.disable,
            color: Palette.neutral[50]
          }
        },
        containedSecondary: {
          backgroundColor: "transparent",
          border: "1px solid transparent",
          color: Palette.text.grey,
          "&:hover": {
            backgroundColor: Palette.neutral[100],
            border: `1px solid ` + Palette.neutral[100],
            color: Palette.text.grey
          },
          "&:focus, &:active": {
            backgroundColor: Palette.neutral[100],
            border: `1px solid ` + Palette.neutral[100] + "!important",
            color: Palette.text.primary
          },
          "&:disabled": {
            backgroundColor: Palette.neutral[100],
            border: `1px solid ` + Palette.neutral[100] + "!important",
            color: Palette.neutral[500]
          }
        },
        outlinedSecondary: {
          backgroundColor: "transparent",
          border: "1px solid" + Palette.primary.light2,
          color: Palette.primary.light2,
          "&:hover": {
            backgroundColor: Palette.neutral[100],
            border: `1px solid ` + Palette.primary.main,
            color: Palette.primary.main
          },
          "&:disabled": {
            backgroundColor: Palette.neutral[100],
            border: `1px solid ` + Palette.neutral[100] + "!important",
            color: Palette.neutral[500]
          }
        },
        textPrimary: {
          backgroundColor: "transparent",
          border: `1px solid transparent`,
          color: Palette.primary.light2,
          "&:hover": {
            backgroundColor: Palette.neutral[50],
            border: `1px solid ` + Palette.neutral[50],
            color: Palette.primary.light2,
            boxShadow:
              "0px 10px 80px rgba(106, 167, 197, 0.1), 0px 5.0625px 34.875px rgba(106, 167, 197, 0.05), 0px 2px 13px rgba(106, 167, 197, 0.03), 0px 0.4375px 4.625px rgba(106, 167, 197, 0.02)"
          },
          "&:focus, &:active": {
            backgroundColor: Palette.neutral[50],
            border: `1px solid ` + Palette.neutral[50],
            color: Palette.text.grey,
            boxShadow:
              "0px 10px 80px rgba(106, 167, 197, 0.1), 0px 5.0625px 34.875px rgba(106, 167, 197, 0.05), 0px 2px 13px rgba(106, 167, 197, 0.03), 0px 0.4375px 4.625px rgba(106, 167, 197, 0.02)"
          },
          "&:disabled": {
            backgroundColor: Palette.neutral[50],
            border: `1px solid ` + Palette.neutral[500],
            color: Palette.text.grey,
            opacity: "35%"
          }
        }
      },
      variants: [
        {
          props: { variant: "contained", color: "error" },
          style: {
            backgroundColor: "transparent",
            border: `1px solid ` + Palette.error.light3,
            color: Palette.error.main,
            "&:hover": {
              backgroundColor: Palette.error.light3,
              border: `1px solid ` + Palette.error.light3,
              color: Palette.error.main,
              boxShadow:
                "0px 10px 80px rgba(106, 167, 197, 0.1), 0px 5.0625px 34.875px rgba(106, 167, 197, 0.05), 0px 2px 13px rgba(106, 167, 197, 0.03), 0px 0.4375px 4.625px rgba(106, 167, 197, 0.02)"
            },
            "&:focus, &:active": {
              backgroundColor: Palette.error.light3,
              border: `1px solid ` + Palette.error.light,
              color: Palette.error.main,
              boxShadow: "none"
            },
            "&:disabled": {
              backgroundColor: Palette.neutral[50],
              border: `1px solid ` + Palette.error.light2,
              color: Palette.error.light2,
              opacity: "35%"
            }
          }
        }
      ]
    },
    MuiIconButton: {
      defaultProps: {
        disableRipple: true
      },
      styleOverrides: {
        root: {
          padding: "5px",
          height: "44px",
          width: "44px",
          borderRadius: "48px",
          display: "flex",
          justifyContent: "center",
          fontSize: ThemeFonts.screenxl.button + `px`,
          [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
            fontSize: ThemeFonts.screenlg.button + `px`
          },
          [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
            fontSize: ThemeFonts.screenmd.button + `px`
          },
          [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
            fontSize: ThemeFonts.screensm.button + `px`
          },
          //Autocomplete textfield
          "&.MuiAutocomplete-popupIndicator, &.MuiAutocomplete-clearIndicator": {
            height: "auto"
          },
          "&.iconButtonText": {
            width: "auto",
            display: "flex",
            alignContent: "center",
            paddingLeft: "28px",
            paddingRight: "28px"
          }
        },
        sizeSmall: {
          height: "36px",
          width: "36px",
          padding: "6px",
          fontSize: ThemeFonts.screenxl.buttonsm + `px`,
          [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
            fontSize: ThemeFonts.screenlg.buttonsm + `px`
          },
          [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
            fontSize: ThemeFonts.screenmd.buttonsm + `px`
          },
          [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
            fontSize: ThemeFonts.screensm.buttonsm + `px`
          },
          svg: {
            fontSize: "16px!important"
          }
        },
        sizeLarge: {
          height: "52px",
          width: "52px",
          padding: "14px",
          fontSize: ThemeFonts.screenxl.buttonlg + `px`,
          [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
            fontSize: ThemeFonts.screenlg.buttonlg + `px`
          },
          [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
            fontSize: ThemeFonts.screenmd.buttonlg + `px`
          },
          [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
            fontSize: ThemeFonts.screensm.buttonlg + `px`
          },
          svg: {
            fontSize: "24px!important"
          }
        },
        //@ts-ignore
        colorPrimary: {
          color: Palette.neutral[50],
          border: `1px solid ` + Palette.primary.components.light.default,
          backgroundColor: Palette.primary.components.light.default,
          boxShadow:
            "0px 51px 80px rgba(106, 167, 197, 0.07), 0px 33.0556px 46.8519px rgba(106, 167, 197, 0.0531481), 0px 19.6444px 25.4815px rgba(106, 167, 197, 0.0425185), 0px 10.2px 13px rgba(106, 167, 197, 0.035), 0px 4.15556px 6.51852px rgba(106, 167, 197, 0.0274815), 0px 0.944444px 3.14815px rgba(106, 167, 197, 0.0168519)",
          filter:
            "drop-shadow(0px 8px 17px rgba(106, 167, 197, 0.15)) drop-shadow(0px 1.6px 2.7625px rgba(106, 167, 197, 0.075))",
          "&:hover": {
            color: Palette.neutral[50],
            backgroundColor: Palette.primary.components.light.hover,
            border: `1px solid ` + Palette.primary.components.light.hover,
            boxShadow:
              "0px 36px 65px rgba(106, 167, 197, 0.16), 0px 18.225px 28.3359px rgba(106, 167, 197, 0.12), 0px 7.2px 10.5625px rgba(106, 167, 197, 0.08), 0px 1.575px 3.75781px rgba(106, 167, 197, 0.03)",
            filter:
              "drop-shadow(0px 36px 65px rgba(106, 167, 197, 0.16)) drop-shadow(0px 18.225px 28.3359px rgba(106, 167, 197, 0.12)) drop-shadow(0px 7.2px 10.5625px rgba(106, 167, 197, 0.08)) drop-shadow(0px 1.575px 3.75781px rgba(106, 167, 197, 0.03))"
          },
          "&:focus, &:active": {
            backgroundColor: Palette.primary.components.light.focus,
            border: `1px solid ` + Palette.primary.components.light.focus,
            boxShadow:
              "0px 8px 17px rgba(106, 167, 197, 0.15), 0px 1.6px 2.7625px rgba(106, 167, 197, 0.075)",
            filter:
              "drop-shadow(0px 36px 65px rgba(106, 167, 197, 0.16)) drop-shadow(0px 18.225px 28.3359px rgba(106, 167, 197, 0.12)) drop-shadow(0px 7.2px 10.5625px rgba(106, 167, 197, 0.08)) drop-shadow(0px 1.575px 3.75781px rgba(106, 167, 197, 0.03))"
          },
          "&:disabled": {
            backgroundColor: Palette.primary.components.light.disable,
            border: `1px solid ` + Palette.primary.components.light.disable,
            color: Palette.neutral[50],
            boxShadow: "none"
          }
        },
        colorSecondary: {
          backgroundColor: Palette.neutral[50],
          border: `1px solid ` + Palette.neutral[50],
          color: Palette.text.primary,
          boxShadow:
            "0px 8px 17px rgba(106, 167, 197, 0.15), 0px 1.6px 2.7625px rgba(106, 167, 197, 0.075)",
          filter:
            "drop-shadow(0px 8px 17px rgba(106, 167, 197, 0.15)) drop-shadow(0px 1.6px 2.7625px rgba(106, 167, 197, 0.075))",
          "&:hover, &:active, &:focus, &:disabled": {
            backgroundColor: Palette.neutral[50],
            border: `1px solid ` + Palette.neutral[50]
          },
          "&:hover": {
            color: Palette.primary.light2,
            boxShadow:
              "0px 51px 80px rgba(106, 167, 197, 0.07), 0px 33.0556px 46.8519px rgba(106, 167, 197, 0.0531481), 0px 19.6444px 25.4815px rgba(106, 167, 197, 0.0425185), 0px 10.2px 13px rgba(106, 167, 197, 0.035), 0px 4.15556px 6.51852px rgba(106, 167, 197, 0.0274815), 0px 0.944444px 3.14815px rgba(106, 167, 197, 0.0168519)"
          },
          "&:active, &:focus": {
            color: Palette.text.primary
          },
          "&:disabled": {
            color: Palette.text.primary,
            opacity: "35%"
          }
        }
      }
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          padding: "4px 5px",
          "&+.MuiFormControlLabel-label": {
            fontSize: ThemeFonts.screenxl.inputLabel + `px!important`
          },
          ".Mui-disabled+.MuiSwitch-track": {
            opacity: "0.3!important"
          }
        },
        switchBase: {
          color: Palette.neutral[50] + "!important"
        },
        thumb: {
          boxShadow: "none"
        },
        track: {
          borderRadius: "48px",
          opacity: "initial!important",
          backgroundColor: Palette.neutral[600]
        },
        colorPrimary: {
          "&.Mui-checked + .MuiSwitch-track": {
            backgroundColor: Palette.primary.light2 + "!important"
          }
        },
        colorSecondary: {
          "&.Mui-checked + .MuiSwitch-track": {
            backgroundColor: Palette.secondary.dark + "!important"
          }
        },
        sizeSmall: {
          padding: 0,
          "&+.MuiFormControlLabel-label": {
            marginLeft: 5
          }
        }
      }
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          "&+.MuiFormControlLabel-label": {
            fontSize: ThemeFonts.screenxl.inputLabel + `px!important`
          },
          "&.Mui-disabled": {
            color: Palette.neutral[600] + `!important`,
            opacity: "0.3"
          }
        },
        colorPrimary: {
          color: Palette.primary.light2,
          "&.Mui-checked": {
            color: Palette.primary.light2
          }
        },
        colorSecondary: {
          color: Palette.secondary.dark,
          "&.Mui-checked": {
            color: Palette.secondary.dark
          }
        }
      }
    },
    MuiRadio: {
      defaultProps: {
        disableRipple: true
      },
      styleOverrides: {
        root: {
          "&+.MuiFormControlLabel-label": {
            fontSize: ThemeFonts.screenxl.inputLabel + `px!important`
          },
          "&.Mui-disabled": {
            color: Palette.neutral[600] + "!important",
            opacity: "0.3"
          }
        },
        colorPrimary: {
          color: Palette.primary.light2,
          "&.Mui-checked": {
            color: Palette.primary.light2
          }
        },
        colorSecondary: {
          color: Palette.secondary.dark,
          "&.Mui-checked": {
            color: Palette.secondary.dark
          }
        }
      }
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: "0px 0px 16px 16px;",
          fontSize: ThemeFonts.screenxl.tooltip + `px`,
          padding: "8px 16px",
          fontWeight: "normal",
          lineHeight: "144%",
          boxShadow: "none",
          ".MuiAlert-message": {
            width: "100%",
            justifyContent: "space-between",
            display: "flex",
            a: {
              fontSize: "13px",
              letterSpacing: "0.01em",
              margin: "0px 16px",
              color: "currentColor"
            }
          },
          ".MuiAlert-action": {
            padding: "0px",
            marginRight: "0px",
            alignItems: "center",
            svg: {
              fontSize: "0.9em",
              stroke: "currentColor"
            }
          }
        },
        filledSuccess: {
          backgroundColor:
            Palette.primary.components.light.disable + "!important",
          color: Palette.text.primary + "!important"
        },
        filledError: {
          color: Palette.error.dark2 + "!important",
          backgroundColor: Palette.error.light3 + "!important"
        },
        standardSuccess: {
          backgroundColor:
            Palette.primary.components.light.disable + "!important",
          color: Palette.text.primary + "!important"
        },
        standardError: {
          color: Palette.error.dark2 + "!important",
          backgroundColor: Palette.error.light3 + "!important"
        }
        /*filledWarning: {
          backgroundColor: Palette.warning.light2
        },
        filledInfo: {
          backgroundColor: Palette.neutral[800]
        }*/
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          padding: "4px 16px",
          borderRadius: "4px!important",
          textTransform: "uppercase",
          fontWeight: "500",
          lineHeight: "170%",
          letterSpacing: "0.02em",
          "&.sizeLarge": {
            height: "28px"
          },
          ".MuiChip-deleteIcon": {
            fontSize: "0.85em",
            stroke: "currentColor",
            color: Palette.text.primary,
            paddingLeft: "10px",
            marginRight: "0px"
          },
          ".MuiChip-label": {
            padding: "0px"
          },
          fontSize: ThemeFonts.screenxl.tag + `px`,
          [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
            fontSize: ThemeFonts.screenlg.tag + `px`
          },
          [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
            fontSize: ThemeFonts.screenmd.tag + `px`
          },
          [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
            fontSize: ThemeFonts.screensm.tag + `px`
          }
        },
        //@ts-ignore
        colorDefault: {
          "&.MuiChip-filledDefault": {
            borderRadius: "8px!important",
            backgroundColor: Palette.neutral[400],
            color: Palette.text.dark,
            textTransform: "none",
            lineHeight: "140%",
            letterSpacing: "normal",
            fontWeight: 400,
            [`@media screen and (max-width: ${breakpoints.values.xl}px)`]: {
              fontSize: ThemeFonts.screenxl.chip + `px`
            },
            [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
              fontSize: ThemeFonts.screenlg.chip + `px`
            },
            [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
              fontSize: ThemeFonts.screenmd.chip + `px`
            },
            [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
              fontSize: ThemeFonts.screensm.chip + `px`
            }
          }
        },
        colorSuccess: {
          "&.MuiChip-filledSuccess": {
            fontSize: `9px`,
            backgroundColor: Palette.secondary.light3,
            color: Palette.secondary.dark2
          }
        },
        colorError: {
          "&.MuiChip-filledError": {
            backgroundColor: Palette.error.light3,
            fontSize: `9px`,
            color: Palette.error.dark2
          }
        },
        colorInfo: {
          "&.MuiChip-filledInfo": {
            backgroundColor: Palette.neutral[300],
            color: Palette.text.grey,
            fontSize: `9px`
          }
        },
        colorSecondary: {
          "&.MuiChip-filledSecondary": {
            backgroundColor: Palette.alternate.light3,
            color: Palette.alternate.dark2,
            fontSize: `9px`
          }
        },
        colorPrimary: {
          "&.MuiChip-filledPrimary": {
            backgroundColor: Palette.primary.light3,
            color: Palette.primary.main,
            fontSize: `9px`
          }
        },
        colorWarning: {
          "&.MuiChip-filledWarning": {
            backgroundColor: Palette.warning.light3,
            color: Palette.warning.dark2,
            fontSize: `9px`
          }
        },
        sizeMedium: {
          height: "26px"
        }
      }
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: Palette.primary.dark,
          padding: "12px 16px",
          borderRadius: "8px",
          fontWeight: "400",
          textAlign: "center",
          lineHeight: "1.35",
          fontSize: ThemeFonts.screenxl.tooltip + `px`,
          [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
            fontSize: ThemeFonts.screenlg.tooltip + `px`
          },
          [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
            fontSize: ThemeFonts.screenmd.tooltip + `px`
          },
          [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
            fontSize: ThemeFonts.screensm.tooltip + `px`
          },
          span: {
            color: Palette.primary.dark
          },
          p: {
            fontWeight: "600",
            fontSize: ThemeFonts.screenxl.tooltip + `px`,
            [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
              fontSize: ThemeFonts.screenlg.tooltip + `px`
            },
            [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
              fontSize: ThemeFonts.screenmd.tooltip + `px`
            },
            [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
              fontSize: ThemeFonts.screensm.tooltip + `px`
            }
          }
        }
      }
    },
    MuiBreadcrumbs: {
      styleOverrides: {
        root: {
          fontSize: ThemeFonts.screenxl.overline + `px`,
          [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
            fontSize: ThemeFonts.screenlg.overline + `px`
          },
          [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
            fontSize: ThemeFonts.screenmd.overline + `px`
          },
          [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
            fontSize: ThemeFonts.screensm.overline + `px`
          },
          button: {
            position: "relative",
            top: "0.2em",
            padding: "0",
            background: "transparent",
            margin: "0",
            "&:hover": {
              color: Palette.primary.components.light.hover,
              background: "transparent"
            }
          }
        }
      }
    },
    MuiBadge: {
      styleOverrides: {
        colorSecondary: {
          color: Palette.neutral[50],
          background: Palette.secondary.dark
        }
      }
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: Palette.text.grey,
          "&.Mui-error": {
            color: Palette.text.grey,
            margin: "3px 4px 0px 4px",
            fontSize: "13px"
          }
        }
      }
    },
    MuiInput: {
      styleOverrides: {
        root: {
          height: "44px"
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "&.solidTextfield": {
            margin: "0px",
            backgroundColor: Palette.neutral[50],
            borderRadius: "40px",
            border: "1px solid " + Palette.neutral[500],
            transition: "all .5s ease-out",
            textTransform: "Capitalize",
            ".MuiOutlinedInput-notchedOutline": {
              border: "none"
            },
            "&.solidTextfield:hover, &.solidTextfield:focus, &.solidTextfield:active": {
              border: "1px solid " + Palette.primary.main
            }
          },
          "&.solidTextfield.disabled": {
            border: "1px solid " + Palette.neutral[500] + "!important",
            svg: {
              fill: Palette.neutral[500] + "!important"
            }
          }
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          height: "44px",
          //Autocomplete textfield
          "&.MuiAutocomplete-inputRoot": {
            padding: "0px 8px 0px 8px!important"
          }
        },
        multiline: {
          height: "auto"
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: Palette.text.grey,
          fontSize: ThemeFonts.screenxl.inputText + `px`,
          [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
            fontSize: ThemeFonts.screenlg.inputText + `px`
          },
          [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
            fontSize: ThemeFonts.screenmd.inputText + `px`
          },
          [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
            fontSize: ThemeFonts.screensm.inputText + `px`
          }
        },
        outlined: {
          borderRadius: "8px",
          top: "-5px"
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "8px!important",
          position: "relative",
          "input, .MuiSelect-select,&.MuiAutocomplete-inputRoot": {
            padding: "10.5px 14px",
            color: Palette.text.dark,
            display: "flex",
            alignItems: "center",
            alignContent: "center",
            fontSize: ThemeFonts.screenxl.inputText + `px`,
            [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
              fontSize: ThemeFonts.screenlg.inputText + `px`
            },
            [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
              fontSize: ThemeFonts.screenmd.inputText + `px`
            },
            [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
              fontSize: ThemeFonts.screensm.inputText + `px`
            },
            img: {
              borderRadius: "100%",
              height: "20px",
              width: "20px",
              objectFit: "cover",
              marginRight: "10px",
              marginLeft: "5px"
            }
          },
          ".MuiInputAdornment-positionEnd, .MuiTypography-root": {
            color: Palette.neutral.components.disabled
          },
          "&.Mui-error": {
            "input, .MuiSelect-select,&.MuiAutocomplete-inputRoot": {
              color: Palette.error.dark2
            }
          },
          ".MuiOutlinedInput-notchedOutline": {
            borderColor: Palette.neutral[500]
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline , &:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: Palette.primary.light + "!important",
            borderWidth: 1
          },
          "&.Mui-error .MuiOutlinedInput-notchedOutline": {
            borderColor: Palette.error.dark2 + "!important"
          },
          "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: Palette.neutral.components.disabled + "!important"
          }
        }
      }
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: Palette.text.grey + "!important",
          top: "-6px!important",
          "&.MuiInputLabel-shrink": {
            top: "0px!important"
          },
          "&.Mui-error": {
            color: Palette.error.dark2 + "!important"
          },
          "&.Mui-disabled": {
            color: Palette.neutral.components.disabled + "!important"
          }
        }
      }
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          "+ .MuiAutocomplete-popper": {
            "& .MuiAutocomplete-listbox, & .MuiAutocomplete-noOptions": {
              color: Palette.text.dark,
              img: {
                borderRadius: "100%",
                height: "20px",
                width: "20px",
                objectFit: "cover"
              },
              ".MuiAutocomplete-option.Mui-focused": {
                backgroundColor: Palette.neutral[400]
              },
              fontSize: ThemeFonts.screenxl.inputText + `px`,
              [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
                fontSize: ThemeFonts.screenlg.inputText + `px`
              },
              [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
                fontSize: ThemeFonts.screenmd.inputText + `px`
              },
              [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
                fontSize: ThemeFonts.screensm.inputText + `px`
              }
            }
          },
          ".MuiAutocomplete-endAdornment": {
            display: "flex",
            ".MuiButtonBase-root": {
              width: "auto",
              height: "auto"
            }
          }
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: Palette.background.default
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        elevation0: {
          boxShadow: "none"
        },
        elevation1: {
          boxShadow:
            "0px 8px 17px rgba(106, 167, 197, 0.15), 0px 1.6px 2.7625px rgba(106, 167, 197, 0.075);" //noPalletcolor
        },
        elevation2: {
          boxShadow:
            "0px 36px 65px rgba(106, 167, 197, 0.16), 0px 18.225px 28.3359px rgba(106, 167, 197, 0.12), 0px 7.2px 10.5625px rgba(106, 167, 197, 0.08), 0px 1.575px 3.75781px rgba(106, 167, 197, 0.03);" //noPalletcolor
        },
        elevation3: {
          boxShadow:
            "0px 143px 100px rgba(106, 167, 197, 0.18), 0px 84.1984px 52.16px rgba(106, 167, 197, 0.15), 0px 43.2432px 24.48px rgba(106, 167, 197, 0.11), 0px 17.3888px 10.72px rgba(106, 167, 197, 0.07), 0px 3.8896px 4.64px rgba(106, 167, 197, 0.03);" //noPalletcolor
        },
        elevation4: {
          boxShadow:
            "20px 0px 80px rgba(106, 167, 197, 0.1), 7.7037px 0px 25.4815px rgba(106, 167, 197, 0.0607407), 1.62963px 0px 6.51852px rgba(106, 167, 197, 0.0392593)" //noPalletcolor
        },
        root: {
          "&.MuiMenu-paper": {
            "& .MuiMenu-list, & .MuiMenuItem-root": {
              color: Palette.text.dark,
              img: {
                borderRadius: "100%",
                height: "20px",
                width: "20px",
                objectFit: "cover",
                marginRight: "10px"
              },
              ".Mui-selected": {
                backgroundColor: Palette.neutral[400]
              },
              fontSize: ThemeFonts.screenxl.inputText + `px`,
              [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
                fontSize: ThemeFonts.screenlg.inputText + `px`
              },
              [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
                fontSize: ThemeFonts.screenmd.inputText + `px`
              },
              [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
                fontSize: ThemeFonts.screensm.inputText + `px`
              }
            }
          },
          "&.MuiMenu-paper, &.MuiAutocomplete-paper": {
            boxShadow:
              "0px 8px 17px rgb(106 167 197 / 15%), 0px 1.6px 2.7625px rgb(106 167 197 / 8%)",
            backgroundColor: Palette.background.default + `!important`
          }
        }
      }
    },
    MuiModal: {
      styleOverrides: {
        root: {
          ".MuiBackdrop-root": {
            backgroundColor: Palette.primary.dark2 + `64!important`
          },
          "&.modalBoxContent": {
            ".modalContainer": {
              borderRadius: 0,
              width: "506px",
              padding: "40px",
              textAlign: "center",
              ".iconBox": {
                ".closeButton": {
                  float: "right",
                  marginBottom: 40
                }
              },
              img: {
                marginTop: 32,
                marginBottom: 72
              },
              ".modalHeader": {
                padding: 0
              }
            }
          },
          "&.modalBoxLoader": {
            ".modalContainer": {
              width: "542px",
              minHeight: "117px",
              flexDirection: "row",
              padding: "15px 10px",
              alignItems: "center",
              ".modalHeader": {
                padding: 0
              }
            }
          },
          ".modalContainer": {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            minWidth: "775px",
            minHeight: "233px",
            backgroundColor: Palette.background.default,
            borderRadius: 8,
            display: "flex",
            flexDirection: "column",
            justifyContent: "end",
            ".modalHeader": {
              padding: 40,
              ".closeButton": {
                position: "absolute",
                right: 25,
                top: 25
              }
            },
            ".dividerHeader": {
              margin: "32px 0"
            },
            ".modalFooter": {
              padding: "32px 40px",
              display: "flex",
              justifyContent: "end",
              backgroundColor: Palette.background.paper,
              borderBottomRightRadius: 8,
              borderBottomLeftRadius: 8,
              button: {
                marginLeft: 16
              }
            }
          }
        }
      }
    },
    MuiTableBody: {
      styleOverrides: {
        root: {
          textAlign: "left",
          backgroundColor: Palette.background.default
        }
      }
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          background: Palette.neutral[400],
          fontWeight: "500",
          textAlign: "left",
          fontSize: "14px",
          header: Palette.primary.light,
          lineHeight: "120%",
          height: "45px!important"
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontWeight: "500",
          fontSize: "14px",
          textAlign: "left",
          lineHeight: "120%",
          paddingLeft: "24px",
          verticalAlign: "middle",
          paddingright: "24px"
        },
        body: {
          height: "64px",
          color: Palette.neutral[600],
          borderBottom: "none",
          ".MuiChip-root": {
            minWidth: "74px",
            textalign: "center",
            alignItems: "center"
          },
          fontStyle: "normal",
          fontWeight: "normal",
          fontSize: "14px!important",
          lineHeight: "120%",
          letterSpacing: "0.0015em"
        },
        head: {
          borderBottom: "none",
          height: "45px",
          color: Palette.text.primary
        }
      }
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          "&.choiceButton": {
            background: Palette.background.default,
            width: 78,
            height: 90,
            textAlign: "center",
            borderRadius: 8,
            border: "1px solid" + Palette.neutral[400],
            transition: "all .3s ease-out",
            display: "flex",
            justifyContent: "space-between",
            padding: 12,
            marginTop: 20,
            "&:hover:not(.Mui-disabled)": {
              boxShadow:
                "0px 8px 17px rgba(106, 167, 197, 0.15), 0px 1.6px 2.7625px rgba(106, 167, 197, 0.075)",
              border: "1px solid" + Palette.primary.light2
            },
            ".choiceRadio": {
              color: Palette.neutral[500],
              "&:hover": {
                background: "transparent"
              },
              "svg:last-child": {
                fontSize: "2.5rem!important",
                left: "-8px",
                top: "-8px"
              },
              input: {
                position: "absolute",
                opacity: 0,
                cursor: "pointer",
                "&:checked ~ span:not(.MuiTouchRipple-root)": {
                  color: Palette.primary.light2,
                  "&:after": {
                    display: "block"
                  }
                }
              },
              "span:not(.MuiTouchRipple-root)": {
                position: "absolute",
                top: 0,
                left: 30,
                height: 25,
                width: 25,
                backgroundColor: Palette.neutral[50],
                borderRadius: 50,
                "&:after": {
                  content:
                    "url(data:image/svg+xml,%3Csvg%20width%3D%228%22%20height%3D%226%22%20viewBox%3D%220%200%208%206%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M2.91391%205.49999C2.85038%205.50035%202.78741%205.48834%202.7286%205.46463C2.66979%205.44092%202.61629%205.40599%202.57119%205.36184L0.640367%203.45632C0.550463%203.36706%200.5%203.24633%200.5%203.12047C0.5%202.99462%200.550463%202.87388%200.640367%202.78462C0.685241%202.73997%200.738629%202.70453%200.797451%202.68035C0.856273%202.65616%200.919366%202.64371%200.983089%202.64371C1.04681%202.64371%201.1099%202.65616%201.16873%202.68035C1.22755%202.70453%201.28094%202.73997%201.32581%202.78462L2.91391%204.35192L6.67419%200.640913C6.71906%200.596262%206.77245%200.560822%206.83127%200.536637C6.8901%200.512452%206.95319%200.5%207.01691%200.5C7.08064%200.5%207.14373%200.512452%207.20255%200.536637C7.26137%200.560822%207.31476%200.596262%207.35963%200.640913C7.44954%200.730168%207.5%200.850908%207.5%200.976761C7.5%201.10261%207.44954%201.22335%207.35963%201.31261L3.25663%205.36184C3.21153%205.40599%203.15804%205.44092%203.09923%205.46463C3.04041%205.48834%202.97744%205.50035%202.91391%205.49999Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fsvg%3E%0A)",
                  display: "none",
                  position: "relative",
                  top: 1,
                  left: "-16px"
                }
              }
            },
            ".choiceBox": {
              height: "100%",
              justifyContent: "space-around",
              ".iconChoice": {
                margin: "auto"
              }
            },
            "&.Mui-disabled": {
              ".MuiTypography-root": {
                color: Palette.text.disabled + "!important"
              },
              ".iconChoice": {
                circle: {
                  stroke: Palette.neutral.components.disabled,
                  "&.disabled": {
                    fill: Palette.neutral.components.disabled + "!important"
                  }
                }
              }
            }
          },
          ".MuiTypography-body1.MuiFormControlLabel-label": {
            height: "100%"
          }
        }
      }
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          ".MuiSvgIcon-root": {
            fontSize: "40px!important"
          }
        }
      }
    }
  }
});

export default theme;
