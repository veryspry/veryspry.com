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

export const leftJustifiedText = style({
  textAlign: 'left',
})

export const roundImage = style({
  borderRadius: '50%',
})

export const marginHorizontalSmall = style({
  margin: '0 10px',
})

export const smallPadding = style({
  padding: '15px',
})
