class NoShadowComponent extends HTMLElement {
  constructor() {
    super();

    // Create an open shadow DOM
    this.attachShadow({ mode: "open" });

    // Define the content directly in the shadow root
    this.shadowRoot.innerHTML = `
        <style>
          /* Your component styles go here */
          :host {
            color: red;
          }
        </style>
  
        <div>
          <p>This is a web component without Shadow DOM.</p>
        </div>
      `;
  }
}

// Define your custom element using the Custom Elements API
customElements.define("no-shadow-component", NoShadowComponent);
