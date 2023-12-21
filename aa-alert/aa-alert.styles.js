import { css } from "../utils/index.js";

export const aaAlertStyles = css`
  .aa-alert {
    border: 1px solid var(--primary);
    border-radius: var(--radius);
    padding: 7px;
    display: flex;
    flex-direction: column;
    max-width: 640px;
    width: auto;
  }

  .title-container {
    border-radius: 5px;
    height: 32px;
    display: flex;
    align-items: center;
    padding: 4px 6px;
    width: 100%;
  }

  .info .title-container {
    background-color: var(--primary);
  }

  .success .title-container {
    background-color: var(--green-medium);
  }

  .warning .title-container {
    background-color: var(--secondary);
  }

  .error .title-container {
    background-color: var(--red);
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
  }

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .title p {
    font-size: 16px;
    color: white;
    margin: 0;
  }

  .body-container {
    padding: 20px 13px 13px 13px;
  }
  .body-container p {
    margin: 0;
  }
`;
