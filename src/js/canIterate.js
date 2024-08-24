export default function canIterate(obj) {
  return obj !== null && obj[Symbol.iterator] !== undefined;
}
