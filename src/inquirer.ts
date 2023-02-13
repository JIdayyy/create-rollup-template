import { prompt as inquirerPrompt } from "inquirer";
import init from "./init";

const prompt = (question: string) => {
  init();
  return inquirerPrompt([
    {
      type: "input",
      name: "name",
      message: "What is the name of your library?",
    },
  ]);
};

export default prompt;
