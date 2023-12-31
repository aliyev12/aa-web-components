import { css } from "../utils/index.js";

export const aaDialogStyles = css`
  /* :host-context(.light-theme) a.aa-dialog {
    color: var(--green-medium);
  } 
  .aa-dialog ::slotted([slot="sample-img"]),
  .sample-img {
    border-radius: var(--radius);
  }
  */

  aa-dialog {
    /* Add your styles here */
  }

  /* Transition for the popover itself */

  [popover]:popover-open {
    opacity: 1;
    pointer-events: auto;
    /* transform: scaleX(1); */
  }

  [popover] {
    pointer-events: none;
    border: 1px solid var(--primary);
    border-radius: var(--radius);
    padding: 20px;
    width: calc(100% - 40px);
    display: flex;
    flex-direction: column;

    /* Final state of the exit animation */
    opacity: 0;
    /* transform: scaleX(0); */

    transition: opacity 0.7s, transform 0.7s, overlay 0.7s allow-discrete,
      display 0.7s allow-discrete;
    /* Equivalent to
  transition: all 0.7s allow-discrete; */
  }

  /* Needs to be after the previous [popover]:popover-open rule
to take effect, as the specificity is the same */
  @starting-style {
    [popover]:popover-open {
      opacity: 0;
      /* transform: scaleX(0); */
    }
  }

  /* Transition for the popover's backdrop */

  [popover]::backdrop {
    background-color: rgb(0 0 0 / 0);
    /* backdrop-filter: blur(3px); */
    transition: display 0.7s allow-discrete, overlay 0.7s allow-discrete,
      background-color 0.7s;
    /* Equivalent to
  transition: all 0.7s allow-discrete; */
  }

  [popover]:popover-open::backdrop {
    background-color: rgb(0 0 0 / 0.25);
  }

  /* The nesting selector (&) cannot represent pseudo-elements
so this starting-style rule cannot be nested */

  @starting-style {
    [popover]:popover-open::backdrop {
      background-color: rgb(0 0 0 / 0);
    }
  }

  .title-container {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  .body-container {
    margin-top: 16px;
  }

  .actions-container {
    margin-top: 24px;
  }

  @media (min-width: 1024px) {
    [popover] {
      width: 650px;
    }
  }
`;
