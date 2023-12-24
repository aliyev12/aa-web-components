import { css } from "../utils/index.js";

export const aaCarouselStyles = css`
  /* :host-context(.light-theme) a.aa-link {
    color: var(--green-medium);
  } 
    button.aa-button ::slotted([slot="button-content"]),
  .btn-text {
    color: white;
    font-weight: 500;
  }


  */

  .aa-carousel {
    width: fit-content;
  }

  .top {
    display: flex;
  }

  .left-nav-container,
  .right-nav-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .left-nav-container {
    padding-right: 15px;
  }

  .right-nav-container {
    padding-left: 15px;
  }

  .slides-container {
    display: flex;
  }

  :host ::slotted([slot="slide"]) img {
    border-radius: var(--radius);
  }

  :host .slide img {
    border-radius: var(--radius);
  }

  .slide {
    visibility: visible;
    width: 100%;
  }

  .slide.hidden {
    visibility: hidden;
    width: 0;
  }

  .bottom {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
  }

  .slide-links-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .slide-links-container .slide-link {
    margin-right: 10px;
  }

  .slide-links-container .slide-link:last-child {
    margin-right: 0;
  }
`;
