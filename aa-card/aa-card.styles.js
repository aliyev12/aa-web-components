import { css } from "../utils/index.js";

export const aaCardStyles = css`
  /* :host-context(.light-theme) a.aa-link {
    color: var(--green-medium);
  } */

  .aa-card {
    border: 1px solid var(--primary);
    border-radius: var(--radius);
    padding: 15px;
    width: 430px;
    display: flex;
    flex-direction: column;
    /* align-items: center;
    justify-content: center; */
  }

  .aa-card ::slotted([slot="card-img"]),
  .card-img {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 170px;
    border-radius: var(--radius);
  }

  .separator {
    border: none;
    border-top: 1px solid var(--primary);
    width: 100%;
    margin: 0;
  }

  .actions {
    padding-top: 16px;
  }
`;
