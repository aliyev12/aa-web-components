import { css } from "../utils/index.js";

export const aaLinkStyles = css`
  a.aa-link {
    transition: color 300ms ease-in-out;
  }

  :host-context(.light-theme) a.aa-link {
    color: var(--green-medium);
  }

  :host-context(.light-theme) a.aa-link:hover,
  :host-context(.light-theme) a.aa-link:focus {
    color: var(--green-light);
  }

  :host-context(.light-theme) a.aa-link:active,
  :host-context(.light-theme) a.aa-link:visited {
    color: var(--green-dark);
  }

  :host-context(.dark-theme) a.aa-link {
    color: var(--green-smooth);
  }

  :host-context(.dark-theme) a.aa-link:hover,
  :host-context(.dark-theme) a.aa-link:focus {
    color: var(--green-bright);
  }

  :host-context(.dark-theme) a.aa-link:active,
  :host-context(.dark-theme) a.aa-link:visited {
    color: var(--green-feather);
  }
`;
