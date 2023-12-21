import { html, styles } from "../utils/index.js";
import { aaAlertStyles } from "./aa-alert.styles.js";
import { infoSvg, successSvg, warningSvg, errorSvg } from "./alert-svgs.js";

class AAAlert extends HTMLElement {
  constructor() {
    super();

    const isInfo = this.getAttribute("info") !== null;
    const inSuccess = this.getAttribute("success") !== null;
    const isWarning = this.getAttribute("warning") !== null;
    const isError = this.getAttribute("error") !== null;

    // Attach a shadow DOM to the element
    this.attachShadow({ mode: "open" });

    let type = "info";
    let icon = infoSvg;

    if (inSuccess) {
      type = "success";
      icon = successSvg;
    } else if (isWarning) {
      type = "warning";
      icon = warningSvg;
    } else if (isError) {
      type = "error";
      icon = errorSvg;
    }

    // Define the initial content of the shadow DOM
    this.shadowRoot.innerHTML = html`
      <style>
        ${styles(aaAlertStyles)}
      </style>

      <div class="aa-alert ${type}">
        <div class="title-container">
          <div class="icon">${icon}</div>
          <div class="title">
            <p>Your changes have been saved</p>
          </div>
        </div>
        <div class="body-container">
          <p>You can safely exit the app now.</p>
        </div>
      </div>
    `;

    // this.shadowRoot
    //   .querySelector("button")
    //   .addEventListener("click", this.handleButtonClick.bind(this));
  }

  // handleButtonClick() {
  //   // Dispatch a custom event when the button is clicked
  //   this.dispatchEvent(new CustomEvent("button-clicked", { bubbles: true }));
  // }
}

// Define your custom element using the Custom Elements API
customElements.define("aa-alert", AAAlert);
