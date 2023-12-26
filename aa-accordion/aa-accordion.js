import { html, styles } from "../utils/index.js";
import { aaAccordionStyles } from "./aa-accordion.styles.js";
import "./aa-accordion-item.js"; // Import it here so that you don't have to import it in the main.js

class Accordion extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    this.accordionsState = {};

    this.shadowRoot.innerHTML = html`
      <style>
        ${styles(aaAccordionStyles)}
      </style>

      <div class="aa-accordion">
        ${[...this.children]
          .map((accordionItem, index, arr) => {
            const itemId = `accordion-item-${index}`;
            if (index === arr.length - 1) {
              accordionItem.setAttribute("is-last", "true");
            }
            return html`<div class="accordion-item" id="${itemId}">
              ${accordionItem.outerHTML}
            </div>`;
          })
          .join("")}
      </div>
    `;
    this.init();
  }

  connectedCallback() {
    const accordionItems = [
      ...this.shadowRoot.querySelectorAll("aa-accordion-item"),
    ];

    accordionItems.forEach((accordionItem) => {
      accordionItem.addEventListener("accordion-clicked", (e) => {
        const accordionKey = e.detail;

        if (
          this.accordionsState[accordionKey] !== undefined ||
          this.accordionsState[accordionKey] !== null
        ) {
          const newAccordionsState = { ...this.accordionsState };
          const newAccordionItemState = !newAccordionsState[accordionKey];
          newAccordionsState[accordionKey] = newAccordionItemState;
          this.accordionsState = newAccordionsState;
          accordionItem.setAttribute("expanded", `${newAccordionItemState}`);
        }
      });
    });

    window.addEventListener("collapse-all", (e) => {
      const accordionName = this.getAttribute("name");
      if (e.detail !== accordionName) return;

      const newAccordionsState = { ...this.accordionsState };
      for (const key in newAccordionsState) {
        newAccordionsState[key] = false;

        accordionItems.forEach((accordionItem) => {
          accordionItem.setAttribute("expanded", "false");
        });
      }
    });

    window.addEventListener("expand-all", (e) => {
      const accordionName = this.getAttribute("name");
      if (e.detail !== accordionName) return;

      const newAccordionsState = { ...this.accordionsState };
      for (const key in newAccordionsState) {
        newAccordionsState[key] = true;

        accordionItems.forEach((accordionItem) => {
          accordionItem.setAttribute("expanded", "true");
        });
      }
    });
  }

  init() {
    const accordionItems = [
      ...this.shadowRoot.querySelectorAll("aa-accordion-item"),
    ];
    accordionItems.forEach((accordionItem) => {
      const key = accordionItem.getAttribute("key");
      const expanded = accordionItem.getAttribute("expanded");
      if (!this.accordionsState[key]) {
        this.accordionsState[key] = expanded === "true" ? true : false;
      }
    });
  }

  toggleAccordionItem(itemId) {
    const item = this.shadowRoot.getElementById(itemId);
    if (item) {
      const bodyContainer = item.querySelector(".body-container");
      bodyContainer.classList.toggle("collapsed");
    }
  }
}

customElements.define("aa-accordion", Accordion);
