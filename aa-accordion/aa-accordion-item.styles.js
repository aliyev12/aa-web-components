import { css } from "../utils/index.js";

export const aaAccordionItemStyles = css`
  /* :host-context(.light-theme) a.aa-accordion {
    color: var(--green-medium);
  } 
  .aa-accordion ::slotted([slot="sample-img"]),
  .sample-img {
    border-radius: var(--radius);
  }
  */

  .aa-accordion-item {
    border-bottom: 1px solid var(--primary);
  }

  .aa-accordion-item.last-item {
    border-bottom: none;
  }

  .title-container button {
    background: none;
    width: 100%;
    border: none;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 18px;
    cursor: pointer;
  }

  .title-container button svg {
    margin-left: auto;
  }

  .expanded .title-container button svg {
    transform: rotate(180deg);
  }

  .body-container {
    padding: 18px;
  }
`;
