import * as chalk from "chalk";
import * as figlet from "figlet";

const init = () => {
  console.log(
    chalk(
      figlet.textSync("Create Rollup package", {
        font: "Star Wars",
        horizontalLayout: "full",
        verticalLayout: "universal smushing",
      })
    )
  );
  console.log(
    chalk.green(
      "Welcome to the Rollup package generator. This will help you create a new Rollup package."
    )
  );
};

export default init;
