import { css } from "./index.js";

export const globalStyles = css`
  :host {
    /* COLORS */
    --dark: #093c4d;
    --primary: #1fa0c9;
    --primary-dark: #117392;
    --primary-darker: #0a546b;
    --secondary: #aba50e;
    --secondary-dark: #7d780a;
    --secondary-darker: #605d07;
    --gray: #a0b0b6;
    --green-medium: #1e980a;
    --green-dark: #1b6f0e;
    --green-smooth: #a5f897;
    --green-bright: #7bff65;
    --green-feather: #c7edc1;
    --green-light: #23c10a;
    --red: #c31010;

    /* OTHER */
    --radius: 7px;
  }

  :host {
    color: var(--dark);
    font-size: 16px;
    font-family: "Poppins", sans-serif;
    box-sizing: border-box;
  }

  :host * {
    box-sizing: inherit;
  }

  :host > * {
    color: var(--dark);
    font-size: inherit;
    font-family: inherit;
  }
`;

export function styles(customCss) {
  return css`
    ${globalStyles}
    ${customCss}
  `;
}
