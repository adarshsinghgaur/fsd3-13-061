import readline from "readline/promises";
import { stdin, stdout } from "process";

const main = async () => {
  const cin = readline.createInterface({
    input: stdin,
    output: stdout,
  });

  console.log("Welcome to Shopping Cart 🛍️");
  console.log("1------ Add to cart");
  console.log("2------ Show Cart");
  console.log("3------ Remove item");
  console.log("4------ Update Quantity");
  console.log("5------ Checkout");

  let choice = await cin.question("Enter your choice: ");

  switch (choice) {
    case "1":
      console.log("Add to cart");
      break;

    case "2":
      console.log("Show Cart items");
      break;

    case "3":
      console.log("Remove item");
      break;

    case "4":
      console.log("Update Quantity");
      break;

    case "5":
      console.log("See you Later....😃");
      break;

    default:
      console.log("Invalid choice! Try again");
  }

  cin.close();
};

main();
