import { createTheme, createThemeContract, style } from "@vanilla-extract/css";

export const fullViewHeight = style({
  height: '100vh',
})

export const centeredVerticalFlex = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
})


export const centeredHorizontalFlex = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
})

export const fullParentWidth = style({
  width: '100%',
})

export const mainContentMaxWidth = style({
  maxWidth: '700px',
})

export const centerText = style({
  textAlign: 'center',
})
