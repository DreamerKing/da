function fibonacci(x: number): number[] {
  if (x < 2) throw new Error("x shuoud be gatter 2!");
  const fibs = Array<number>(x).fill(0);
  fibs[0] = fibs[1] = 1;
  for (let i = 2; i < x; i++) {
    fibs[i] = fibs[i - 1] + fibs[i - 2];
  }
  return fibs;
}

console.log(fibonacci(20));
console.log(fibonacci(5));
