import { html } from "../utils/index.js";

export const chevronLeft = html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    slot="button-content"
    width="20px"
    height="20px"
  >
    <title>Left</title>
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M15.75 19.5 8.25 12l7.5-7.5"
    />
  </svg>
`;

export const chevronRight = html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    slot="button-content"
    width="20px"
    height="20px"
  >
    <title>Right</title>
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="m8.25 4.5 7.5 7.5-7.5 7.5"
    />
  </svg>
`;

export const dotWhite = html`
  <svg
    width="23"
    height="23"
    viewBox="0 0 23 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    slot="button-content"
  >
    <circle cx="11.5" cy="11.5" r="11.5" fill="white" />
  </svg>
`;

export const dotGray = html`
  <svg
    width="23"
    height="23"
    viewBox="0 0 23 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    slot="button-content"
  >
    <circle cx="11.5" cy="11.5" r="11.5" fill="#A0B0B6" />
  </svg>
`;
