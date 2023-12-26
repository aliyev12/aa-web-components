import { html, styles } from "../utils/index.js";
import { aaAccordionItemStyles } from "./aa-accordion-item.styles.js";
import { chevronDown } from "./accordion-svgs.js";

class AccordionItem extends HTMLElement {
  constructor() {
    super();
    this.key;

    this.attachShadow({ mode: "open" });

    const isLastItem = this.getAttribute("is-last");

    const expanded = this.getAttribute("expanded");

    this.shadowRoot.innerHTML = html`
      <style>
        ${styles(aaAccordionItemStyles)}
      </style>

      <div
        class="aa-accordion-item ${isLastItem ? "last-item" : ""} ${expanded ===
        "true"
          ? "expanded"
          : ""}"
      >
        <div class="title-container">
          <button part="button">
            <h3>
              <slot name="title"></slot>
            </h3>
            ${chevronDown}
          </button>
        </div>
        <div class="body-container"></div>
      </div>
    `;

    this.renderBody();

    this.shadowRoot
      .querySelector("button")
      .addEventListener("click", this.handleButtonClick.bind(this));
  }

  renderBody() {
    const bodyContainer = this.shadowRoot.querySelector(".body-container");
    if (!bodyContainer) return;

    const expanded = this.getAttribute("expanded");

    bodyContainer.style.display = expanded === "true" ? "block" : "none";
    bodyContainer.innerHTML = html`
      <p>
        <slot name="body"></slot>
      </p>
    `;
  }

  connectedCallback() {
    const key = this.getAttribute("key");
    this.key = key;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "expanded" && oldValue !== newValue) {
      this.renderBody();
      const accordionItemElem =
        this.shadowRoot.querySelector(".aa-accordion-item");
      if (accordionItemElem) {
        const isExpanded = newValue === "true";
        if (isExpanded) {
          accordionItemElem.classList.add("expanded");
        } else {
          accordionItemElem.classList.remove("expanded");
        }
      }
    }
  }

  static get observedAttributes() {
    return ["expanded"];
  }

  handleButtonClick() {
    if (this.key) {
      this.dispatchEvent(
        new CustomEvent("accordion-clicked", {
          bubbles: true,
          detail: this.key,
        })
      );
    }
  }
}

customElements.define("aa-accordion-item", AccordionItem);

// import { html, styles } from "../utils/index.js";
// import { aaAccordionItemStyles } from "./aa-accordion-item.styles.js";
// import { chevronDown } from "./accordion-svgs.js";

// class AccordionItem extends HTMLElement {
//   constructor() {
//     super();
//     this.key;

//     this.attachShadow({ mode: "open" });

//     const isLastItem = this.getAttribute("is-last");
//     console.log("isLastItem = ", isLastItem);

//     this.shadowRoot.innerHTML = html`
//       <style>
//         ${styles(aaAccordionItemStyles)}
//       </style>

//       <div class="aa-accordion-item ${isLastItem ? "last-item" : ""} ">
//         <div class="title-container">
//           <button part="button">
//             <h3>
//               <slot name="title"></slot>
//             </h3>
//             ${chevronDown}
//           </button>
//         </div>
//         <div class="body-container"></div>
//       </div>
//     `;

//     this.renderBody();

//     this.shadowRoot
//       .querySelector("button")
//       .addEventListener("click", this.handleButtonClick.bind(this));
//   }

//   renderBody() {
//     const bodyContainer = this.shadowRoot.querySelector(".body-container");
//     if (!bodyContainer) return;

//     const expanded = this.getAttribute("expanded");

//     bodyContainer.style.display = expanded === "true" ? "block" : "none";
//     bodyContainer.innerHTML = html`
//       <p>
//         <slot name="body"></slot>
//       </p>
//     `;
//   }

//   connectedCallback() {
//     const key = this.getAttribute("key");
//     this.key = key;
//   }

//   attributeChangedCallback(name, oldValue, newValue) {
//     if (name === "expanded" && oldValue !== newValue) {
//       this.renderBody();
//     }
//   }

//   static get observedAttributes() {
//     return ["expanded"];
//   }

//   handleButtonClick() {
//     if (this.key) {
//       this.dispatchEvent(
//         new CustomEvent("accordion-clicked", {
//           bubbles: true,
//           detail: this.key,
//         })
//       );
//     }
//   }
// }

// customElements.define("aa-accordion-item", AccordionItem);
