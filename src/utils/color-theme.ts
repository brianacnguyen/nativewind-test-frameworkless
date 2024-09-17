import { vars } from 'nativewind';
import { lightTheme, darkTheme } from '@metamask/design-tokens';

export enum CustomTheme {
  Brand = 'brand',
  BrandInverse = 'brandInverse',
  BrandEvolution = 'brandEvolution',
}

export const themes = {
  [CustomTheme.Brand]: {
    light: vars({
      '--color-background-default': lightTheme.colors.background.default,
      '--color-background-default-pressed':
        lightTheme.colors.background.defaultPressed,
      '--color-background-default-hover':
        lightTheme.colors.background.defaultHover,
      '--color-background-alternative':
        lightTheme.colors.background.alternative,
      '--color-background-alternative-pressed':
        lightTheme.colors.background.alternativePressed,
      '--color-background-alternative-hover':
        lightTheme.colors.background.alternativeHover,
      '--color-background-hover': lightTheme.colors.background.hover,
      '--color-background-pressed': lightTheme.colors.background.pressed,
      '--color-primary-default': lightTheme.colors.primary.default,
      '--color-primary-inverse': lightTheme.colors.primary.inverse,
    }),
    dark: vars({
      '--color-background-default': darkTheme.colors.background.default,
      '--color-background-default-pressed':
        darkTheme.colors.background.defaultPressed,
      '--color-background-default-hover':
        darkTheme.colors.background.defaultHover,
      '--color-background-alternative': darkTheme.colors.background.alternative,
      '--color-background-alternative-pressed':
        darkTheme.colors.background.alternativePressed,
      '--color-background-alternative-hover':
        darkTheme.colors.background.alternativeHover,
      '--color-background-hover': darkTheme.colors.background.hover,
      '--color-background-pressed': darkTheme.colors.background.pressed,
      '--color-primary-default': darkTheme.colors.primary.default,
      '--color-primary-inverse': darkTheme.colors.primary.inverse,
    }),
  },
  [CustomTheme.BrandInverse]: {
    light: vars({
      '--color-background-default': darkTheme.colors.background.default,
      '--color-background-default-pressed':
        darkTheme.colors.background.defaultPressed,
      '--color-background-default-hover':
        darkTheme.colors.background.defaultHover,
      '--color-background-alternative': darkTheme.colors.background.alternative,
      '--color-background-alternative-pressed':
        darkTheme.colors.background.alternativePressed,
      '--color-background-alternative-hover':
        darkTheme.colors.background.alternativeHover,
      '--color-background-hover': darkTheme.colors.background.hover,
      '--color-background-pressed': darkTheme.colors.background.pressed,
      '--color-primary-default': darkTheme.colors.primary.default,
      '--color-primary-inverse': darkTheme.colors.primary.inverse,
    }),
    dark: vars({
      '--color-background-default': lightTheme.colors.background.default,
      '--color-background-default-pressed':
        lightTheme.colors.background.defaultPressed,
      '--color-background-default-hover':
        lightTheme.colors.background.defaultHover,
      '--color-background-alternative':
        lightTheme.colors.background.alternative,
      '--color-background-alternative-pressed':
        lightTheme.colors.background.alternativePressed,
      '--color-background-alternative-hover':
        lightTheme.colors.background.alternativeHover,
      '--color-background-hover': lightTheme.colors.background.hover,
      '--color-background-pressed': lightTheme.colors.background.pressed,
      '--color-primary-default': lightTheme.colors.primary.default,
      '--color-primary-inverse': lightTheme.colors.primary.inverse,
    }),
  },
  [CustomTheme.BrandEvolution]: {
    light: vars({
      '--color-background-default': lightTheme.colors.background.default,
      '--color-background-default-pressed':
        lightTheme.colors.background.defaultPressed,
      '--color-background-default-hover':
        lightTheme.colors.background.defaultHover,
      '--color-background-alternative':
        lightTheme.colors.background.alternative,
      '--color-background-alternative-pressed':
        lightTheme.colors.background.alternativePressed,
      '--color-background-alternative-hover':
        lightTheme.colors.background.alternativeHover,
      '--color-background-hover': lightTheme.colors.background.hover,
      '--color-background-pressed': lightTheme.colors.background.pressed,
      '--color-primary-default': '#B864F5',
      '--color-primary-inverse': lightTheme.colors.primary.inverse,
    }),
    dark: vars({
      '--color-background-default': darkTheme.colors.background.default,
      '--color-background-default-pressed':
        darkTheme.colors.background.defaultPressed,
      '--color-background-default-hover':
        darkTheme.colors.background.defaultHover,
      '--color-background-alternative': darkTheme.colors.background.alternative,
      '--color-background-alternative-pressed':
        darkTheme.colors.background.alternativePressed,
      '--color-background-alternative-hover':
        darkTheme.colors.background.alternativeHover,
      '--color-background-hover': darkTheme.colors.background.hover,
      '--color-background-pressed': darkTheme.colors.background.pressed,
      '--color-primary-default': '#B8EF4A',
      '--color-primary-inverse': darkTheme.colors.primary.inverse,
    }),
  },
};
