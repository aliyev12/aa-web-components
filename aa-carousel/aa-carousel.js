import { html, styles } from "../utils/index.js";
import { aaCarouselStyles } from "./aa-carousel.styles.js";
import {
  chevronLeft,
  chevronRight,
  dotWhite,
  dotGray,
} from "./carousel-svgs.js";
import "../aa-button/aa-button.js";

class AACarousel extends HTMLElement {
  constructor() {
    super();
    this.activeSlide = 0;
    this.attachShadow({ mode: "open" });
    this.render();
  }

  connectedCallback() {
    const leftNavButton = this.shadowRoot.querySelector(
      ".left-nav-container aa-button"
    );
    const rightNavButton = this.shadowRoot.querySelector(
      ".right-nav-container aa-button"
    );

    if (leftNavButton && rightNavButton) {
      leftNavButton.addEventListener("button-clicked", () => {
        this.moveSlide("left");
      });

      rightNavButton.addEventListener("button-clicked", () => {
        this.moveSlide("right");
      });
    }

    this.renderSlides();
    this.renderDots();
  }

  moveSlide(direction, slideIdx) {
    const slides = [...this.children];
    const slidesIndexes = slides.map((_, i) => i);
    let newActiveSlide = this.activeSlide;

    if (direction === "left") {
      if (this.activeSlide === 0) {
        newActiveSlide = slidesIndexes[slidesIndexes.length - 1];
      } else {
        newActiveSlide = this.activeSlide - 1;
      }
    } else if (direction === "right") {
      if (this.activeSlide === slidesIndexes[slidesIndexes.length - 1]) {
        newActiveSlide = 0;
      } else {
        newActiveSlide = this.activeSlide + 1;
      }
    } else {
      if (slideIdx !== null || slideIdx !== undefined)
        newActiveSlide = slideIdx;
    }

    this.activeSlide = newActiveSlide;

    this.renderSlides();
    this.renderDots();
  }

  renderSlides() {
    const slidesContainer = this.shadowRoot.querySelector(".slides-container");

    slidesContainer.innerHTML = [...this.children]
      .map((slide, i) => {
        return html`<div
          class="slide ${this.activeSlide === i ? "" : "hidden"}"
        >
          ${slide.innerHTML}
        </div>`;
      })
      .join("");
  }

  renderDots() {
    const dotsContainer = this.shadowRoot.querySelector(
      ".slide-links-container"
    );

    dotsContainer.innerHTML = "";

    [...this.children].forEach((_, i) => {
      const isActive = this.activeSlide === i;

      const dotButton = document.createElement("aa-button");
      dotButton.innerHTML = isActive ? dotGray : dotWhite;
      dotButton.addEventListener("button-clicked", () => {
        this.moveSlide("to", i);
      });

      const dotContainer = document.createElement("div");
      dotContainer.classList.add("slide-link");
      dotContainer.appendChild(dotButton);

      dotsContainer.appendChild(dotContainer);
    });
  }

  render() {
    this.shadowRoot.innerHTML = html`
    <style>
      ${styles(aaCarouselStyles)}
    </style>

    <div class="aa-carousel">
      <section class="top">
        <div class="left-nav-container"><aa-button>${chevronLeft}</aa-button></div>
        <div class="slides-container"></div>
        <div class="right-nav-container"><aa-button>${chevronRight}</aa-button></div>
      </section>
      <section class="bottom">
        <div class="slide-links-container"><div>
      </section>
    </div>
    `;
  }
}

// Define your custom element using the Custom Elements API
customElements.define("aa-carousel", AACarousel);
