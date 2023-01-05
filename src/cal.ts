export function sum(...numbers: number[]) {
  return numbers.reduce((a, e) => (a += e));
}
