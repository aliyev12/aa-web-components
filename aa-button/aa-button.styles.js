import { css } from "../utils/index.js";

export const aaButtonStyles = css`
  button.aa-button {
    position: relative;
    background: none;
    border: none;
    border-radius: var(--radius);
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 300ms ease-in-out;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button.aa-button:focus {
    outline: 2px solid var(--primary);
    outline-offset: 1px;
  }

  button.aa-button.primary {
    background-color: var(--primary);
  }

  button.aa-button.primary:hover {
    background-color: var(--primary-dark);
  }

  button.aa-button.primary:focus {
    background-color: var(--primary-darker);
  }

  button.aa-button.secondary {
    background-color: var(--secondary);
  }

  button.aa-button.secondary:hover {
    background-color: var(--secondary-dark);
  }

  button.aa-button.secondary:focus {
    background-color: var(--secondary-darker);
  }

  button.aa-button.disabled {
    background-color: var(--gray);
    cursor: default;
  }

  button.aa-button.disabled:focus {
    outline: none;
  }

  /* button.aa-button span::slotted([slot="button-content"]) { */
  /* button.aa-button ::slotted([slot="button-content"]) { */
  button.aa-button ::slotted([slot="button-content"]),
  .btn-text {
    color: white;
    font-weight: 500;
  }

  button.aa-button svg {
    position: absolute;
    left: 4px;
    bottom: 4px;
    z-index: 1;
  }
`;
