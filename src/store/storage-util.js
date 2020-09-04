export function generateRandomNo() {
  let random = Math.random().toString(36);
  console.log('Generated UUID ' + random);
  return random;
}
