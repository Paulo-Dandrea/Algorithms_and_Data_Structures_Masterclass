export const bigO_timeToExecuteFunction = (fnc, ...arg) => {
  const [arg1, arg2, arg3] = arg;
  let t1 = performance.now();
  fnc(arg1, arg2, arg3);
  let t2 = performance.now();
  console.log(`Time Elapsed: ${(t2 - t1) / 100} seconds.`);
};
