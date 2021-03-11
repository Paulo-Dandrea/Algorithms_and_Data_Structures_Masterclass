export const bigO_timeToExecuteFunction = (fnc, ...arg) => {
  const [arg1, arg2, arg3] = arg;
  const functionTarget = fnc.toString().split(" ")[1];

  let t1 = performance.now();
  const result = fnc(arg1, arg2, arg3);
  let t2 = performance.now();

  return {
    functionTarget,
    result,
    performance: `${t2 - t1} milliseconds`
  };
};
