import "wasi";
import { memory } from "@blockless/sdk";
import { Console } from "as-wasi/assembly";

let stdin = new memory.Stdin().read();
if (stdin) {
  let newValue = Number.parseFloat(stdin.toString()) + 40;
  Console.log(newValue.toString());
}
