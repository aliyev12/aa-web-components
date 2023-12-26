import { css } from "../utils/index.js";

export const aaAccordionStyles = css`
  /* :host-context(.light-theme) a.aa-accordion {
    color: var(--green-medium);
  } 
  .aa-accordion ::slotted([slot="sample-img"]),
  .sample-img {
    border-radius: var(--radius);
  }
  */

  .aa-accordion {
    border: 1px solid var(--primary);
    border-radius: var(--radius);
  }
`;
