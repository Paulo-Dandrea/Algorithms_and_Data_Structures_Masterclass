import { log } from "./neutral-functions";
import { bigO_timeToExecuteFunction } from "./big-O.notation";

log("Hello Algorithms and Data Structures Masterclass");

function addUpTo(n) {
  let total = 0;

  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

const addUpToWithoutLoop = (n) => {
  return (n * (n + 1)) / 2;
};

// bigO_timeToExecuteFunction(addUpTo, 1000);
log(bigO_timeToExecuteFunction(addUpToWithoutLoop, 1000));

// bigO_timeToExecuteFunction(logSomething, "Hello Algorithms and Data Structures Masterclass");
