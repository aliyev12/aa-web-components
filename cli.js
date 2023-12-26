#!/usr/bin/env node
const fs = require("fs");
const { program } = require("commander");

program.arguments("<componentName>").action((componentName) => {
  const folderName = `aa-${componentName}`;
  const jsFileName = `aa-${componentName}.js`;
  const stylesFileName = `aa-${componentName}.styles.js`;
  const stylesImportName = `aa${
    componentName.charAt(0).toUpperCase() + componentName.slice(1)
  }Styles`;

  // Create folder
  fs.mkdirSync(folderName);

  // Create JavaScript file
  fs.writeFileSync(
    `${folderName}/${jsFileName}`,
    `import { html, styles } from "../utils/index.js";
import { ${stylesImportName} } from "./${stylesFileName}";

class ${
      componentName.charAt(0).toUpperCase() + componentName.slice(1)
    } extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    this.shadowRoot.innerHTML = html\`
      <style>
        \${styles(${stylesImportName})}
      </style>

      <div class="${folderName}">${componentName}</div>
    \`;
  }
}

customElements.define("${folderName}", ${
      componentName.charAt(0).toUpperCase() + componentName.slice(1)
    });
`
  );

  // Create styles file
  fs.writeFileSync(
    `${folderName}/${stylesFileName}`,
    `import { css } from "../utils/index.js";

export const ${stylesImportName} = css\`
  /* :host-context(.light-theme) a.${folderName} {
    color: var(--green-medium);
  } 
  .${folderName} ::slotted([slot="sample-img"]),
  .sample-img {
    border-radius: var(--radius);
  }
  */

  .${folderName} {
    /* Add your styles here */
  }
\`;
`
  );

  const mainJsPath = "main.js";
  const mainJsContent = fs.readFileSync(mainJsPath, "utf-8");

  const newImportLine = `import "./${folderName}/${jsFileName}";`;
  const modifiedMainJsContent = `${mainJsContent.trimRight()}\n${newImportLine}\n`;

  fs.writeFileSync(mainJsPath, modifiedMainJsContent);

  console.log(`Component folder and files created for ${componentName}`);
});

program.parse(process.argv);

// #!/usr/bin/env node
// const fs = require("fs");
// const { program } = require("commander");

// program.arguments("<componentName>").action((componentName) => {
//   const folderName = `aa-${componentName}`;
//   const jsFileName = `aa-${componentName}.js`;
//   const stylesFileName = `aa-${componentName}.styles.js`;
//   const stylesImportName = `aa${
//     componentName.charAt(0).toUpperCase() + componentName.slice(1)
//   }Styles`;

//   // Create folder
//   fs.mkdirSync(folderName);

//   // Create JavaScript file
//   fs.writeFileSync(
//     `${folderName}/${jsFileName}`,
//     `import { html, styles } from "../utils/index.js";
// import { ${stylesImportName} } from "./${stylesFileName}";

// class ${
//       componentName.charAt(0).toUpperCase() + componentName.slice(1)
//     } extends HTMLElement {
//   constructor() {
//     super();

//     this.attachShadow({ mode: "open" });

//     this.shadowRoot.innerHTML = html\`
//       <style>
//         \${styles(${stylesImportName})}
//       </style>

//       <div class="${folderName}">${componentName}</div>
//     \`;
//   }
// }

// customElements.define("${folderName}", ${
//       componentName.charAt(0).toUpperCase() + componentName.slice(1)
//     });
// `
//   );

//   // Create styles file
//   fs.writeFileSync(
//     `${folderName}/${stylesFileName}`,
//     `import { css } from "../utils/index.js";

// export const ${stylesImportName} = css\`
//   /* :host-context(.light-theme) a.${folderName} {
//     color: var(--green-medium);
//   }
//   .${folderName} ::slotted([slot="sample-img"]),
//   .sample-img {
//     border-radius: var(--radius);
//   }
//   */

//   .${folderName} {
//     /* Add your styles here */
//   }
// \`;
// `
//   );

//   console.log(`Component folder and files created for ${componentName}`);
// });

// program.parse(process.argv);
