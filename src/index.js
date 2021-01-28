import { log } from "./neutral-functions";
import bigO from "./big-O.notation";

log("Hello Algorithms and Data Structures Masterclass");

function addUpTo(n) {
  let total = 0;
  // here we have a lot of operations, even worst:
  // We loop through every operation, multiplying the problem
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

const addUpToWithoutLoop = (n) => {
  // the best way to measure performance is:
  // count number of operations.

  //Here, we have *, +, /. Only 3.
  return (n * (n + 1)) / 2;
};

log(bigO.timeToExecuteFunction(addUpTo, 1000));
log(bigO.timeToExecuteFunction(addUpToWithoutLoop, 1000));
