import { html, styles, stylesNoShadow } from "../utils/index.js";
import { aaDialogStyles } from "./aa-dialog.styles.js";
import { closeSvg } from "./dialog-svgs.js";
import "../aa-button/aa-button.js";

class Dialog extends HTMLElement {
  constructor() {
    super();
    this.render();

    // // This is how you handle programmatic control of the dialog:
    // const popover = document.getElementById(key);
    // popover.showPopover();
  }

  connectedCallback() {
    const key = this.getAttribute("key");
    const popover = document.getElementById(key);
    const closeDialogBtnId = `${key}-close-dialog-btn`;
    const primaryBtnId = `${key}-primary-btn`;
    window.addEventListener("button-clicked", (e) => {
      if (e.detail === closeDialogBtnId) {
        popover.hidePopover();
      }
      if (e.detail === primaryBtnId) {
        const newEventName = `${key}-primary-btn-clicked`;
        this.dispatchEvent(new CustomEvent(newEventName, { bubbles: true }));
        popover.hidePopover();
      }
    });
  }

  render() {
    const key = this.getAttribute("key");
    const slots = { title: "", body: "" };

    [...this.children].forEach((childElem) => {
      const slotName = childElem.getAttribute("slot");
      if (slotName === "title") {
        slots["title"] = childElem.innerHTML;
      }
      if (slotName === "body") {
        slots.body = childElem.innerHTML;
      }
    });

    this.innerHTML = html`
      <style>
        ${stylesNoShadow(`aa-dialog[key=${key}]`, aaDialogStyles)}
      </style>

      <div class="aa-dialog">
        <div id="${key}" popover>
          <div class="title-container">
            <h2 name="title">${slots.title}</h2>
            <aa-button id="${key}-close-dialog-btn"
              ><span slot="button-content">${closeSvg}</span></aa-button
            >
          </div>
          <div class="body-container" name="body">${slots.body}</div>
          <div class="actions-container">
            <aa-button id="${key}-primary-btn">
              <span slot="button-content">Next</span>
            </aa-button>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("aa-dialog", Dialog);

function supportsPopover() {
  return HTMLElement.prototype.hasOwnProperty("popover");
}

/*
        <button id="toggleBtn">Toggle the popover</button>
        <button id="show-popover">Show Popover</button>
        <button id="hide-popover">Hide Popover</button>

        <button popovertarget="mypopover" popovertargetaction="show">
          default Show popover
        </button>
        <button popovertarget="mypopover" popovertargetaction="hide">
          default Hide popover
        </button>
        <button popovertarget="mypopover">Toggle the popover</button>
*/

// connectedCallback() {
//   const popover = this.shadowRoot.getElementById("mypopover");
//   const toggleBtn = this.shadowRoot.getElementById("toggleBtn");
//   const showPopoverBtn = this.shadowRoot.getElementById("show-popover");
//   const hidePopoverBtn = this.shadowRoot.getElementById("hide-popover");

//   // const popoverIsOpen = popover.matches(":popover-open");
//   // console.log("popoverIsOpen = ", popoverIsOpen);

//   // const keyboardHelpPara = document.getElementById("keyboard-help-para");

//   const popoverSupported = supportsPopover();

//   if (popoverSupported) {
//     // popover.popover = "auto";
//     // toggleBtn.popoverTargetElement = popover;
//     // toggleBtn.popoverTargetAction = "toggle";

//     toggleBtn.addEventListener("click", (e) => {
//       popover.togglePopover();
//     });

//     showPopoverBtn.addEventListener("click", (e) => {
//       popover.showPopover();
//     });

//     hidePopoverBtn.addEventListener("click", (e) => {
//       popover.hidePopover();
//     });
//   } else {
//     toggleBtn.style.display = "none";
//   }
// }
