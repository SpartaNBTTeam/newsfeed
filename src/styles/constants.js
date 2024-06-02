import { css } from 'styled-components';

export const colors = {
  primary: '#845bfb',
  primaryForeground: '#ffffff',
  secondary: '#ffffff',
  secondaryForeground: '#606060',
  border: '#555555',
  shadow: '#000000',
  foreground: '#999999',
  baseBackground: '#000000'
};

export const constants = css`
  :root {
    --color-primary: ${colors.primary};
    --color-primary-foreground: ${colors.primaryForeground};
    --color-secondary: ${colors.secondary};
    --color-secondary-foreground: ${colors.secondaryForeground};
    --color-border: ${colors.border};
    --color-shadow: ${colors.shadow};
    --color-foreground: ${colors.foreground};
    --color-base-background: ${colors.baseBackground};
  }
`;
