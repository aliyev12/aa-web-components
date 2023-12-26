import { html, styles } from "../utils/index.js";
import { aaSampleStyles } from "./aa-sample.styles.js";

class AASample extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    this.shadowRoot.innerHTML = html`
      <style>
        ${styles(aaSampleStyles)}
      </style>

      <div class="aa-sample">Sample</div>
    `;
  }
}

customElements.define("aa-sample", AASample);
