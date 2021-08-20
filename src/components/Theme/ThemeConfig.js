import { css } from 'styled-components';

export const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  fablet: '998px',
  desktop: '1200px',
};

const themeConfig = {
  fontFamily: '"Montserrat", sans-serif',
  secondaryFontFamily: '',
  shadow: '',
  spacing: {
    sectionMargins: css`
      margin-top: 100px;
      margin-bottom: 100px;
    `,
  },
  button: {
    round: '5px',
    padding: '12px 24px',
    margin: '30px 0px',
    fontWeight: '600',
    fontSize: '14px'
  },
  media: {
    mobile: `(max-width: ${breakpoints.mobile})`,
    tablet: `(max-width: ${breakpoints.tablet})`,
    fablet: `(max-width: ${breakpoints.fablet})`,
    desktop: `(max-width: ${breakpoints.desktop})`,
    minMobile: `(min-width: ${breakpoints.mobile})`,
    minTablet: `(min-width: ${breakpoints.tablet})`,
  },
};

export const darkTheme = {
  background: '#1D2731',
  primaryColor: '#6d83f2',
  secondaryColor: '#328CC1',
  primaryText: '#fff',
  secondaryText: '#fff',
  accentColor: '#D9B310',
  ...themeConfig,
};

export const lightTheme = {
  background: '#FFF',
  primaryColor: '#6d83f2',
  secondaryColor: '#328CC1',
  primaryText: '#3a3a3a',
  secondaryText: '#fff',
  accentColor: '#D9B310',
  ...themeConfig,
};