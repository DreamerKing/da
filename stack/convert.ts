import Stack from "./index.ts";

const REDIX = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function convert(num: number, radix: number = 10): string {
  if (radix < 2 || radix > 36) {
    let msg = `only supported 2 ~ 36, but input ${radix}`;
    throw new Error(msg);
  }
  if (radix == 10) return String(num);
  let str = "";
  const s = new Stack();
  while (num >= radix) {
    s.push(num % radix);
    num = Math.floor(num / radix);
  }
  s.push(num);

  while (!s.isEmpty()) {
    str += REDIX[s.pop() as number];
  }
  return str;
}

console.log(convert(88, 2));
console.log(convert(88));
console.log(convert(88, 36));
console.log(convert(88, 8));
console.log(convert(88, 40));
