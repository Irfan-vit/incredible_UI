import styled from "styled-components";
import { defaultTheme, typeScale } from "../utils";
import { applyStyleModifiers } from "styled-components-modifiers";

const BUTTON_MODIFIERS = {
  small: () => `
  font-size: ${typeScale.helperText};
  padding: 8px;
`,
  large: () => `
font-size: ${typeScale.h5};
padding: 16px 24px;
`,
  warning: () => `
  background: none;
  color: ${defaultTheme.status.warningColor};
  &:hover, &:focus {
    background-color: ${defaultTheme.status.warningColorHover};
    outline: 3px solid ${defaultTheme.status.warningColorHover};
  //   outline-offset: 2px;
    border: 2px solid transparent;
  }

  &:active {
    background-color: ${defaultTheme.status.warningColorActive};
  }
`,
  primaryButtonWarning: () => `
background-color: ${defaultTheme.status.warningColor};
color: ${defaultTheme.textColorInverted};
`,
  error: () => `
background: none;
color: ${defaultTheme.status.errorColor};
&:hover, &:focus {
  background-color: ${defaultTheme.status.errorColorHover};
  outline: 3px solid ${defaultTheme.status.errorColorHover};
//   outline-offset: 2px;
  border: 2px solid transparent;
}
&:active {
  background-color: ${defaultTheme.status.errorColorActive};
}
`,
  primaryButtonError: () => `
background-color: ${defaultTheme.status.errorColor};
color: ${defaultTheme.textColorInverted};
`,
  success: () => `
    background: none;
    color: ${defaultTheme.status.successColor};
    &:hover, &:focus {
      background-color: ${defaultTheme.status.successColorHover};
      outline: 3px solid ${defaultTheme.status.successColorHover};
    //   outline-offset: 2px;
      border: 2px solid transparent;
    }
    &:active {
      background-color: ${defaultTheme.status.successColorActive};
    }
  `,
  primaryButtonSuccess: () => `
    background-color: ${defaultTheme.status.successColor};
    color: ${defaultTheme.textColorInverted};
  `
};

export const Button = styled.button`
  padding: 12px 16px;
`;

export const PrimaryButton = styled(Button)`
  background: ${defaultTheme.primaryColor};
  color: ${defaultTheme.textColorOnPrimary};
  font-size: ${typeScale.header5};

  &:hover,
  &:focus {
    background: ${defaultTheme.PrimaryHoverColor};
    outline-offset: 2px;
  }

  &:active {
    background: ${defaultTheme.PrimaryActiveColor};
  }

  &:disabled {
    background: ${defaultTheme.disabled};
    color: ${defaultTheme.textOnDisabled};
    cursor: not-allowed;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;
